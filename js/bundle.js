(() => {
  // js/data.js
  var FILE_TREE = {
    name: "TOM-CORLEY-PORTFOLIO",
    type: "root",
    open: true,
    children: [
      {
        name: "src",
        type: "folder",
        open: true,
        children: [
          {
            name: "app",
            type: "folder",
            open: true,
            children: [
              { name: "layout.tsx", type: "file", fileType: "tsx", page: "layout" }
            ]
          },
          {
            name: "pages",
            type: "folder",
            open: true,
            children: [
              { name: "about.tsx", type: "file", fileType: "tsx", page: "about" },
              { name: "experience.py", type: "file", fileType: "py", page: "experience" },
              { name: "projects.java", type: "file", fileType: "java", page: "projects" },
              { name: "certifications.cs", type: "file", fileType: "cs", page: "certifications" },
              { name: "education.cpp", type: "file", fileType: "cpp", page: "education" }
            ]
          },
          {
            name: "components",
            type: "folder",
            open: false,
            children: [
              { name: "Header.tsx", type: "file", fileType: "tsx", page: "header-component" },
              { name: "Footer.tsx", type: "file", fileType: "tsx", page: "footer-component" },
              { name: "ProfileImage.tsx", type: "file", fileType: "tsx", page: "profile-component" }
            ]
          },
          {
            name: "data",
            type: "folder",
            open: false,
            children: [
              { name: "resume.json", type: "file", fileType: "json", page: "resume-json" },
              { name: "skills.json", type: "file", fileType: "json", page: "skills-json" }
            ]
          }
        ]
      },
      {
        name: "public",
        type: "folder",
        open: false,
        children: [
          { name: "profile.jpg", type: "file", fileType: "image", page: null }
        ]
      },
      { name: "package.json", type: "file", fileType: "json", page: "package-json" },
      { name: "tsconfig.json", type: "file", fileType: "json", page: "tsconfig-json" },
      { name: "next.config.ts", type: "file", fileType: "ts", page: "next-config" },
      { name: "README.md", type: "file", fileType: "md", page: "readme" }
    ]
  };
  var FILE_PATHS = {
    "about": "src / pages / about.tsx",
    "experience": "src / pages / experience.py",
    "projects": "src / pages / projects.java",
    "certifications": "src / pages / certifications.cs",
    "education": "src / pages / education.cpp",
    "layout": "src / app / layout.tsx",
    "header-component": "src / components / Header.tsx",
    "footer-component": "src / components / Footer.tsx",
    "profile-component": "src / components / ProfileImage.tsx",
    "resume-json": "src / data / resume.json",
    "skills-json": "src / data / skills.json",
    "package-json": "package.json",
    "tsconfig-json": "tsconfig.json",
    "next-config": "next.config.ts",
    "readme": "README.md"
  };
  var FILE_LANGUAGES = {
    "tsx": "TypeScript React",
    "ts": "TypeScript",
    "py": "Python",
    "java": "Java",
    "cs": "C#",
    "cpp": "C++",
    "json": "JSON",
    "md": "Markdown",
    "image": "Image"
  };

  // js/explorer.js
  var onFileClick = null;
  var activeFileId = null;
  function getFolderIcon(isOpen) {
    if (isOpen) {
      return `<span class="file-tree__icon file-tree__icon--folder-open">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M1.5 3A1.5 1.5 0 013 1.5h3.1a1.5 1.5 0 011.06.44L8.28 3.06c.14.14.33.22.53.22H13A1.5 1.5 0 0114.5 4.78v.22H2v-.22A1.5 1.5 0 013 3.28h3.28L5.22 2.22A.5.5 0 004.87 2H3a.5.5 0 00-.5.5V3z"/>
        <path d="M1.5 5h13l-1.5 8.5a1 1 0 01-1 .86H4a1 1 0 01-1-.86L1.5 5z"/>
      </svg>
    </span>`;
    }
    return `<span class="file-tree__icon file-tree__icon--folder">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M1.5 3A1.5 1.5 0 013 1.5h2.87a.5.5 0 01.35.15l1.06 1.06A1.5 1.5 0 008.34 3.15H13A1.5 1.5 0 0114.5 4.65V12.5A1.5 1.5 0 0113 14H3A1.5 1.5 0 011.5 12.5V3z"/>
    </svg>
  </span>`;
  }
  function getFileIcon(fileType) {
    switch (fileType) {
      case "tsx":
      case "ts":
        return `<span class="file-tree__icon file-tree__icon--ts">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="1" width="14" height="14" rx="2" fill="#3178c6"/>
          <text x="8" y="11" font-size="8" font-weight="bold" fill="white" text-anchor="middle" font-family="sans-serif">TS</text>
        </svg>
      </span>`;
      case "py":
        return `<span class="file-tree__icon file-tree__icon--py">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="1" width="14" height="14" rx="2" fill="#3572A5"/>
          <text x="8" y="11" font-size="7" font-weight="bold" fill="white" text-anchor="middle" font-family="sans-serif">PY</text>
        </svg>
      </span>`;
      case "java":
        return `<span class="file-tree__icon file-tree__icon--java">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="1" width="14" height="14" rx="2" fill="#b07219"/>
          <text x="8" y="11" font-size="6" font-weight="bold" fill="white" text-anchor="middle" font-family="sans-serif">JV</text>
        </svg>
      </span>`;
      case "cs":
        return `<span class="file-tree__icon file-tree__icon--cs">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="1" width="14" height="14" rx="2" fill="#178600"/>
          <text x="8" y="11" font-size="7" font-weight="bold" fill="white" text-anchor="middle" font-family="sans-serif">C#</text>
        </svg>
      </span>`;
      case "cpp":
        return `<span class="file-tree__icon file-tree__icon--cpp">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="1" width="14" height="14" rx="2" fill="#f34b7d"/>
          <text x="8" y="11" font-size="6" font-weight="bold" fill="white" text-anchor="middle" font-family="sans-serif">C++</text>
        </svg>
      </span>`;
      case "json":
        return `<span class="file-tree__icon file-tree__icon--json">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <text x="8" y="12" font-size="11" fill="#f1fa8c" text-anchor="middle" font-family="monospace">{}</text>
        </svg>
      </span>`;
      case "md":
        return `<span class="file-tree__icon file-tree__icon--md">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="3" width="14" height="10" rx="1" stroke="#519aba" stroke-width="1.5" fill="none"/>
          <text x="8" y="11" font-size="7" font-weight="bold" fill="#519aba" text-anchor="middle" font-family="sans-serif">M\u2193</text>
        </svg>
      </span>`;
      case "image":
        return `<span class="file-tree__icon file-tree__icon--image">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="1" width="14" height="14" rx="2" stroke="#bd93f9" stroke-width="1" fill="none"/>
          <circle cx="5" cy="5" r="1.5" fill="#bd93f9"/>
          <path d="M1 12l4-4 3 3 2-2 5 5H1z" fill="#bd93f9" opacity="0.6"/>
        </svg>
      </span>`;
      default:
        return `<span class="file-tree__icon file-tree__icon--config">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 1h6l4 4v10H4V1z" stroke="#6272a4" stroke-width="1" fill="none"/>
        </svg>
      </span>`;
    }
  }
  function renderIndent(depth) {
    let html = '<span class="file-tree__indent">';
    for (let i = 0; i < depth; i++) {
      html += '<span class="file-tree__indent-guide"></span>';
    }
    html += "</span>";
    return html;
  }
  function renderNode(node, depth = 0) {
    if (node.type === "root") {
      return node.children.map((child) => renderNode(child, depth)).join("");
    }
    if (node.type === "folder") {
      const isOpen = node.open !== false;
      const chevronClass = `file-tree__chevron ${isOpen ? "open" : ""}`;
      const childrenClass = `file-tree__children ${isOpen ? "open" : ""}`;
      let html = `
      <li>
        <div class="file-tree__item file-tree__item--folder" data-folder="${node.name}">
          ${renderIndent(depth)}
          <span class="${chevronClass}">\u203A</span>
          ${getFolderIcon(isOpen)}
          <span class="file-tree__name">${node.name}</span>
        </div>
        <ul class="${childrenClass}">
          ${node.children ? node.children.map((c) => renderNode(c, depth + 1)).join("") : ""}
        </ul>
      </li>
    `;
      return html;
    }
    const isActive = node.page === activeFileId;
    const clickable = node.page ? `data-page="${node.page}" data-filename="${node.name}" data-filetype="${node.fileType}"` : "";
    return `
    <li>
      <div class="file-tree__item ${isActive ? "active" : ""} ${node.page ? "clickable" : ""}" ${clickable}>
        ${renderIndent(depth)}
        <span class="file-tree__chevron hidden">\u203A</span>
        ${getFileIcon(node.fileType)}
        <span class="file-tree__name">${node.name}</span>
      </div>
    </li>
  `;
  }
  function initExplorer(treeData, fileClickCallback) {
    onFileClick = fileClickCallback;
    const container = document.querySelector(".file-tree");
    if (!container) return;
    container.innerHTML = renderNode(treeData);
    container.querySelectorAll(".file-tree__item--folder").forEach((el) => {
      el.addEventListener("click", () => {
        const chevron = el.querySelector(".file-tree__chevron");
        const children = el.nextElementSibling;
        const folderIcon = el.querySelector(".file-tree__icon");
        if (chevron) chevron.classList.toggle("open");
        if (children) children.classList.toggle("open");
        if (folderIcon) {
          const isNowOpen = chevron?.classList.contains("open");
          folderIcon.outerHTML = getFolderIcon(isNowOpen);
        }
      });
    });
    container.querySelectorAll(".file-tree__item[data-page]").forEach((el) => {
      el.addEventListener("click", () => {
        const page = el.dataset.page;
        const filename = el.dataset.filename;
        const filetype = el.dataset.filetype;
        if (page && onFileClick) {
          onFileClick(page, filename, filetype);
        }
      });
    });
  }
  function setActiveFile(pageId) {
    activeFileId = pageId;
    document.querySelectorAll(".file-tree__item").forEach((el) => {
      el.classList.toggle("active", el.dataset.page === pageId);
    });
  }

  // js/renderer.js
  var kw = (t) => `<span class="kw">${t}</span>`;
  var fn = (t) => `<span class="fn">${t}</span>`;
  var str = (t) => `<span class="str">${t}</span>`;
  var num = (t) => `<span class="num">${t}</span>`;
  var type = (t) => `<span class="type">${t}</span>`;
  var cm = (t) => `<span class="cm">${t}</span>`;
  var op = (t) => `<span class="op">${t}</span>`;
  var prop = (t) => `<span class="prop">${t}</span>`;
  var tag = (t) => `<span class="tag">${t}</span>`;
  var attr = (t) => `<span class="attr">${t}</span>`;
  var param = (t) => `<span class="param">${t}</span>`;
  var b1 = (t) => `<span class="bracket-1">${t}</span>`;
  var b2 = (t) => `<span class="bracket-2">${t}</span>`;
  var b3 = (t) => `<span class="bracket-3">${t}</span>`;
  var BT = "`";
  var ind = (n) => "  ".repeat(n);
  var esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  function renderAbout() {
    return [
      `${cm("// about.tsx \u2014 Tom Corley")}`,
      `${cm("// Software Engineer | London, UK")}`,
      ``,
      `${kw("import")} ${type("React")} ${kw("from")} ${str("'react'")}${op(";")}`,
      `${kw("import")} ${b1("{")} ${type("ProfileImage")} ${b1("}")} ${kw("from")} ${str("'../components/ProfileImage'")}${op(";")}`,
      `${kw("import")} ${b1("{")} ${type("SkillBadge")} ${b1("}")} ${kw("from")} ${str("'../components/SkillBadge'")}${op(";")}`,
      ``,
      `${kw("interface")} ${type("AboutProps")} ${b1("{")}`,
      `${ind(1)}${prop("name")}${op(":")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("title")}${op(":")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("location")}${op(":")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("bio")}${op(":")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("skills")}${op(":")} ${type("Record")}${op("&lt;")}${type("string")}${op(",")} ${type("string")}${op("[]&gt;")}${op(";")}`,
      `${b1("}")}`,
      ``,
      `${kw("const")} ${fn("About")} ${op(":")} ${type("React.FC")}${op("&lt;")}${type("AboutProps")}${op("&gt;")} ${op("=")} ${b1("(")}${b1(")")} ${op("=>")} ${b1("{")}`,
      `${ind(1)}${kw("const")} ${prop("name")} ${op("=")} ${str('"Tom Corley"')}${op(";")}`,
      `${ind(1)}${kw("const")} ${prop("title")} ${op("=")} ${str('"Software Engineer"')}${op(";")}`,
      `${ind(1)}${kw("const")} ${prop("location")} ${op("=")} ${str('"London, UK"')}${op(";")}`,
      ``,
      `${ind(1)}${kw("const")} ${prop("bio")} ${op("=")} ${str(BT)}`,
      `${ind(2)}${str("I'm a software engineer based in London, currently at")}`,
      `${ind(2)}${str("Listing Monster AI. I graduated from the University of")}`,
      `${ind(2)}${str("Warwick with a First Class MMath, including an Erasmus")}`,
      `${ind(2)}${str("year at LMU M\xFCnchen. My experience spans full-stack")}`,
      `${ind(2)}${str("TypeScript, AWS infrastructure, and data-heavy systems,")}`,
      `${ind(2)}${str("with additional project work across Java, Python, C#, and C++.")}`,
      `${ind(1)}${str(BT)}${op(";")}`,
      ``,
      `${ind(1)}${kw("const")} ${prop("skills")}${op(":")} ${type("Record")}${op("&lt;")}${type("string")}${op(",")} ${type("string")}${op("[]&gt;")} ${op("=")} ${b1("{")}`,
      `${ind(2)}${prop("Languages")}${op(":")} ${b2("[")}`,
      `${ind(3)}${str('"TypeScript/JavaScript"')}${op(",")} ${str('"Python"')}${op(",")} ${str('"Java"')}${op(",")}`,
      `${ind(3)}${str('"C#/.NET"')}${op(",")} ${str('"C++"')}${op(",")} ${str('"SQL"')}${op(",")} ${str('"Gremlin"')}`,
      `${ind(2)}${b2("]")}${op(",")}`,
      `${ind(2)}${prop("Technologies")}${op(":")} ${b2("[")}`,
      `${ind(3)}${str('"React"')}${op(",")} ${str('"tRPC"')}${op(",")} ${str('"Zod"')}${op(",")} ${str('"Node.js"')}${op(",")}`,
      `${ind(3)}${str('"Express"')}${op(",")} ${str('"Spring Boot"')}${op(",")} ${str('"ASP.NET"')}${op(",")} ${str('"EF Core"')}${op(",")}`,
      `${ind(3)}${str('"Docker"')}${op(",")} ${str('"GitHub Actions"')}${op(",")} ${str('"Git"')}`,
      `${ind(2)}${b2("]")}${op(",")}`,
      `${ind(2)}${prop("AWS")}${op(":")} ${b2("[")}`,
      `${ind(3)}${str('"Neptune"')}${op(",")} ${str('"Lambda"')}${op(",")} ${str('"S3"')}${op(",")}`,
      `${ind(3)}${str('"CloudWatch"')}${op(",")} ${str('"SES"')}${op(",")} ${str('"EventBridge"')}${op(",")}`,
      `${ind(3)}${str('"AppConfig"')}${op(",")} ${str('"Amplify"')}${op(",")} ${str('"OpenSearch"')}`,
      `${ind(2)}${b2("]")}${op(",")}`,
      `${ind(2)}${prop("Testing")}${op(":")} ${b2("[")}`,
      `${ind(3)}${str('"Jest"')}${op(",")} ${str('"Cypress"')}${op(",")} ${str('"Playwright"')}${op(",")} ${str('"NUnit"')}`,
      `${ind(2)}${b2("]")}${op(",")}`,
      `${ind(1)}${b1("}")}${op(";")}`,
      ``,
      `${ind(1)}${kw("return")} ${b1("(")}`,
      `${ind(2)}${tag("&lt;section")} ${attr("className")}${op("=")}${str('"about-page"')}${tag("&gt;")}`,
      `${ind(3)}${tag("&lt;ProfileImage")} ${attr("src")}${op("=")}${str('"/profile.jpg"')} ${attr("alt")}${op("=")}${str('"Tom Corley"')} ${tag("/&gt;")}`,
      `${ind(3)}${tag("&lt;h1&gt;")}${op("{")}${prop("name")}${op("}")}${tag("&lt;/h1&gt;")}`,
      `${ind(3)}${tag("&lt;h2&gt;")}${op("{")}${prop("title")}${op("}")} ${str("\u2014")} ${op("{")}${prop("location")}${op("}")}${tag("&lt;/h2&gt;")}`,
      `${ind(3)}${tag("&lt;p&gt;")}${op("{")}${prop("bio")}${op("}")}${tag("&lt;/p&gt;")}`,
      ``,
      `${ind(3)}${tag("&lt;div")} ${attr("className")}${op("=")}${str('"skills-grid"')}${tag("&gt;")}`,
      `${ind(4)}${op("{")}${type("Object")}${op(".")}${fn("entries")}${b2("(")}${prop("skills")}${b2(")")}${op(".")}${fn("map")}${b2("(")}${b3("(")}${op("[")}${param("category")}${op(",")} ${param("items")}${op("]")}${b3(")")} ${op("=>")} ${b3("(")}`,
      `${ind(5)}${tag("&lt;div")} ${attr("key")}${op("=")}${op("{")}${param("category")}${op("}")} ${attr("className")}${op("=")}${str('"skill-category"')}${tag("&gt;")}`,
      `${ind(6)}${tag("&lt;h3&gt;")}${op("{")}${param("category")}${op("}")}${tag("&lt;/h3&gt;")}`,
      `${ind(6)}${tag("&lt;div")} ${attr("className")}${op("=")}${str('"skill-tags"')}${tag("&gt;")}`,
      `${ind(7)}${op("{")}${param("items")}${op(".")}${fn("map")}${b2("(")}${param("skill")} ${op("=>")} ${b2("(")}`,
      `${ind(8)}${tag("&lt;SkillBadge")} ${attr("key")}${op("=")}${op("{")}${param("skill")}${op("}")} ${attr("label")}${op("=")}${op("{")}${param("skill")}${op("}")} ${tag("/&gt;")}`,
      `${ind(7)}${b2(")")}${b2(")")}${op("}")}`,
      `${ind(6)}${tag("&lt;/div&gt;")}`,
      `${ind(5)}${tag("&lt;/div&gt;")}`,
      `${ind(4)}${b3(")")}${b2(")")}${op("}")}`,
      `${ind(3)}${tag("&lt;/div&gt;")}`,
      `${ind(2)}${tag("&lt;/section&gt;")}`,
      `${ind(1)}${b1(")")}${op(";")}`,
      `${b1("}")}${op(";")}`,
      ``,
      `${kw("export")} ${kw("default")} ${fn("About")}${op(";")}`
    ];
  }
  function renderExperience() {
    return [
      `${cm("# experience.py \u2014 Professional Experience")}`,
      `${cm("# Public-facing snapshot")}`,
      ``,
      `${prop("experience")} ${op("=")} ${b1("[")}`,
      `${ind(1)}${b2("{")}`,
      `${ind(2)}${str('"company"')}${op(":")} ${str('"Listing Monster AI"')}${op(",")}`,
      `${ind(2)}${str('"title"')}${op(":")} ${str('"Software Engineer"')}${op(",")}`,
      `${ind(2)}${str('"period"')}${op(":")} ${str('"2026 \u2014 present"')}${op(",")}`,
      `${ind(2)}${str('"summary"')}${op(":")} ${str('"Building software in a fast-moving startup environment."')}`,
      `${ind(1)}${b2("}")}${op(",")}`,
      `${ind(1)}${b2("{")}`,
      `${ind(2)}${str('"company"')}${op(":")} ${str('"Worldover"')}${op(",")}`,
      `${ind(2)}${str('"title"')}${op(":")} ${str('"Software Engineer"')}${op(",")}`,
      `${ind(2)}${str('"period"')}${op(":")} ${str('"2025 \u2014 2026"')}${op(",")}`,
      `${ind(2)}${str('"highlights"')}${op(":")} ${b3("[")}`,
      `${ind(3)}${str('"Shipped 110+ pull requests across feature delivery, bug fixing, and technical improvements."')}${op(",")}`,
      `${ind(3)}${str('"Delivered a new version history system and a substantial overhaul of the documents platform."')}${op(",")}`,
      `${ind(3)}${str('"Worked across React, tRPC, Zod, Gremlin/Neptune, AWS, and automated testing."')}${op(",")}`,
      `${ind(3)}${str('"Strengthened AWS infrastructure and observability with Lambda, CloudWatch, and other services."')}`,
      `${ind(2)}${b3("]")}`,
      `${ind(1)}${b2("}")}${op(",")}`,
      `${ind(1)}${b2("{")}`,
      `${ind(2)}${str('"company"')}${op(":")} ${str('"La Fosse"')}${op(",")}`,
      `${ind(2)}${str('"title"')}${op(":")} ${str('"Software Engineering Trainee"')}${op(",")}`,
      `${ind(2)}${str('"period"')}${op(":")} ${str('"2025"')}${op(",")}`,
      `${ind(2)}${str('"highlights"')}${op(":")} ${b3("[")}`,
      `${ind(3)}${str('"Achieved a programme-record score of 199/200."')}${op(",")}`,
      `${ind(3)}${str('"Built a layered C#/.NET API backed by PostgreSQL/PostGIS with JWT auth and tests."')}`,
      `${ind(2)}${b3("]")}`,
      `${ind(1)}${b2("}")}`,
      `${b1("]")}`
    ];
  }
  function renderProjects() {
    return [
      `${cm("// projects.java \u2014 Selected Projects")}`,
      ``,
      `${kw("public class")} ${type("Projects")}${op(" {")}`,
      `${ind(1)}${kw("private static final")} ${type("String[]")} ${prop("HIGHLIGHTS")} ${op("=")} ${b1("{")}`,
      `${ind(2)}${str('"Mandible \u2014 backend for Hive focused on dynamic board-state modelling and legal move validation"')}${op(",")}`,
      `${ind(2)}${str('"Galactic Dynamics Parallelisation \u2014 100x+ speedup using OpenMP and MPI"')}${op(",")}`,
      `${ind(2)}${str('"Balatro Sandbox \u2014 frontend-heavy TypeScript/React simulator with sharable hands and tests"')}${op(",")}`,
      `${ind(2)}${str('"Frogify \u2014 AWS serverless Spotify analytics app using Python Lambdas"')}`,
      `${ind(1)}${b1("}")}${op(";")}`,
      ``,
      `${ind(1)}${kw("public static void")} ${fn("main")}${b2("(")}${type("String[]")} ${param("args")}${b2(")")} ${op("{")}`,
      `${ind(2)}${fn("System.out.println")}${b3("(")}${str('"Projects that best reflect how I like to build:"')}${b3(")")}${op(";")}`,
      `${ind(2)}${kw("for")} ${b3("(")}${type("String")} ${param("project")} ${op(":")} ${prop("HIGHLIGHTS")}${b3(")")} ${op("{")}`,
      `${ind(3)}${fn("System.out.println")}${b1("(")}${str('"- "')} ${op("+")} ${param("project")}${b1(")")}${op(";")}`,
      `${ind(2)}${op("}")}`,
      `${ind(1)}${op("}")}`,
      `${op("}")}`
    ];
  }
  function renderCertifications() {
    return [
      `${cm("// certifications.cs \u2014 Professional Certifications")}`,
      ``,
      `${kw("public record")} ${type("Certification")}${b1("(")}${type("string")} ${param("Name")}${op(", ")}${type("string")} ${param("Issuer")}${op(", ")}${type("string")} ${param("Description")}${b1(")")}${op(";")}`,
      ``,
      `${kw("var")} ${prop("certifications")} ${op("=")} ${kw("new")} ${type("List")}${op("<")}${type("Certification")}${op(">")}`,
      `${b1("{")}`,
      `${ind(1)}${kw("new")} ${type("Certification")}${b2("(")}${str('"AWS Certified Developer \u2014 Associate"')}${op(", ")}${str('"AWS"')}${op(", ")}${str('"Cloud application development, deployment, and debugging"')}${b2(")")}${op(",")}`,
      `${ind(1)}${kw("new")} ${type("Certification")}${b2("(")}${str('"AWS Certified AI Practitioner"')}${op(", ")}${str('"AWS"')}${op(", ")}${str('"AI/ML fundamentals and AWS AI services"')}${b2(")")}${op(",")}`,
      `${ind(1)}${kw("new")} ${type("Certification")}${b2("(")}${str('"AWS Certified Cloud Practitioner"')}${op(", ")}${str('"AWS"')}${op(", ")}${str('"Foundational cloud architecture, pricing, and security"')}${b2(")")}${op(",")}`,
      `${ind(1)}${kw("new")} ${type("Certification")}${b2("(")}${str('"PCAP \u2014 Python Certified Associate Programmer"')}${op(", ")}${str('"Python Institute"')}${op(", ")}${str('"Python, OOP, and core standard-library fluency"')}${b2(")")}`,
      `${b1("}")}${op(";")}`
    ];
  }
  function renderEducation() {
    return [
      `${cm("// education.cpp \u2014 Academic Background")}`,
      ``,
      `${kw("struct")} ${type("Education")}${op(" {")}`,
      `${ind(1)}${type("std::string")} ${prop("institution")}${op(";")}`,
      `${ind(1)}${type("std::string")} ${prop("detail")}${op(";")}`,
      `${op("};")}`,
      ``,
      `${type("std::vector")}${op("<")}${type("Education")}${op("> ")} ${prop("education")} ${op("=")} ${b1("{")}`,
      `${ind(1)}${b2("{")}${str('"University of Warwick"')}${op(", ")}${str('"MMath, First Class Honours, Erasmus year at LMU M\xFCnchen"')}${b2("}")}${op(",")}`,
      `${ind(1)}${b2("{")}${str('"University of Warwick"')}${op(", ")}${str('"70-page thesis on Hamiltonian Cycles in Cayley Graphs"')}${b2("}")}${op(",")}`,
      `${ind(1)}${b2("{")}${str('"Imperial College London + HyperionDev"')}${op(", ")}${str('"Software Engineering Bootcamp, highest mark in cohort: 99.6/100"')}${b2("}")}${op(",")}`,
      `${ind(1)}${b2("{")}${str('"Langley Park School for Boys"')}${op(", ")}${str('"A-Levels A*A*A, GCSEs 11 A*s/9s"')}${b2("}")}`,
      `${b1("}")}${op(";")}`
    ];
  }
  function renderLayout() {
    return [
      `${cm("// layout.tsx \u2014 Portfolio shell")}`,
      `${kw("export default function")} ${fn("RootLayout")}${b1("(")}${b1(")")} ${op("{")}`,
      `${ind(1)}${kw("return")} ${b2("(")}`,
      `${ind(2)}${tag("&lt;main&gt;")} ${str("Portfolio UI")}${tag("&lt;/main&gt;")}`,
      `${ind(1)}${b2(")")}${op(";")}`,
      `${op("}")}`
    ];
  }
  function renderHeaderComponent() {
    return [
      `${cm("// Header.tsx")}`,
      `${kw("export function")} ${fn("Header")}${b1("(")}${b1(")")} ${op("{")}`,
      `${ind(1)}${kw("return")} ${tag("&lt;header&gt;Tom Corley&lt;/header&gt;")}${op(";")}`,
      `${op("}")}`
    ];
  }
  function renderFooterComponent() {
    return [
      `${cm("// Footer.tsx")}`,
      `${kw("export function")} ${fn("Footer")}${b1("(")}${b1(")")} ${op("{")}`,
      `${ind(1)}${kw("return")} ${tag("&lt;footer&gt;Thanks for visiting&lt;/footer&gt;")}${op(";")}`,
      `${op("}")}`
    ];
  }
  function renderProfileComponent() {
    return [
      `${cm("// ProfileImage.tsx")}`,
      `${kw("export function")} ${fn("ProfileImage")}${b1("(")}${b1(")")} ${op("{")}`,
      `${ind(1)}${kw("return")} ${tag('&lt;img src="/profile.jpg" alt="Tom Corley" /&gt;')}${op(";")}`,
      `${op("}")}`
    ];
  }
  function renderResumeJson() {
    return [
      `${b1("{")}`,
      `${ind(1)}${str('"name"')}${op(":")} ${str('"Tom Corley"')}${op(",")}`,
      `${ind(1)}${str('"title"')}${op(":")} ${str('"Software Engineer"')}${op(",")}`,
      `${ind(1)}${str('"location"')}${op(":")} ${str('"London, UK"')}${op(",")}`,
      `${ind(1)}${str('"email"')}${op(":")} ${str('"tomcorley86@gmail.com"')}${op(",")}`,
      `${ind(1)}${str('"linkedin"')}${op(":")} ${str('"linkedin.com/in/tom-corley"')}${op(",")}`,
      `${ind(1)}${str('"github"')}${op(":")} ${str('"github.com/tom-corley"')}${op(",")}`,
      `${ind(1)}${str('"summary"')}${op(":")} ${str('"Full-stack engineer with cloud and testing experience. First Class MMath graduate from Warwick."')}${op(",")}`,
      `${ind(1)}${str('"yearsOfExperience"')}${op(":")} ${num("1")}${op(",")}`,
      `${ind(1)}${str('"currentCompany"')}${op(":")} ${str('"Listing Monster AI"')}${op(",")}`,
      `${ind(1)}${str('"certifications"')}${op(":")} ${b2("[")}`,
      `${ind(2)}${str('"AWS Developer Associate"')}${op(",")}`,
      `${ind(2)}${str('"AWS AI Practitioner"')}${op(",")}`,
      `${ind(2)}${str('"AWS Cloud Practitioner"')}${op(",")}`,
      `${ind(2)}${str('"PCAP (Python)"')}`,
      `${ind(1)}${b2("]")}`,
      `${b1("}")}`
    ];
  }
  function renderSkillsJson() {
    return [
      `${b1("{")}`,
      `${ind(1)}${str('"languages"')}${op(":")} ${b2("[")}`,
      `${ind(2)}${str('"TypeScript/JavaScript"')}${op(",")} ${str('"Python"')}${op(",")} ${str('"Java"')}${op(",")}`,
      `${ind(2)}${str('"C#/.NET"')}${op(",")} ${str('"C++"')}${op(",")} ${str('"SQL"')}${op(",")} ${str('"Gremlin"')}`,
      `${ind(1)}${b2("]")}${op(",")}`,
      `${ind(1)}${str('"technologies"')}${op(":")} ${b2("[")}`,
      `${ind(2)}${str('"React"')}${op(",")} ${str('"tRPC"')}${op(",")} ${str('"Zod"')}${op(",")} ${str('"Node.js"')}${op(",")}`,
      `${ind(2)}${str('"Express"')}${op(",")} ${str('"ASP.NET"')}${op(",")} ${str('"Spring Boot"')}${op(",")} ${str('"EF Core"')}${op(",")}`,
      `${ind(2)}${str('"Docker"')}${op(",")} ${str('"GitHub Actions"')}${op(",")} ${str('"Flutter"')}${op(",")} ${str('"Git"')}`,
      `${ind(1)}${b2("]")}${op(",")}`,
      `${ind(1)}${str('"aws"')}${op(":")} ${b2("[")}`,
      `${ind(2)}${str('"Neptune"')}${op(",")} ${str('"Lambda"')}${op(",")} ${str('"S3"')}${op(",")}`,
      `${ind(2)}${str('"CloudWatch"')}${op(",")} ${str('"SES"')}${op(",")} ${str('"EventBridge"')}${op(",")}`,
      `${ind(2)}${str('"AppConfig"')}${op(",")} ${str('"Amplify"')}${op(",")} ${str('"OpenSearch"')}`,
      `${ind(1)}${b2("]")}${op(",")}`,
      `${ind(1)}${str('"testing"')}${op(":")} ${b2("[")}`,
      `${ind(2)}${str('"Jest"')}${op(",")} ${str('"Cypress"')}${op(",")} ${str('"Playwright"')}${op(",")} ${str('"NUnit"')}`,
      `${ind(1)}${b2("]")}${op(",")}`,
      `${ind(1)}${str('"databases"')}${op(":")} ${b2("[")}`,
      `${ind(2)}${str('"Neptune (Graph)"')}${op(",")} ${str('"PostgreSQL"')}${op(",")} ${str('"PostGIS"')}${op(",")}`,
      `${ind(2)}${str('"OpenSearch"')}${op(",")} ${str('"SQLite3"')}`,
      `${ind(1)}${b2("]")}`,
      `${b1("}")}`
    ];
  }
  function renderPackageJson() {
    return [
      `${b1("{")}`,
      `${ind(1)}${str('"name"')}${op(":")} ${str('"tom-corley-portfolio"')}${op(",")}`,
      `${ind(1)}${str('"private"')}${op(":")} ${num("true")}${op(",")}`,
      `${ind(1)}${str('"type"')}${op(":")} ${str('"module"')}`,
      `${b1("}")}`
    ];
  }
  function renderTsConfig() {
    return [
      `${b1("{")}`,
      `${ind(1)}${str('"compilerOptions"')}${op(":")} ${b2("{")}`,
      `${ind(2)}${str('"target"')}${op(":")} ${str('"ES2022"')}${op(",")}`,
      `${ind(2)}${str('"module"')}${op(":")} ${str('"ESNext"')}`,
      `${ind(1)}${b2("}")}`,
      `${b1("}")}`
    ];
  }
  function renderNextConfig() {
    return [
      `${cm("// next.config.ts")}`,
      `${kw("const")} ${prop("nextConfig")} ${op("=")} ${b1("{")}${b1("}")}${op(";")}`,
      `${kw("export default")} ${prop("nextConfig")}${op(";")}`
    ];
  }
  function renderReadme() {
    return [
      `${cm("# Tom Corley \u2014 Portfolio")}`,
      ``,
      `${cm("> Software Engineer | London, UK")}`,
      ``,
      `${cm("## About")}`,
      ``,
      `${cm("This is my personal portfolio website built with Next.js,")}`,
      `${cm("TypeScript, and Tailwind CSS. It showcases my professional")}`,
      `${cm("experience, projects, and technical skills.")}`,
      ``,
      `${cm("## Contact")}`,
      ``,
      `${cm("- Email: tomcorley86@gmail.com")}`,
      `${cm("- LinkedIn: linkedin.com/in/tom-corley")}`,
      `${cm("- GitHub: github.com/tom-corley")}`
    ];
  }
  var SERIOUS_CONTENT = {
    about: {
      title: "Tom Corley",
      subtitle: "Software Engineer \xB7 London, UK",
      intro: [
        "I\u2019m a software engineer based in London, currently working at Listing Monster AI.",
        "I graduated from the University of Warwick with a First Class MMath, including an Erasmus year at LMU M\xFCnchen.",
        "My experience spans full-stack TypeScript, AWS infrastructure, and data-heavy systems, with additional project work across Java, Python, C#, and C++."
      ],
      sections: [
        {
          heading: "What I do",
          bullets: [
            "I build product-facing software with a strong backend bias.",
            "I enjoy work that combines clean application structure with messy real-world requirements.",
            "I\u2019m particularly comfortable across TypeScript services, AWS infrastructure, and data-heavy workflows."
          ]
        },
        {
          heading: "Core technologies",
          chips: ["TypeScript", "Python", "Java", "C#/.NET", "C++", "React", "Node.js", "Spring Boot", "AWS", "PostgreSQL"]
        }
      ]
    },
    experience: {
      title: "Experience",
      sections: [
        {
          heading: "Current",
          bullets: [
            "Software Engineer at Listing Monster AI (2026 \u2014 present)."
          ]
        }
      ],
      entries: [
        {
          title: "Software Engineer",
          meta: "Worldover \xB7 London \xB7 2025 \u2014 2026",
          bullets: [
            "I shipped 110+ pull requests across feature delivery, bug fixing, and technical improvements, owning work end-to-end through implementation, testing, and deployment.",
            "I delivered a new version history system and a substantial overhaul of the documents platform, spanning a revamped file-explorer UI and underlying data-model changes.",
            "I worked across React, tRPC, Zod, Gremlin/Neptune, AWS, and automated testing with Jest, Cypress, and Playwright.",
            "I strengthened AWS infrastructure and observability with Lambda, CloudWatch, and other services, and developed internal AI tooling including agent skills and prompt templates."
          ]
        },
        {
          title: "Software Engineering Trainee",
          meta: "La Fosse \xB7 London \xB7 2025",
          bullets: [
            "I achieved a programme-record score of 199/200, consistently ranking top across more than 10 timed assessments.",
            "I built a layered C#/.NET API backed by PostgreSQL/PostGIS, including JWT auth, spatial persistence with EF Core, and automated tests."
          ]
        }
      ]
    },
    projects: {
      title: "Projects",
      sections: [
        {
          heading: "What I optimise for",
          bullets: [
            "I prefer projects that create a strong technical talking point rather than just looking polished on the surface.",
            "The best ones let me show backend structure, domain modelling, and problem-solving depth."
          ]
        }
      ],
      entries: [
        {
          title: "Mandible",
          meta: "Java \xB7 Spring Boot \xB7 JPA \xB7 REST API Design",
          bullets: [
            "I\u2019m building a backend for the board game Hive, focused on representing a dynamic hex-grid board state, enforcing legal move validation, and exposing game logic through a layered Spring Boot service.",
            "The aim is to demonstrate domain modelling, backend architecture, and algorithmic problem-solving rather than treating it as a frontend-led portfolio app."
          ]
        },
        {
          title: "Galactic Dynamics Parallelisation",
          meta: "C \xB7 OpenMP \xB7 MPI",
          bullets: [
            "I achieved a 100x+ speedup over serial code using hybrid OpenMP and MPI parallelisation.",
            "The project was built around large-scale simulation work on research-grade compute infrastructure."
          ]
        },
        {
          title: "Balatro Sandbox",
          meta: "TypeScript \xB7 React \xB7 Vitest",
          bullets: [
            "I built a frontend-heavy sandbox for simulating Balatro hand scoring, with support for sharable hands and automated tests."
          ]
        }
      ]
    },
    certifications: {
      title: "Certifications",
      sections: [
        {
          heading: "Professional certifications",
          bullets: [
            "AWS Certified Developer \u2014 Associate",
            "AWS Certified AI Practitioner",
            "AWS Certified Cloud Practitioner",
            "PCAP \u2014 Python Certified Associate Programmer"
          ]
        }
      ]
    },
    education: {
      title: "Education",
      entries: [
        {
          title: "MMath, Mathematics with Study in Europe",
          meta: "University of Warwick \xB7 First Class Honours",
          bullets: [
            "I completed an Erasmus year at LMU M\xFCnchen.",
            "My final thesis was a 70-page paper on Hamiltonian Cycles in Cayley Graphs."
          ]
        },
        {
          title: "Software Engineering Bootcamp",
          meta: "Imperial College London + HyperionDev",
          bullets: [
            "I graduated with the highest mark in the cohort: 99.6/100."
          ]
        }
      ]
    }
  };
  var SERIOUS_NAV = [
    ["about", "About"],
    ["experience", "Experience"],
    ["projects", "Projects"],
    ["certifications", "Certifications"],
    ["education", "Education"]
  ];
  function renderSeriousPage(pageId) {
    const content = SERIOUS_CONTENT[pageId];
    const nav = `
    <nav class="serious-nav">
      ${SERIOUS_NAV.map(([id, label]) => `<button class="serious-nav__link ${id === pageId ? "active" : ""}" data-serious-page="${id}">${label}</button>`).join("")}
    </nav>
  `;
    if (!content) {
      return `
      <article class="serious-page">
        ${nav}
        <h1 class="serious-page__title">${esc(pageId)}</h1>
        <p class="serious-page__body">This section is best viewed in IDE mode.</p>
      </article>
    `;
    }
    const intro = (content.intro || []).map((paragraph) => `<p class="serious-page__body">${esc(paragraph)}</p>`).join("");
    const sections = (content.sections || []).map((section) => {
      const bullets = (section.bullets || []).map((bullet) => `<li>${esc(bullet)}</li>`).join("");
      const chips = (section.chips || []).map((chip) => `<span class="serious-chip">${esc(chip)}</span>`).join("");
      return `
        <section class="serious-section">
          <h2 class="serious-section__title">${esc(section.heading)}</h2>
          ${bullets ? `<ul class="serious-list">${bullets}</ul>` : ""}
          ${chips ? `<div class="serious-chip-list">${chips}</div>` : ""}
        </section>
      `;
    }).join("");
    const entries = (content.entries || []).map((entry) => {
      const bullets = (entry.bullets || []).map((bullet) => `<li>${esc(bullet)}</li>`).join("");
      return `
        <section class="serious-entry">
          <div class="serious-entry__header">
            <h2 class="serious-entry__title">${esc(entry.title)}</h2>
            ${entry.meta ? `<div class="serious-entry__meta">${esc(entry.meta)}</div>` : ""}
          </div>
          ${bullets ? `<ul class="serious-list">${bullets}</ul>` : ""}
        </section>
      `;
    }).join("");
    return `
    <article class="serious-page">
      ${nav}
      <header class="serious-page__header">
        <h1 class="serious-page__title">${esc(content.title)}</h1>
        ${content.subtitle ? `<p class="serious-page__subtitle">${esc(content.subtitle)}</p>` : ""}
      </header>
      ${intro}
      ${sections}
      ${entries}
    </article>
  `;
  }
  var RENDERERS = {
    about: renderAbout,
    experience: renderExperience,
    projects: renderProjects,
    certifications: renderCertifications,
    education: renderEducation,
    layout: renderLayout,
    "header-component": renderHeaderComponent,
    "footer-component": renderFooterComponent,
    "profile-component": renderProfileComponent,
    "resume-json": renderResumeJson,
    "skills-json": renderSkillsJson,
    "package-json": renderPackageJson,
    "tsconfig-json": renderTsConfig,
    "next-config": renderNextConfig,
    readme: renderReadme
  };
  function renderPage(pageId) {
    const renderer = RENDERERS[pageId];
    if (!renderer) return [`${cm("// File not found")}`];
    return renderer();
  }
  function getMinimapColors(lines) {
    return lines.map((line) => {
      if (line.includes('class="cm"')) return "var(--comment)";
      if (line.includes('class="str"')) return "var(--yellow)";
      if (line.includes('class="kw"')) return "var(--pink)";
      if (line.includes('class="type"')) return "var(--cyan)";
      if (line.includes('class="fn"')) return "var(--green)";
      if (line.includes('class="num"')) return "var(--purple)";
      if (line.includes('class="tag"')) return "var(--pink)";
      if (line.trim() === "") return "transparent";
      return "var(--fg)";
    });
  }

  // js/statusbar.js
  var els = {};
  function initStatusBar() {
    els.line = document.getElementById("status-line");
    els.lang = document.getElementById("status-lang");
    els.title = document.getElementById("titlebar-title");
    els.breadcrumbFile = document.getElementById("breadcrumb-file");
    els.breadcrumbPath = document.getElementById("breadcrumb-path");
  }
  function updateStatusBar(filename, fileType, lineCount, breadcrumbPath) {
    if (els.line) {
      els.line.textContent = `Ln ${lineCount}, Col 1`;
    }
    if (els.lang) {
      els.lang.textContent = FILE_LANGUAGES[fileType] || "Plain Text";
    }
    if (els.title) {
      els.title.textContent = `${filename} \u2014 Tom Corley \u2014 Portfolio`;
    }
    if (els.breadcrumbFile) {
      els.breadcrumbFile.textContent = filename;
    }
    if (els.breadcrumbPath && breadcrumbPath) {
      const parts = breadcrumbPath.split(" / ");
      els.breadcrumbPath.innerHTML = parts.map(
        (part, i) => i < parts.length - 1 ? `<span>${part}</span><span class="breadcrumb__sep">\u203A</span>` : ""
      ).join("");
    }
  }

  // js/tabs.js
  var openTabs = [];
  var activeTabId = null;
  var onTabChange = null;
  var tabBar = () => document.getElementById("tab-bar");
  function getFileIcon2(fileType) {
    const iconClass = `tab__icon tab__icon--${fileType}`;
    switch (fileType) {
      case "tsx":
      case "ts":
        return `<span class="${iconClass}">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="1" width="14" height="14" rx="2" fill="#3178c6"/>
          <text x="8" y="11" font-size="8" font-weight="bold" fill="white" text-anchor="middle" font-family="sans-serif">TS</text>
        </svg>
      </span>`;
      case "py":
        return `<span class="${iconClass}">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="1" width="14" height="14" rx="2" fill="#3572A5"/>
          <text x="8" y="11" font-size="7" font-weight="bold" fill="white" text-anchor="middle" font-family="sans-serif">PY</text>
        </svg>
      </span>`;
      case "java":
        return `<span class="${iconClass}">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="1" width="14" height="14" rx="2" fill="#b07219"/>
          <text x="8" y="11" font-size="6" font-weight="bold" fill="white" text-anchor="middle" font-family="sans-serif">JV</text>
        </svg>
      </span>`;
      case "cs":
        return `<span class="${iconClass}">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="1" width="14" height="14" rx="2" fill="#178600"/>
          <text x="8" y="11" font-size="7" font-weight="bold" fill="white" text-anchor="middle" font-family="sans-serif">C#</text>
        </svg>
      </span>`;
      case "cpp":
        return `<span class="${iconClass}">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="1" width="14" height="14" rx="2" fill="#f34b7d"/>
          <text x="8" y="11" font-size="6" font-weight="bold" fill="white" text-anchor="middle" font-family="sans-serif">C++</text>
        </svg>
      </span>`;
      case "json":
        return `<span class="${iconClass}">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <text x="8" y="12" font-size="11" fill="#f1fa8c" text-anchor="middle" font-family="monospace">{}</text>
        </svg>
      </span>`;
      case "md":
        return `<span class="${iconClass}">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="3" width="14" height="10" rx="1" stroke="#519aba" stroke-width="1.5" fill="none"/>
          <text x="8" y="11" font-size="7" font-weight="bold" fill="#519aba" text-anchor="middle" font-family="sans-serif">M\u2193</text>
        </svg>
      </span>`;
      default:
        return `<span class="${iconClass}">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 1h6l4 4v10H4V1z" stroke="#6272a4" stroke-width="1" fill="none"/>
        </svg>
      </span>`;
    }
  }
  function initTabs(onChange) {
    onTabChange = onChange;
  }
  function openTab(id, name, fileType) {
    const existing = openTabs.find((t) => t.id === id);
    if (!existing) {
      openTabs.push({ id, name, fileType });
    }
    setActiveTab(id);
  }
  function closeTab(id) {
    const idx = openTabs.findIndex((t) => t.id === id);
    if (idx === -1) return;
    openTabs.splice(idx, 1);
    if (activeTabId === id) {
      if (openTabs.length > 0) {
        const newIdx = Math.min(idx, openTabs.length - 1);
        setActiveTab(openTabs[newIdx].id);
      } else {
        openTab("about", "about.tsx", "tsx");
        return;
      }
    }
    renderTabs();
  }
  function setActiveTab(id) {
    activeTabId = id;
    renderTabs();
    if (onTabChange) {
      const tab = openTabs.find((t) => t.id === id);
      onTabChange(id, tab ? tab.name : "", tab ? tab.fileType : "ts");
    }
  }
  function renderTabs() {
    const bar = tabBar();
    if (!bar) return;
    bar.innerHTML = openTabs.map((tab) => {
      const isActive = tab.id === activeTabId;
      return `
      <div class="tab ${isActive ? "active" : ""}" data-tab-id="${tab.id}">
        ${getFileIcon2(tab.fileType)}
        <span class="tab__name">${tab.name}</span>
        <button class="tab__close" data-close-id="${tab.id}" title="Close">&times;</button>
      </div>
    `;
    }).join("");
    bar.querySelectorAll(".tab").forEach((el) => {
      el.addEventListener("click", (e) => {
        if (e.target.closest(".tab__close")) return;
        setActiveTab(el.dataset.tabId);
      });
    });
    bar.querySelectorAll(".tab__close").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        closeTab(el.dataset.closeId);
      });
    });
  }

  // js/app.js
  var THEMES = {
    dracula: { label: "Dracula", color: "#282a36" },
    nord: { label: "Nord", color: "#2e3440" },
    "github-dark": { label: "GitHub Dark", color: "#0d1117" },
    "tokyo-night": { label: "Tokyo Night", color: "#1a1b26" },
    "one-dark": { label: "One Dark", color: "#282c34" },
    "gruvbox-dark": { label: "Gruvbox Dark", color: "#282828" },
    "catppuccin-mocha": { label: "Catppuccin Mocha", color: "#1e1e2e" },
    "solarized-dark": { label: "Solarized Dark", color: "#002b36" },
    "everforest-dark": { label: "Everforest Dark", color: "#232a2e" }
  };
  var VIEW_MODES = {
    ide: "IDE View",
    serious: "Serious View"
  };
  var PAGE_FILES = {
    about: { name: "about.tsx", type: "tsx" },
    experience: { name: "experience.py", type: "py" },
    projects: { name: "projects.java", type: "java" },
    certifications: { name: "certifications.cs", type: "cs" },
    education: { name: "education.cpp", type: "cpp" }
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
        contentHTML += lines.map(
          (line, i) => `<div class="code-line ${i === 0 ? "current-line" : ""}">${line || " "}<span class="${i === 0 ? "cursor-blink" : ""}"></span></div>`
        ).join("");
        content.innerHTML = contentHTML;
        gutter.innerHTML = lines.map((_, i) => `<div class="line-number ${i === 0 ? "active" : ""}">${i + 1}</div>`).join("");
        if (minimap) {
          const colors = getMinimapColors(lines);
          minimap.innerHTML = colors.map(
            (color) => `<div class="minimap__line" style="background: ${color}; width: ${20 + Math.random() * 25}px;"></div>`
          ).join("");
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
      statusTheme.textContent = `\u{1F3A8} ${theme.label}`;
      statusTheme.title = "Change color theme";
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
    const savedTheme = window.localStorage.getItem("tc-portfolio-theme") || "github-dark";
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
      const icon = nextMode === "ide" ? "\u2728 " : "\u{1F4C4} ";
      statusViewMode.textContent = `${icon}${VIEW_MODES[nextMode]}`;
      statusViewMode.title = nextMode === "ide" ? "Switch to a clean, traditional portfolio layout" : "Switch to the IDE-style code view";
    }
    window.localStorage.setItem("tc-portfolio-view-mode", nextMode);
  }
  function initViewModeToggle() {
    const statusViewMode = document.getElementById("status-view-mode");
    const savedMode = window.localStorage.getItem("tc-portfolio-view-mode") || "ide";
    applyViewMode(savedMode);
    if (!window.localStorage.getItem("tc-portfolio-seen-mode")) {
      setTimeout(() => {
        statusViewMode?.classList.add("pulse");
        statusViewMode?.addEventListener("animationend", () => {
          statusViewMode.classList.remove("pulse");
        }, { once: true });
      }, 1500);
      window.localStorage.setItem("tc-portfolio-seen-mode", "1");
    }
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
      "%c Hey there, curious developer! \u{1F44B}",
      "color: #50fa7b; font-size: 16px; font-weight: bold;"
    );
    console.log(
      "%c Built with vanilla HTML, CSS & JS \u2014 no frameworks needed.",
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
})();
