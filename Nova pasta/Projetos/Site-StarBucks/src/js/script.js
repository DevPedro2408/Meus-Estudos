const btnMobile = document.querySelector(".bnt-mobile")
const icon = document.querySelector(".bnt-mobile i")
const navLinks = document.querySelector(".nav-links")
const btnDefault =document.querySelector(".btn-default")

btnMobile.addEventListener("click", () => {
    navLinks.classList.toggle("show")
    icon.classList.toggle("fa-bars") // Assim ele tira o Menu Hamburguer
    icon.classList.toggle("fa-times") // Assim coloca o X no lugar do menu hamburguer.
    
})