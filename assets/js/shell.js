/* Shared chrome: topbar, footer, theme toggle, persisted preferences.
   Used by every page. Vanilla JS so it loads early and prevents FOUC. */

(function () {
  // ---- 1. Apply saved theme BEFORE paint to avoid flash
  try {
    const saved = localStorage.getItem("vs-theme");
    if (saved) document.documentElement.setAttribute("data-theme", saved);
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  } catch (e) {}

  // ---- 2. Render topbar + footer
  function renderShell(activePage) {
    const topbar = document.querySelector("[data-shell='topbar']");
    if (topbar) {
      topbar.innerHTML = `
        <div class="shell topbar-inner">
          <a href="index.html" class="brand">
            <span class="brand-dot"></span>
            <span>vish_sangale</span>
          </a>
          <nav class="nav">
            <a href="index.html" data-page="home">Home</a>
            <a href="research.html" data-page="research">Research</a>
            <a href="post.html" data-page="post">Notes</a>
            <a href="photography.html" data-page="photo">Photography</a>
            <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
              <span class="dot"></span><span id="themeLabel">light</span>
            </button>
          </nav>
        </div>`;
      const active = topbar.querySelector(`[data-page="${activePage}"]`);
      if (active) active.classList.add("is-active");
    }

    const footer = document.querySelector("[data-shell='footer']");
    if (footer) {
      footer.innerHTML = `
        <div class="shell footer-inner">
          <div class="footer-colophon">
            <h4>Colophon</h4>
            <p>Set in Source Serif 4, Inter Tight and JetBrains Mono.
            Hand-built, no trackers. Long-form thinking on machine learning,
            recommendation systems, and the small ways biology keeps embarrassing
            our architectures.</p>
          </div>
          <div>
            <h4>Elsewhere</h4>
            <ul>
              <li><a class="link" href="https://github.com/vishsangale">github</a></li>
              <li><a class="link" href="https://www.linkedin.com/in/vishsangale">linkedin</a></li>
              <li><a class="link" href="https://recsysml.substack.com/">substack</a></li>
              <li><a class="link" href="mailto:hello@example.com">email</a></li>
            </ul>
          </div>
          <div>
            <h4>This site</h4>
            <ul>
              <li><a class="link" href="index.html">Home</a></li>
              <li><a class="link" href="research.html">Research</a></li>
              <li><a class="link" href="post.html">Notes</a></li>
              <li><a class="link" href="photography.html">Photography</a></li>
            </ul>
          </div>
        </div>
        <div class="shell" style="margin-top:48px; font-family: var(--mono); font-size: 11px; color: var(--muted); display:flex; justify-content:space-between; gap: 16px; flex-wrap:wrap;">
          <span>© 2013–${new Date().getFullYear()} Vishwanath Sangale</span>
          <span>last commit · main · ${new Date().toISOString().slice(0,10)}</span>
        </div>`;
    }

    // ---- 3. Wire theme toggle
    const btn = document.getElementById("themeToggle");
    const lbl = document.getElementById("themeLabel");
    function syncLabel() {
      const t = document.documentElement.getAttribute("data-theme") || "light";
      if (lbl) lbl.textContent = t === "dark" ? "dark" : "light";
    }
    syncLabel();
    if (btn) {
      btn.addEventListener("click", () => {
        const cur = document.documentElement.getAttribute("data-theme") || "light";
        const next = cur === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        try { localStorage.setItem("vs-theme", next); } catch (e) {}
        syncLabel();
      });
    }
  }

  // Expose
  window.VS_SHELL = { renderShell };
})();
