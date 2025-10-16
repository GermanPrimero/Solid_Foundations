let buttonDarkMode = document.getElementById("btn-dark-mode");


buttonDarkMode.addEventListener("click", function(){
    document.querySelector("nav").classList.toggle("nav-dark-mode");
    document.querySelector("body").classList.toggle("body-dark-mode");
    document.querySelectorAll(".card").forEach((card)=>{ card.classList.toggle("card-dark-mode")})
    document.querySelectorAll(".card h3").forEach((title)=>{ title.classList.toggle("card-title-dark-mode")})
    document.querySelectorAll(".card p").forEach((paragraph)=>{ paragraph.classList.toggle("card-paragraph-dark-mode")})
    document.querySelector("footer").classList.toggle("footer-dark-mode");
})
