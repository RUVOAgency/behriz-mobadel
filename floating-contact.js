(() => {
  if (document.querySelector(".floating-contact")) return;

  const style = document.createElement("style");
  style.textContent = `
    .floating-contact{position:fixed;left:max(18px,env(safe-area-inset-left));bottom:max(22px,env(safe-area-inset-bottom));z-index:9998;display:flex;flex-direction:column;gap:10px;direction:rtl;font-family:inherit}
    .floating-contact__button{min-height:52px;display:flex;align-items:center;gap:10px;padding:0 16px;border-radius:16px;color:#fff!important;text-decoration:none!important;font-size:14px;font-weight:800;line-height:1;box-shadow:0 10px 30px rgba(6,24,44,.22);border:1px solid rgba(255,255,255,.2);transition:transform .2s ease,box-shadow .2s ease,filter .2s ease}
    .floating-contact__button svg{width:23px;height:23px;flex:none;fill:currentColor}
    .floating-contact__button--call{background:#0b2744}
    .floating-contact__button--whatsapp{background:#168f58}
    .floating-contact__button:hover{transform:translateY(-2px);box-shadow:0 14px 34px rgba(6,24,44,.28);filter:brightness(1.06)}
    .floating-contact__button:focus-visible{outline:3px solid #fff;outline-offset:3px}
    @media(max-width:640px){
      .floating-contact{left:max(12px,env(safe-area-inset-left));right:max(12px,env(safe-area-inset-right));bottom:max(12px,env(safe-area-inset-bottom));flex-direction:row;gap:8px}
      .floating-contact__button{flex:1;justify-content:center;min-height:50px;padding:0 10px;border-radius:14px;font-size:13px}
      .floating-contact__button svg{width:21px;height:21px}
    }
    @media(prefers-reduced-motion:reduce){.floating-contact__button{transition:none}}
  `;
  document.head.appendChild(style);

  const message = encodeURIComponent("سلام، برای دریافت مشاوره فنی با بهریز مبدل در ارتباط هستم.");
  const container = document.createElement("div");
  container.className = "floating-contact";
  container.setAttribute("aria-label", "راه‌های ارتباط سریع");
  container.innerHTML = `
    <a class="floating-contact__button floating-contact__button--call" href="tel:+982156417494" aria-label="تماس مستقیم با بهریز مبدل">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79a15.46 15.46 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/></svg>
      <span>تماس مستقیم</span>
    </a>
    <a class="floating-contact__button floating-contact__button--whatsapp" href="https://wa.me/982156417494?text=${message}" target="_blank" rel="noopener" aria-label="گفتگو با بهریز مبدل در واتس‌اپ">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2a9.84 9.84 0 00-8.47 14.84L2 22l5.29-1.53A9.9 9.9 0 1012.04 2zm0 17.82a7.98 7.98 0 01-4.07-1.11l-.29-.17-3.14.91.94-3.06-.19-.31a7.98 7.98 0 116.75 3.74zm4.38-5.98c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"/></svg>
      <span>واتس‌اپ</span>
    </a>
  `;
  document.body.appendChild(container);
})();

/* Tawk.to live support — loaded once across every page using this shared script. */
(() => {
  if (window.__behrizTawkLoaded) return;
  window.__behrizTawkLoaded = true;

  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();

  const script = document.createElement("script");
  const firstScript = document.getElementsByTagName("script")[0];
  script.async = true;
  script.src = "https://embed.tawk.to/6a650b89c02a651d48da9e41/1judba51a";
  script.charset = "UTF-8";
  script.setAttribute("crossorigin", "*");
  firstScript.parentNode.insertBefore(script, firstScript);
})();


/* GA4 lead-intent tracking — shared across pages that load this script. */
(() => {
  if (window.__behrizLeadTrackingLoaded) return;
  window.__behrizLeadTrackingLoaded = true;

  const sendEvent = (name, params = {}) => {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", name, {
      ...params,
      page_location: window.location.href,
      page_title: document.title
    });
  };

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link) return;
    const href = link.getAttribute("href") || "";

    if (href.startsWith("tel:")) {
      sendEvent("generate_lead", {
        lead_type: "phone_call",
        link_url: link.href,
        link_text: (link.textContent || "").trim().slice(0, 100)
      });
    } else if (/wa\.me|whatsapp\.com/i.test(href)) {
      sendEvent("generate_lead", {
        lead_type: "whatsapp",
        link_url: link.href,
        link_text: (link.textContent || "").trim().slice(0, 100)
      });
    } else if (href.startsWith("mailto:")) {
      sendEvent("generate_lead", {
        lead_type: "email",
        link_url: link.href,
        link_text: (link.textContent || "").trim().slice(0, 100)
      });
    }
  });

  document.addEventListener("submit", (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;
    sendEvent("generate_lead", {
      lead_type: "form_submit",
      form_id: form.id || undefined,
      form_name: form.getAttribute("name") || undefined
    });
  });

  window.Tawk_API = window.Tawk_API || {};
  const previousChatStarted = window.Tawk_API.onChatStarted;
  window.Tawk_API.onChatStarted = function () {
    sendEvent("generate_lead", { lead_type: "live_chat" });
    if (typeof previousChatStarted === "function") {
      previousChatStarted.apply(this, arguments);
    }
  };
})();
