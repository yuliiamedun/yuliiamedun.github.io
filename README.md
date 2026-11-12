# Yuliia Medun – Portfolio

Static portfolio site: plain HTML, CSS and vanilla JS. No framework, no build step.

## Structure

```
.
├── index.html          Home
├── about.html          About, skills, project timeline
├── projects.html       Project cards
├── blog.html           Blog list and single posts (?post=slug)
├── contact.html        Email, LinkedIn, GitHub
├── 404.html            Not-found page (GitHub Pages uses it automatically)
├── .nojekyll           Tells GitHub Pages to serve files as-is
├── css/
│   └── style.css       All styles
├── js/
│   ├── main.js         Shared nav and footer, your links (SITE object)
│   ├── posts.js        Blog posts (edit here)
│   └── blog.js         Blog rendering
└── assets/
    ├── img/            Illustration and favicon
    └── projects/       Put project screenshots / GIFs here
```

## Deploy to GitHub Pages

1. Create a public repository on GitHub. Name it `YOUR-USERNAME.github.io` to get the URL `https://YOUR-USERNAME.github.io`. Any other name gives `https://YOUR-USERNAME.github.io/REPO-NAME`.
2. Upload these files to the repository root on the `main` branch (drag and drop on GitHub, or `git add . && git commit -m "Add site" && git push`).
3. Open **Settings → Pages**. Under **Build and deployment**, set **Source** to *Deploy from a branch*, branch `main`, folder `/ (root)`. Save.
4. Wait 1–2 minutes and open the URL shown on that page. Every push to `main` redeploys automatically.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit `http://localhost:8000`.

## What to edit (search the code for `TODO`)

- **Links:** set `linkedin` and `github` in `js/main.js`. Also update the matching `href`s in `contact.html` (used when JavaScript is off).
- **Project repos:** replace each `https://github.com/YOUR-GITHUB-USERNAME/REPO-NAME` in `projects.html`.
- **Project images:** add files to `assets/projects/`, then uncomment the `<figure>` block in each project card and write real alt text. Keep GIFs under ~5 MB; use MP4 for longer clips.
- **Blog:** edit or replace the placeholder post in `js/posts.js`. Copy the object to add more.

## Adding a blog post

In `js/posts.js`, add an object to `window.POSTS`:

```js
{
  slug: "my-new-post",
  title: "My new post",
  date: "2026-12-01",
  summary: "One sentence for the list.",
  body: `
## A heading

A paragraph with **bold**, *italic*, \`code\` and a [link](https://example.com).

- A bullet
- Another bullet
`,
},
```
