document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  // Toggle Mobile Menu
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("-translate-x-full");
    mobileMenu.classList.toggle("translate-x-0");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const submenuToggle = document.getElementById("submenu-toggle");
  const submenu = document.getElementById("how-it-works-submenu");
  const submenuIcon = document.getElementById("submenu-icon");

  // Toggle Submenu
  submenuToggle.addEventListener("click", () => {
    submenu.classList.toggle("hidden");
    submenuIcon.classList.toggle("rotate-180");
  });
});