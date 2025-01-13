document.addEventListener("DOMContentLoaded", ()=>{
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const submenuToggle = document.getElementById("submenu-toggle");
    const howItWorksSubmenu = document.getElementById("how-it-works-submenu");
    const submenuIcon = document.getElementById("submenu-icon");
    // Toggle Mobile Menu
    menuToggle.addEventListener("click", ()=>{
        mobileMenu.classList.toggle("hidden");
    });
    // Toggle Submenu for "How It Works"
    submenuToggle.addEventListener("click", ()=>{
        howItWorksSubmenu.classList.toggle("hidden");
        submenuIcon.classList.toggle("rotate-180"); // Rotate arrow icon
    });
});

//# sourceMappingURL=index.672d4772.js.map
