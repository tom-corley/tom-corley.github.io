// ============================================================
// data.js — All portfolio content & file tree structure
// ============================================================

export const FILE_TREE = {
  name: 'TOM-CORLEY-PORTFOLIO',
  type: 'root',
  open: true,
  children: [
    {
      name: 'src', type: 'folder', open: true, children: [
        {
          name: 'app', type: 'folder', open: true, children: [
            { name: 'layout.tsx', type: 'file', fileType: 'tsx', page: 'layout' },
          ]
        },
        {
          name: 'pages', type: 'folder', open: true, children: [
            { name: 'about.tsx', type: 'file', fileType: 'tsx', page: 'about' },
            { name: 'experience.py', type: 'file', fileType: 'py', page: 'experience' },
            { name: 'projects.java', type: 'file', fileType: 'java', page: 'projects' },
            { name: 'certifications.cs', type: 'file', fileType: 'cs', page: 'certifications' },
            { name: 'education.cpp', type: 'file', fileType: 'cpp', page: 'education' },
          ]
        },
        {
          name: 'components', type: 'folder', open: false, children: [
            { name: 'Header.tsx', type: 'file', fileType: 'tsx', page: 'header-component' },
            { name: 'Footer.tsx', type: 'file', fileType: 'tsx', page: 'footer-component' },
            { name: 'ProfileImage.tsx', type: 'file', fileType: 'tsx', page: 'profile-component' },
          ]
        },
        {
          name: 'data', type: 'folder', open: false, children: [
            { name: 'resume.json', type: 'file', fileType: 'json', page: 'resume-json' },
            { name: 'skills.json', type: 'file', fileType: 'json', page: 'skills-json' },
          ]
        },
      ]
    },
    {
      name: 'public', type: 'folder', open: false, children: [
        { name: 'profile.jpg', type: 'file', fileType: 'image', page: null },
      ]
    },
    { name: 'package.json', type: 'file', fileType: 'json', page: 'package-json' },
    { name: 'tsconfig.json', type: 'file', fileType: 'json', page: 'tsconfig-json' },
    { name: 'next.config.ts', type: 'file', fileType: 'ts', page: 'next-config' },
    { name: 'README.md', type: 'file', fileType: 'md', page: 'readme' },
  ]
};

// Path lookup for breadcrumbs
export const FILE_PATHS = {
  'about': 'src / pages / about.tsx',
  'experience': 'src / pages / experience.py',
  'projects': 'src / pages / projects.java',
  'certifications': 'src / pages / certifications.cs',
  'education': 'src / pages / education.cpp',
  'layout': 'src / app / layout.tsx',
  'header-component': 'src / components / Header.tsx',
  'footer-component': 'src / components / Footer.tsx',
  'profile-component': 'src / components / ProfileImage.tsx',
  'resume-json': 'src / data / resume.json',
  'skills-json': 'src / data / skills.json',
  'package-json': 'package.json',
  'tsconfig-json': 'tsconfig.json',
  'next-config': 'next.config.ts',
  'readme': 'README.md',
};

// Language for status bar
export const FILE_LANGUAGES = {
  'tsx': 'TypeScript React',
  'ts': 'TypeScript',
  'py': 'Python',
  'java': 'Java',
  'cs': 'C#',
  'cpp': 'C++',
  'json': 'JSON',
  'md': 'Markdown',
  'image': 'Image',
};

// ============================================================
// Chat messages
// ============================================================
export const CHAT_MESSAGES = [
  {
    role: 'user',
    text: 'Tell me about Tom Corley',
  },
  {
    role: 'ai',
    text: `I’m a software engineer based in London, currently working at Listing Monster AI. I graduated from the University of Warwick with a First Class MMath, including an Erasmus year at LMU München.\n\nMy experience spans full-stack TypeScript, AWS infrastructure, and data-heavy systems, with additional project work across Java, Python, C#, and C++.`,
  },
  {
    role: 'user',
    text: 'What are his key technical skills?',
  },
  {
    role: 'ai',
    text: 'My core stack includes:',
    codeBlock: `Languages:    TypeScript, Python, Java, C#/.NET, C++, SQL\nBackend:      Node.js, Express, Spring Boot, ASP.NET, REST APIs\nFrontend:     React, tRPC, Zod, vanilla JS, CSS\nCloud/Data:   AWS, Neptune, S3, Lambda, OpenSearch, PostgreSQL\nTesting:      Jest, Cypress, Playwright, NUnit, Vitest`,
  },
  {
    role: 'user',
    text: 'What is he building now?',
  },
  {
    role: 'ai',
    text: `One of my current side projects is Mandible, a Hive engine and companion app. The project focuses on modelling game state cleanly, validating legal moves, and turning complex rules into a well-structured application.`,
  },
];
