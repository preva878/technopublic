const btnHTML = document.getElementById("btn")
const rstHTML = document.getElementById("rst")
const inputHTML = document.getElementById("input")


btnHTML.addEventListener("click",()=>{ //mouseover a la place de lick
    console.log("click")
})

inputHTML.addEventListener("input", function(){
    console.log("change")
})