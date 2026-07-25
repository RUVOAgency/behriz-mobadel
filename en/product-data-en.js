(() => {
  const categories = {
    "فیلتراسیون": "Filtration", "دی‌اریشن": "Deaeration", "پمپ و انتقال": "Pumps & Transfer",
    "انتقال مواد": "Material Handling", "فرایند حرارتی": "Thermal Processing", "مخازن": "Tanks",
    "شست‌وشو": "Cleaning Systems", "میکسر": "Mixers", "دوزینگ": "Dosing", "تجهیزات جانبی": "Auxiliary Equipment"
  };
  const specKeys = {
    "جنس": "Material", "جنس مخزن و فرمات": "Vessel & frame material", "جنس کندل": "Candle material",
    "جنس صفحات فیلتر": "Filter plate material", "جنس بدنه و اتصالات": "Body & connection material",
    "ضخامت بدنه و عدسی‌ها": "Body & head thickness", "ظرفیت": "Capacity", "اتوماسیون": "Automation",
    "دقت فیلتراسیون": "Filtration rating", "طول هوزینگ": "Housing length", "آرایش کارتریج": "Cartridge configuration",
    "توان": "Power", "فشار نمونه": "Operating pressure", "دمای فرایند نمونه": "Process temperature",
    "ورودی فشار آب": "Water inlet pressure", "فشار خروجی آب": "Water outlet pressure", "فشار هوای موردنیاز": "Required air pressure"
  };
  const digitMap = {"۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","٬":",","٫":"."};
  const latin = (value) => String(value).replace(/[۰-۹٬٫]/g, (x) => digitMap[x]);
  const applications = {
    Filtration: "Hygienic clarification and precision filtration of water, syrup, juice, malt beverages, and other food-process liquids.",
    Deaeration: "Removal of dissolved oxygen from water, syrup, and beverage streams to protect product quality and process stability.",
    "Pumps & Transfer": "Reliable transfer of process liquids across food and beverage production lines.",
    "Material Handling": "Controlled conveying of powders and bulk ingredients between processing stages.",
    "Thermal Processing": "Continuous, controlled heat treatment for packaged food and beverage products.",
    Tanks: "Hygienic storage, preparation, and process holding for food and beverage production.",
    "Cleaning Systems": "Repeatable cleaning of tanks, pipework, and process equipment with manual or automatic control.",
    Mixers: "Consistent mixing, formulation, and homogenisation for laboratory and industrial production.",
    Dosing: "Accurate, repeatable dosing of liquid ingredients and process chemicals.",
    "Auxiliary Equipment": "Supporting heat-transfer and process functions within hygienic production lines."
  };
  window.PRODUCTS = window.PRODUCTS.map((p) => {
    const cat = categories[p.cat] || p.cat;
    return {
      ...p,
      cat,
      name: p.en,
      summary: `${p.en} engineered by Behriz Mobadel for hygienic, reliable operation in food and beverage processing. Each unit is configured around the required product, line capacity, and operating conditions.`,
      application: applications[cat] || "Custom-engineered for food and beverage process applications.",
      specs: p.specs.map(([key, value]) => [specKeys[key] || key, latin(value)
        .replace(/لیتر در ساعت/g, "L/h").replace(/میلی‌متر/g, "mm").replace(/میکرون/g, "micron")
        .replace(/اینچ/g, "in").replace(/کیلووات/g, "kW").replace(/درجه سانتی‌گراد/g, "°C")
        .replace(/حداقل/g, "min.").replace(/حداکثر/g, "max.")]),
      benefits: [
        "Hygienic stainless-steel construction",
        "Engineered around the actual process duty",
        "Service-friendly industrial design",
        "Technical support from design through commissioning"
      ],
      gallery: p.gallery?.map((item, i) => ({...item, title: i ? "Industrial Sealing & Connections" : "Housing & Internal Arrangement", text: "Hygienic stainless-steel construction is configured for reliable operation, inspection, and cleaning."})),
      process: p.process?.map((step, i) => ({...step, title: ["Fluid Inlet & Pressure Monitoring","Flow Through the Cartridges","Filtered Fluid Outlet","Backwash, Cleaning & Drainage"][i], text: ["Fluid enters the housing and inlet pressure is monitored before filtration.","Flow is distributed across the filter media to capture suspended particles at the specified rating.","Filtered fluid is collected at the outlet while differential pressure indicates cartridge condition.","Water and compressed air remove retained solids through the dedicated drain path."][i]}))
    };
  });
})();
