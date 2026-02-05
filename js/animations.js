/* =========================
   JIMTOP - Animations
   - GSAP + ScrollTrigger reveals
   - Hover micro interactions
   - Reduced-motion safe
   ========================= */

(function () {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Always load main.js behavior if present
  // (Pages already include animations.js; include main.js too in your HTML)
  // If you forgot main.js in the HTML, add:
  // <script src="js/main.js"></script>

  if (prefersReduced) {
    document.querySelectorAll(".js-reveal").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }

  if (!window.gsap) return;

  gsap.registerPlugin(ScrollTrigger);

  // HERO PARALLAX (panel + FX)
  if (window.ScrollTrigger) {
    const hero = document.querySelector(".hero");
    const heroPanel = document.querySelector(".js-hero-panel");
    const streaks = document.querySelector(".fx-streaks");
    const nodes = document.querySelector(".fx-nodes");

    if (hero) {
      if (heroPanel) {
        gsap.to(heroPanel, {
          y: 12,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (streaks) {
        gsap.to(streaks, {
          y: -18,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (nodes) {
        gsap.to(nodes, {
          y: -10,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }
  }

  // Global reveal
  const items = document.querySelectorAll(".js-reveal, .service-card, .cap-card, .bullet, .stat-card, .logo-pill");
  items.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 14, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );
  });

  // Hero micro animation
  const hero = document.querySelector(".hero");
  if (hero) {
    const heroItems = hero.querySelectorAll("h1, .subhead, .kicker, .hero-actions, .trust-strip");
    gsap.from(heroItems, {
      opacity: 0,
      y: 18,
      duration: 0.7,
      stagger: 0.12,
      ease: "power2.out",
    });
  }

  const pageHero = document.querySelector(".page-hero");
  if (pageHero) {
    gsap.fromTo(
      pageHero.querySelectorAll(".breadcrumbs, .page-title, .page-subhead, .hero-actions, .trust-strip"),
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out" }
    );
  }

  // Fancy hover tilt (subtle)
  document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;

      gsap.to(card, {
        rotateY: x * 5,
        rotateX: -y * 5,
        transformPerspective: 900,
        transformOrigin: "center",
        duration: 0.25,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.35,
        ease: "power2.out",
      });
    });
  });
})();
