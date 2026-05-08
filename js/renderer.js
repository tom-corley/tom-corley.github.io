// ============================================================
// renderer.js — Converts content data → syntax-highlighted HTML
// ============================================================

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

const BT = "\u0060";
const ind = (n) => "  ".repeat(n);
const esc = (t) =>
  t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function renderAbout() {
  return [
    `${cm("// about.tsx — Tom Corley")}`,
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
    `${ind(2)}${str("year at LMU München. My experience spans full-stack")}`,
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
    `${ind(3)}${str('"Docker"')}${op(",")} ${str('"GitHub Actions"')}${op(",")} ${str('"Flutter"')}${op(",")} ${str('"Git"')}`,
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
    `${ind(3)}${tag("&lt;h2&gt;")}${op("{")}${prop("title")}${op("}")} ${str("—")} ${op("{")}${prop("location")}${op("}")}${tag("&lt;/h2&gt;")}`,
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
    `${kw("export")} ${kw("default")} ${fn("About")}${op(";")}`,
  ];
}

export function renderExperience() {
  return [
    `${cm("# experience.py — Professional Experience")}`,
    `${cm("# Public-facing snapshot")}`,
    ``,
    `${prop("experience")} ${op("=")} ${b1("[")}`,
    `${ind(1)}${b2("{")}`,
    `${ind(2)}${str('"company"')}${op(":")} ${str('"Listing Monster AI"')}${op(",")}`,
    `${ind(2)}${str('"title"')}${op(":")} ${str('"Software Engineer"')}${op(",")}`,
    `${ind(2)}${str('"period"')}${op(":")} ${str('"2026 — present"')}${op(",")}`,
    `${ind(2)}${str('"summary"')}${op(":")} ${str('"Building software in a fast-moving startup environment."')}`,
    `${ind(1)}${b2("}")}${op(",")}`,
    `${ind(1)}${b2("{")}`,
    `${ind(2)}${str('"company"')}${op(":")} ${str('"Worldover"')}${op(",")}`,
    `${ind(2)}${str('"title"')}${op(":")} ${str('"Software Engineer"')}${op(",")}`,
    `${ind(2)}${str('"period"')}${op(":")} ${str('"2025 — 2026"')}${op(",")}`,
    `${ind(2)}${str('"highlights"')}${op(":")} ${b3("[")}`,
    `${ind(3)}${str('"Shipped 110+ pull requests across feature delivery, bug fixing, and technical improvements."')}${op(",")}`,
    `${ind(3)}${str('"Delivered a new version history system and a substantial overhaul of the documents platform."')}${op(",")}`,
    `${ind(3)}${str('"Worked across React, tRPC, Zod, Gremlin/Neptune, AWS, and automated testing."')}`,
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
    `${b1("]")}`,
  ];
}

export function renderProjects() {
  return [
    `${cm("// projects.java — Selected Projects")}`,
    ``,
    `${kw("public class")} ${type("Projects")}${op(" {")}`,
    `${ind(1)}${kw("private static final")} ${type("String[]")} ${prop("HIGHLIGHTS")} ${op("=")} ${b1("{")}`,
    `${ind(2)}${str('"Mandible — backend for Hive focused on dynamic board-state modelling and legal move validation"')}${op(",")}`,
    `${ind(2)}${str('"Galactic Dynamics Parallelisation — 100x+ speedup using OpenMP and MPI"')}${op(",")}`,
    `${ind(2)}${str('"Balatro Sandbox — frontend-heavy TypeScript/React simulator with sharable hands and tests"')}${op(",")}`,
    `${ind(2)}${str('"Frogify — AWS serverless Spotify analytics app using Python Lambdas"')}`,
    `${ind(1)}${b1("}")}${op(";")}`,
    ``,
    `${ind(1)}${kw("public static void")} ${fn("main")}${b2("(")}${type("String[]")} ${param("args")}${b2(")")} ${op("{")}`,
    `${ind(2)}${fn("System.out.println")}${b3("(")}${str('"Projects that best reflect how I like to build:"')}${b3(")")}${op(";")}`,
    `${ind(2)}${kw("for")} ${b3("(")}${type("String")} ${param("project")} ${op(":")} ${prop("HIGHLIGHTS")}${b3(")")} ${op("{")}`,
    `${ind(3)}${fn("System.out.println")}${b1("(")}${str('"- "')} ${op("+")} ${param("project")}${b1(")")}${op(";")}`,
    `${ind(2)}${op("}")}`,
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

export function renderLayout() {
  return [
    `${cm("// layout.tsx — Portfolio shell")}`,
    `${kw("export default function")} ${fn("RootLayout")}${b1("(")}${b1(")")} ${op("{")}`,
    `${ind(1)}${kw("return")} ${b2("(")}`,
    `${ind(2)}${tag("&lt;main&gt;")} ${str("Portfolio UI")}${tag("&lt;/main&gt;")}`,
    `${ind(1)}${b2(")")}${op(";")}`,
    `${op("}")}`,
  ];
}

export function renderHeaderComponent() {
  return [
    `${cm("// Header.tsx")}`,
    `${kw("export function")} ${fn("Header")}${b1("(")}${b1(")")} ${op("{")}`,
    `${ind(1)}${kw("return")} ${tag("&lt;header&gt;Tom Corley&lt;/header&gt;")}${op(";")}`,
    `${op("}")}`,
  ];
}

export function renderFooterComponent() {
  return [
    `${cm("// Footer.tsx")}`,
    `${kw("export function")} ${fn("Footer")}${b1("(")}${b1(")")} ${op("{")}`,
    `${ind(1)}${kw("return")} ${tag("&lt;footer&gt;Thanks for visiting&lt;/footer&gt;")}${op(";")}`,
    `${op("}")}`,
  ];
}

export function renderProfileComponent() {
  return [
    `${cm("// ProfileImage.tsx")}`,
    `${kw("export function")} ${fn("ProfileImage")}${b1("(")}${b1(")")} ${op("{")}`,
    `${ind(1)}${kw("return")} ${tag("&lt;img src=\"/profile.jpg\" alt=\"Tom Corley\" /&gt;")}${op(";")}`,
    `${op("}")}`,
  ];
}

export function renderResumeJson() {
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
    `${b1("}")}`,
  ];
}

export function renderPackageJson() {
  return [
    `${b1("{")}`,
    `${ind(1)}${str('"name"')}${op(":")} ${str('"tom-corley-portfolio"')}${op(",")}`,
    `${ind(1)}${str('"private"')}${op(":")} ${num('true')}${op(",")}`,
    `${ind(1)}${str('"type"')}${op(":")} ${str('"module"')}`,
    `${b1("}")}`,
  ];
}

export function renderTsConfig() {
  return [
    `${b1("{")}`,
    `${ind(1)}${str('"compilerOptions"')}${op(":")} ${b2("{")}`,
    `${ind(2)}${str('"target"')}${op(":")} ${str('"ES2022"')}${op(",")}`,
    `${ind(2)}${str('"module"')}${op(":")} ${str('"ESNext"')}`,
    `${ind(1)}${b2("}")}`,
    `${b1("}")}`,
  ];
}

export function renderNextConfig() {
  return [
    `${cm("// next.config.ts")}`,
    `${kw("const")} ${prop("nextConfig")} ${op("=")} ${b1("{")}${b1("}")}${op(";")}`,
    `${kw("export default")} ${prop("nextConfig")}${op(";")}`,
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
    `${cm("## Contact")}`,
    ``,
    `${cm("- Email: tomcorley86@gmail.com")}`,
    `${cm("- LinkedIn: linkedin.com/in/tom-corley")}`,
    `${cm("- GitHub: github.com/tom-corley")}`,
  ];
}

const SERIOUS_CONTENT = {
  about: {
    title: "Tom Corley",
    subtitle: "Software Engineer · London, UK",
    intro: [
      "I’m a software engineer based in London, currently working at Listing Monster AI.",
      "I graduated from the University of Warwick with a First Class MMath, including an Erasmus year at LMU München.",
      "My experience spans full-stack TypeScript, AWS infrastructure, and data-heavy systems, with additional project work across Java, Python, C#, and C++."
    ],
    sections: [
      {
        heading: "What I do",
        bullets: [
          "I build product-facing software with a strong backend bias.",
          "I enjoy work that combines clean application structure with messy real-world requirements.",
          "I’m particularly comfortable across TypeScript services, AWS infrastructure, and data-heavy workflows."
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
          "Software Engineer at Listing Monster AI (2026 — present)."
        ]
      }
    ],
    entries: [
      {
        title: "Software Engineer",
        meta: "Worldover · London · 2025 — 2026",
        bullets: [
          "I shipped 110+ pull requests across feature delivery, bug fixing, and technical improvements.",
          "I delivered a new version history system and a substantial overhaul of the documents platform, spanning both UI work and underlying data-model changes.",
          "I worked across React, tRPC, Zod, Gremlin/Neptune, AWS, and automated testing with Jest, Cypress, and Playwright."
        ]
      },
      {
        title: "Software Engineering Trainee",
        meta: "La Fosse · London · 2025",
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
        meta: "Java · Spring Boot · JPA · REST API Design",
        bullets: [
          "I’m building a backend for the board game Hive, focused on representing a dynamic hex-grid board state, enforcing legal move validation, and exposing game logic through a layered Spring Boot service.",
          "The aim is to demonstrate domain modelling, backend architecture, and algorithmic problem-solving rather than treating it as a frontend-led portfolio app."
        ]
      },
      {
        title: "Galactic Dynamics Parallelisation",
        meta: "C · OpenMP · MPI",
        bullets: [
          "I achieved a 100x+ speedup over serial code using hybrid OpenMP and MPI parallelisation.",
          "The project was built around large-scale simulation work on research-grade compute infrastructure."
        ]
      },
      {
        title: "Balatro Sandbox",
        meta: "TypeScript · React · Vitest",
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
          "AWS Certified Developer — Associate",
          "AWS Certified AI Practitioner",
          "AWS Certified Cloud Practitioner",
          "PCAP — Python Certified Associate Programmer"
        ]
      }
    ]
  },
  education: {
    title: "Education",
    entries: [
      {
        title: "MMath, Mathematics with Study in Europe",
        meta: "University of Warwick · First Class Honours",
        bullets: [
          "I completed an Erasmus year at LMU München.",
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

const SERIOUS_NAV = [
  ["about", "About"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["certifications", "Certifications"],
  ["education", "Education"],
];

export function renderSeriousPage(pageId) {
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

  const intro = (content.intro || [])
    .map((paragraph) => `<p class="serious-page__body">${esc(paragraph)}</p>`)
    .join("");

  const sections = (content.sections || [])
    .map((section) => {
      const bullets = (section.bullets || [])
        .map((bullet) => `<li>${esc(bullet)}</li>`)
        .join("");
      const chips = (section.chips || [])
        .map((chip) => `<span class="serious-chip">${esc(chip)}</span>`)
        .join("");

      return `
        <section class="serious-section">
          <h2 class="serious-section__title">${esc(section.heading)}</h2>
          ${bullets ? `<ul class="serious-list">${bullets}</ul>` : ""}
          ${chips ? `<div class="serious-chip-list">${chips}</div>` : ""}
        </section>
      `;
    })
    .join("");

  const entries = (content.entries || [])
    .map((entry) => {
      const bullets = (entry.bullets || [])
        .map((bullet) => `<li>${esc(bullet)}</li>`)
        .join("");
      return `
        <section class="serious-entry">
          <div class="serious-entry__header">
            <h2 class="serious-entry__title">${esc(entry.title)}</h2>
            ${entry.meta ? `<div class="serious-entry__meta">${esc(entry.meta)}</div>` : ""}
          </div>
          ${bullets ? `<ul class="serious-list">${bullets}</ul>` : ""}
        </section>
      `;
    })
    .join("");

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
