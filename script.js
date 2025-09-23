/* script.js — interações: menu mobile, preloader, form simulado, links com smooth scroll */

document.addEventListener("DOMContentLoaded", function () {
  // Preloader hide
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => preloader.style.display = "none", 350); // pequeno atraso para suavidade
  }

  // Mobile menu toggle
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const expanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!expanded));
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;
      if (href.startsWith("#")) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
          // close mobile menu if open
          if (mobileMenu && !mobileMenu.classList.contains("hidden")) mobileMenu.classList.add("hidden");
        }
      }
    });
  });

  // Contact form (simulated submission)
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // simple validation already handled by required attributes
      // Simulate sending:
      const btn = form.querySelector("button[type='submit']");
      const originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Enviando...";
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = originalText;
        if (feedback) {
          feedback.classList.remove("hidden");
          setTimeout(() => feedback.classList.add("hidden"), 3500);
        }
        form.reset();
      }, 900);
    });
  }

});
