# Yuliia Medun – Portfolio

Static portfolio site: plain HTML, CSS and vanilla JS. No framework, no build step.

## Structure

```
.
├── index.html          Home
├── about.html          About, skills, project timeline
├── projects.html       Project cards
├── contact.html        Email, LinkedIn, GitHub
├── 404.html            Not-found page (GitHub Pages uses it automatically)
├── .nojekyll           Tells GitHub Pages to serve files as-is
├── css/
│   └── style.css       All styles
├── js/
│   └── main.js         Shared nav and footer, your links (SITE object)
└── assets/
    ├── img/            Portrait, pixel frame and favicons
    └── projects/       Put project screenshots / GIFs here
```

## Deploy to GitHub Pages

1. Create a public repository on GitHub. This site lives in `yuliiamedun.github.io`, served at `https://yuliiamedun.github.io`.
2. Upload these files to the repository root on the `main` branch (drag and drop on GitHub, or `git add . && git commit -m "Add site" && git push`).
3. Open **Settings → Pages**. Under **Build and deployment**, set **Source** to *Deploy from a branch*, branch `main`, folder `/ (root)`. Save.
4. Wait 1–2 minutes and open the URL shown on that page. Every push to `main` redeploys automatically.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit `http://localhost:8000`.

## What to edit (search the code for `TODO`)

- **Links:** LinkedIn and GitHub live in `js/main.js` (`SITE`) and in `contact.html` (used when JavaScript is off). Change both if they move.
- **Project repos:** replace each `https://github.com/yuliiamedun/REPO-NAME` in `projects.html`.
- **Project images:** add files to `assets/projects/`, then uncomment the `<figure>` block in each project card and write real alt text. Keep GIFs under ~5 MB; use MP4 for longer clips.
