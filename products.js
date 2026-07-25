const root=document.querySelector('#all-products'),filters=document.querySelector('#filters');
const cats=['همه',...new Set(PRODUCTS.map(p=>p.cat))];
filters.innerHTML=cats.map((c,i)=>`<button class="${i===0?'active':''}" data-cat="${c}">${c}</button>`).join('');
function draw(cat='همه'){const list=cat==='همه'?PRODUCTS:PRODUCTS.filter(p=>p.cat===cat);root.innerHTML=list.map(p=>`<a class="catalog-card" href="product.html?id=${p.id}"><div class="catalog-image"><img src="${p.image}" alt="${p.name}"><span>${p.cat}</span></div><div><small>${p.en}</small><h2>${p.name}</h2><p>${p.summary.slice(0,125)}…</p><b>مشاهده مشخصات کامل ←</b></div></a>`).join('')}
draw();filters.addEventListener('click',e=>{if(!e.target.matches('button'))return;filters.querySelectorAll('button').forEach(b=>b.classList.remove('active'));e.target.classList.add('active');draw(e.target.dataset.cat)});
