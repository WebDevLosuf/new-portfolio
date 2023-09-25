document.querySelector("#burger").addEventListener("click" , () => {
    document.querySelector(".header__mobile-list-menu").classList.toggle("active")
    document.querySelector("body").classList.toggle("active")
    document.querySelector(".burger").classList.toggle("active")
} )
document.querySelectorAll(".header__mobile-list-menu .menu-link").forEach((link) => {
    link.addEventListener("click" , () => {
        document.querySelector(".header__mobile-list-menu").classList.remove("active")
        document.querySelector("body").classList.remove("active")
        document.querySelector(".burger").classList.remove("active")
    } )
} ) 
