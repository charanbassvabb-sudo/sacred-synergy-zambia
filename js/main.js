/* Sacred Synergy Zambia — site interactions (vanilla JS, no dependencies) */
(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.querySelector(".main-nav");
  var navScrim = document.querySelector(".nav-scrim");

  /* ---- Header scroll state ---- */
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 24) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile nav toggle ---- */
  if (navToggle && mainNav) {
    var closeNav = function () {
      mainNav.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      if (navScrim) navScrim.classList.remove("is-open");
      document.body.style.overflow = "";
    };
    navToggle.addEventListener("click", function () {
      var open = mainNav.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (navScrim) navScrim.classList.toggle("is-open", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });
    if (navScrim) navScrim.addEventListener("click", closeNav);
  }

  /* ---- Scroll reveal via IntersectionObserver ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- Active nav link highlighting (in-page sections) ---- */
  var sections = document.querySelectorAll("main [id]");
  var navLinks = document.querySelectorAll(".main-nav a[href*='#']");
  if ("IntersectionObserver" in window && sections.length && navLinks.length) {
    var navIO = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var id = entry.target.getAttribute("id");
          var link = document.querySelector(".main-nav a[href$='#" + id + "']");
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach(function (l) { l.classList.remove("active"); });
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(function (s) { navIO.observe(s); });
  }

  /* ---- Sticky service sub-nav active state ---- */
  var serviceNavLinks = document.querySelectorAll(".service-nav a");
  var serviceSections = document.querySelectorAll(".service-detail[id]");
  if ("IntersectionObserver" in window && serviceNavLinks.length) {
    var sIO = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var id = entry.target.getAttribute("id");
          var link = document.querySelector(".service-nav a[href='#" + id + "']");
          if (!link) return;
          if (entry.isIntersecting) {
            serviceNavLinks.forEach(function (l) { l.classList.remove("active"); });
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-30% 0px -55% 0px" }
    );
    serviceSections.forEach(function (s) { sIO.observe(s); });
  }

  /* ---- Contact form (Netlify Forms — progressive enhancement) ---- */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      })
        .then(function () {
          form.hidden = true;
          var success = document.getElementById("form-success");
          if (success) success.classList.add("is-visible");
        })
        .catch(function () {
          form.submit();
        });
    });
  }

  /* ---- Current year in footer ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
