(() => {
  const englishPath = location.pathname;
  const persianPath = englishPath.replace(/^\/en\//, "/");
  const persianUrl = `${persianPath}${location.search}${location.hash}`;
  const ltrStyles = document.createElement("link");
  ltrStyles.rel = "stylesheet";
  ltrStyles.href = "en/en.css";
  document.head.appendChild(ltrStyles);
  const translations = new Map(Object.entries({
    "راهکارها": "Solutions",
    "محصولات": "Products",
    "درباره ما": "About Us",
    "پروژه‌ها": "Projects",
    "توانمندی‌ها": "Capabilities",
    "دانش فنی": "Technical Knowledge",
    "تماس با ما": "Contact",
    "درخواست فنی": "Request a Consultation",
    "خانه": "Home",
    "مهندسی شفافیت": "Engineering Clarity",
    "در خط تولید": "Across Your Production Line",
    "طراحی و ساخت سیستم‌های فیلتراسیون و تجهیزات فرایندی برای صنایع غذایی و نوشیدنی؛ متناسب با محصول، ظرفیت و شرایط واقعی خط تولید شما.": "Filtration systems and process equipment engineered for food and beverage production—tailored to your product, capacity, and real operating conditions.",
    "شروع بررسی فنی": "Start a Technical Review",
    "مشاهده راهکارها": "Explore Solutions",
    "مهندسی سفارشی": "Custom Engineering",
    "ساخت ایران": "Made in Iran",
    "لیتر در ساعت": "litres per hour",
    "بیش از دو دهه": "Over Two Decades",
    "تجربه تخصصی": "Specialist Experience",
    "طراحی بهداشتی": "Hygienic Design",
    "برای صنایع غذایی": "For Food Processing",
    "ساخت سفارشی": "Custom-Built",
    "براساس ظرفیت خط": "For Your Line Capacity",
    "پشتیبانی فنی": "Technical Support",
    "از طراحی تا راه‌اندازی": "From Design to Commissioning",
    "از مسئله تا راهکار": "From Challenge to Solution",
    "مسیر فرایند را انتخاب کنید": "Choose Your Process Stage",
    "روی هر مرحله بزنید تا راهکار و تجهیزات مرتبط با آن را ببینید.": "Select a stage to explore the relevant solution and equipment.",
    "آماده‌سازی آب": "Water Preparation",
    "اختلاط و فرمولاسیون": "Mixing & Formulation",
    "دی‌اریشن": "Deaeration",
    "فیلتراسیون": "Filtration",
    "پاستوریزاسیون": "Pasteurisation",
    "مرحله ۰۴": "Stage 04",
    "راهکار فیلتراسیون": "Filtration Solution",
    "شفافیت پایدار، بدون توقف خط": "Consistent Clarity Without Line Stoppages",
    "کندل فیلترهای بهریز مبدل برای شفاف‌سازی نوشیدنی‌ها در ظرفیت‌های مختلف طراحی می‌شوند؛ با قابلیت اجرای دستی یا اتوماتیک و امکان شست‌وشوی CIP و Backwash.": "Behriz Mobadel candle filters clarify beverages across a wide capacity range, with manual or automatic operation and integrated CIP and backwash capability.",
    "متریال": "Material",
    "ظرفیت": "Capacity",
    "اجرا": "Operation",
    "دستی و اتوماتیک": "Manual & Automatic",
    "دریافت پیشنهاد فنی": "Request a Technical Proposal",
    "دریافت پیشنهاد فنی ←": "Request a Technical Proposal →",
    "راهکار آماده‌سازی آب": "Water Preparation Solution",
    "آب پایدار برای یک فرایند پایدار": "Reliable Water for a Reliable Process",
    "آماده‌سازی آب ورودی متناسب با کیفیت آب و نیاز خط، پایه عملکرد مطمئن تجهیزات پایین‌دست است.": "Preparing the incoming water for its actual quality and process requirements is the foundation of reliable downstream performance.",
    "هدف": "Objective",
    "طراحی": "Design",
    "متناسب با خط": "Line-Specific",
    "یکپارچگی": "Integration",
    "با تجهیزات موجود": "With Existing Equipment",
    "راهکار اختلاط": "Mixing Solution",
    "فرمولاسیون دقیق و تکرارپذیر": "Precise, Repeatable Formulation",
    "میکسرهای فرایندی، آزمایشگاهی و هموژنایزر برای دستیابی به اختلاط یکنواخت و کیفیت پایدار محصول.": "Process mixers, laboratory mixers, and homogenisers engineered for uniform blending and consistent product quality.",
    "کاربرد": "Application",
    "غذایی و نوشیدنی": "Food & Beverage",
    "راهکار دی‌اریشن آب سرد": "Cold-Water Deaeration Solution",
    "حذف اکسیژن محلول، حفظ کیفیت نوشیدنی": "Remove Dissolved Oxygen, Preserve Beverage Quality",
    "دی‌اریتور آب سرد بهریز مبدل با فرایند وکیوم، اکسیژن و گازهای محلول را از آب جدا می‌کند؛ راهکاری تمام‌اتوماتیک برای خطوط نوشابه، آبمیوه، ماءالشعیر و سایر نوشیدنی‌های گازدار.": "Behriz Mobadel cold-water deaerators use vacuum processing to remove oxygen and dissolved gases—providing a fully automatic solution for soft drinks, juices, malt beverages, and other carbonated products.",
    "کنترل": "Control",
    "تمام‌اتوماتیک": "Fully Automatic",
    "راهکار پاستوریزاسیون": "Pasteurisation Solution",
    "کنترل حرارتی در فضای کمتر": "Thermal Control in a Smaller Footprint",
    "تونل پاستوریزه اسپیرال برای فرایند حرارتی پیوسته با طراحی کم‌جا و قابلیت تطبیق با ظرفیت خط.": "A compact spiral tunnel pasteuriser for continuous thermal processing, engineered to match the production-line capacity.",
    "ساختار": "Configuration",
    "اسپیرال کم‌جا": "Compact Spiral",
    "از سال ۱۳۷۷": "Since 1998",
    "درباره بهریز مبدل": "About Behriz Mobadel",
    "بیش از دو دهه طراحی و ساخت تجهیزات فرایندی": "Over Two Decades of Process Equipment Engineering",
    "شرکت تولیدی صنعتی بهریز مبدل برای طراحی و ساخت تجهیزات و ماشین‌آلات خطوط تولید صنایع غذایی و نوشیدنی تأسیس شد و در ادامه، فعالیت تخصصی خود را در تولید مونوپمپ، فیلترهای صفحه‌ای و کندل فیلترهای مبتنی بر نمونه‌های معتبر اروپایی توسعه داد.": "Behriz Mobadel was founded to design and manufacture equipment for food and beverage production lines, later developing specialist expertise in progressing cavity pumps, plate filters, and candle filters inspired by established European systems.",
    "امروز این شرکت مجموعه‌ای کامل از تجهیزات فیلتراسیون، پمپاژ، اختلاط، دی‌اریشن، انتقال مواد، پاستوریزاسیون، مخازن و سیستم‌های شست‌وشو را متناسب با شرایط صنعت ایران طراحی و تولید می‌کند.": "Today, the company engineers a complete portfolio of filtration, pumping, mixing, deaeration, conveying, pasteurisation, tank, and cleaning systems for demanding industrial applications.",
    "داستان بهریز مبدل": "Our Story",
    "داستان بهریز مبدل ←": "Our Story →",
    "مشتریان بهریز مبدل": "Behriz Mobadel Clients",
    "اعتماد برندهای پیشرو صنعت ایران": "Trusted by Leading Industrial Brands",
    "تجهیزات و راهکارهای بهریز مبدل در خطوط تولید مجموعه‌های مطرح صنایع غذایی و نوشیدنی ایران به کار گرفته شده‌اند.": "Behriz Mobadel equipment and process solutions operate in leading food and beverage production facilities.",
    "محصولات منتخب": "Featured Equipment",
    "تجهیزات کلیدی برای خطوط فرایندی": "Core Equipment for Process Lines",
    "مشاهده همه محصولات": "View All Products",
    "مشاهده مشخصات": "View Specifications",
    "پروژه و تجربه اجرایی": "Projects & Delivery Experience",
    "مهندسی برای عملکرد واقعی": "Engineering for Real-World Performance",
    "توانمندی‌های مهندسی": "Engineering Capabilities",
    "طراحی، ساخت و پشتیبانی یکپارچه": "Integrated Design, Manufacturing & Support",
    "مرکز دانش": "Knowledge Centre",
    "دانش فنی برای تصمیم‌های بهتر": "Technical Insight for Better Decisions",
    "مطالعه مقاله": "Read Article",
    "شروع همکاری": "Start a Project",
    "برای پروژه بعدی آماده‌اید؟": "Ready for Your Next Project?",
    "مشخصات خط تولید را با تیم مهندسی ما در میان بگذارید.": "Share your process requirements with our engineering team.",
    "نام و نام خانوادگی": "Full name",
    "نوع محصول یا سیال": "Product or fluid",
    "ظرفیت خط": "Line capacity",
    "شماره تماس": "Phone number",
    "ارسال درخواست": "Send Request",
    "آدرس کارخانه": "Factory Address",
    "شهرک صنعتی پرند، میدان توسعه، بلوار گلستان شرقی، انتهای فروزان، خیابان گلبهار، پلاک ۷": "No. 7, Golbahar St., Forouzan, East Golestan Blvd., Tose'e Sq., Parand Industrial Estate, Tehran, Iran",
    "دسترسی سریع": "Quick Links",
    "تجهیزات فرایندی بهریز مبدل": "Behriz Mobadel Process Equipment",
    "مجموعه کامل راهکارهای فیلتراسیون، پمپاژ، اختلاط، انتقال، شست‌وشو و فرایند حرارتی برای صنایع غذایی و نوشیدنی.": "A complete portfolio of filtration, pumping, mixing, conveying, cleaning, and thermal process solutions for food and beverage production.",
    "بیش از دو دهه مهندسی برای صنعت": "Over Two Decades of Engineering for Industry",
    "طراحی و ساخت ماشین‌آلات خط تولید صنایع غذایی و آشامیدنی": "Design and manufacture of food and beverage production-line machinery",
    "درباره شرکت": "About the Company",
    "از ساخت تجهیزات خطوط نوشیدنی تا تخصص در فیلتراسیون": "From Beverage-Line Equipment to Filtration Expertise",
    "شرکت تولیدی صنعتی بهریز مبدل (سهامی خاص) با مدیریت بهمن باباخانی در سال ۱۳۷۷ برای طراحی و ساخت تجهیزات و ماشین‌آلات خط تولید شربت غلیظ، آبمیوه، ماءالشعیر، انواع نوشابه و لبنیات تأسیس گردید و در سال ۱۳۸۳ با نام جدید شرکت تولیدی صنعتی بهریز مبدل، علاوه بر زمینه فعالیت‌های قبلی، تولید مونوپمپ به سبک نمونه‌های اروپایی و همچنین تولید فیلترهای کیزلگور صفحه‌ای نمونه SCHENCK آلمان را آغاز کرد.": "Behriz Mobadel Industrial Manufacturing Co. was founded in 1998 under the management of Bahman Babakhani to design and manufacture equipment for syrup, juice, malt beverage, soft drink, and dairy production lines. In 2004, the company expanded into progressing cavity pumps and SCHENCK-style kieselguhr plate filters.",
    "در ادامه، طراحی و ساخت فیلترهای جدید و به‌روز اروپایی به‌صورت کندل فیلتر، نمونه فیلترهای KHS آلمان و شرکت FILTROX، برای فیلتراسیون ماءالشعیر و آبمیوه توسعه یافت. با حمایت و تشویق مدیران و فعالان صنعت، این پروژه‌ها به بهره‌برداری رسید و امکان تولید این نوع فیلترها در داخل کشور و بی‌نیازی از نمونه‌های خارجی فراهم شد.": "The company subsequently developed modern candle filtration systems based on established KHS and FILTROX concepts for malt beverage and juice applications. Successful industrial deployment established a reliable local manufacturing alternative to imported filtration equipment.",
    "این شرکت با همکاری یکی از شرکت‌های معتبر آلمانی، در ساخت دی‌اریتور آب سرد نمونه FAMIX نیز موفق بوده است. بهریز مبدل عضو انجمن صنفی کارفرمایی ماشین‌سازان صنایع غذایی ایران است؛ انجمنی که با هدف بهبود وضعیت اقتصادی و ارتقای توانمندی‌های صنعتگران و تولیدکنندگان این صنعت فعالیت می‌کند.": "Working with an established German engineering company, Behriz Mobadel also developed a FAMIX-style cold-water deaerator. The company is a member of Iran’s Food Industry Machinery Manufacturers Association.",
    "مهندسی برای صنعت": "Engineering for Industry",
    "تخصص محوری": "Focused Expertise",
    "جایگزینی واردات": "Local Manufacturing",
    "طراحی سفارشی": "Custom Design",
    "ساخت و پشتیبانی": "Manufacturing & Support",
    "تمرکز عمیق بر فیلتراسیون و تجهیزات فرایندی خطوط غذایی و نوشیدنی.": "Deep expertise in filtration and process equipment for food and beverage lines.",
    "ساخت داخلی تجهیزات مبتنی بر نمونه‌های معتبر اروپایی و متناسب با صنعت ایران.": "Locally manufactured equipment informed by proven European systems.",
    "طراحی هر تجهیز براساس محصول، ظرفیت و شرایط واقعی خط تولید.": "Every system is engineered around the product, capacity, and actual line conditions.",
    "همراهی از تحلیل نیاز و ساخت تا نصب، راه‌اندازی و خدمات فنی.": "Support from requirements analysis and manufacturing through installation, commissioning, and service.",
    "برای پروژه بعدی آماده‌اید؟": "Ready for Your Next Project?",
    "مشخصات خط تولید را با تیم مهندسی ما در میان بگذارید.": "Share your production requirements with our engineering team.",
    "شروع بررسی فنی": "Start a Technical Review",
    "همه": "All",
    "پمپ و انتقال": "Pumps & Transfer",
    "انتقال مواد": "Material Handling",
    "فرایند حرارتی": "Thermal Processing",
    "مخازن": "Tanks",
    "شست‌وشو": "Cleaning Systems",
    "میکسر": "Mixers",
    "دوزینگ": "Dosing",
    "تجهیزات جانبی": "Auxiliary Equipment",
    "مشاهده مشخصات کامل": "View Full Specifications",
    "سبد کامل تجهیزات": "Complete Equipment Portfolio",
    "محصولات بهریز مبدل": "Behriz Mobadel Equipment",
    "تجهیزات تخصصی خطوط غذایی و نوشیدنی، طراحی‌شده متناسب با ظرفیت و فرایند شما.": "Specialist food and beverage equipment engineered around your capacity and process.",
    "نمایش همه محصولات": "View All Products",
    "کندل فیلتر": "Candle Filter",
    "فیلتر کارتریج تک": "Single Cartridge Filter",
    "دی‌اریتور آب سرد": "Cold-Water Deaerator",
    "مونوپمپ": "Progressing Cavity Pump",
    "تونل پاستوریزه اسپیرال": "Spiral Tunnel Pasteuriser",
    "مخازن استنلس استیل": "Stainless-Steel Tanks",
    "سیستم CIP": "CIP System",
    "میکسر هموژنایزر": "Homogeniser Mixer",
    "مشاهده مشخصات فنی": "View Specifications",
    "مشاهده مشخصات فنی ←": "View Specifications →",
    "ظرفیت ۴٬۰۰۰ تا ۴۰٬۰۰۰ لیتر در ساعت": "Capacity: 4,000–40,000 litres per hour",
    "ظرفیت ۱۰٬۰۰۰ تا ۳۵٬۰۰۰ لیتر در ساعت": "Capacity: 10,000–35,000 litres per hour",
    "ظرفیت ۱۵٬۰۰۰ تا ۲۵٬۰۰۰ لیتر در ساعت": "Capacity: 15,000–25,000 litres per hour",
    "ظرفیت ۲٬۰۰۰ تا ۲۰٬۰۰۰ لیتر در ساعت": "Capacity: 2,000–20,000 litres per hour",
    "ظرفیت ۵۰ تا ۵۰٬۰۰۰ لیتر در ساعت": "Capacity: 50–50,000 litres per hour",
    "۴٬۰۰۰ تا ۴۰٬۰۰۰ L/H": "4,000–40,000 L/H",
    "انتقال سیالات غلیظ در سایزهای مختلف": "Transfer of viscous fluids across multiple sizes",
    "تک‌جداره، دوجداره و سه‌جداره": "Single-, double-, and triple-wall configurations",
    "قابل ساخت در مدل دستی و اتوماتیک": "Available in manual and automatic configurations",
    "مطالعه مقاله ←": "Read Article →",
    "ارسال برای بررسی فنی ←": "Submit for Technical Review →",
    "اختلاط": "Mixing",
    "سوابق اجرایی": "Project Experience",
    "تجربه اجرا در ایران": "Delivery Experience in Iran",
    "و بازارهای منطقه": "and Regional Markets",
    "سابقه طراحی، ساخت، نصب و راه‌اندازی تجهیزات فرایندی برای کارخانه‌های صنایع غذایی و آشامیدنی در ایران، افغانستان و عراق.": "Experience designing, manufacturing, installing, and commissioning process equipment for food and beverage plants in Iran, Afghanistan, and Iraq.",
    "پروژه مستند کندل فیلتر": "Documented Candle Filter Projects",
    "بیش از ۲۶ پروژه": "More Than 26 Projects",
    "دامنه خدمات": "Scope of Service",
    "طراحی تا راه‌اندازی": "Design to Commissioning",
    "مشاوره پروژه جدید": "Discuss a New Project",
    "اعتبار فنی": "Technical Credentials",
    "استانداردها و صلاحیت‌های تخصصی": "Standards & Specialist Qualifications",
    "کنترل کیفیت ساخت و آزمون‌های تخصصی، بخشی از فرایند تحویل تجهیزات بهریز مبدل است.": "Manufacturing quality control and specialist inspection form part of every Behriz Mobadel delivery.",
    "سیستم مدیریت کیفیت": "Quality Management System",
    "عضو انجمن ماشین‌سازان صنایع غذایی ایران": "Member of Iran’s Food Machinery Manufacturers Association",
    "صلاحیت آزمون‌های غیرمخرب سطح": "Surface Non-Destructive Testing Qualification",
    "صلاحیت آزمون‌های رادیوگرافی و فراصوت": "Radiographic & Ultrasonic Testing Qualification",
    "توان ساخت": "Manufacturing Capability",
    "مهندسی که به عملکرد می‌رسد": "Engineering That Delivers",
    "از تحلیل نیاز تا ساخت، کنترل کیفیت، نصب و پشتیبانی.": "From requirements analysis through manufacturing, quality control, installation, and support.",
    "نیازسنجی و تحلیل فرایند": "Requirements & Process Analysis",
    "بررسی محصول، ظرفیت، فضای نصب و هدف فرایندی": "Review of product, capacity, installation space, and process objective",
    "طراحی مهندسی": "Engineering Design",
    "انتخاب راهکار و طراحی متناسب با خط": "Solution selection and line-specific design",
    "ساخت و کنترل کیفیت": "Manufacturing & Quality Control",
    "ساخت استیل، مونتاژ و تست عملکرد": "Stainless fabrication, assembly, and performance testing",
    "نصب و راه‌اندازی": "Installation & Commissioning",
    "تحویل، آموزش و پشتیبانی فنی": "Handover, training, and technical support",
    "دانش فنی برای تصمیم بهتر": "Technical Knowledge for Better Decisions",
    "کندل فیلتر چیست و چگونه ظرفیت مناسب را انتخاب کنیم؟": "What Is a Candle Filter and How Should Capacity Be Selected?",
    "تفاوت استیل AISI 304L و 316L در صنایع غذایی": "AISI 304L vs 316L Stainless Steel in Food Processing",
    "نگهداری": "Maintenance",
    "اصول شست‌وشوی CIP و Backwash در سیستم فیلتراسیون": "CIP and Backwash Principles for Filtration Systems",
    "شروع یک پروژه": "Start a Project",
    "مشخصات خط تولیدتان را": "Share Your Production Requirements",
    "با مهندسان ما در میان بگذارید.": "with Our Engineering Team",
    "برای دریافت پیشنهاد اولیه، نوع محصول و ظرفیت خط را ثبت کنید.": "Provide the product and line capacity for an initial technical review.",
    "ارسال برای بررسی فنی": "Submit for Technical Review",
    "ارتباط با ما": "Contact Us",
    "واتساپ و مشاوره فنی": "WhatsApp & Technical Consultation",
    "تماس: ۸ تا ۱۶ | واتساپ: ۲۴ ساعته": "Calls: 08:00–16:00 | WhatsApp: 24/7",
    "طراحی و ساخت سیستم‌های فیلتراسیون و تجهیزات فرایندی صنایع غذایی و نوشیدنی از سال ۱۳۷۷": "Engineering and manufacturing filtration systems and process equipment for the food and beverage industry since 1998.",
    "۰۲۱ ۵۶۴۱ ۷۴۹۴": "+98 21 5641 7494",
    "در حال انتقال به واتساپ…": "Opening WhatsApp…",
    "محصول": "Product",
    "مشخصات فنی تجهیزات فرایندی و ماشین‌آلات صنایع غذایی ساخت بهریز مبدل.": "Technical specifications for Behriz Mobadel food and beverage process equipment.",
    "راهنمای انتخاب کندل فیلتر": "Candle Filter Selection Guide",
    "تفاوت استنلس استیل 304L و 316L": "Stainless Steel 304L vs 316L",
    "راهنمای CIP و Backwash": "CIP & Backwash Guide",
    "بازگشت به مرکز دانش": "Back to Knowledge Centre"
  }));

  const normaliseText = (value) => value.replace(/\s+/g, " ").trim();

  const replaceText = (root = document.body) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const raw = node.nodeValue;
      const key = normaliseText(raw);
      if (!key) return;
      const translated = translations.get(key);
      if (translated) node.nodeValue = raw.replace(raw.trim(), translated);
    });
  };

  document.documentElement.lang = "en";
  document.documentElement.dir = "ltr";
  document.body.classList.add("lang-en");
  replaceText();

  document.querySelectorAll("[alt],[aria-label],[placeholder]").forEach((el) => {
    ["alt", "aria-label", "placeholder"].forEach((attr) => {
      const value = el.getAttribute(attr);
      const key = value ? normaliseText(value) : "";
      if (key && translations.has(key)) el.setAttribute(attr, translations.get(key));
    });
  });

  const translationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const key = normaliseText(node.nodeValue || "");
          if (translations.has(key)) node.nodeValue = translations.get(key);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          replaceText(node);
        }
      });
    });
  });
  translationObserver.observe(document.body, { childList: true, subtree: true });

  document.querySelectorAll("a[href]").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href || href.startsWith("#") || /^(https?:|tel:|mailto:|javascript:)/.test(href)) return;
    if (/^(index|about|products|product|candle-filter-guide|stainless-steel-304l-vs-316l|cip-backwash-guide)\.html/.test(href)) {
      a.setAttribute("href", `en/${href}`);
    }
  });

  document.querySelectorAll(".lang").forEach((button) => {
    button.textContent = "FA";
    button.setAttribute("aria-label", "Persian version");
    button.addEventListener("click", () => { location.href = persianUrl; });
  });

  addEventListener("DOMContentLoaded", () => {
    const contact = document.querySelector(".floating-contact");
    if (contact) {
      contact.setAttribute("aria-label", "Quick contact options");
      const labels = contact.querySelectorAll("span");
      if (labels[0]) labels[0].textContent = "Call Us";
      if (labels[1]) labels[1].textContent = "WhatsApp";
      const whatsapp = contact.querySelector('[href*="wa.me"]');
      if (whatsapp) whatsapp.href = `https://wa.me/982156417494?text=${encodeURIComponent("Hello, I would like a technical consultation with Behriz Mobadel.")}`;
    }
    const actions = document.querySelector(".nav-actions");
    if (actions && !actions.querySelector(".language-switch") && !actions.querySelector(".lang")) {
      const link = document.createElement("a");
      link.className = "lang language-switch";
      link.href = persianUrl;
      link.textContent = "FA";
      link.setAttribute("aria-label", "Persian version");
      actions.prepend(link);
    }
  });
})();
