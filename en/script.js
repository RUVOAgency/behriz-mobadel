const stages = {
  water: { kicker:"Water Preparation Solution", title:"Stable Water for a Stable Process", text:"Feed-water preparation is engineered around water quality and downstream process requirements.", image:"assets/tanks.jpg", meta:[["Objective","Water preparation"],["Design","Line-specific"],["Integration","Existing equipment"]] },
  mix: { kicker:"Mixing Solution", title:"Precise, Repeatable Formulation", text:"Process, laboratory, and homogenising mixers deliver uniform blending and consistent product quality.", image:"assets/tanks.jpg", meta:[["Material","304L / 316L"],["Capacity","50–50,000 L/h"],["Application","Food & beverage"]] },
  deaeration: { kicker:"Cold-Water Deaeration", title:"Remove Dissolved Oxygen. Protect Beverage Quality.", text:"Behriz Mobadel cold-water deaerators use vacuum processing to remove oxygen and dissolved gases for carbonated beverage, juice, and malt beverage lines.", image:"assets/deaerator-cold.jpg", meta:[["Capacity","15,000–25,000 L/h"],["Material","AISI 304L / 316L"],["Control","Fully automatic"]] },
  filter: { kicker:"Filtration Solution", title:"Consistent Clarity Without Line Stoppages", text:"Behriz Mobadel candle filters clarify beverages across a wide capacity range, with manual or automatic operation and integrated CIP and backwash capability.", image:"assets/candle-detail.jpg", meta:[["Material","AISI 304L / 316L"],["Capacity","4,000–40,000 L/h"],["Operation","Manual & automatic"]] },
  pasteur: { kicker:"Pasteurisation Solution", title:"Thermal Control in a Smaller Footprint", text:"Spiral tunnel pasteurisers provide continuous heat treatment in a compact layout configured for the required line capacity.", image:"assets/pasteurizer.jpg", meta:[["Material","AISI 304L"],["Capacity","2,000–20,000 L/h"],["Layout","Compact spiral"]] }
};
document.querySelectorAll(".process-nav button").forEach((button, index) => button.addEventListener("click", () => {
  document.querySelectorAll(".process-nav button").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  const stage = stages[button.dataset.stage];
  document.querySelector("#stage-image").src = stage.image;
  document.querySelector("#stage-kicker").textContent = stage.kicker;
  document.querySelector("#stage-title").textContent = stage.title;
  document.querySelector("#stage-text").textContent = stage.text;
  document.querySelector("#stage-number").textContent = `STAGE 0${index + 1}`;
  document.querySelector("#stage-meta").innerHTML = stage.meta.map((item) => `<span><b>${item[0]}</b>${item[1]}</span>`).join("");
}));
document.querySelector(".menu-btn")?.addEventListener("click", () => document.querySelector(".mobile-menu").classList.toggle("open"));
document.querySelectorAll(".mobile-menu a").forEach((a) => a.addEventListener("click", () => document.querySelector(".mobile-menu").classList.remove("open")));
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")), { threshold: .08 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
document.querySelector("#lead-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = [...event.target.querySelectorAll("input")].map((input) => input.value.trim());
  const message = `Hello, I would like an engineering consultation.\nProduct or fluid: ${fields[0]}\nLine capacity: ${fields[1]}\nPhone: ${fields[2]}`;
  document.querySelector("#form-status").textContent = "Opening WhatsApp…";
  window.open(`https://wa.me/982156417494?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});
const liquidCursor = document.querySelector(".liquid-cursor");
if (liquidCursor && matchMedia("(pointer:fine)").matches) {
  const placeCursor = (event) => { liquidCursor.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`; liquidCursor.classList.add("is-visible"); };
  addEventListener("pointermove", placeCursor, { passive:true });
  addEventListener("pointerleave", () => liquidCursor.classList.remove("is-visible"));
  addEventListener("pointerenter", placeCursor, { passive:true });
  document.querySelectorAll("a,button,.landing-product-card,.process-nav button").forEach((element) => {
    element.addEventListener("mouseenter", () => document.body.classList.add("cursor-focus"));
    element.addEventListener("mouseleave", () => document.body.classList.remove("cursor-focus"));
  });
}
