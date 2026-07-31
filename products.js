const root=document.querySelector('#all-products'),filters=document.querySelector('#filters');
const staticRoutes={
  'candle-filter':'candle-filter.html',
  'cartridge-filter':'cartridge-filter.html',
  'cold-water-deaerator':'cold-water-deaerator.html',
  'mono-pump':'mono-pump.html',
  'cip-system':'cip-system.html',
  'stainless-tanks':'stainless-steel-tanks.html',
  'kieselguhr-filter':'kieselguhr-filter.html',
  'spiral-pasteurizer':'spiral-pasteurizer.html',
  'homogenizer-mixer':'homogenizer-mixer.html'
};
const productUrl=p=>staticRoutes[p.id]||`product.html?id=${p.id}`;
const cats=['همه',...new Set(PRODUCTS.map(p=>p.cat))];
filters.innerHTML=cats.map((c,i)=>`<button class="${i===0?'active':''}" data-cat="${c}">${c}</button>`).join('');
function draw(cat='همه'){const list=cat==='همه'?PRODUCTS:PRODUCTS.filter(p=>p.cat===cat);root.innerHTML=list.map(p=>`<a class="catalog-card" href="${productUrl(p)}"><div class="catalog-image"><img src="${p.image}" alt="${p.name}" loading="lazy" decoding="async"><span>${p.cat}</span></div><div><small>${p.en}</small><h2>${p.name}</h2><p>${p.summary.slice(0,125)}…</p><b>مشاهده مشخصات کامل ←</b></div></a>`).join('')}
draw();filters.addEventListener('click',e=>{if(!e.target.matches('button'))return;filters.querySelectorAll('button').forEach(b=>b.classList.remove('active'));e.target.classList.add('active');draw(e.target.dataset.cat)});
