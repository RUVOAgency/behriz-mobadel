const root = document.querySelector("#all-products");
const filters = document.querySelector("#filters");
const cats = ["All", ...new Set(PRODUCTS.map((p) => p.cat))];
filters.innerHTML = cats.map((c, i) => `<button class="${i === 0 ? "active" : ""}" data-cat="${c}">${c}</button>`).join("");
function draw(cat = "All") {
  const list = cat === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === cat);
  root.innerHTML = list.map((p) => `<a class="catalog-card" href="en/product.html?id=${p.id}"><div class="catalog-image"><img src="${p.image}" alt="${p.name}"><span>${p.cat}</span></div><div><small>${p.en}</small><h2>${p.name}</h2><p>${p.summary.slice(0, 150)}…</p><b>View Full Specifications →</b></div></a>`).join("");
}
draw();
filters.addEventListener("click", (event) => {
  if (!event.target.matches("button")) return;
  filters.querySelectorAll("button").forEach((button) => button.classList.remove("active"));
  event.target.classList.add("active");
  draw(event.target.dataset.cat);
});
