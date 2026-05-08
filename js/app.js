// ============================================================
// app.js — Entry point, wires everything together
// ============================================================

import { FILE_PATHS, FILE_TREE } from "./data.js";
import { initExplorer, setActiveFile } from "./explorer.js";
import { getMinimapColors, renderPage, renderSeriousPage } from "./renderer.js";
import { initStatusBar, updateStatusBar } from "./statusbar.js";
import { initTabs, openTab } from "./tabs.js";

const THEMES = {
  dracula: { label: "Dracula", color: "#282a36" },
  nord: { label: "Nord", color: "#2e3440" },
  "github-dark": { label: "GitHub Dark", color: "#0d1117" },
  "tokyo-night": { label: "Tokyo Night", color: "#1a1b26" },
  "one-dark": { label: "One Dark", color: "#282c34" },
  "gruvbox-dark": { label: "Gruvbox Dark", color: "#282828" },
  "catppuccin-mocha": { label: "Catppuccin Mocha", color: "#1e1e2e" },
  "solarized-dark": { label: "Solarized Dark", color: "#002b36" },
  "everforest-dark": { label: "Everforest Dark", color: "#232a2e" },
};

const VIEW_MODES = {
  ide: "IDE",
  serious: "Serious",
};

const PAGE_FILES = {
  about: { name: "about.tsx", type: "tsx" },
  experience: { name: "experience.py", type: "py" },
  projects: { name: "projects.java", type: "java" },
  certifications: { name: "certifications.cs", type: "cs" },
  education: { name: "education.cpp", type: "cpp" },
};

function bindSeriousModeNav() {
  document.querySelectorAll("[data-serious-page]").forEach((button) => {
    button.addEventListener("click", () => {
      const pageId = button.dataset.seriousPage;
      const file = PAGE_FILES[pageId];
      if (!pageId || !file) return;
      openTab(pageId, file.name, file.type);
    });
  });
}

// ── Editor rendering ──────────────────────────────────────────

function renderEditor(pageId, filename, fileType) {
  const content = document.getElementById("editor-content");
  const gutter = document.getElementById("gutter");
  const minimap = document.getElementById("minimap");

  if (!content || !gutter) return;

  const isSeriousMode = document.documentElement.dataset.viewMode === "serious";
  const lines = renderPage(pageId);

  content.classList.add("fading");

  setTimeout(() => {
    if (isSeriousMode) {
      content.innerHTML = renderSeriousPage(pageId);
      bindSeriousModeNav();
      gutter.innerHTML = "";
      if (minimap) minimap.innerHTML = "";
    } else {
      const isAboutPage = pageId === "about";
      let contentHTML = "";

      if (isAboutPage) {
        contentHTML += `<div class="profile-image-container">
          <img class="profile-image profile-image--linkedin" src="assets/linkedin-profile-pic.jpg"
               alt="Tom Corley"
               onerror="this.style.display='none'">
        </div>`;
      }

      contentHTML += lines
        .map(
          (line, i) =>
            `<div class="code-line ${i === 0 ? "current-line" : ""}">${line || " "}<span class="${i === 0 ? "cursor-blink" : ""}"></span></div>`
        )
        .join("");

      content.innerHTML = contentHTML;

      gutter.innerHTML = lines
        .map((_, i) => `<div class="line-number ${i === 0 ? "active" : ""}">${i + 1}</div>`)
        .join("");

      if (minimap) {
        const colors = getMinimapColors(lines);
        minimap.innerHTML = colors
          .map(
            (color) => `<div class="minimap__line" style="background: ${color}; width: ${20 + Math.random() * 25}px;"></div>`
          )
          .join("");
      }
    }

    const breadcrumbPath = FILE_PATHS[pageId] || filename;
    updateStatusBar(filename, fileType, isSeriousMode ? 1 : lines.length, breadcrumbPath);
    setActiveFile(pageId);
    content.scrollTop = 0;
    content.classList.remove("fading");
  }, 80);
}

function handleTabChange(pageId, filename, fileType) {
  renderEditor(pageId, filename, fileType);
}

function handleFileClick(pageId, filename, fileType) {
  openTab(pageId, filename, fileType);
}

function toggleSidebar() {
  const shell = document.querySelector(".vscode-shell");
  const explorerBtn = document.querySelector('[data-panel="explorer"]');
  shell?.classList.toggle("sidebar-collapsed");
  explorerBtn?.classList.toggle("active");
}

function toggleChat() {
  const shell = document.querySelector(".vscode-shell");
  shell?.classList.toggle("chat-collapsed");
}

function initKeyboard() {
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "b") {
      e.preventDefault();
      toggleSidebar();
    }
  });
}

function initActivityBar() {
  const explorerBtn = document.querySelector('[data-panel="explorer"]');
  if (explorerBtn) {
    explorerBtn.addEventListener("click", (e) => {
      e.preventDefault();
      toggleSidebar();
    });
  }
}

function initChatPanel() {
  const closeBtn = document.querySelector(".chat-panel__close");
  if (closeBtn) {
    closeBtn.addEventListener("click", toggleChat);
  }
}

function applyTheme(themeId) {
  const theme = THEMES[themeId] || THEMES.dracula;
  if (themeId === "dracula") {
    delete document.documentElement.dataset.theme;
  } else {
    document.documentElement.dataset.theme = themeId;
  }

  const statusTheme = document.getElementById("status-theme");
  if (statusTheme) {
    statusTheme.textContent = `Theme: ${theme.label}`;
  }

  document.querySelectorAll(".theme-switcher__option").forEach((button) => {
    button.classList.toggle("active", button.dataset.theme === themeId);
  });

  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) {
    themeMeta.setAttribute("content", theme.color);
  }

  window.localStorage.setItem("tc-portfolio-theme", themeId);
}

function toggleThemeSwitcher(forceOpen = null) {
  const switcher = document.getElementById("theme-switcher");
  if (!switcher) return;
  const shouldOpen = forceOpen ?? switcher.hidden;
  switcher.hidden = !shouldOpen;
}

function initThemeSwitcher() {
  const settingsButton = document.getElementById("theme-settings-button");
  const statusTheme = document.getElementById("status-theme");
  const switcher = document.getElementById("theme-switcher");
  const savedTheme = window.localStorage.getItem("tc-portfolio-theme") || "dracula";

  applyTheme(savedTheme);

  settingsButton?.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleThemeSwitcher();
  });

  statusTheme?.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleThemeSwitcher();
  });

  switcher?.querySelectorAll(".theme-switcher__option").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      applyTheme(button.dataset.theme || "dracula");
      toggleThemeSwitcher(false);
    });
  });

  document.addEventListener("click", (e) => {
    if (!switcher || switcher.hidden) return;
    if (switcher.contains(e.target) || settingsButton?.contains(e.target) || statusTheme?.contains(e.target)) {
      return;
    }
    toggleThemeSwitcher(false);
  });
}

function applyViewMode(mode) {
  const nextMode = mode === "serious" ? "serious" : "ide";
  document.documentElement.dataset.viewMode = nextMode;
  document.querySelector(".vscode-shell")?.classList.toggle("serious-mode", nextMode === "serious");

  const statusViewMode = document.getElementById("status-view-mode");
  if (statusViewMode) {
    statusViewMode.textContent = `Mode: ${VIEW_MODES[nextMode]}`;
  }

  window.localStorage.setItem("tc-portfolio-view-mode", nextMode);
}

function initViewModeToggle() {
  const statusViewMode = document.getElementById("status-view-mode");
  const savedMode = window.localStorage.getItem("tc-portfolio-view-mode") || "ide";
  applyViewMode(savedMode);

  statusViewMode?.addEventListener("click", () => {
    const currentMode = document.documentElement.dataset.viewMode === "serious" ? "serious" : "ide";
    const nextMode = currentMode === "ide" ? "serious" : "ide";
    applyViewMode(nextMode);
    const activeTab = document.querySelector(".tab.active");
    activeTab?.dispatchEvent(new Event("click"));
  });
}

function consoleEasterEgg() {
  console.log(
    "%c Hey there, curious developer! 👋",
    "color: #50fa7b; font-size: 16px; font-weight: bold;"
  );
  console.log(
    "%c Built with vanilla HTML, CSS & JS — no frameworks needed.",
    "color: #8be9fd; font-size: 12px;"
  );
  console.log(
    "%c Check out the source: github.com/tom-corley",
    "color: #bd93f9; font-size: 12px;"
  );
}

function init() {
  consoleEasterEgg();
  initStatusBar();
  initTabs(handleTabChange);
  initExplorer(FILE_TREE, handleFileClick);
  initActivityBar();
  initChatPanel();
  initKeyboard();
  initThemeSwitcher();
  initViewModeToggle();
  openTab("about", "about.tsx", "tsx");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
