
const links=document.querySelectorAll(".alternative-style"),
totalLinks =links.length;

function setActiveStyle(color){
    for(let i=0; i<totalLinks; i++){
        if(color == links[i].getAttribute("title")){
            links[i].removeAttribute("disabled");
        }
        else{
            links[i].setAttribute("disabled","true");
        }
    }
}


document.querySelector(".toggle-style-switcher").addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})