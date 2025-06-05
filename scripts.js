// Initialize AOS (Animate on Scroll)
AOS.init({
  duration: 1000,
  once: true
});

// Enable Bootstrap tooltips
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
  new bootstrap.Tooltip(el);
});

// Handle multi-level dropdowns
document.addEventListener("DOMContentLoaded", function () {
  // Toggle submenu on click
  document.querySelectorAll(".dropdown-submenu > a").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const submenu = this.nextElementSibling;
      submenu.classList.toggle("show");

      // Close other submenus in the same parent
      this.closest(".dropdown-menu")
        .querySelectorAll(".dropdown-menu")
        .forEach(function (otherSub) {
          if (otherSub !== submenu) {
            otherSub.classList.remove("show");
          }
        });
    });
  });

  // Prevent submenu click from closing entire dropdown
  document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
    menu.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });

  // Keep parent menu open if submenu is open on small screens
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("hide.bs.dropdown", function (e) {
      if (window.innerWidth <= 768) {
        const submenuOpen = dropdown.querySelector(".dropdown-menu .show");
        if (submenuOpen) e.preventDefault();
      }
    });
  });

  // Custom console log or additional global scripts
  console.log("Page loaded and scripts initialized");
});
// View More Script for Mentor Profile
    function toggleSkills() {
      document.querySelectorAll('.extra').forEach(el => el.classList.toggle('d-none'));
      const btn = document.getElementById('toggleSkillsBtn');
      btn.innerText = btn.innerText.includes('More') ? 'Show Less' : 'Show More';
    }
    function toggleAbout() {
      document.getElementById('aboutFull').classList.toggle('d-none');
      const btn = document.getElementById('readMoreBtn');
      btn.innerText = btn.innerText === 'Read More' ? 'Show Less' : 'Read More';
    }
// Tooltip for all mentor page
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach(t => new bootstrap.Tooltip(t));
 