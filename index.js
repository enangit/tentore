const header = document.querySelector("header");
const hamburgerMenu = document.querySelector("#hamburger-menu")

hamburgerMenu.addEventListener("click", function() {
    hamburgerMenu.classList.toggle("open")
})

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
})
