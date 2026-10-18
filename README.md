# Profiler

[![Github-pages](src/images/github_pages.png)](https://omkarnath1123.github.io/Profiler/)

My personal site and online CV, built with React + Vite and hosted on GitHub Pages.

- `master` holds the source; `gh-pages` holds the built site.
- All content (experience, skills, projects, links) lives in **`src/data/profile.js`**. Edit that one file to update the site.

### Commands

```bash
npm install
npm run dev       # local dev server at http://localhost:5173/Profiler/
npm run build     # production build into dist/
npm run deploy    # build + push dist/ to the gh-pages branch
```

It's a single page; `public/404.html` redirects old links like `/Profiler/cv` to it.
