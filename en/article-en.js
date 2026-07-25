(() => {
  const slug = location.pathname.split("/").pop();
  const articles = {
    "candle-filter-guide.html": {
      title: "What Is a Candle Filter and How Should Capacity Be Selected?",
      lead: "Candle-filter sizing is not simply a litres-per-hour decision. Fluid properties, solids loading, target clarity, cleaning cycle, and allowable downtime determine the real filtration area.",
      sections: [
        ["What is a candle filter?", "A candle filter is a closed pressure-filtration system that passes liquid through vertical filter elements. In clarification duties, a filter-aid precoat may be formed on the elements to retain fine suspended solids while keeping the process enclosed and cleanable."],
        ["How does the cycle work?", "A typical cycle includes precoat preparation where required, filtration under controlled differential pressure, product recovery, cake discharge, and CIP or backwash. End-of-cycle logic should be based on pressure drop, processed volume, time, and outlet quality."],
        ["Five sizing inputs", "Specify normal, minimum, and peak flow; fluid identity, temperature, and viscosity; solids loading; required outlet clarity; daily operating hours and permissible downtime. Two lines with the same nominal flow can require very different filtration areas."],
        ["Information required for a proposal", "Provide product composition, target flow, operating hours, inlet temperature and pressure, acceptable pressure drop, inlet and outlet quality, current cleaning method, automation level, and installation constraints."],
        ["Common procurement mistakes", "Avoid sizing from brochure flow alone, ignoring end-of-cycle flow decline, undersizing drain and product-recovery paths, selecting material without reviewing chlorides and CIP chemistry, or omitting instrumentation needed to identify cycle completion."]
      ]
    },
    "stainless-steel-304l-vs-316l.html": {
      title: "AISI 304L vs 316L Stainless Steel in Food Processing",
      lead: "316L is not automatically the best choice, and 304L is not always the most economical. The correct grade depends on the product, chlorides, temperature, cleaning regime, fabrication quality, and expected service life.",
      sections: [
        ["The practical difference", "The molybdenum content of 316L improves resistance to pitting and crevice corrosion, particularly in chloride-bearing environments. It does not make the alloy immune to corrosion."],
        ["When 316L is the stronger choice", "Consider 316L when process water or product contains meaningful chlorides, CIP conditions are more aggressive, downtime or contamination carries a high cost, or the equipment contains unavoidable crevices and hold-up points."],
        ["When 304L may be sufficient", "For many low-corrosion food products, suitable water, and controlled cleaning, 304L can be technically and economically appropriate—provided the equipment is drainable, hygienically designed, correctly welded, and properly finished."],
        ["Why fabrication quality matters", "Material certificates, weld procedures, back-purging, surface finish, pickling and passivation, gasket compatibility, and elimination of dead legs can be as important as alloy grade."],
        ["A better decision process", "Review real chemical analyses of product, water, and cleaning solutions; identify maximum temperature and contact time; assess welds, gaskets, crevices, and hold-up; then compare lifecycle cost rather than purchase price alone."]
      ]
    },
    "cip-backwash-guide.html": {
      title: "CIP and Backwash Principles for Industrial Filtration",
      lead: "Backwash removes deposited solids from the filter surface; CIP removes organic and mineral contamination from product-contact pathways. They are complementary procedures, not substitutes.",
      sections: [
        ["CIP vs backwash", "Backwash reverses water flow—and in some designs uses compressed air—to release filter cake and particles. CIP circulates a validated cleaning solution under controlled time, temperature, concentration, and flow conditions."],
        ["Four cleaning variables", "Effective cleaning depends on contact time, temperature, chemical concentration, and mechanical action. Every programme must also be checked against gasket, filter-media, metallurgy, chemical-supplier, and site-safety requirements."],
        ["Typical sequence", "End filtration safely, isolate the equipment, recover product where possible, discharge solids, backwash within element limits, pre-rinse, circulate the validated cleaning solution, intermediate rinse, apply acid or sanitising steps where required, final-rinse, verify, drain, and return to production."],
        ["How to verify completion", "Clear-looking rinse water is not enough. Verification may include conductivity, pH, temperature, time, return flow, visual inspection, and the plant’s approved hygiene tests. Trending these parameters helps reveal gradual performance loss."],
        ["Warning signs and common errors", "Shorter intervals between cleans, pressure drop not returning to baseline, rising water or chemical use, residual odour or colour, and unstable first product are warning signs. Common design errors include dead legs, incompatible gaskets, excessive air pressure, and missing interlocks."]
      ]
    }
  };
  const article = articles[slug];
  if (!article) return;
  document.title = `${article.title} | Behriz Mobadel`;
  const main = document.querySelector("main");
  main.innerHTML = `<article class="article"><div class="container"><header class="article-hero"><span>BEHRIZ KNOWLEDGE CENTRE</span><h1>${article.title}</h1><p>${article.lead}</p><div class="article-meta">Behriz Mobadel Engineering Department · 8 min read</div></header><div class="article-layout"><aside><b>IN THIS GUIDE</b>${article.sections.map((s, i) => `<a href="#section-${i + 1}">${s[0]}</a>`).join("")}</aside><div class="article-body">${article.sections.map((s, i) => `<section id="section-${i + 1}"><h2>${s[0]}</h2><p>${s[1]}</p></section>`).join("")}<div class="article-cta"><h2>Need an engineering review?</h2><p>Send us your product, flow rate, operating conditions, and cleaning requirements for an initial technical assessment.</p><a class="btn btn-primary" href="en/index.html#contact">Request a Technical Review</a></div></div></div></div></article>`;
})();
