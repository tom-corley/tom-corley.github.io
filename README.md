# Tom Corley — IDE Portfolio

A personal portfolio website styled as a VS Code editor, built with vanilla HTML, CSS, and JavaScript.

## Features

- Full VS Code UI replica — title bar, activity bar, file explorer, tabs, editor with syntax highlighting, minimap, and status bar
- Dracula colour theme with Fira Code font
- Interactive file tree navigation with tab management
- Agent chat sidebar with pre-loaded Q&A
- Responsive design with mobile fallback
- Keyboard shortcuts (Ctrl/Cmd+B to toggle sidebar)

## Running Locally

No build step required — open `index.html` directly in a browser:

```bash
open index.html
```

## Project Structure

```
├── index.html          # Entry point
├── css/                # Modular stylesheets (Dracula theme, layout, components)
├── js/
│   ├── app.js          # Initialisation and wiring
│   ├── data.js         # File tree structure and chat content
│   ├── renderer.js     # Syntax-highlighted page renderers
│   ├── explorer.js     # File explorer UI
│   ├── tabs.js         # Tab management
│   └── statusbar.js    # Status bar updates
└── assets/             # Profile image
```

## Credits

Based on [ide-portfolio-website](https://github.com/EvanGit09/ide-portfolio-website) by Corey Birnie. Original concept, design, and implementation by him — adapted here with permission.
