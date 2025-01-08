let userInput=document.getElementById("user-input")
let submitBtn=document.getElementById("submit-btn")
let mainBlock=document.querySelector(".main-block")
let userBlock=document.querySelector(".user-block")
let backBtn=document.getElementById("back-btn")
let userName=document.getElementById("user-name")
let err=document.getElementById("err")
submitBtn.addEventListener("click",()=>{
        if(userInput.value!=""){
        userName.textContent=userInput.value
            mainBlock.style.cssText+='animation:rotate1 2s'
           userBlock.style.cssText+='display:flex'
           mainBlock.style.cssText+='display:none'
           userInput.value=""
        }
        else{
             err.textContent="*Please Enter Your Name"
        }
})
backBtn.addEventListener("click",()=>{
    console.log("bfi")

    mainBlock.style.cssText+='animation:rotate 2s'

    userBlock.style.cssText+='display:none'
    mainBlock.style.cssText+='display:flex'
    err.textContent=""

})