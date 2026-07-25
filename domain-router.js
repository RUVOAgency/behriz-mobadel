(() => {
  const host = location.hostname.toLowerCase().replace(/^www\./, "");
  const isEnglishDomain = host === "behrizmobadel.com";
  const isPersianDomain = host === "behrizmobadel.ir";
  const path = location.pathname;

  if (isEnglishDomain && !path.startsWith("/en/")) {
    const page = path === "/" ? "index.html" : path.replace(/^\/+/, "");
    location.replace(`/en/${page}${location.search}${location.hash}`);
  }

  if (isPersianDomain && path.startsWith("/en/")) {
    const page = path.replace(/^\/en\//, "");
    location.replace(`/${page}${location.search}${location.hash}`);
  }

  addEventListener("DOMContentLoaded", () => {
    const actions = document.querySelector(".nav-actions");
    if (!actions) return;
    const existing = actions.querySelector(".lang");
    if (existing) {
      existing.classList.add("language-switch");
      existing.addEventListener("click", () => {
        location.href = `https://www.behrizmobadel.com/en/${path === "/" ? "index.html" : path.replace(/^\/+/, "")}${location.search}${location.hash}`;
      });
      return;
    }
    const link = document.createElement("a");
    link.className = "lang language-switch";
    link.href = `https://www.behrizmobadel.com/en/${path === "/" ? "index.html" : path.replace(/^\/+/, "")}${location.search}${location.hash}`;
    link.textContent = "EN";
    link.setAttribute("aria-label", "English version");
    actions.prepend(link);
  });
})();
