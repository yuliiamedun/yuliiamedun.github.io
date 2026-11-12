// Shared header and footer, rendered on every page from one place.
// Each page sets <body data-page="..."> so the current link is highlighted.

const SITE = {
  name: "Yuliia Medun",
  email: "yuliiamedun@gmail.com",
  linkedin: "https://www.linkedin.com/in/yuliia-medun-a2408233a/",
  github: "https://github.com/yuliiamedun",
};

const NAV = [
  { href: "index.html", label: "Home", page: "home" },
  { href: "about.html", label: "About", page: "about" },
  { href: "projects.html", label: "Projects", page: "projects" },
  { href: "contact.html", label: "Contact", page: "contact" },
];

function renderHeader() {
  const header = document.getElementById("site-header");
  if (!header) return;
  const current = document.body.dataset.page;

  const links = NAV.map(
    (item) =>
      `<li><a href="${item.href}"${item.page === current ? ' aria-current="page"' : ""}>${item.label}</a></li>`
  ).join("");

  header.innerHTML = `
    <div class="container">
      <nav class="nav" aria-label="Main">
        <a class="logo" href="index.html">${SITE.name}</a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-links">Menu</button>
        <ul class="nav-links" id="nav-links">${links}</ul>
      </nav>
    </div>`;

  const toggle = header.querySelector(".nav-toggle");
  const list = header.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    list.classList.toggle("open", !open);
  });
}

function renderFooter() {
  const footer = document.getElementById("site-footer");
  if (!footer) return;
  footer.innerHTML = `
    <div class="container footer-inner">
      <p style="margin:0">© ${new Date().getFullYear()} ${SITE.name}</p>
      <ul class="footer-links">
        <li><a href="mailto:${SITE.email}">Email</a></li>
        <li><a href="${SITE.linkedin}">LinkedIn</a></li>
        <li><a href="${SITE.github}">GitHub</a></li>
      </ul>
    </div>`;
}

// Fill any element marked data-link="email|linkedin|github" with the shared URLs,
// so links only need to be edited in SITE above.
function fillLinks() {
  document.querySelectorAll("[data-link]").forEach((el) => {
    const key = el.dataset.link;
    if (key === "email") el.href = `mailto:${SITE.email}`;
    else if (SITE[key]) el.href = SITE[key];
  });
}

renderHeader();
renderFooter();
fillLinks();
