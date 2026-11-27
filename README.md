# Profiler

[![Github-pages](src/images/github_pages.png)](https://omkarnath1123.github.io/Profiler/)

My personal site and online CV, built with React + Vite and hosted on GitHub Pages.

- `master` holds the source; `gh-pages` holds the built site.
- All content (experience, skills, projects, links) lives in **`src/data/profile.js`**. Edit that one file to update the site.
- The page title, description and link-preview tags are generated from the same file at build time (`vite.seo.js`).
- The public URL is written once, as `homepage` in `package.json`.

### Commands

```bash
npm install
npm run dev       # local dev server at http://localhost:5173/Profiler/
npm run build     # production build into dist/
npm run og        # re-render public/og.png, the link-preview card (needs Google Chrome)
npm run deploy    # build + push dist/ to the gh-pages branch
```

### Job-search signals

The "open to roles" pill is `person.status` and the relocation, work-permit and notice rows are in `glance`, both in `profile.js`. Set `status` to `""` and delete those rows to make the site neutral again.

### Public-site rule

No phone numbers, internal facility codes or internal metrics. The tailored PDF resumes contain all three, so do not copy from them without checking.

### Printing

"Print / save as PDF" produces an A4 CV in the light theme, with contact details as text.

It's a single page; `public/404.html` redirects old links like `/Profiler/cv` to it.
