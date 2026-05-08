// ============================================================
// renderer.js — Converts content data → syntax-highlighted HTML
// ============================================================

// Syntax helpers — wrap text in colored spans
const kw = (t) => `<span class="kw">${t}</span>`;
const fn = (t) => `<span class="fn">${t}</span>`;
const str = (t) => `<span class="str">${t}</span>`;
const num = (t) => `<span class="num">${t}</span>`;
const type = (t) => `<span class="type">${t}</span>`;
const cm = (t) => `<span class="cm">${t}</span>`;
const op = (t) => `<span class="op">${t}</span>`;
const prop = (t) => `<span class="prop">${t}</span>`;
const tag = (t) => `<span class="tag">${t}</span>`;
const attr = (t) => `<span class="attr">${t}</span>`;
const param = (t) => `<span class="param">${t}</span>`;
const b1 = (t) => `<span class="bracket-1">${t}</span>`;
const b2 = (t) => `<span class="bracket-2">${t}</span>`;
const b3 = (t) => `<span class="bracket-3">${t}</span>`;

// Backtick constant — can't use literal backtick inside template literals
const BT = "\u0060";

// Indent helper
const ind = (n) => "  ".repeat(n);

// Escape HTML
const esc = (t) =>
  t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// ============================================================
// Page renderers — each returns an array of HTML line strings
// ============================================================

export function renderAbout() {
  return [
    `${cm("// about.tsx — Tom Corley's Portfolio")}`,
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
    `${ind(1)}${kw("const")} ${prop("title")} ${op("=")} ${str('"Software Engineer"')}${op(";")}`,
    `${ind(1)}${kw("const")} ${prop("location")} ${op("=")} ${str('"London, UK"')}${op(";")}`,
    ``,
    `${ind(1)}${kw("const")} ${prop("bio")} ${op("=")} ${str(BT)}`,
    `${ind(2)}${str("I'm a Software Engineer in London, now at Listing Monster AI,")}`,
    `${ind(2)}${str("with prior commercial depth in full-stack TypeScript, AWS,")}`,
    `${ind(2)}${str("and graph/data-heavy systems. I hold a First Class MMath")}`,
    `${ind(2)}${str("from the University of Warwick with an Erasmus year at")}`,
    `${ind(2)}${str("LMU München. Publicly, I'm broadening the story with")}`,
    `${ind(2)}${str("Java, Python, C#, and C++ projects alongside the day job.")}`,
    `${ind(1)}${str(BT)}${op(";")}`,
    ``,
    `${ind(1)}${kw("const")} ${prop("skills")}${op(":")} ${type("Record")}${op(
      "&lt;"
    )}${type("string")}${op(",")} ${type("string")}${op("[]&gt;")} ${op(
      "="
    )} ${b1("{")}`,
    `${ind(2)}${prop("Languages")}${op(":")} ${b2("[")}`,
    `${ind(3)}${str('"TypeScript/JavaScript"')}${op(",")} ${str('"Python"')}${op(",")} ${str('"Java"')}${op(",")}`,
    `${ind(3)}${str('"C#/.NET"')}${op(",")} ${str('"C++"')}${op(",")} ${str('"SQL"')}${op(",")} ${str('"Gremlin"')}`,
    `${ind(2)}${b2("]")}${op(",")}`,
    `${ind(2)}${prop("Technologies")}${op(":")} ${b2("[")}`,
    `${ind(3)}${str('"React"')}${op(",")} ${str('"tRPC"')}${op(",")} ${str('"Zod"')}${op(",")} ${str('"Node.js"')}${op(",")}`,
    `${ind(3)}${str('"Express"')}${op(",")} ${str('"Spring Boot"')}${op(",")} ${str('"ASP.NET"')}${op(",")} ${str('"EF Core"')}${op(",")}`,
    `${ind(3)}${str('"Docker"')}${op(",")} ${str('"GitHub Actions"')}${op(",")} ${str('"Flutter"')}${op(",")} ${str('"Git"')}`,
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
      "—"
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
    `${kw("export")} ${kw("default")} ${fn("About")}${op(";")}`,
  ];
}

export function renderExperience() {
  return [
    `${cm("# experience.py — Professional Experience")}`,
    `${cm("# Python-flavoured career snapshot")}`,
    ``,
    `${prop("experience")} ${op("=")} ${b1("[")}`,
    `${ind(1)}${b2("{")}`,
    `${ind(2)}${str('"company"')}${op(":")} ${str('"Listing Monster AI"')}${op(",")}`,
    `${ind(2)}${str('"title"')}${op(":")} ${str('"Software Engineer"')}${op(",")}`,
    `${ind(2)}${str('"period"')}${op(":")} ${str('"2026 — present"')}${op(",")}`,
    `${ind(2)}${str('"focus"')}${op(":")} ${b3("[")}`,
    `${ind(3)}${str('"shipping quickly in a new startup environment"')}${op(",")}`,
    `${ind(3)}${str('"building commercial momentum after the Worldover period"')}${op(",")}`,
    `${ind(3)}${str('"using the role as the main career story while portfolio work adds breadth"')}`,
    `${ind(2)}${b3("]")}`,
    `${ind(1)}${b2("}")}${op(",")}`,
    ``,
    `${ind(1)}${b2("{")}`,
    `${ind(2)}${str('"company"')}${op(":")} ${str('"Worldover"')}${op(",")}`,
    `${ind(2)}${str('"title"')}${op(":")} ${str('"Software Engineer"')}${op(",")}`,
    `${ind(2)}${str('"period"')}${op(":")} ${str('"2025 — 2026"')}${op(",")}`,
    `${ind(2)}${str('"highlights"')}${op(":")} ${b3("[")}`,
    `${ind(3)}${str('"shipped 110+ pull requests across feature delivery, fixes, and technical improvements"')}${op(",")}`,
    `${ind(3)}${str('"delivered version-history and document-platform work with full-stack TypeScript and AWS"')}${op(",")}`,
    `${ind(3)}${str('"worked heavily with graph/data-heavy systems and internal AI tooling"')}`,
    `${ind(2)}${b3("]")}`,
    `${ind(1)}${b2("}")}${op(",")}`,
    ``,
    `${ind(1)}${b2("{")}`,
    `${ind(2)}${str('"company"')}${op(":")} ${str('"La Fosse"')}${op(",")}`,
    `${ind(2)}${str('"title"')}${op(":")} ${str('"Software Engineering Trainee"')}${op(",")}`,
    `${ind(2)}${str('"period"')}${op(":")} ${str('"2025"')}${op(",")}`,
    `${ind(2)}${str('"highlights"')}${op(":")} ${b3("[")}`,
    `${ind(3)}${str('"record score: 199/200"')}${op(",")}`,
    `${ind(3)}${str('"built a layered C#/.NET API with PostgreSQL/PostGIS"')}${op(",")}`,
    `${ind(3)}${str('"implemented auth, persistence, and automated tests"')}`,
    `${ind(2)}${b3("]")}`,
    `${ind(1)}${b2("}")}`,
    `${b1("]")}`,
    ``,
    `${kw("for")} ${param("role")} ${kw("in")} ${prop("experience")}${op(":")}`,
    `${ind(1)}${fn("print")}${b2("(")}${prop("role")}${b2(")")}`,
  ];
}

export function renderProjects() {
  return [
    `${cm("// projects.java — Selected Projects")}`,
    ``,
    `${kw("public class")} ${type("Projects")}${op(" {")}`,
    `${ind(1)}${kw("private static final")} ${type("String[]")} ${prop("HIGHLIGHTS")} ${op("=")} ${b1("{")}`,
    `${ind(2)}${str('"Mandible — Hive engine plus app track; strongest signal is board-state modelling and move validation"')}${op(",")}`,
    `${ind(2)}${str('"Balatro Sandbox — frontend-heavy TypeScript/React simulator with shareable hands and tests"')}${op(",")}`,
    `${ind(2)}${str('"Galactic Dynamics Parallelisation — 100x+ speedup using OpenMP + MPI on research clusters"')}${op(",")}`,
    `${ind(2)}${str('"Frogify — AWS serverless Spotify analytics app with Python Lambdas"')}`,
    `${ind(1)}${b1("}")}${op(";")}`,
    ``,
    `${ind(1)}${kw("public static void")} ${fn("main")}${b2("(")}${type("String[]")} ${param("args")}${b2(")")} ${op("{")}`,
    `${ind(2)}${fn("System.out.println")}${b3("(")}${str('"Projects that best tell the story:"')}${b3(")")}${op(";")}`,
    `${ind(2)}${kw("for")} ${b3("(")}${type("String")} ${param("project")} ${op(":")} ${prop("HIGHLIGHTS")}${b3(")")} ${op("{")}`,
    `${ind(3)}${fn("System.out.println")}${b1("(")}${str('"- "')} ${op("+")} ${param("project")}${b1(")")}${op(";")}`,
    `${ind(2)}${op("}")}`,
    ``,
    `${ind(2)}${type("List")}${op("<")}${type("String")}${op("> ")} ${prop("coreLanguages")} ${op("=")} ${type("List")}${op(".")}${fn("of")}${b1("(")}`,
    `${ind(3)}${str('"TypeScript"')}${op(", ")} ${str('"Python"')}${op(", ")} ${str('"Java"')}${op(", ")} ${str('"C#"')}${op(", ")} ${str('"C++"')}`,
    `${ind(2)}${b1(")")}${op(";")}`,
    `${ind(2)}${fn("System.out.println")}${b1("(")}${str('"Language spread: "')} ${op("+")} ${prop("coreLanguages")}${b1(")")}${op(";")}`,
    `${ind(1)}${op("}")}`,
    `${op("}")}`,
  ];
}

export function renderCertifications() {
  return [
    `${cm("// certifications.cs — Professional Certifications")}`,
    ``,
    `${kw("public record")} ${type("Certification")}${b1("(")}${type("string")} ${param("Name")}${op(", ")}${type("string")} ${param("Issuer")}${op(", ")}${type("string")} ${param("Description")}${b1(")")}${op(";")}`,
    ``,
    `${kw("var")} ${prop("certifications")} ${op("=")} ${kw("new")} ${type("List")}${op("<")}${type("Certification")}${op(">")}`,
    `${b1("{")}`,
    `${ind(1)}${kw("new")} ${type("Certification")}${b2("(")}${str('"AWS Certified Developer — Associate"')}${op(", ")}${str('"AWS"')}${op(", ")}${str('"Cloud application development, deployment, and debugging"')}${b2(")")}${op(",")}`,
    `${ind(1)}${kw("new")} ${type("Certification")}${b2("(")}${str('"AWS Certified AI Practitioner"')}${op(", ")}${str('"AWS"')}${op(", ")}${str('"AI/ML fundamentals and AWS AI services"')}${b2(")")}${op(",")}`,
    `${ind(1)}${kw("new")} ${type("Certification")}${b2("(")}${str('"AWS Certified Cloud Practitioner"')}${op(", ")}${str('"AWS"')}${op(", ")}${str('"Foundational cloud architecture, pricing, and security"')}${b2(")")}${op(",")}`,
    `${ind(1)}${kw("new")} ${type("Certification")}${b2("(")}${str('"PCAP — Python Certified Associate Programmer"')}${op(", ")}${str('"Python Institute"')}${op(", ")}${str('"Python, OOP, and core standard-library fluency"')}${b2(")")}`,
    `${b1("}")}${op(";")}`,
  ];
}

export function renderEducation() {
  return [
    `${cm("// education.cpp — Academic Background")}`,
    ``,
    `${kw("struct")} ${type("Education")}${op(" {")}`,
    `${ind(1)}${type("std::string")} ${prop("institution")}${op(";")}`,
    `${ind(1)}${type("std::string")} ${prop("detail")}${op(";")}`,
    `${op("};")}`,
    ``,
    `${type("std::vector")}${op("<")}${type("Education")}${op("> ")} ${prop("education")} ${op("=")} ${b1("{")}`,
    `${ind(1)}${b2("{")}${str('"University of Warwick"')}${op(", ")}${str('"MMath, First Class Honours, Erasmus year at LMU München"')}${b2("}")}${op(",")}`,
    `${ind(1)}${b2("{")}${str('"University of Warwick"')}${op(", ")}${str('"70-page thesis on Hamiltonian Cycles in Cayley Graphs"')}${b2("}")}${op(",")}`,
    `${ind(1)}${b2("{")}${str('"Imperial College London + HyperionDev"')}${op(", ")}${str('"Software Engineering Bootcamp, highest mark in cohort: 99.6/100"')}${b2("}")}${op(",")}`,
    `${ind(1)}${b2("{")}${str('"Langley Park School for Boys"')}${op(", ")}${str('"A-Levels A*A*A, GCSEs 11 A*s/9s"')}${b2("}")}`,
    `${b1("}")}${op(";")}`,
  ];
}

// ============================================================
// Decorative file renderers
// ============================================================

export function renderPackageJson() {
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
    `${b1("}")}`,
  ];
}

export function renderTsConfig() {
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
    `${b1("}")}`,
  ];
}

export function renderNextConfig() {
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
    `${kw("export")} ${kw("default")} ${prop("nextConfig")}${op(";")}`,
  ];
}

export function renderLayout() {
  return [
    `${cm("// layout.tsx — Root Layout")}`,
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
      "'Tom Corley — Portfolio'"
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
    `${b1("}")}`,
  ];
}

export function renderHeaderComponent() {
  return [
    `${cm("// Header.tsx — Site Header Component")}`,
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
    `${b1(")")}${op(";")}`,
  ];
}

export function renderFooterComponent() {
  return [
    `${cm("// Footer.tsx — Site Footer Component")}`,
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
    `${ind(3)}© ${b2("{")}${kw("new")} ${type("Date")}${b3("(")}${b3(")")}${op(
      "."
    )}${fn("getFullYear")}${b3("(")}${b3(")")}${b2("}")} Tom Corley`,
    `${ind(2)}${tag("&lt;/p&gt;")}`,
    `${ind(1)}${tag("&lt;/footer&gt;")}`,
    `${b1(")")}${op(";")}`,
  ];
}

export function renderProfileComponent() {
  return [
    `${cm("// ProfileImage.tsx — Circular Profile Image")}`,
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
    `${b1(")")}${op(";")}`,
  ];
}

export function renderResumeJson() {
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
    `${ind(1)}${str('"currentCompany"')}${op(":")} ${str('"Listing Monster AI"')}${op(",")}`,
    `${ind(1)}${str('"certifications"')}${op(":")} ${b2("[")}`,
    `${ind(2)}${str('"AWS Developer Associate"')}${op(",")}`,
    `${ind(2)}${str('"AWS AI Practitioner"')}${op(",")}`,
    `${ind(2)}${str('"AWS Cloud Practitioner"')}${op(",")}`,
    `${ind(2)}${str('"PCAP (Python)"')}`,
    `${ind(1)}${b2("]")}`,
    `${b1("}")}`,
  ];
}

export function renderSkillsJson() {
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
    `${b1("}")}`,
  ];
}

export function renderReadme() {
  return [
    `${cm("# Tom Corley — Portfolio")}`,
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
    `${cm("- GitHub: github.com/tom-corley")}`,
  ];
}

// ============================================================
// Master render dispatch
// ============================================================

const RENDERERS = {
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
  readme: renderReadme,
};

export function renderPage(pageId) {
  const renderer = RENDERERS[pageId];
  if (!renderer) return [`${cm("// File not found")}`];
  return renderer();
}

// Minimap color extraction — returns a dominant color per line
export function getMinimapColors(lines) {
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
