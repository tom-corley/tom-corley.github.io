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
              { name: "work-experience.ts", type: "file", fileType: "ts", page: "experience" },
              { name: "projects.ts", type: "file", fileType: "ts", page: "projects" },
              { name: "certifications.ts", type: "file", fileType: "ts", page: "certifications" },
              { name: "education.ts", type: "file", fileType: "ts", page: "education" }
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
    "experience": "src / pages / work-experience.ts",
    "projects": "src / pages / projects.ts",
    "certifications": "src / pages / certifications.ts",
    "education": "src / pages / education.ts",
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
  function renderAbout() {
    return [
      `${cm("// about.tsx \u2014 Tom Corley's Portfolio")}`,
      `${cm("// Software Engineer | London, UK")}`,
      ``,
      `${kw("import")} ${type("React")} ${kw("from")} ${str("'react'")}${op(
        ";"
      )}`,
      `${kw("import")} ${b1("{")} ${type("ProfileImage")} ${b1("}")} ${kw(
        "from"
      )} ${str("'../components/ProfileImage'")}${op(";")}`,
      `${kw("import")} ${b1("{")} ${type("SkillBadge")} ${b1("}")} ${kw(
        "from"
      )} ${str("'../components/SkillBadge'")}${op(";")}`,
      ``,
      `${kw("interface")} ${type("AboutProps")} ${b1("{")}`,
      `${ind(1)}${prop("name")}${op(":")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("title")}${op(":")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("location")}${op(":")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("bio")}${op(":")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("skills")}${op(":")} ${type("Record")}${op("&lt;")}${type(
        "string"
      )}${op(",")} ${type("string")}${op("[]&gt;")}${op(";")}`,
      `${b1("}")}`,
      ``,
      `${kw("const")} ${fn("About")}${op(":")} ${type("React.FC")}${op(
        "&lt;"
      )}${type("AboutProps")}${op("&gt;")} ${op("=")} ${b1("(")}${b1(")")} ${op(
        "=>"
      )} ${b1("{")}`,
      `${ind(1)}${kw("const")} ${prop("name")} ${op("=")} ${str(
        '"Tom Corley"'
      )}${op(";")}`,
      `${ind(1)}${kw("const")} ${prop("title")} ${op("=")} ${str(
        '"Software Engineer"'
      )}${op(";")}`,
      `${ind(1)}${kw("const")} ${prop("location")} ${op("=")} ${str(
        '"London, UK"'
      )}${op(";")}`,
      ``,
      `${ind(1)}${kw("const")} ${prop("bio")} ${op("=")} ${str(BT)}`,
      `${ind(2)}${str(
        "I'm a Software Engineer at Worldover, where I've shipped 110+"
      )}`,
      `${ind(2)}${str(
        "pull requests across feature delivery, bug fixing, and technical"
      )}`,
      `${ind(2)}${str(
        "improvements. I hold a First Class MMath from the University of"
      )}`,
      `${ind(2)}${str(
        "Warwick with an Erasmus year at LMU M\xFCnchen. My experience spans"
      )}`,
      `${ind(2)}${str(
        "full-stack TypeScript/React, AWS infrastructure, graph databases,"
      )}`,
      `${ind(2)}${str("and C#/.NET backend development.")}`,
      `${ind(1)}${str(BT)}${op(";")}`,
      ``,
      `${ind(1)}${kw("const")} ${prop("skills")}${op(":")} ${type("Record")}${op(
        "&lt;"
      )}${type("string")}${op(",")} ${type("string")}${op("[]&gt;")} ${op(
        "="
      )} ${b1("{")}`,
      `${ind(2)}${prop("Languages")}${op(":")} ${b2("[")}`,
      `${ind(3)}${str('"TypeScript/JavaScript"')}${op(",")} ${str(
        '"Python"'
      )}${op(",")} ${str('"C#/.NET"')}${op(",")}`,
      `${ind(3)}${str('"SQL"')}${op(",")} ${str('"Gremlin"')}${op(",")} ${str(
        '"C"'
      )}`,
      `${ind(2)}${b2("]")}${op(",")}`,
      `${ind(2)}${prop("Technologies")}${op(":")} ${b2("[")}`,
      `${ind(3)}${str('"React"')}${op(",")} ${str('"tRPC"')}${op(",")} ${str(
        '"Zod"'
      )}${op(",")} ${str('"Node.js"')}${op(",")}`,
      `${ind(3)}${str('"Express"')}${op(",")} ${str('"ASP.NET"')}${op(",")} ${str(
        '"EF Core"'
      )}${op(",")}`,
      `${ind(3)}${str('"Docker"')}${op(",")} ${str('"GitHub Actions"')}${op(",")} ${str('"Git"')}`,
      `${ind(2)}${b2("]")}${op(",")}`,
      `${ind(2)}${prop("AWS")}${op(":")} ${b2("[")}`,
      `${ind(3)}${str('"Neptune"')}${op(",")} ${str('"Lambda"')}${op(",")} ${str(
        '"S3"'
      )}${op(",")}`,
      `${ind(3)}${str('"CloudWatch"')}${op(",")} ${str('"SES"')}${op(",")} ${str(
        '"EventBridge"'
      )}${op(",")}`,
      `${ind(3)}${str('"AppConfig"')}${op(",")} ${str('"Amplify"')}${op(",")} ${str(
        '"OpenSearch"'
      )}`,
      `${ind(2)}${b2("]")}${op(",")}`,
      `${ind(2)}${prop("Testing")}${op(":")} ${b2("[")}`,
      `${ind(3)}${str('"Jest"')}${op(",")} ${str('"Cypress"')}${op(",")} ${str(
        '"Playwright"'
      )}${op(",")} ${str('"NUnit"')}`,
      `${ind(2)}${b2("]")}${op(",")}`,
      `${ind(1)}${b1("}")}${op(";")}`,
      ``,
      `${ind(1)}${kw("return")} ${b1("(")}`,
      `${ind(2)}${tag("&lt;section")} ${attr("className")}${op("=")}${str(
        '"about-page"'
      )}${tag("&gt;")}`,
      `${ind(3)}${tag("&lt;ProfileImage")} ${attr("src")}${op("=")}${str(
        '"/profile.jpg"'
      )} ${attr("alt")}${op("=")}${str('"Tom Corley"')} ${tag("/&gt;")}`,
      `${ind(3)}${tag("&lt;h1&gt;")}${op("{")}${prop("name")}${op("}")}${tag(
        "&lt;/h1&gt;"
      )}`,
      `${ind(3)}${tag("&lt;h2&gt;")}${op("{")}${prop("title")}${op("}")} ${str(
        "\u2014"
      )} ${op("{")}${prop("location")}${op("}")}${tag("&lt;/h2&gt;")}`,
      `${ind(3)}${tag("&lt;p&gt;")}${op("{")}${prop("bio")}${op("}")}${tag(
        "&lt;/p&gt;"
      )}`,
      ``,
      `${ind(3)}${tag("&lt;div")} ${attr("className")}${op("=")}${str(
        '"skills-grid"'
      )}${tag("&gt;")}`,
      `${ind(4)}${op("{")}${type("Object")}${op(".")}${fn("entries")}${b2(
        "("
      )}${prop("skills")}${b2(")")}${op(".")}${fn("map")}${b2("(")}${b3("(")}${op(
        "["
      )}${param("category")}${op(",")} ${param("items")}${op("]")}${b3(")")} ${op(
        "=>"
      )} ${b3("(")}`,
      `${ind(5)}${tag("&lt;div")} ${attr("key")}${op("=")}${op("{")}${param(
        "category"
      )}${op("}")} ${attr("className")}${op("=")}${str('"skill-category"')}${tag(
        "&gt;"
      )}`,
      `${ind(6)}${tag("&lt;h3&gt;")}${op("{")}${param("category")}${op("}")}${tag(
        "&lt;/h3&gt;"
      )}`,
      `${ind(6)}${tag("&lt;div")} ${attr("className")}${op("=")}${str(
        '"skill-tags"'
      )}${tag("&gt;")}`,
      `${ind(7)}${op("{")}${param("items")}${op(".")}${fn("map")}${b2(
        "("
      )}${param("skill")} ${op("=>")} ${b2("(")}`,
      `${ind(8)}${tag("&lt;SkillBadge")} ${attr("key")}${op("=")}${op(
        "{"
      )}${param("skill")}${op("}")} ${attr("label")}${op("=")}${op("{")}${param(
        "skill"
      )}${op("}")} ${tag("/&gt;")}`,
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
      `${cm("// work-experience.ts \u2014 Professional Experience")}`,
      `${cm("// Tom Corley's career history")}`,
      ``,
      `${kw("interface")} ${type("WorkExperience")} ${b1("{")}`,
      `${ind(1)}${prop("company")}${op(":")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("title")}${op(":")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("period")}${op(":")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("location")}${op("?:")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("highlights")}${op(":")} ${type("string")}${op("[]")}${op(
        ";"
      )}`,
      `${b1("}")}`,
      ``,
      `${kw("export")} ${kw("const")} ${prop("experiences")}${op(":")} ${type(
        "WorkExperience"
      )}${op("[]")} ${op("=")} ${b1("[")}`,
      ``,
      `${ind(1)}${cm(
        "// \u2500\u2500\u2500 Worldover \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"
      )}`,
      `${ind(1)}${b2("{")}`,
      `${ind(2)}${prop("company")}${op(":")} ${str('"Worldover"')}${op(",")}`,
      `${ind(2)}${prop("title")}${op(":")} ${str(
        '"Software Engineer"'
      )}${op(",")}`,
      `${ind(2)}${prop("period")}${op(":")} ${str(
        '"October 2025 \u2014 Present"'
      )}${op(",")}`,
      `${ind(2)}${prop("location")}${op(":")} ${str('"London, UK"')}${op(",")}`,
      `${ind(2)}${prop("highlights")}${op(":")} ${b3("[")}`,
      `${ind(3)}${str(
        '"Shipped 110+ pull requests across feature delivery, bug fixing,"'
      )}${op(",")}`,
      `${ind(3)}${str(
        '"and technical improvements \u2014 owning work end-to-end through"'
      )}${op(",")}`,
      `${ind(3)}${str('"implementation, testing, and deployment"')}${op(",")}`,
      `${ind(3)}${str(
        '"Delivered major product improvements: new version history system"'
      )}${op(",")}`,
      `${ind(3)}${str(
        '"(major/minor versioning), substantial documents platform overhaul"'
      )}${op(",")}`,
      `${ind(3)}${str('"with revamped file-explorer UI and data-model changes"')}${op(",")}`,
      `${ind(3)}${str(
        '"Strengthened AWS infrastructure and observability; developed"'
      )}${op(",")}`,
      `${ind(3)}${str('"internal AI tooling including agent skills and prompt templates"')}${op(",")}`,
      `${ind(3)}${str(
        '"Regularly contributed to ticket writing, PR reviews, and"'
      )}${op(",")}`,
      `${ind(3)}${str('"technical planning; expanded automated test coverage"')}${op(",")}`,
      `${ind(2)}${b3("]")}${op(",")}`,
      `${ind(1)}${b2("}")}${op(",")}`,
      ``,
      `${ind(1)}${cm(
        "// \u2500\u2500\u2500 La Fosse \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"
      )}`,
      `${ind(1)}${b2("{")}`,
      `${ind(2)}${prop("company")}${op(":")} ${str('"La Fosse"')}${op(",")}`,
      `${ind(2)}${prop("title")}${op(":")} ${str(
        '"Software Engineering Trainee"'
      )}${op(",")}`,
      `${ind(2)}${prop("period")}${op(":")} ${str(
        '"July 2025 \u2014 September 2025"'
      )}${op(",")}`,
      `${ind(2)}${prop("location")}${op(":")} ${str('"London, UK"')}${op(",")}`,
      `${ind(2)}${prop("highlights")}${op(":")} ${b3("[")}`,
      `${ind(3)}${str(
        '"Achieved programme-record score of 199/200; consistently ranked"'
      )}${op(",")}`,
      `${ind(3)}${str('"top across 10+ timed assessments"')}${op(",")}`,
      `${ind(3)}${str(
        '"Built a layered C#/.NET API backed by PostgreSQL/PostGIS for a"'
      )}${op(",")}`,
      `${ind(3)}${str('"map-based phone theft reporting platform"')}${op(",")}`,
      `${ind(3)}${str(
        '"Implemented JWT authentication, spatial data persistence with"'
      )}${op(",")}`,
      `${ind(3)}${str('"EF Core, and automated tests"')}${op(",")}`,
      `${ind(2)}${b3("]")}${op(",")}`,
      `${ind(1)}${b2("}")}${op(",")}`,
      ``,
      `${ind(1)}${cm(
        "// \u2500\u2500\u2500 Private Tutoring \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"
      )}`,
      `${ind(1)}${b2("{")}`,
      `${ind(2)}${prop("company")}${op(":")} ${str('"Self Employed"')}${op(
        ","
      )}`,
      `${ind(2)}${prop("title")}${op(":")} ${str(
        '"Private Tutor \u2014 Maths, English & Science"'
      )}${op(",")}`,
      `${ind(2)}${prop("period")}${op(":")} ${str(
        '"September 2018 \u2014 Present"'
      )}${op(",")}`,
      `${ind(2)}${prop("highlights")}${op(":")} ${b3("[")}`,
      `${ind(3)}${str(
        '"Delivered results-focused tutoring with bespoke lesson planning"'
      )}${op(",")}`,
      `${ind(3)}${str(
        '"Facilitated significantly higher-than-expected GCSE grades"'
      )}${op(",")}`,
      `${ind(3)}${str(
        '"Enabled a long-term student to secure a sixth-form place at"'
      )}${op(",")}`,
      `${ind(3)}${str('"a top grammar school"')}${op(",")}`,
      `${ind(2)}${b3("]")}${op(",")}`,
      `${ind(1)}${b2("}")}${op(",")}`,
      ``,
      `${b1("]")}${op(";")}`
    ];
  }
  function renderProjects() {
    return [
      `${cm("// projects.ts \u2014 Notable Projects")}`,
      `${cm("// A selection of significant technical work")}`,
      ``,
      `${kw("interface")} ${type("Project")} ${b1("{")}`,
      `${ind(1)}${prop("title")}${op(":")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("subtitle")}${op(":")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("description")}${op(":")} ${type("string")}${op("[]")}${op(
        ";"
      )}`,
      `${ind(1)}${prop("tech")}${op(":")} ${type("string")}${op("[]")}${op(";")}`,
      `${b1("}")}`,
      ``,
      `${kw("export")} ${kw("const")} ${prop("projects")}${op(":")} ${type(
        "Project"
      )}${op("[]")} ${op("=")} ${b1("[")}`,
      ``,
      `${ind(1)}${cm(
        "// \u2500\u2500\u2500 Galactic Dynamics Parallelisation \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"
      )}`,
      `${ind(1)}${b2("{")}`,
      `${ind(2)}${prop("title")}${op(":")} ${str(
        '"Galactic Dynamics Parallelisation"'
      )}${op(",")}`,
      `${ind(2)}${prop("subtitle")}${op(":")} ${str(
        '"High Performance Computing \u2014 University of Warwick"'
      )}${op(",")}`,
      `${ind(2)}${prop("description")}${op(":")} ${b3("[")}`,
      `${ind(3)}${str(
        '"Achieved 100x+ speedup over serial code using hybrid"'
      )}${op(",")}`,
      `${ind(3)}${str('"OpenMP+MPI parallelisation"')}${op(",")}`,
      `${ind(3)}${str(
        '"Large-scale Velocity-Verlet simulation of celestial bodies"'
      )}${op(",")}`,
      `${ind(3)}${str('"orbiting a supermassive black hole"')}${op(",")}`,
      `${ind(3)}${str(
        '"Operated on research-grade Linux clusters with CUDA support"'
      )}${op(",")}`,
      `${ind(2)}${b3("]")}${op(",")}`,
      `${ind(2)}${prop("tech")}${op(":")} ${b3("[")}${str('"C"')}${op(
        ","
      )} ${str('"OpenMP"')}${op(",")} ${str('"MPI"')}${op(
        ","
      )} ${str('"HPC"')}${b3("]")}${op(",")}`,
      `${ind(1)}${b2("}")}${op(",")}`,
      ``,
      `${ind(1)}${cm(
        "// \u2500\u2500\u2500 Balatro Sandbox \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"
      )}`,
      `${ind(1)}${b2("{")}`,
      `${ind(2)}${prop("title")}${op(":")} ${str(
        '"Balatro Sandbox"'
      )}${op(",")}`,
      `${ind(2)}${prop("subtitle")}${op(":")} ${str(
        '"Frontend Application \u2014 Card Game Simulator"'
      )}${op(",")}`,
      `${ind(2)}${prop("description")}${op(":")} ${b3("[")}`,
      `${ind(3)}${str(
        '"Built a frontend-heavy sandbox for simulating Balatro hand"'
      )}${op(",")}`,
      `${ind(3)}${str('"scoring with a responsive UI"')}${op(",")}`,
      `${ind(3)}${str(
        '"Support for saving and sharing hands; comprehensive test"'
      )}${op(",")}`,
      `${ind(3)}${str('"coverage with Vitest"')}${op(",")}`,
      `${ind(2)}${b3("]")}${op(",")}`,
      `${ind(2)}${prop("tech")}${op(":")} ${b3("[")}${str('"TypeScript"')}${op(
        ","
      )} ${str('"React"')}${op(",")} ${str('"Vitest"')}${b3("]")}${op(",")}`,
      `${ind(1)}${b2("}")}${op(",")}`,
      ``,
      `${ind(1)}${cm(
        "// \u2500\u2500\u2500 Frogify \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"
      )}`,
      `${ind(1)}${b2("{")}`,
      `${ind(2)}${prop("title")}${op(":")} ${str(
        '"Frogify \u2014 Serverless Web Application"'
      )}${op(",")}`,
      `${ind(2)}${prop("subtitle")}${op(":")} ${str(
        '"AWS Serverless \u2014 Spotify Analytics"'
      )}${op(",")}`,
      `${ind(2)}${prop("description")}${op(":")} ${b3("[")}`,
      `${ind(3)}${str(
        '"Spotify analytics app using AWS serverless architecture"'
      )}${op(",")}`,
      `${ind(3)}${str('"Static S3 frontend with Lambda functions written in Python"')}${op(
        ","
      )}`,
      `${ind(3)}${str(
        '"Full-stack JavaScript/Python with HTML/CSS frontend"'
      )}${op(",")}`,
      `${ind(2)}${b3("]")}${op(",")}`,
      `${ind(2)}${prop("tech")}${op(":")} ${b3("[")}${str('"JavaScript"')}${op(
        ","
      )} ${str('"Python"')}${op(",")} ${str('"AWS Lambda"')}${op(
        ","
      )} ${str('"S3"')}${b3("]")}${op(",")}`,
      `${ind(1)}${b2("}")}${op(",")}`,
      ``,
      `${ind(1)}${cm(
        "// \u2500\u2500\u2500 IDSNIFF \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"
      )}`,
      `${ind(1)}${b2("{")}`,
      `${ind(2)}${prop("title")}${op(":")} ${str(
        '"IDSNIFF \u2014 Network Intrusion Detector"'
      )}${op(",")}`,
      `${ind(2)}${prop("subtitle")}${op(":")} ${str(
        '"Low-Level Systems Programming \u2014 C"'
      )}${op(",")}`,
      `${ind(2)}${prop("description")}${op(":")} ${b3("[")}`,
      `${ind(3)}${str(
        '"Low-level packet sniffing tool written in C"'
      )}${op(",")}`,
      `${ind(3)}${str(
        '"Detects simulated TCP SYN flooding, ARP cache poisoning,"'
      )}${op(",")}`,
      `${ind(3)}${str('"and blacklisted URL attacks"')}${op(",")}`,
      `${ind(2)}${b3("]")}${op(",")}`,
      `${ind(2)}${prop("tech")}${op(":")} ${b3("[")}${str('"C"')}${op(
        ","
      )} ${str('"Networking"')}${op(",")} ${str('"Linux"')}${op(",")} ${str(
        '"Security"'
      )}${b3("]")}${op(",")}`,
      `${ind(1)}${b2("}")}${op(",")}`,
      ``,
      `${ind(1)}${cm(
        "// \u2500\u2500\u2500 2048 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"
      )}`,
      `${ind(1)}${b2("{")}`,
      `${ind(2)}${prop("title")}${op(":")} ${str(
        '"2048 \u2014 Strategy Game"'
      )}${op(",")}`,
      `${ind(2)}${prop("subtitle")}${op(":")} ${str(
        '"Desktop Application \u2014 Python"'
      )}${op(",")}`,
      `${ind(2)}${prop("description")}${op(":")} ${b3("[")}`,
      `${ind(3)}${str(
        '"Built the strategy game 2048 from scratch with a dynamic"'
      )}${op(",")}`,
      `${ind(3)}${str('"Tkinter GUI"')}${op(",")}`,
      `${ind(3)}${str(
        '"SQLite-backed high-score tracking and persistence"'
      )}${op(",")}`,
      `${ind(2)}${b3("]")}${op(",")}`,
      `${ind(2)}${prop("tech")}${op(":")} ${b3("[")}${str('"Python"')}${op(
        ","
      )} ${str('"Tkinter"')}${op(",")} ${str('"SQLite3"')}${b3("]")}${op(",")}`,
      `${ind(1)}${b2("}")}${op(",")}`,
      ``,
      `${b1("]")}${op(";")}`
    ];
  }
  function renderCertifications() {
    return [
      `${cm("// certifications.ts \u2014 Professional Certifications")}`,
      `${cm("// Validated expertise across cloud and programming")}`,
      ``,
      `${kw("interface")} ${type("Certification")} ${b1("{")}`,
      `${ind(1)}${prop("name")}${op(":")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("issuer")}${op(":")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("description")}${op(":")} ${type("string")}${op(";")}`,
      `${b1("}")}`,
      ``,
      `${kw("export")} ${kw("const")} ${prop("certifications")}${op(":")} ${type(
        "Certification"
      )}${op("[]")} ${op("=")} ${b1("[")}`,
      ``,
      `${ind(1)}${b2("{")}`,
      `${ind(2)}${prop("name")}${op(":")} ${str('"AWS Certified Developer \u2014 Associate"')}${op(",")}`,
      `${ind(2)}${prop("issuer")}${op(":")} ${str('"Amazon Web Services"')}${op(",")}`,
      `${ind(2)}${prop("description")}${op(":")} ${str('"Proficiency in developing, deploying, and debugging"')}${op(",")}`,
      `${ind(2)}${cm("// cloud-based applications using AWS services")}`,
      `${ind(1)}${b2("}")}${op(",")}`,
      ``,
      `${ind(1)}${b2("{")}`,
      `${ind(2)}${prop("name")}${op(":")} ${str('"AWS Certified AI Practitioner"')}${op(",")}`,
      `${ind(2)}${prop("issuer")}${op(":")} ${str('"Amazon Web Services"')}${op(",")}`,
      `${ind(2)}${prop("description")}${op(":")} ${str('"Knowledge of AI/ML concepts and AWS AI services"')}${op(",")}`,
      `${ind(1)}${b2("}")}${op(",")}`,
      ``,
      `${ind(1)}${b2("{")}`,
      `${ind(2)}${prop("name")}${op(":")} ${str('"AWS Certified Cloud Practitioner"')}${op(",")}`,
      `${ind(2)}${prop("issuer")}${op(":")} ${str('"Amazon Web Services"')}${op(",")}`,
      `${ind(2)}${prop("description")}${op(":")} ${str('"Foundational understanding of AWS Cloud services,"')}${op(",")}`,
      `${ind(2)}${cm("// architecture, pricing, and security")}`,
      `${ind(1)}${b2("}")}${op(",")}`,
      ``,
      `${ind(1)}${b2("{")}`,
      `${ind(2)}${prop("name")}${op(":")} ${str('"PCAP \u2014 Python Certified Associate Programmer"')}${op(",")}`,
      `${ind(2)}${prop("issuer")}${op(":")} ${str('"Python Institute"')}${op(",")}`,
      `${ind(2)}${prop("description")}${op(":")} ${str('"Advanced Python programming, OOP, and standard library"')}${op(",")}`,
      `${ind(1)}${b2("}")}${op(",")}`,
      ``,
      `${b1("]")}${op(";")}`
    ];
  }
  function renderEducation() {
    return [
      `${cm("// education.ts \u2014 Academic Background")}`,
      ``,
      `${kw("interface")} ${type("Education")} ${b1("{")}`,
      `${ind(1)}${prop("institution")}${op(":")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("degree")}${op(":")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("period")}${op(":")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("grade")}${op("?:")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("honours")}${op("?:")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("thesis")}${op("?:")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("activities")}${op("?:")} ${type("string")}${op("[]")}${op(
        ";"
      )}`,
      `${ind(1)}${prop("subjects")}${op("?:")} ${type("Record")}${op(
        "&lt;"
      )}${type("string")}${op(",")} ${type("string")}${op("&gt;")}${op(";")}`,
      `${b1("}")}`,
      ``,
      `${kw("export")} ${kw("const")} ${prop("education")}${op(":")} ${type(
        "Education"
      )}${op("[]")} ${op("=")} ${b1("[")}`,
      ``,
      `${ind(1)}${cm(
        "// \u2500\u2500\u2500 University of Warwick \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"
      )}`,
      `${ind(1)}${b2("{")}`,
      `${ind(2)}${prop("institution")}${op(":")} ${str(
        '"University of Warwick"'
      )}${op(",")}`,
      `${ind(2)}${prop("degree")}${op(":")} ${str('"MMath \u2014 Mathematics with Study in Europe"')}${op(
        ","
      )}`,
      `${ind(2)}${prop("period")}${op(":")} ${str(
        '"September 2020 \u2014 June 2025"'
      )}${op(",")}`,
      `${ind(2)}${prop("grade")}${op(":")} ${str('"First Class Honours (Overall: 83, Y3: 87.9)"')}${op(
        ","
      )}`,
      `${ind(2)}${prop("thesis")}${op(":")} ${str(
        '"70-page thesis on Hamiltonian Cycles in Cayley Graphs"'
      )}${op(",")}`,
      `${ind(2)}${prop("activities")}${op(":")} ${b3("[")}`,
      `${ind(3)}${str('"Erasmus year at LMU M\xFCnchen"')}${op(",")}`,
      `${ind(3)}${str('"Warwick Warriors Dodgeball (competitive league)"')}${op(",")}`,
      `${ind(3)}${str('"Sub-two-hour half-marathon for Autism Awareness"')}${op(",")}`,
      `${ind(2)}${b3("]")}${op(",")}`,
      `${ind(1)}${b2("}")}${op(",")}`,
      ``,
      `${ind(1)}${cm(
        "// \u2500\u2500\u2500 Imperial College / HyperionDev \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"
      )}`,
      `${ind(1)}${b2("{")}`,
      `${ind(2)}${prop("institution")}${op(":")} ${str(
        '"Imperial College London + HyperionDev"'
      )}${op(",")}`,
      `${ind(2)}${prop("degree")}${op(":")} ${str('"Software Engineering Bootcamp"')}${op(
        ","
      )}`,
      `${ind(2)}${prop("period")}${op(":")} ${str(
        '"November 2022 \u2014 March 2023"'
      )}${op(",")}`,
      `${ind(2)}${prop("grade")}${op(":")} ${str('"Highest mark in cohort of several hundred: 99.6/100"')}${op(
        ","
      )}`,
      `${ind(1)}${b2("}")}${op(",")}`,
      ``,
      `${ind(1)}${cm(
        "// \u2500\u2500\u2500 A-Levels & GCSEs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"
      )}`,
      `${ind(1)}${b2("{")}`,
      `${ind(2)}${prop("institution")}${op(":")} ${str(
        '"Langley Park School for Boys"'
      )}${op(",")}`,
      `${ind(2)}${prop("degree")}${op(":")} ${str('"A-Levels & GCSEs"')}${op(",")}`,
      `${ind(2)}${prop("period")}${op(":")} ${str(
        '"September 2013 \u2014 June 2020"'
      )}${op(",")}`,
      `${ind(2)}${prop("subjects")}${op(":")} ${b3("{")}`,
      `${ind(3)}${str('"A-Levels"')}${op(":")} ${str('"A*A*A"')}${op(",")}`,
      `${ind(3)}${str('"GCSEs"')}${op(":")} ${str('"11 A*s/9s"')}${op(",")}`,
      `${ind(2)}${b3("}")}${op(",")}`,
      `${ind(1)}${b2("}")}${op(",")}`,
      ``,
      `${b1("]")}${op(";")}`
    ];
  }
  function renderPackageJson() {
    return [
      `${b1("{")}`,
      `${ind(1)}${str('"name"')}${op(":")} ${str('"tom-corley-portfolio"')}${op(
        ","
      )}`,
      `${ind(1)}${str('"version"')}${op(":")} ${str('"1.0.0"')}${op(",")}`,
      `${ind(1)}${str('"private"')}${op(":")} ${num("true")}${op(",")}`,
      `${ind(1)}${str('"scripts"')}${op(":")} ${b2("{")}`,
      `${ind(2)}${str('"dev"')}${op(":")} ${str('"next dev"')}${op(",")}`,
      `${ind(2)}${str('"build"')}${op(":")} ${str('"next build"')}${op(",")}`,
      `${ind(2)}${str('"start"')}${op(":")} ${str('"next start"')}${op(",")}`,
      `${ind(2)}${str('"lint"')}${op(":")} ${str('"next lint"')}${op(",")}`,
      `${ind(2)}${str('"test"')}${op(":")} ${str('"vitest"')}`,
      `${ind(1)}${b2("}")}${op(",")}`,
      `${ind(1)}${str('"dependencies"')}${op(":")} ${b2("{")}`,
      `${ind(2)}${str('"next"')}${op(":")} ${str('"15.2.4"')}${op(",")}`,
      `${ind(2)}${str('"react"')}${op(":")} ${str('"^19.1.0"')}${op(",")}`,
      `${ind(2)}${str('"react-dom"')}${op(":")} ${str('"^19.1.0"')}${op(",")}`,
      `${ind(2)}${str('"typescript"')}${op(":")} ${str('"^5.7.0"')}`,
      `${ind(1)}${b2("}")}${op(",")}`,
      `${ind(1)}${str('"devDependencies"')}${op(":")} ${b2("{")}`,
      `${ind(2)}${str('"@tailwindcss/postcss"')}${op(":")} ${str('"^4.0.0"')}${op(
        ","
      )}`,
      `${ind(2)}${str('"tailwindcss"')}${op(":")} ${str('"^4.0.0"')}${op(",")}`,
      `${ind(2)}${str('"vitest"')}${op(":")} ${str('"^4.1.0"')}${op(",")}`,
      `${ind(2)}${str('"@playwright/test"')}${op(":")} ${str('"^1.59.0"')}${op(
        ","
      )}`,
      `${ind(2)}${str('"eslint"')}${op(":")} ${str('"^9.0.0"')}${op(",")}`,
      `${ind(2)}${str('"prettier"')}${op(":")} ${str('"^3.0.0"')}`,
      `${ind(1)}${b2("}")}`,
      `${b1("}")}`
    ];
  }
  function renderTsConfig() {
    return [
      `${b1("{")}`,
      `${ind(1)}${str('"compilerOptions"')}${op(":")} ${b2("{")}`,
      `${ind(2)}${str('"target"')}${op(":")} ${str('"ES2017"')}${op(",")}`,
      `${ind(2)}${str('"lib"')}${op(":")} ${b3("[")}${str('"dom"')}${op(
        ","
      )} ${str('"dom.iterable"')}${op(",")} ${str('"esnext"')}${b3("]")}${op(
        ","
      )}`,
      `${ind(2)}${str('"allowJs"')}${op(":")} ${num("true")}${op(",")}`,
      `${ind(2)}${str('"skipLibCheck"')}${op(":")} ${num("true")}${op(",")}`,
      `${ind(2)}${str('"strict"')}${op(":")} ${num("true")}${op(",")}`,
      `${ind(2)}${str('"noEmit"')}${op(":")} ${num("true")}${op(",")}`,
      `${ind(2)}${str('"esModuleInterop"')}${op(":")} ${num("true")}${op(",")}`,
      `${ind(2)}${str('"module"')}${op(":")} ${str('"esnext"')}${op(",")}`,
      `${ind(2)}${str('"moduleResolution"')}${op(":")} ${str('"bundler"')}${op(
        ","
      )}`,
      `${ind(2)}${str('"resolveJsonModule"')}${op(":")} ${num("true")}${op(",")}`,
      `${ind(2)}${str('"isolatedModules"')}${op(":")} ${num("true")}${op(",")}`,
      `${ind(2)}${str('"jsx"')}${op(":")} ${str('"preserve"')}${op(",")}`,
      `${ind(2)}${str('"incremental"')}${op(":")} ${num("true")}${op(",")}`,
      `${ind(2)}${str('"plugins"')}${op(":")} ${b3("[")}${b1("{")} ${str(
        '"name"'
      )}${op(":")} ${str('"next"')} ${b1("}")}${b3("]")}${op(",")}`,
      `${ind(2)}${str('"paths"')}${op(":")} ${b3("{")}`,
      `${ind(3)}${str('"@/*"')}${op(":")} ${b1("[")}${str('"./src/*"')}${b1(
        "]"
      )}`,
      `${ind(2)}${b3("}")}`,
      `${ind(1)}${b2("}")}${op(",")}`,
      `${ind(1)}${str('"include"')}${op(":")} ${b2("[")}${str(
        '"next-env.d.ts"'
      )}${op(",")} ${str('"**/*.ts"')}${op(",")} ${str('"**/*.tsx"')}${b2(
        "]"
      )}${op(",")}`,
      `${ind(1)}${str('"exclude"')}${op(":")} ${b2("[")}${str(
        '"node_modules"'
      )}${b2("]")}`,
      `${b1("}")}`
    ];
  }
  function renderNextConfig() {
    return [
      `${kw("import")} ${type("type")} ${b1("{")} ${type("NextConfig")} ${b1(
        "}"
      )} ${kw("from")} ${str("'next'")}${op(";")}`,
      ``,
      `${kw("const")} ${prop("nextConfig")}${op(":")} ${type("NextConfig")} ${op(
        "="
      )} ${b1("{")}`,
      `${ind(1)}${prop("reactStrictMode")}${op(":")} ${num("true")}${op(",")}`,
      `${ind(1)}${prop("images")}${op(":")} ${b2("{")}`,
      `${ind(2)}${prop("unoptimized")}${op(":")} ${num("true")}${op(",")}`,
      `${ind(1)}${b2("}")}${op(",")}`,
      `${b1("}")}${op(";")}`,
      ``,
      `${kw("export")} ${kw("default")} ${prop("nextConfig")}${op(";")}`
    ];
  }
  function renderLayout() {
    return [
      `${cm("// layout.tsx \u2014 Root Layout")}`,
      ``,
      `${kw("import")} ${type("type")} ${b1("{")} ${type("Metadata")} ${b1(
        "}"
      )} ${kw("from")} ${str("'next'")}${op(";")}`,
      `${kw("import")} ${str("'./globals.css'")}${op(";")}`,
      ``,
      `${kw("export")} ${kw("const")} ${prop("metadata")}${op(":")} ${type(
        "Metadata"
      )} ${op("=")} ${b1("{")}`,
      `${ind(1)}${prop("title")}${op(":")} ${str(
        "'Tom Corley \u2014 Portfolio'"
      )}${op(",")}`,
      `${ind(1)}${prop("description")}${op(":")} ${str(
        "'Software Engineer | London'"
      )}${op(",")}`,
      `${b1("}")}${op(";")}`,
      ``,
      `${kw("export")} ${kw("default")} ${kw("function")} ${fn("RootLayout")}${b1(
        "("
      )}${b2("{")}`,
      `${ind(1)}${param("children")}${op(",")}`,
      `${b2("}")}${op(":")} ${b2("{")} ${prop("children")}${op(":")} ${type(
        "React.ReactNode"
      )} ${b2("}")}${b1(")")} ${b1("{")}`,
      `${ind(1)}${kw("return")} ${b2("(")}`,
      `${ind(2)}${tag("&lt;html")} ${attr("lang")}${op("=")}${str('"en"')}${tag(
        "&gt;"
      )}`,
      `${ind(3)}${tag("&lt;body&gt;")}`,
      `${ind(4)}${op("{")}${param("children")}${op("}")}`,
      `${ind(3)}${tag("&lt;/body&gt;")}`,
      `${ind(2)}${tag("&lt;/html&gt;")}`,
      `${ind(1)}${b2(")")}${op(";")}`,
      `${b1("}")}`
    ];
  }
  function renderHeaderComponent() {
    return [
      `${cm("// Header.tsx \u2014 Site Header Component")}`,
      ``,
      `${kw("import")} ${type("React")} ${kw("from")} ${str("'react'")}${op(
        ";"
      )}`,
      ``,
      `${kw("interface")} ${type("HeaderProps")} ${b1("{")}`,
      `${ind(1)}${prop("title")}${op(":")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("subtitle")}${op("?:")} ${type("string")}${op(";")}`,
      `${b1("}")}`,
      ``,
      `${kw("export")} ${kw("const")} ${fn("Header")}${op(":")} ${type(
        "React.FC"
      )}${op("&lt;")}${type("HeaderProps")}${op("&gt;")} ${op("=")} ${b1(
        "("
      )}${b2("{")} ${param("title")}${op(",")} ${param("subtitle")} ${b2(
        "}"
      )}${b1(")")} ${op("=>")} ${b1("(")}`,
      `${ind(1)}${tag("&lt;header")} ${attr("className")}${op("=")}${str(
        '"site-header"'
      )}${tag("&gt;")}`,
      `${ind(2)}${tag("&lt;h1&gt;")}${op("{")}${param("title")}${op("}")}${tag(
        "&lt;/h1&gt;"
      )}`,
      `${ind(2)}${op("{")}${param("subtitle")} ${op("&&")} ${tag(
        "&lt;p&gt;"
      )}${op("{")}${param("subtitle")}${op("}")}${tag("&lt;/p&gt;")}${op("}")}`,
      `${ind(1)}${tag("&lt;/header&gt;")}`,
      `${b1(")")}${op(";")}`
    ];
  }
  function renderFooterComponent() {
    return [
      `${cm("// Footer.tsx \u2014 Site Footer Component")}`,
      ``,
      `${kw("import")} ${type("React")} ${kw("from")} ${str("'react'")}${op(
        ";"
      )}`,
      ``,
      `${kw("export")} ${kw("const")} ${fn("Footer")}${op(":")} ${type(
        "React.FC"
      )} ${op("=")} ${b1("(")}${b1(")")} ${op("=>")} ${b1("(")}`,
      `${ind(1)}${tag("&lt;footer")} ${attr("className")}${op("=")}${str(
        '"site-footer"'
      )}${tag("&gt;")}`,
      `${ind(2)}${tag("&lt;p&gt;")}`,
      `${ind(3)}\xA9 ${b2("{")}${kw("new")} ${type("Date")}${b3("(")}${b3(")")}${op(
        "."
      )}${fn("getFullYear")}${b3("(")}${b3(")")}${b2("}")} Tom Corley`,
      `${ind(2)}${tag("&lt;/p&gt;")}`,
      `${ind(1)}${tag("&lt;/footer&gt;")}`,
      `${b1(")")}${op(";")}`
    ];
  }
  function renderProfileComponent() {
    return [
      `${cm("// ProfileImage.tsx \u2014 Circular Profile Image")}`,
      ``,
      `${kw("import")} ${type("React")} ${kw("from")} ${str("'react'")}${op(
        ";"
      )}`,
      `${kw("import")} ${type("Image")} ${kw("from")} ${str("'next/image'")}${op(
        ";"
      )}`,
      ``,
      `${kw("interface")} ${type("ProfileImageProps")} ${b1("{")}`,
      `${ind(1)}${prop("src")}${op(":")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("alt")}${op(":")} ${type("string")}${op(";")}`,
      `${ind(1)}${prop("size")}${op("?:")} ${type("number")}${op(";")}`,
      `${b1("}")}`,
      ``,
      `${kw("export")} ${kw("const")} ${fn("ProfileImage")}${op(":")} ${type(
        "React.FC"
      )}${op("&lt;")}${type("ProfileImageProps")}${op("&gt;")} ${op("=")} ${b1(
        "("
      )}${b2("{")}`,
      `${ind(1)}${param("src")}${op(",")}`,
      `${ind(1)}${param("alt")}${op(",")}`,
      `${ind(1)}${param("size")} ${op("=")} ${num("180")}${op(",")}`,
      `${b2("}")}${b1(")")} ${op("=>")} ${b1("(")}`,
      `${ind(1)}${tag("&lt;div")} ${attr("className")}${op("=")}${str(
        '"profile-image-wrapper"'
      )}${tag("&gt;")}`,
      `${ind(2)}${tag("&lt;Image")}`,
      `${ind(3)}${attr("src")}${op("=")}${op("{")}${param("src")}${op("}")}`,
      `${ind(3)}${attr("alt")}${op("=")}${op("{")}${param("alt")}${op("}")}`,
      `${ind(3)}${attr("width")}${op("=")}${op("{")}${param("size")}${op("}")}`,
      `${ind(3)}${attr("height")}${op("=")}${op("{")}${param("size")}${op("}")}`,
      `${ind(3)}${attr("className")}${op("=")}${str('"rounded-lg"')}`,
      `${ind(2)}${tag("/&gt;")}`,
      `${ind(1)}${tag("&lt;/div&gt;")}`,
      `${b1(")")}${op(";")}`
    ];
  }
  function renderResumeJson() {
    return [
      `${b1("{")}`,
      `${ind(1)}${str('"name"')}${op(":")} ${str('"Tom Corley"')}${op(",")}`,
      `${ind(1)}${str('"title"')}${op(":")} ${str(
        '"Software Engineer"'
      )}${op(",")}`,
      `${ind(1)}${str('"location"')}${op(":")} ${str('"London, UK"')}${op(",")}`,
      `${ind(1)}${str('"email"')}${op(":")} ${str('"tomcorley86@gmail.com"')}${op(
        ","
      )}`,
      `${ind(1)}${str('"linkedin"')}${op(":")} ${str(
        '"linkedin.com/in/tom-corley"'
      )}${op(",")}`,
      `${ind(1)}${str('"github"')}${op(":")} ${str('"github.com/tom-corley"')}${op(
        ","
      )}`,
      `${ind(1)}${str('"summary"')}${op(":")} ${str(
        '"Software Engineer specializing in full-stack"'
      )}${op(",")}`,
      `${ind(1)}${cm(
        "// TypeScript/React, AWS infrastructure, graph databases,"
      )}`,
      `${ind(1)}${cm("// and C#/.NET backend development.")}`,
      `${ind(1)}${str('"yearsOfExperience"')}${op(":")} ${num("1")}${op(",")}`,
      `${ind(1)}${str('"currentCompany"')}${op(":")} ${str('"Worldover"')}${op(",")}`,
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
      `${ind(2)}${str('"TypeScript/JavaScript"')}${op(",")} ${str(
        '"Python"'
      )}${op(",")} ${str('"C#/.NET"')}${op(",")}`,
      `${ind(2)}${str('"SQL"')}${op(",")} ${str('"Gremlin"')}${op(",")} ${str(
        '"C"'
      )}`,
      `${ind(1)}${b2("]")}${op(",")}`,
      `${ind(1)}${str('"technologies"')}${op(":")} ${b2("[")}`,
      `${ind(2)}${str('"React"')}${op(",")} ${str('"tRPC"')}${op(",")} ${str(
        '"Zod"'
      )}${op(",")} ${str('"Node.js"')}${op(",")}`,
      `${ind(2)}${str('"Express"')}${op(",")} ${str('"ASP.NET"')}${op(
        ","
      )} ${str('"EF Core"')}${op(",")}`,
      `${ind(2)}${str('"Docker"')}${op(",")} ${str('"GitHub Actions"')}${op(",")} ${str('"Git"')}`,
      `${ind(1)}${b2("]")}${op(",")}`,
      `${ind(1)}${str('"aws"')}${op(":")} ${b2("[")}`,
      `${ind(2)}${str('"Neptune"')}${op(",")} ${str('"Lambda"')}${op(",")} ${str(
        '"S3"'
      )}${op(",")}`,
      `${ind(2)}${str('"CloudWatch"')}${op(",")} ${str('"SES"')}${op(",")} ${str(
        '"EventBridge"'
      )}${op(",")}`,
      `${ind(2)}${str('"AppConfig"')}${op(",")} ${str('"Amplify"')}${op(",")} ${str(
        '"OpenSearch"'
      )}`,
      `${ind(1)}${b2("]")}${op(",")}`,
      `${ind(1)}${str('"testing"')}${op(":")} ${b2("[")}`,
      `${ind(2)}${str('"Jest"')}${op(",")} ${str('"Cypress"')}${op(",")} ${str(
        '"Playwright"'
      )}${op(",")} ${str('"NUnit"')}`,
      `${ind(1)}${b2("]")}${op(",")}`,
      `${ind(1)}${str('"databases"')}${op(":")} ${b2("[")}`,
      `${ind(2)}${str('"Neptune (Graph)"')}${op(",")} ${str('"PostgreSQL"')}${op(",")} ${str(
        '"PostGIS"'
      )}${op(",")}`,
      `${ind(2)}${str('"OpenSearch"')}${op(",")} ${str('"SQLite3"')}`,
      `${ind(1)}${b2("]")}`,
      `${b1("}")}`
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
      `${cm("## Getting Started")}`,
      ``,
      `${str(BT + BT + BT + "bash")}`,
      `${fn("npm")} ${str("install")}`,
      `${fn("npm")} ${str("run")} ${str("dev")}`,
      `${str(BT + BT + BT)}`,
      ``,
      `${cm("## Tech Stack")}`,
      ``,
      `${cm("- **Framework:** Next.js 15")}`,
      `${cm("- **Language:** TypeScript 5")}`,
      `${cm("- **Styling:** Tailwind CSS 4")}`,
      `${cm("- **Testing:** Vitest + Playwright")}`,
      `${cm("- **Deployment:** Vercel")}`,
      ``,
      `${cm("## Contact")}`,
      ``,
      `${cm("- Email: tomcorley86@gmail.com")}`,
      `${cm("- LinkedIn: linkedin.com/in/tom-corley")}`,
      `${cm("- GitHub: github.com/tom-corley")}`
    ];
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
  function renderEditor(pageId, filename, fileType) {
    const content = document.getElementById("editor-content");
    const gutter = document.getElementById("gutter");
    const minimap = document.getElementById("minimap");
    if (!content || !gutter) return;
    const lines = renderPage(pageId);
    content.classList.add("fading");
    setTimeout(() => {
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
      gutter.innerHTML = lines.map(
        (_, i) => `<div class="line-number ${i === 0 ? "active" : ""}">${i + 1}</div>`
      ).join("");
      if (minimap) {
        const colors = getMinimapColors(lines);
        minimap.innerHTML = colors.map(
          (color) => `<div class="minimap__line" style="background: ${color}; width: ${20 + Math.random() * 25}px;"></div>`
        ).join("");
      }
      const breadcrumbPath = FILE_PATHS[pageId] || filename;
      updateStatusBar(filename, fileType, lines.length, breadcrumbPath);
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
    shell.classList.toggle("sidebar-collapsed");
    explorerBtn?.classList.toggle("active");
  }
  function toggleChat() {
    const shell = document.querySelector(".vscode-shell");
    shell.classList.toggle("chat-collapsed");
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
    console.log(
      "%c \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500",
      "color: #6272a4;"
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
    openTab("about", "about.tsx", "tsx");
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
