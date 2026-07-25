const stages = {
  water: {
    kicker: "راهکار آماده‌سازی آب",
    title: "آب پایدار برای یک فرایند پایدار",
    text: "آماده‌سازی آب ورودی متناسب با کیفیت آب و نیاز خط، پایه عملکرد مطمئن تجهیزات پایین‌دست است.",
    image: "assets/tanks.jpg",
    meta: [
      ["هدف", "آماده‌سازی آب"],
      ["طراحی", "متناسب با خط"],
      ["یکپارچگی", "با تجهیزات موجود"],
    ],
  },
  mix: {
    kicker: "راهکار اختلاط",
    title: "فرمولاسیون دقیق و تکرارپذیر",
    text: "میکسرهای فرایندی، آزمایشگاهی و هموژنایزر برای دستیابی به اختلاط یکنواخت و کیفیت پایدار محصول.",
    image: "assets/tanks.jpg",
    meta: [
      ["متریال", "304L / 316L"],
      ["ظرفیت", "۵۰ تا ۵۰٬۰۰۰ L/H"],
      ["کاربرد", "غذایی و نوشیدنی"],
    ],
  },
  deaeration: {
    kicker: "راهکار دی‌اریشن آب سرد",
    title: "حذف اکسیژن محلول، حفظ کیفیت نوشیدنی",
    text: "دی‌اریتور آب سرد بهریز مبدل با فرایند وکیوم، اکسیژن و گازهای محلول را از آب جدا می‌کند؛ راهکاری تمام‌اتوماتیک برای خطوط نوشابه، آبمیوه، ماءالشعیر و سایر نوشیدنی‌های گازدار.",
    image: "assets/deaerator-cold.jpg",
    meta: [
      ["ظرفیت", "۱۵٬۰۰۰ تا ۲۵٬۰۰۰ L/H"],
      ["متریال", "AISI 304L / 316L"],
      ["کنترل", "تمام‌اتوماتیک"],
    ],
  },
  filter: {
    kicker: "راهکار فیلتراسیون",
    title: "شفافیت پایدار، بدون توقف خط",
    text: "کندل فیلترهای بهریز مبدل برای شفاف‌سازی نوشیدنی‌ها در ظرفیت‌های مختلف طراحی می‌شوند؛ با قابلیت اجرای دستی یا اتوماتیک و امکان شست‌وشوی CIP و Backwash.",
    image: "assets/candle-detail.jpg",
    meta: [
      ["متریال", "AISI 304L / 316L"],
      ["ظرفیت", "۴٬۰۰۰ تا ۴۰٬۰۰۰ L/H"],
      ["اجرا", "دستی و اتوماتیک"],
    ],
  },
  pasteur: {
    kicker: "راهکار پاستوریزاسیون",
    title: "کنترل حرارتی در فضای کمتر",
    text: "تونل پاستوریزه اسپیرال برای فرایند حرارتی پیوسته با طراحی کم‌جا و قابلیت تطبیق با ظرفیت خط.",
    image: "assets/pasteurizer.jpg",
    meta: [
      ["متریال", "AISI 304L"],
      ["ظرفیت", "۲٬۰۰۰ تا ۲۰٬۰۰۰ L/H"],
      ["ساختار", "اسپیرال کم‌جا"],
    ],
  },
};
document.querySelectorAll(".process-nav button").forEach((button, i) =>
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".process-nav button")
      .forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    const s = stages[button.dataset.stage];
    document.querySelector("#stage-image").src = s.image;
    document.querySelector("#stage-kicker").textContent = s.kicker;
    document.querySelector("#stage-title").textContent = s.title;
    document.querySelector("#stage-text").textContent = s.text;
    document.querySelector("#stage-number").textContent = `مرحله ۰${i + 1}`;
    document.querySelector("#stage-meta").innerHTML = s.meta
      .map((x) => `<span><b>${x[0]}</b>${x[1]}</span>`)
      .join("");
  }),
);
document
  .querySelector(".menu-btn")
  .addEventListener("click", () =>
    document.querySelector(".mobile-menu").classList.toggle("open"),
  );
document
  .querySelectorAll(".mobile-menu a")
  .forEach((a) =>
    a.addEventListener("click", () =>
      document.querySelector(".mobile-menu").classList.remove("open"),
    ),
  );
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    }),
  { threshold: 0.08 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
document.querySelector("#lead-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const fields = [...e.target.querySelectorAll("input")].map((input) =>
    input.value.trim(),
  );
  const message = `سلام، برای بررسی فنی پروژه درخواست مشاوره دارم.\nنوع محصول یا سیال: ${fields[0]}\nظرفیت خط: ${fields[1]}\nشماره تماس: ${fields[2]}`;
  document.querySelector("#form-status").textContent = "در حال انتقال به واتساپ…";
  window.open(
    `https://wa.me/982156417494?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener",
  );
});
const liquidCursor = document.querySelector(".liquid-cursor");
if (liquidCursor && matchMedia("(pointer:fine)").matches) {
  let tx = innerWidth / 2,
    ty = innerHeight / 2,
    x = tx,
    y = ty;
  addEventListener("mousemove", (e) => {
    tx = e.clientX;
    ty = e.clientY;
  });
  const move = () => {
    x += (tx - x) * 0.14;
    y += (ty - y) * 0.14;
    liquidCursor.style.transform = `translate3d(${x}px,${y}px,0)`;
    requestAnimationFrame(move);
  };
  move();
  document
    .querySelectorAll("a,button,.landing-product-card,.process-nav button")
    .forEach((el) => {
      el.addEventListener("mouseenter", () =>
        document.body.classList.add("cursor-focus"),
      );
      el.addEventListener("mouseleave", () =>
        document.body.classList.remove("cursor-focus"),
      );
    });
  document
    .querySelectorAll(
      ".landing-product-card,.catalog-card,.article-grid article",
    )
    .forEach((card) =>
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${e.clientX - r.left}px`);
        card.style.setProperty("--mouse-y", `${e.clientY - r.top}px`);
      }),
    );
}
const clientMarquee = document.querySelector(".marquee-track");
if (clientMarquee) {
  let marqueeOffset = 0,
    lastMarqueeFrame = performance.now();
  const marqueeGap = 18,
    marqueeSpeed = 42;
  const runClientMarquee = (now) => {
    const elapsed = Math.min((now - lastMarqueeFrame) / 1000, 0.1);
    lastMarqueeFrame = now;
    marqueeOffset -= marqueeSpeed * elapsed;
    let firstLogo = clientMarquee.firstElementChild;
    while (firstLogo && -marqueeOffset >= firstLogo.offsetWidth + marqueeGap) {
      marqueeOffset += firstLogo.offsetWidth + marqueeGap;
      clientMarquee.appendChild(firstLogo);
      firstLogo = clientMarquee.firstElementChild;
    }
    clientMarquee.style.transform = `translate3d(${marqueeOffset}px,0,0)`;
    requestAnimationFrame(runClientMarquee);
  };
  requestAnimationFrame(runClientMarquee);
}
