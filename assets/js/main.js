(function () {
  "use strict";

  // reveal on scroll
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("in"); });
  }

  // mobile nav toggle
  var navToggle = document.getElementById("nav-toggle");
  var mobileMenu = document.getElementById("mobile-menu");
  navToggle.addEventListener("click", function () {
    var isOpen = mobileMenu.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen);
  });
  function closeMenu() {
    mobileMenu.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
  mobileMenu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
      var focusInNav = mobileMenu.contains(document.activeElement) || document.activeElement === navToggle;
      closeMenu();
      if (focusInNav) navToggle.focus();
    }
  });

  // reveal the email address on click so scrapers never see it in the HTML
  var emailBtn = document.getElementById("reveal-email");
  if (emailBtn) {
    emailBtn.addEventListener("click", function () {
      var addr = atob(emailBtn.dataset.e);
      var link = document.createElement("a");
      link.href = "mailto:" + addr;
      link.innerHTML = emailBtn.innerHTML;
      link.querySelector(".v").textContent = addr;
      emailBtn.replaceWith(link);
      link.focus();
    });
  }

  // show confirmation after Formcarry redirects back with ?sent=true
  var sent = document.getElementById("cf-sent");
  if (/[?&]sent=true\b/.test(window.location.search)) {
    sent.textContent = "✓ Sent — I’ll be in touch soon.";
    var cleanUrl = window.location.pathname + window.location.hash;
    window.history.replaceState({}, document.title, cleanUrl);
  }
})();
