/* =========================
   JIMTOP — Main JS
   - Mobile menu toggle
   - Footer year
   - Service cards data + render
   ========================= */

(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const drawer = document.querySelector("[data-mobile-nav]");

  if (toggle && drawer) {
    toggle.addEventListener("click", () => {
      const isOpen = drawer.style.display === "block";
      drawer.style.display = isOpen ? "none" : "block";
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });

    // Close on link click
    drawer.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        drawer.style.display = "none";
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Service cards data
  const SERVICES = [
    {
      title: "Telecommunications",
      badge: "Infrastructure",
      desc:
        "Tower, mast and monopole projects delivered with safe installation, inspections, corrosion protection, and lifecycle maintenance.",
      href: "telecommunications.html",
      img: "images/telecom.png",
      imgAlt: "Telecommunications infrastructure",
    },
    {
      title: "Software & IT Solutions",
      badge: "Systems",
      desc:
        "Enterprise software, cloud solutions, web/mobile apps, and IT consultancy designed for performance, security, and scale.",
      href: "software-it.html",
      img: "images/software-it.png",
      imgAlt: "Enterprise software and IT systems",
    },
    {
      title: "Electronic Security",
      badge: "Protection",
      desc:
        "CCTV, access control, alarms and threat management with proper coverage planning, monitoring workflows and maintenance.",
      href: "electronic-security.html",
      img: "images/cybersecurity.png",
      imgAlt: "Electronic security systems and monitoring",
    },
    {
      title: "Electrical Engineering",
      badge: "Energy",
      desc:
        "Renewables, industrial/commercial installations, power equipment supply and electrical project execution built for uptime.",
      href: "electrical.html",
      img: "images/networking.png",
      imgAlt: "Electrical engineering and power infrastructure",
    },
    {
      title: "Mechanical Engineering",
      badge: "Facilities",
      desc:
        "HVAC, plant engineering, equipment installation and optimization — designed to reduce downtime and operating cost.",
      href: "mechanical.html",
      img: "images/team-site.png",
      imgAlt: "Mechanical engineering and facility systems",
    },
    {
      title: "Cybersecurity",
      badge: "Defense",
      desc:
        "Network security, endpoint protection, audits and incident response — structured controls that reduce risk and improve resilience.",
      href: "cybersecurity.html",
      img: "images/cybersecurity.png",
      imgAlt: "Cybersecurity and risk controls",
    },
    {
      title: "Digital Transformation",
      badge: "Modernize",
      desc:
        "Legacy modernization, cloud migration, digital platforms and BI integration to improve agility and decision-making.",
      href: "digital-transformation.html",
      img: "images/software-it.png",
      imgAlt: "Digital modernization and platforms",
    },
    {
      title: "Network & Connectivity",
      badge: "Connectivity",
      desc:
        "Fibre deployments, wireless, VoIP and data infrastructure designed for stable high-performance enterprise operations.",
      href: "networking.html",
      img: "images/networking.png",
      imgAlt: "Network and connectivity infrastructure",
    },
    {
      title: "Project Management",
      badge: "Execution",
      desc:
        "Planning, risk management, stakeholder coordination and reporting that keeps complex projects on time and within scope.",
      href: "project-management.html",
      img: "images/team-site.png",
      imgAlt: "Project management and delivery oversight",
    },
  ];

  function renderServiceGrid(targetId) {
    const grid = document.getElementById(targetId);
    if (!grid) return;

    grid.innerHTML = SERVICES.map(
      (s) => `
      <a class="service-card js-reveal" href="${s.href}">
        <img class="card-img" src="${s.img}" alt="${s.imgAlt}">
        <div class="service-top">
          <div class="badge">${s.badge}</div>
          <span class="mini">Learn More →</span>
        </div>
        <h3>${s.title}</h3>
        <p class="muted">${s.desc}</p>
      </a>
    `
    ).join("");
  }

  // Render grids on any page that has servicesGrid
  renderServiceGrid("servicesGrid");
})();
