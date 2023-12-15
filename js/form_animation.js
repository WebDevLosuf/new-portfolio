const inputs  = document.querySelectorAll(".focus-status");
inputs.forEach((formInput)=>{
    formInput.addEventListener("focus" , () => {
        formInput.closest(".form__item")
        .querySelector(".form__fake-placeholder")
        .classList.add("active")
    })
})  
    

console.log(inputs);
