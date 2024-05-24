let menu = document.querySelector(".fa-bars");
let navber = document.querySelector(".navber");

menu.addEventListener("click", function(){
    menu.classList.toggle("fa-times");
    navber.classList.toggle("nav-toggle");
});

window.addEventListener("scroll", () => {
    menu.classList.remove("fa-times");
    navber.classList.remove("nav-toggle");
})