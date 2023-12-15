const inputs  = document.querySelectorAll(".focus-status");
inputs.forEach((formInput)=>{
    formInput.addEventListener("focus" , () => {
        formInput.closest(".form__item")
        .querySelector(".form__fake-placeholder")
        .classList.add("active")
    })
})  
    
inputs.forEach((formInput)=>{
    formInput.addEventListener("blur" , () => {
        if (!formInput.value.trim().length > 0){
        formInput.closest(".form__item")
        .querySelector(".form__fake-placeholder")
        .classList.remove("active")
        }
    })
}) 

