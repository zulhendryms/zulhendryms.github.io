
# zulhendryms.github.io

A React + TypeScript portfolio site built with Vite, Tailwind CSS, and shadcn-ui.

## Project overview

- Vite-powered React application
- TypeScript support
- Tailwind CSS for styling
- Built with shadcn-ui components
- Includes a `CNAME` file for custom domain support

## Local development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open the local URL shown in the terminal (typically `http://localhost:8080`).

## Build for production

To generate the production-ready assets:

```bash
npm run build
```

The optimized files will be emitted to the `dist/` directory.

## Preview the production build locally

After building, preview the production output with:

```bash
npm run preview
```

This serves the `dist/` directory so you can verify the site before deploying.

## Deploying to GitHub Pages

This repository is named `zulhendryms.github.io`, which means GitHub Pages can serve the site as a user/organization page from the repository root.

### Manual deployment

1. Build the site:

   ```bash
   npm run build
   ```

2. Push the contents of `dist/` to the branch or folder configured for GitHub Pages.

   - For a user/organization page using this repository name, GitHub Pages can serve directly from the `main` branch root.
   - If you use a branch like `gh-pages`, deploy the contents of `dist/` there.

3. Make sure the `CNAME` file remains in the repository root if you are using a custom domain.

### Using `gh-pages` (optional)

If you want an automated deployment workflow, you can use the `gh-pages` package:

```bash
npm install --save-dev gh-pages
```

Then add these scripts to `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Run deployment with:

```bash
npm run deploy
```

## Notes

- No custom `base` path is configured in `vite.config.ts`, which is correct for a user page repository served from the root domain.
- If this repository is later deployed under a subpath, update `base` in `vite.config.ts` accordingly.
