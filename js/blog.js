// Renders the blog list, or a single post when the URL has ?post=slug.

(function () {
  const root = document.getElementById("blog-root");
  if (!root || !window.POSTS) return;

  const posts = [...window.POSTS].sort((a, b) => b.date.localeCompare(a.date));
  const slug = new URLSearchParams(location.search).get("post");

  const escapeHtml = (s) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  const formatDate = (iso) =>
    new Date(iso + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  // Only allow safe link targets
  const safeUrl = (url) => (/^(https?:\/\/|mailto:|\/|#|[\w.-]+\.html)/i.test(url) ? url : "#");

  function inline(text) {
    return escapeHtml(text)
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>")
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, url) => `<a href="${safeUrl(url)}">${label}</a>`);
  }

  function markdown(src) {
    const lines = src.replace(/\r/g, "").trim().split("\n");
    const out = [];
    let para = [];
    let list = null; // { tag, items }

    const flushPara = () => {
      if (para.length) out.push(`<p>${inline(para.join(" "))}</p>`);
      para = [];
    };
    const flushList = () => {
      if (list) out.push(`<${list.tag}>${list.items.map((i) => `<li>${inline(i)}</li>`).join("")}</${list.tag}>`);
      list = null;
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith("```")) {
        flushPara(); flushList();
        const code = [];
        while (++i < lines.length && !lines[i].startsWith("```")) code.push(lines[i]);
        out.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
        continue;
      }

      // The page title is the h1, so # becomes h2 and ## becomes h3
      const heading = line.match(/^(#{1,2})\s+(.*)$/);
      if (heading) {
        flushPara(); flushList();
        const level = heading[1].length + 1;
        out.push(`<h${level}>${inline(heading[2])}</h${level}>`);
        continue;
      }

      const bullet = line.match(/^\s*[-*]\s+(.*)$/);
      const numbered = line.match(/^\s*\d+\.\s+(.*)$/);
      if (bullet || numbered) {
        flushPara();
        const tag = bullet ? "ul" : "ol";
        if (!list || list.tag !== tag) { flushList(); list = { tag, items: [] }; }
        list.items.push((bullet || numbered)[1]);
        continue;
      }

      if (!line.trim()) { flushPara(); flushList(); continue; }
      flushList();
      para.push(line.trim());
    }
    flushPara(); flushList();
    return out.join("\n");
  }

  function renderList() {
    const items = posts.map((p) => `
      <li class="card">
        <time datetime="${p.date}">${formatDate(p.date)}</time>
        <h2><a href="blog.html?post=${encodeURIComponent(p.slug)}">${escapeHtml(p.title)}</a></h2>
        <p>${escapeHtml(p.summary)}</p>
      </li>`).join("");

    root.insertAdjacentHTML(
      "beforeend",
      posts.length
        ? `<ul class="post-list" style="margin-top:2rem">${items}</ul>`
        : `<p>No posts yet.</p>`
    );
  }

  function renderPost(post) {
    document.title = `${post.title} – Yuliia Medun`;
    root.innerHTML = `
      <article class="post">
        <a class="back-link" href="blog.html">Back to all posts</a>
        <p class="post-meta"><time datetime="${post.date}">${formatDate(post.date)}</time></p>
        <h1>${escapeHtml(post.title)}</h1>
        <div class="post-body">${markdown(post.body)}</div>
      </article>`;
  }

  if (slug) {
    const post = posts.find((p) => p.slug === slug);
    if (post) renderPost(post);
    else root.innerHTML = `<h1>Post not found</h1><p>There’s no post called “${escapeHtml(slug)}”. <a href="blog.html">See all posts</a>.</p>`;
  } else {
    renderList();
  }
})();
