const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const motionOK = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function syncHeader() {
  header.classList.toggle("is-scrolled", document.body.classList.contains("inner-page") || window.scrollY > 16);
}

syncHeader();

function syncPageMotion() {
  const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const progress = Math.min(1, Math.max(0, window.scrollY / scrollable));
  document.body.style.setProperty("--page-progress", `${progress * 100}%`);
  document.body.style.setProperty("--hero-image-shift", `${Math.min(40, window.scrollY * 0.18)}px`);
  document.body.style.setProperty("--hero-bg-shift", `${Math.min(28, window.scrollY * 0.12)}px`);
  syncHeader();
}

syncPageMotion();
window.addEventListener("scroll", syncPageMotion, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  header.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll("[data-tabs]").forEach((tabs) => {
  const buttons = tabs.querySelectorAll("[data-tab-button]");
  const panels = tabs.querySelectorAll("[data-tab-panel]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.tabButton;
      buttons.forEach((item) => item.classList.toggle("is-active", item === button));
      panels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.tabPanel === target));
    });
  });
});

const revealItems = document.querySelectorAll(
  ".section-heading, .service-card, .project-card, .blog-card, .timeline article, .skills-board > div, .story-copy, .process-figure, .interactive-model, .analysis-grid details, .detail-main, .detail-aside, .metric-card"
);

if (motionOK && "IntersectionObserver" in window) {
  revealItems.forEach((item) => item.classList.add("reveal-ready"));
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  revealItems.forEach((item) => revealObserver.observe(item));
}

document.querySelectorAll("[data-count]").forEach((counter) => {
  const target = Number(counter.dataset.count);
  const decimals = Number(counter.dataset.decimals || 0);
  const prefix = counter.dataset.prefix || "";
  const suffix = counter.dataset.suffix || "";
  const parent = counter.closest(".metric-card");
  let started = false;

  function render(value) {
    counter.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
    if (parent) {
      const meter = Math.min(100, Math.max(8, (value / Math.max(target, 1)) * 100));
      parent.style.setProperty("--meter", `${meter}%`);
    }
  }

  function runCounter() {
    if (started) return;
    started = true;
    if (!motionOK) {
      render(target);
      return;
    }
    const start = performance.now();
    const duration = 1100;
    function tick(now) {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      render(target * eased);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        runCounter();
        counterObserver.disconnect();
      }
    }, { threshold: 0.5 });
    counterObserver.observe(counter);
  } else {
    runCounter();
  }
});

document.querySelectorAll(".project-card, .blog-card, .service-card, .analysis-grid details, .metric-card").forEach((card) => {
  if (!motionOK) return;
  card.classList.add("tilt-ready");
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -8;
    card.style.setProperty("--tilt-x", `${x}deg`);
    card.style.setProperty("--tilt-y", `${y}deg`);
    card.classList.add("is-tilting");
  });
  card.addEventListener("pointerleave", () => {
    card.classList.remove("is-tilting");
    card.style.removeProperty("--tilt-x");
    card.style.removeProperty("--tilt-y");
  });
});

const sections = [...document.querySelectorAll("main section[id]")];
const sectionLinks = [...document.querySelectorAll(".site-nav a[href*='#']")];

if (sections.length && sectionLinks.length && "IntersectionObserver" in window) {
  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach((link) => {
        const hash = link.getAttribute("href").split("#")[1];
        link.classList.toggle("is-active", hash === entry.target.id);
      });
    });
  }, { threshold: 0.35 });
  sections.forEach((section) => activeObserver.observe(section));
}

const lightbox = document.querySelector("[data-lightbox-modal]");
const lightboxOpeners = document.querySelectorAll("[data-lightbox]");
const lightboxClose = document.querySelector("[data-lightbox-close]");

lightboxOpeners.forEach((opener) => {
  opener.addEventListener("click", () => {
    if (!lightbox) return;
    lightbox.hidden = false;
    document.body.classList.add("has-lightbox");
  });
});

lightboxClose?.addEventListener("click", () => {
  lightbox.hidden = true;
  document.body.classList.remove("has-lightbox");
});

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.hidden = true;
    document.body.classList.remove("has-lightbox");
  }
});

const canUseCosmicCursor = window.matchMedia("(pointer: fine) and (min-width: 761px)").matches;

if (canUseCosmicCursor) {
  const cursorGlow = document.createElement("div");
  cursorGlow.className = "cosmic-cursor-glow";
  cursorGlow.setAttribute("aria-hidden", "true");
  document.body.append(cursorGlow);
  document.body.classList.add("has-cosmic-cursor");

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.22;
    cursorY += (mouseY - cursorY) * 0.22;
    cursorGlow.style.transform = `translate3d(${cursorX - 190}px, ${cursorY - 190}px, 0)`;
    window.requestAnimationFrame(animateCursor);
  }

  window.addEventListener("pointermove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursorGlow.classList.add("is-visible");
  }, { passive: true });

  window.addEventListener("pointerleave", () => {
    cursorGlow.classList.remove("is-visible");
  });

  document.addEventListener("mouseover", (event) => {
    const interactive = Boolean(event.target.closest("a, button, summary, [role='button']"));
    cursorGlow.classList.toggle("is-hovering", interactive);
  });

  window.requestAnimationFrame(animateCursor);
}
