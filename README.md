# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## GitHub Pages deployment

This repository includes a GitHub Actions workflow (.github/workflows/gh-pages.yml) which will build the site and publish the `dist/` folder to the `gh-pages` branch on pushes to `main` (and can be run manually via workflow_dispatch).

Notes:
- The workflow uses pnpm and builds with `pnpm build` (the Vite build outputs to `dist/`).
- Pages should be configured on the repository to serve from the `gh-pages` branch (the action will push there). If your GitHub Pages site needs a custom base path, you can also change `base` in `vite.config.ts` from `./` to the repo path.

### Demo pages and the Body-Vis demo

The repository ships several self-contained demo pages in `public/demos/` (for example `public/demos/body-viz.html`). These files are copied into `dist/demos/` on build and can be opened directly from the built site (e.g. `/demos/body-viz.html`).

- To preview locally after building run:

```powershell
pnpm build
pnpm exec vite preview --port 4173
# then open http://localhost:4173/demos/body-viz.html
```

- The Body-Vis demo supports optional GLB model files. To place your own models, add them under `public/demos/models/` and point `GLB_PATHS` at the filenames (or full URLs) inside `public/demos/body-viz.html`.
- If no GLB assets are provided the demo will use placeholder geometry; the demo now shows a message in the page when placeholders are being used so you can tell it's a fallback.

If you want me to add a small example GLB + loader config, I can add a tiny placeholder model to `public/demos/models/` and wire it up.

## CI badge and Pages link

After the workflow runs on your repo, you can add a status badge and a Pages link to the README. Replace <owner> and <repo> in the examples below with your GitHub username and repository name.

Workflow badge (example):

```markdown
![GitHub Actions: Build and deploy to GitHub Pages](https://github.com/<owner>/<repo>/actions/workflows/gh-pages.yml/badge.svg)
```

GitHub Pages site URL (example):

```
https://<owner>.github.io/<repo>/
```

If you'd like, I can add these badges using your repository name if you tell me the GitHub org/user and repo, and I can also add a small sample model bundled in `public/demos/models/` so the demo works offline.

