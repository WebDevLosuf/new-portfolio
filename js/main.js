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

const btns = document.querySelectorAll(".context-btn")
btns.forEach((button) => {
    button.addEventListener("click" , () => {
        button.closest(".skills-card").classList.add("active")
    })
})

const cards_cross = document.querySelectorAll(".skills-card__cross")
cards_cross.forEach((cross) => {
    cross.addEventListener("click" , () =>{
        cross.closest(".skills-card").classList.remove("active")
    })
})