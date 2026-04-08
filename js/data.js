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
            { name: 'work-experience.ts', type: 'file', fileType: 'ts', page: 'experience' },
            { name: 'projects.ts', type: 'file', fileType: 'ts', page: 'projects' },
            { name: 'certifications.ts', type: 'file', fileType: 'ts', page: 'certifications' },
            { name: 'education.ts', type: 'file', fileType: 'ts', page: 'education' },
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
  'experience': 'src / pages / work-experience.ts',
  'projects': 'src / pages / projects.ts',
  'certifications': 'src / pages / certifications.ts',
  'education': 'src / pages / education.ts',
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
    text: `Tom is a Software Engineer at Worldover in London. He holds a First Class MMath from the University of Warwick, with an Erasmus year at LMU München.\n\nHe's shipped 110+ pull requests since joining, owning work end-to-end across full-stack TypeScript, AWS infrastructure, and graph databases. Fun fact: he set the programme-record score of 199/200 at the La Fosse software engineering academy!`,
  },
  {
    role: 'user',
    text: 'What are his key technical skills?',
  },
  {
    role: 'ai',
    text: 'His core stack:',
    codeBlock: `Languages:    TypeScript, Python, C#/.NET, SQL, Gremlin, C\nTechnologies: React, tRPC, Zod, Node.js, Express, Docker\nAWS:          Neptune, Lambda, S3, CloudWatch, Amplify, SES\nTesting:      Jest, Cypress, Playwright, NUnit`,
  },
  {
    role: 'user',
    text: "What's his most impressive achievement?",
  },
  {
    role: 'ai',
    text: `At Worldover, he delivered major product improvements including a new version history system and a substantial overhaul of the documents platform. He also holds four professional certifications — AWS Developer Associate, AWS AI Practitioner, AWS Cloud Practitioner, and PCAP.\n\nHis Master's thesis is equally impressive — a 70-page mathematical research paper on Hamiltonian Cycles in Cayley Graphs.`,
  },
];
