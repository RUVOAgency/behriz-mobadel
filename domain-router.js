(() => {
  const path = location.pathname;
  const page = path === "/" ? "index.html" : path.replace(/^\/+/, "");
  const englishPages = new Set([
    "index.html",
    "about.html",
    "candle-filter-guide.html",
    "candle-filter.html",
    "cartridge-filter-pressure-drop.html",
    "cip-backwash-guide.html",
    "cold-water-deaerator.html",
    "contact.html",
    "dissolved-oxygen-beverage-water.html",
    "mono-pump.html",
    "product.html",
    "products.html",
    "stainless-steel-304l-vs-316l.html"
  ]);
  const englishPage = englishPages.has(page) ? page : "index.html";
  const englishUrl = `/en/${englishPage}${location.search}${location.hash}`;

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    const canonicalPath = path === "/index.html" ? "/" : path;
    canonical.href = `https://www.behrizmobadel.com${canonicalPath}`;
  }

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    const ogPath = path === "/index.html" ? "/" : path;
    ogUrl.content = `https://www.behrizmobadel.com${ogPath}`;
  }

  addEventListener("DOMContentLoaded", () => {
    document
      .querySelectorAll('.site-header a[href="#contact"], .site-header a[href="index.html#contact"]')
      .forEach((link) => link.setAttribute("href", "contact.html"));

    const actions = document.querySelector(".nav-actions");
    if (!actions) return;

    const existing = actions.querySelector(".lang");
    if (existing) {
      existing.classList.add("language-switch");
      existing.setAttribute("type", "button");
      existing.setAttribute("aria-label", "English version");
      existing.addEventListener("click", () => {
        location.href = englishUrl;
      });
      return;
    }

    const link = document.createElement("a");
    link.className = "lang language-switch";
    link.href = englishUrl;
    link.textContent = "EN";
    link.setAttribute("aria-label", "English version");
    actions.prepend(link);
  });
})();
