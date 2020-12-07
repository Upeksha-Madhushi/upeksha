//Loading page
window.onload=()=>{
    setTimeout(()=>{
        document.querySelector("body").classList.add("display")
    },4000);
};

//Change hamburger menu
document.querySelector(".hamburger-menu").addEventListener("click",()=>{
    document.querySelector(".container").classList.toggle("change");
});

//scroll-up button
document.querySelector(".scroll-btn").addEventListener("click",()=>{
    document.querySelector("html").style.scrollBehavior ="smooth";
setTimeout(()=>{
    document.querySelector("html").style.scrollBehavior ="unset";
},10000);
});

//Click here button
document.querySelector(".banner button").addEventListener("click",()=>{
    const target =element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active")
})


//section selector
const menu=document.querySelector(".menu"),
      menuList=menu.querySelector(li),
      totalMenuList=menuList.length;
      allSection = document.querySelectorAll(".section"),
      totalSection=allSection.length;


for(let i=0; i<totalMenuList;i++){
    const a=menuList[i].querySelector("a");
    a.addEventListener("click",function(){

        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
        }

        for(let j=0;j<totalMenuList; j++){
            if(menuList[j].querySelector("a").classList.contains("active")){
                allSection[j].classList.add("back-section");
            }
            menuList[j].querySelector("a").classList.remove(active);
        }
        this.classList.add("active");
        showSection(this);
       
    })

}

function showSection(element){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target =element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active")
        
}





