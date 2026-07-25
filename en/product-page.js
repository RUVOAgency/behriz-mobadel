const params = new URLSearchParams(location.search);
const id = params.get("product") || params.get("id") || "candle-filter";
const p = getProduct(id) || PRODUCTS[0];
document.title = `${p.name} | Technical Specifications | Behriz Mobadel`;
document.querySelector('meta[name="description"]').content = `${p.name} by Behriz Mobadel. Review technical specifications and request an engineering consultation.`;
const canonical = document.createElement("link");
canonical.rel = "canonical";
canonical.href = `https://www.behrizmobadel.com/en/product.html?product=${encodeURIComponent(p.id)}`;
document.head.appendChild(canonical);
const schema = document.createElement("script");
schema.type = "application/ld+json";
schema.textContent = JSON.stringify({"@context":"https://schema.org","@type":"Product",name:p.name,description:p.summary,image:`https://www.behrizmobadel.com/${p.image}`,brand:{"@type":"Brand",name:"Behriz Mobadel"},manufacturer:{"@type":"Organization",name:"Behriz Mobadel Industrial Manufacturing Co."}});
document.head.appendChild(schema);
const whatsappText = encodeURIComponent(`Hello, I would like a consultation and quotation for ${p.name}.`);
const related = PRODUCTS.filter((item) => item.cat === p.cat && item.id !== p.id).slice(0, 3);
const gallerySection = p.gallery ? `<section class="product-anatomy"><div class="container"><div class="section-head"><div><span class="eyebrow burgundy"><i></i> EQUIPMENT ANATOMY</span><h2>Engineered for Reliable Service and Cleaning</h2></div><p>Internal arrangement and hygienic connections</p></div><div class="anatomy-grid">${p.gallery.map((item) => `<article><div class="anatomy-image"><img src="${item.image}" alt="${item.title}" loading="lazy"></div><div><h3>${item.title}</h3><p>${item.text}</p></div></article>`).join("")}</div></div></section>` : "";
const processSection = p.process ? `<section class="filter-process"><div class="container"><div class="section-head"><div><span class="eyebrow light"><i></i> HOW IT WORKS</span><h2>Cartridge Filter Operating Sequence</h2></div><p>From fluid inlet and filtration to the backwash cycle</p></div>${p.flowImage ? `<figure class="overall-flow"><img src="${p.flowImage}" alt="Cartridge filter flow diagram" loading="lazy"><figcaption>Filtration and backwash flow overview</figcaption></figure>` : ""}<div class="process-steps">${p.process.map((step) => `<article><div class="process-step-copy"><span>${step.number}</span><h3>${step.title}</h3><p>${step.text}</p></div><div class="process-step-image"><img src="${step.image}" alt="${step.title}" loading="lazy"></div></article>`).join("")}</div></div></section>` : "";
document.querySelector("#product-page").innerHTML = `
  <section class="product-hero"><div class="container product-hero-grid">
    <div class="product-intro"><a href="en/products.html">Products / ${p.cat}</a><span>BEHRIZ PROCESS SYSTEMS</span><h1>${p.name}</h1><p>${p.summary}</p>
      <div class="product-actions"><a class="btn btn-primary" href="https://wa.me/982156417494?text=${whatsappText}">Request via WhatsApp →</a><a class="btn btn-outline" href="tel:+982156417494">Call Sales</a></div>
    </div><div class="product-visual"><img src="${p.image}" alt="${p.name}"><i>BEHRIZ / ${p.cat}</i></div>
  </div></section>
  <section class="product-content"><div class="container product-content-grid">
    <div><span class="eyebrow burgundy"><i></i> APPLICATION</span><h2>Process Application</h2><p>${p.application}</p><span class="eyebrow burgundy"><i></i> BENEFITS</span><h2>Key Advantages</h2><ul class="benefit-list">${p.benefits.map((x) => `<li>${x}</li>`).join("")}</ul></div>
    <aside><span>TECHNICAL DATA</span><h2>Specifications</h2><dl>${p.specs.map((x) => `<div><dt>${x[0]}</dt><dd>${x[1]}</dd></div>`).join("")}</dl><small>Final specifications are determined by the product, capacity, and operating conditions.</small></aside>
  </div></section>${gallerySection}${processSection}
  <section class="related"><div class="container"><h2>Related Products</h2><div class="related-grid">${related.map((x) => `<a href="en/product.html?id=${x.id}"><img src="${x.image}" alt="${x.name}"><b>${x.name}</b><span>View →</span></a>`).join("")}</div></div></section>`;
