const inputEL = document.querySelector(".input")
const bodyel = document.querySelector("body")

inputEL.checked = JSON.parse(localStorage.getItem("mode"));

function updateBody(){
    if(inputEL.checked){
        bodyel.style.background = "white"
    }else{
        bodyel.style.background = "black"
    }
}

inputEL.addEventListener("input",()=>{
    updateBody()
    updateStorage()
})
function updateStorage(){
    localStorage.setItem("mode",JSON.stringify(inputEL.checked))
}