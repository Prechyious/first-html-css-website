const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
let menuOpen = false;

menuBtn.addEventListener("click", function() {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        navLinks.classList.add("open");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        navLinks.classList.remove("open");
        menuOpen = false;
    }
});
