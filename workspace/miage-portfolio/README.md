## MIAGE Portfolio (React + TypeScript + Vite)

An interactive portfolio for a MIAGE student aiming for data/analytics or IT consulting roles.

Scripts:

- `npm run dev`: start development server
- `npm run build`: production build
- `npm run preview`: preview production build

Tech stack: React, Vite, TypeScript, Material UI, React Router, Recharts, Framer Motion.

### Deploying the site

This project is configured for static hosting and GitHub Pages.

1) Prerequisites
- Node.js 20+, npm 10+
- A GitHub repository with Pages enabled (Settings → Pages → Build and deployment → GitHub Actions)

2) Production build locally

```bash
npm ci
npm run build
npm run postbuild # copies dist/index.html to dist/404.html for SPA routing
```

Artifacts are in `dist/`.

3) Deploy with GitHub Pages (recommended)

This repo includes a workflow at `.github/workflows/deploy.yml` that:
- Installs dependencies and builds the app
- Copies `404.html` for SPA routing
- Publishes `dist/` to GitHub Pages

Steps:
- Push your code to the `main` branch
- In GitHub → Actions, wait for "Deploy to GitHub Pages" to complete
- Your site will be available at `https://<your-username>.github.io/<repo-name>/`

Notes:
- `vite.config.ts` sets `base: './'` so assets load correctly on subpaths.
- SPA deep links work via the `404.html` copy.

4) Alternative: Any static host (Netlify, Vercel, S3, etc.)

- Build command: `npm run build && npm run postbuild`
- Publish directory: `dist`

5) Local preview

```bash
npm run preview
```

This serves the build from `dist/`.
