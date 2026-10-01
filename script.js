// Norvia Advisory — lead capture form + bilingual UI toggle
// Posts the lead to the n8n webhook that runs validation, anti-spam, dedup,
// AI qualification, routing and CRM logging.
const CONFIG = {
  WEBHOOK_URL: "https://n8n-n8n.3y2sfm.easypanel.host/webhook/norvia-lead-intake",
};

// ---------------------------------------------------------------------------
// Bilingual UI toggle. The page ships in English by default (see index.html).
// Switching to Spanish swaps every [data-i18n] element's content from this
// dictionary; switching back to English restores the original HTML, which is
// cached on first swap so the English copy only has to live in one place.
// ---------------------------------------------------------------------------
const ES = {
  "nav.services": "Servicios",
  "nav.process": "Cómo funciona",
  "nav.fit": "A quién atendemos",
  "nav.cta": "Solicitar una consulta",
  "hero.eyebrow": "Contabilidad, Impuestos y CFO Fraccionado",
  "hero.h1": "Claridad financiera para empresas <em>listas para escalar.</em>",
  "hero.sub": "Contabilidad, declaración de impuestos, nómina y asesoría a nivel de CFO para empresas en crecimiento, sin el costo de una contratación de tiempo completo. Nuestro equipo de asesoría atiende a clientes en inglés y español.",
  "hero.ctaPrimary": "Solicitar una consulta",
  "hero.ctaGhost": "Ver nuestros servicios",
  "hero.note": "Los precios se discuten únicamente después de comprender su situación financiera, nunca antes.",
  "ledger.head2": "Estado de Cuenta Mensual",
  "ledger.row1": "Contabilidad — conciliada",
  "ledger.row2": "Proyección de flujo de efectivo — actualizada",
  "ledger.row3": "Nómina e impuestos — al día",
  "ledger.row4": "Llamada de diagnóstico",
  "ledger.pending": "Programada",
  "ledger.foot1": "Bilingüe — EN / ES",
  "ledger.foot2": "Ingresos de $500K–$15M",
  "dash.chart": "Flujo de efectivo — 12 meses",
  "chip.a": "Libros cerrados",
  "chip.b": "Proyección lista",
  "stats.1": "Equipo de asesoría bilingüe",
  "stats.2": "Ingresos anuales en los que nos especializamos",
  "stats.3v": "1 día",
  "stats.3": "Tiempo de respuesta a cada solicitud",
  "stats.4": "Servicios financieros principales",
  "services.tag": "Qué hacemos",
  "services.h2": "Servicios financieros integrales para cada etapa de crecimiento.",
  "services.item1.title": "Contabilidad Mensual",
  "services.item1.body": "Categorización precisa, conciliación y estados financieros entregados en un calendario mensual constante.",
  "services.item2.title": "Actualización y Limpieza Contable",
  "services.item2.body": "Para empresas atrasadas en sus registros, reconstruimos y conciliamos datos históricos para poner al día su contabilidad.",
  "services.item3.title": "CFO Fraccionado",
  "services.item3.body": "Proyección de flujo de efectivo, análisis de márgenes y reportes listos para consejo directivo, a cargo de un asesor financiero senior.",
  "services.item4.title": "Configuración de Sistemas y Procesos",
  "services.item4.body": "Diseño de catálogo de cuentas, implementación de QuickBooks y Xero, e integración de sus sistemas de pago y nómina.",
  "services.item5.title": "Impuestos: Declaración y Planeación",
  "services.item5.body": "Declaraciones de impuestos de la empresa y sus dueños, pagos provisionales, impuestos sobre ventas y planeación fiscal todo el año, a cargo de asesores certificados (CPA/EA).",
  "services.item6.title": "Gestión de Nómina",
  "services.item6.body": "Cálculo y pago de nómina, declaraciones de impuestos de nómina, depósito directo, pagos a contratistas y formatos de cierre de año (W-2/1099), sincronizados con su contabilidad.",
  "process.tag": "Cómo funciona",
  "process.h2": "Un camino estructurado hacia la claridad financiera.",
  "process.step1.title": "Llamada de Diagnóstico",
  "process.step1.body": "Una evaluación inicial de su situación financiera actual y necesidades específicas, sin compromiso.",
  "process.step2.title": "Incorporación y Limpieza",
  "process.step2.body": "Conectamos sus cuentas y conciliamos registros pendientes antes de iniciar el ciclo mensual.",
  "process.step3.title": "Claridad Mensual",
  "process.step3.body": "Entrega de estados financieros conciliados y, para clientes de CFO Fraccionado, una revisión estratégica de flujo de efectivo y desempeño.",
  "fit.tag": "A quién atendemos",
  "fit.h2": "Diseñado para empresas que superaron la etapa de la hoja de cálculo.",
  "fit.item1": "Empresas de servicios, comercio electrónico y despachos profesionales con ingresos anuales aproximados de $500K–$15M.",
  "fit.item2": "Organizaciones que manejan su contabilidad internamente, o que han superado la capacidad de un contador de medio tiempo.",
  "fit.item3": "Equipos que buscan claridad financiera y visión estratégica, no solo captura de datos.",
  "fit.boundaryTag": "Alcance",
  "fit.boundaryTitle": "Lo que no ofrecemos",
  "fit.boundaryBody": "No ofrecemos asesoría legal, asesoría de inversión ni servicios de auditoría o dictamen. Las controversias fiscales que requieren representación legal se canalizan con un abogado fiscalista aliado. Estos límites se aclaran durante su consulta inicial.",
  "contact.tag": "Contacto",
  "contact.h2": "Cuéntenos sobre su empresa.",
  "contact.p1": "Llamada de diagnóstico sin compromiso",
  "contact.p2": "Respuesta en su idioma",
  "contact.p3": "Su información se mantiene privada",
  "contact.sub": "Un miembro de nuestro equipo de asesoría responderá dentro de un día hábil, en inglés o español según su preferencia.",
  "form.name": "Nombre completo *",
  "form.business": "Nombre de la empresa *",
  "form.email": "Correo electrónico *",
  "form.phone": "Teléfono (opcional)",
  "form.revenue": "Ingresos anuales aproximados",
  "form.revenue.opt0": "Prefiero no decir",
  "form.revenue.opt1": "Menos de $500K",
  "form.revenue.opt2": "$500K – $2M",
  "form.revenue.opt3": "$2M – $10M",
  "form.revenue.opt4": "$10M – $15M",
  "form.revenue.opt5": "Más de $15M",
  "form.service": "Servicio de interés",
  "form.service.opt0": "Aún no estoy seguro",
  "form.service.opt1": "Contabilidad Mensual",
  "form.service.opt2": "Actualización / Limpieza Contable",
  "form.service.opt3": "CFO Fraccionado",
  "form.service.opt4": "Configuración de Sistemas",
  "form.service.opt5": "Impuestos: Declaración y Planeación",
  "form.service.opt6": "Gestión de Nómina",
  "form.message": "Describa su situación contable actual *",
  "form.message.placeholder": "Puede responder en inglés o español.",
  "form.submit": "Solicitar una consulta",
  "form.disclaimer": "Al enviar este formulario, usted acepta ser contactado por nuestro equipo respecto a su consulta. Su información no será compartida con terceros.",
  "fab": "Chatea con Nora",
  "footer.line1": "© 2026 Norvia Advisory — marca modelo de un sistema de calificación de leads con IA.",
  "footer.line2": "Las solicitudes las procesa un sistema de IA en vivo; no se ofrecen servicios financieros.",
};

const TITLE_ES = "Norvia Advisory — Contabilidad, Impuestos y CFO Fraccionado";
const TITLE_EN = document.title;
const DESC_ES = "Contabilidad, declaración de impuestos, nómina y servicios de CFO Fraccionado para empresas en crecimiento. Equipo de asesoría bilingüe, atención en inglés y español.";
const DESC_EN = document.querySelector('meta[name="description"]').getAttribute("content");

const STRINGS = {
  en: {
    sending: "Sending…",
    submitLabel: "Request a Consultation",
    honeypotSuccess: "Thank you — we'll be in touch shortly.",
    missingFields: "Please complete your name, business, email, and a brief description.",
    invalidEmail: "That email address does not appear to be valid. Please verify it.",
    success: "Thank you. A member of our team will follow up shortly.",
    networkError: "We were unable to submit your request. Please try again shortly, or contact us directly.",
    demoOff: "Thanks! This page is a portfolio showcase and the live AI demo is paused to keep costs at zero. It's available on request: message me on Upwork and I'll switch it on so you can see your lead scored and answered in seconds.",
  },
  es: {
    sending: "Enviando…",
    submitLabel: "Solicitar una consulta",
    honeypotSuccess: "Gracias — nos pondremos en contacto en breve.",
    missingFields: "Por favor complete su nombre, empresa, correo electrónico y una breve descripción.",
    invalidEmail: "Ese correo electrónico no parece válido. Por favor verifíquelo.",
    success: "Gracias. Un miembro de nuestro equipo se pondrá en contacto en breve.",
    networkError: "No pudimos enviar su solicitud. Intente nuevamente en un momento, o contáctenos directamente.",
    demoOff: "¡Gracias! Esta página es una muestra de portafolio y la demo en vivo con IA está en pausa para no generar costos. Está disponible a solicitud: escríbeme por Upwork y la activo para que veas tu lead calificado y respondido en segundos.",
  },
};

let currentLang = "en";
const i18nCache = new WeakMap();

function applyLanguage(lang) {
  currentLang = lang === "es" ? "es" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (!i18nCache.has(el)) i18nCache.set(el, el.innerHTML);
    const key = el.getAttribute("data-i18n");
    el.innerHTML = currentLang === "es" && ES[key] ? ES[key] : i18nCache.get(el);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (!el.dataset.placeholderEn) el.dataset.placeholderEn = el.getAttribute("placeholder") || "";
    el.setAttribute("placeholder", currentLang === "es" && ES[key] ? ES[key] : el.dataset.placeholderEn);
  });

  document.title = currentLang === "es" ? TITLE_ES : TITLE_EN;
  document.querySelector('meta[name="description"]').setAttribute("content", currentLang === "es" ? DESC_ES : DESC_EN);
  document.documentElement.setAttribute("lang", currentLang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === currentLang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  try { localStorage.setItem("norvia_lang", currentLang); } catch (e) {}
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
});

(function initLanguage() {
  let saved = null;
  try { saved = localStorage.getItem("norvia_lang"); } catch (e) {}
  if (saved === "es" || saved === "en") applyLanguage(saved);
})();

// ---------------------------------------------------------------------------
// Scroll reveal. index.html adds the `js` class up front so content is only
// hidden when this script is actually running to reveal it.
// ---------------------------------------------------------------------------
(function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      io.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  items.forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 80 + "ms";
    // Anything already on screen at load is shown right away, without
    // waiting on the observer (which never fires in a background tab).
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add("is-visible");
      return;
    }
    io.observe(el);
  });
})();

// ---------------------------------------------------------------------------
// Lead form
// ---------------------------------------------------------------------------
const form = document.getElementById("lead-form");
const statusEl = form.querySelector(".form-status");
const submitBtn = form.querySelector(".btn-submit");
const btnLabel = submitBtn.querySelector(".btn-label");
const btnSpinner = submitBtn.querySelector(".btn-spinner");

function setLoading(isLoading) {
  submitBtn.disabled = isLoading;
  btnSpinner.hidden = !isLoading;
  btnLabel.textContent = isLoading ? STRINGS[currentLang].sending : STRINGS[currentLang].submitLabel;
}

function setStatus(message, kind) {
  statusEl.textContent = message;
  statusEl.classList.remove("is-success", "is-error");
  if (kind) statusEl.classList.add(kind);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  setStatus("", null);
  const t = STRINGS[currentLang];

  const data = Object.fromEntries(new FormData(form).entries());

  // Honeypot: real visitors never fill this hidden field. If it's filled,
  // pretend to succeed so a bot doesn't learn it was blocked, but never
  // actually submit.
  if (data.company_website) {
    setStatus(t.honeypotSuccess, "is-success");
    form.reset();
    return;
  }

  if (!data.name || !data.business || !data.email || !data.message) {
    setStatus(t.missingFields, "is-error");
    return;
  }
  if (!isValidEmail(data.email)) {
    setStatus(t.invalidEmail, "is-error");
    return;
  }

  const payload = {
    name: data.name.trim(),
    business: data.business.trim(),
    email: data.email.trim(),
    phone: (data.phone || "").trim(),
    revenue_range: data.revenue || "",
    service_interest: data.service || "",
    message: data.message.trim(),
    source: "landing_page",
    submitted_at: new Date().toISOString(),
  };

  setLoading(true);
  try {
    const res = await fetch(CONFIG.WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // 404 means the n8n workflow is switched off: the live demo runs on request.
    if (res.status === 404) { setStatus(t.demoOff, "is-info"); return; }
    if (!res.ok) throw new Error("Request failed with status " + res.status);

    setStatus(t.success, "is-success");
    form.reset();
  } catch (err) {
    // A switched-off webhook can also surface as a CORS/network failure.
    setStatus(t.demoOff, "is-info");
  } finally {
    setLoading(false);
  }
});
