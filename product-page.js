const params = new URLSearchParams(location.search);
const id = params.get("product") || params.get("id") || "candle-filter";
const p = getProduct(id) || PRODUCTS[0];

const staticRoutes = {
  "candle-filter": "candle-filter.html",
  "cartridge-filter": "cartridge-filter.html",
  "cold-water-deaerator": "cold-water-deaerator.html",
  "mono-pump": "mono-pump.html",
  "cip-system": "cip-system.html",
  "stainless-tanks": "stainless-steel-tanks.html",
  "kieselguhr-filter": "kieselguhr-filter.html",
  "spiral-pasteurizer": "spiral-pasteurizer.html",
  "homogenizer-mixer": "homogenizer-mixer.html",
};
const productUrl = (product) =>
  staticRoutes[product.id] || `product.html?product=${encodeURIComponent(product.id)}`;

if (staticRoutes[p.id]) {
  location.replace(staticRoutes[p.id]);
}

document.title = `${p.name} | مشخصات فنی و استعلام | بهریز مبدل`;
const meta = document.querySelector('meta[name="description"]');
if (meta)
  meta.content = `${p.name} ساخت بهریز مبدل؛ ${p.application} مشاهده مشخصات فنی و دریافت مشاوره مهندسی.`;

const canonical = document.createElement("link");
canonical.rel = "canonical";
canonical.href = staticRoutes[p.id]
  ? `https://www.behrizmobadel.com/${staticRoutes[p.id]}`
  : `https://www.behrizmobadel.com/product.html?product=${encodeURIComponent(p.id)}`;
document.head.appendChild(canonical);

const schema = document.createElement("script");
schema.type = "application/ld+json";
const productImages = [
  p.image,
  ...(p.gallery || []).map((item) => item.image),
].map((image) => `https://www.behrizmobadel.com/${image}`);
schema.textContent = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: p.name,
  description: p.summary,
  image: productImages,
  serviceType: `${p.name}؛ طراحی و ساخت سفارشی تجهیزات فرایندی`,
  provider: {
    "@type": "Organization",
    name: "شرکت تولیدی صنعتی بهریز مبدل",
    url: "https://www.behrizmobadel.com/",
  },
  areaServed: {
    "@type": "Country",
    name: "Iran",
  },
  url: canonical.href,
});
document.head.appendChild(schema);

const whatsappText = encodeURIComponent(
  `سلام، برای ${p.name} مشاوره و استعلام قیمت می‌خواهم.`,
);
const related = PRODUCTS.filter((x) => x.cat === p.cat && x.id !== p.id).slice(
  0,
  3,
);
const gallerySection = p.gallery
  ? `<section class="product-anatomy"><div class="container">
      <div class="section-head"><div><span class="eyebrow burgundy"><i></i> ${p.galleryEyebrow || "ساختار دستگاه"}</span><h2>${p.galleryHeading || "طراحی مهندسی‌شده برای سرویس و شست‌وشوی مطمئن"}</h2></div><p>${p.galleryDescription || "جزئیات داخلی و اتصالات فیلتر کارتریج تک بهریز مبدل"}</p></div>
      <div class="anatomy-grid">${p.gallery
        .map(
          (item) => `<article><div class="anatomy-image"><img src="${item.image}" alt="${item.title}" loading="lazy"></div><div><h3>${item.title}</h3><p>${item.text}</p></div></article>`,
        )
        .join("")}</div>
    </div></section>`
  : "";
const processSection = p.process
  ? `<section class="filter-process"><div class="container">
      <div class="section-head"><div><span class="eyebrow light"><i></i> HOW IT WORKS</span><h2>نحوه عملکرد فیلتر کارتریج</h2></div><p>مسیر سیال از ورود تا فیلتراسیون و چرخه بک‌واش</p></div>
      ${p.flowImage ? `<figure class="overall-flow"><img src="${p.flowImage}" alt="شماتیک کامل مسیر جریان فیلتر کارتریج" loading="lazy"><figcaption>نمای کلی مسیر جریان، فیلتراسیون و بک‌واش</figcaption></figure>` : ""}
      <div class="process-steps">${p.process
        .map(
          (step) => `<article><div class="process-step-copy"><span>${step.number}</span><h3>${step.title}</h3><p>${step.text}</p></div><div class="process-step-image"><img src="${step.image}" alt="${step.title}" loading="lazy"></div></article>`,
        )
        .join("")}</div>
    </div></section>`
  : "";

document.querySelector("#product-page").innerHTML = `
  <section class="product-hero"><div class="container product-hero-grid">
    <div class="product-intro"><a href="products.html">محصولات / ${p.cat}</a><span>${p.en}</span><h1>${p.name}</h1><p>${p.summary}</p>
      <div class="product-actions"><a class="btn btn-primary" href="https://wa.me/982156417494?text=${whatsappText}">استعلام در واتساپ ←</a><a class="btn btn-outline" href="tel:+982156417494">تماس با فروش</a></div>
    </div>
    <div class="product-visual"><img src="${p.image}" alt="${p.name}"><i>BEHRIZ / ${p.cat}</i></div>
  </div></section>
  <section class="product-content"><div class="container product-content-grid">
    <div><span class="eyebrow burgundy"><i></i> کاربرد</span><h2>کاربرد دستگاه</h2><p>${p.application}</p><span class="eyebrow burgundy"><i></i> مزایا</span><h2>مزیت‌های محصول</h2><ul class="benefit-list">${p.benefits.map((x) => `<li>${x}</li>`).join("")}</ul></div>
    <aside><span>TECHNICAL DATA</span><h2>مشخصات فنی</h2><dl>${p.specs.map((x) => `<div><dt>${x[0]}</dt><dd>${x[1]}</dd></div>`).join("")}</dl><small>مشخصات نهایی براساس محصول، ظرفیت و شرایط خط تولید تعیین می‌شود.</small></aside>
  </div></section>
  ${gallerySection}
  ${processSection}
  <section class="related"><div class="container"><h2>محصولات مرتبط</h2><div class="related-grid">${related.map((x) => `<a href="${productUrl(x)}"><img src="${x.image}" alt="${x.name}" loading="lazy"><b>${x.name}</b><span>مشاهده ←</span></a>`).join("")}</div></div></section>`;
