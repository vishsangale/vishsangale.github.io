(function () {
  try {
    const saved = localStorage.getItem("vs-theme");
    if (saved) document.documentElement.setAttribute("data-theme", saved);
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  } catch (e) {}

  document.addEventListener("DOMContentLoaded", () => {
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
  });
})();
