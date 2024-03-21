import agroProject from "./project.js";
import showItems from "./animate.js";
import {autoType} from "./animate.js";
import NavBar from "./events.js";
import {animationWhileScroll,changeStyles} from "./events.js";
import mobileSideBar from "./mobile.js";
import {throughDisplay,revealItems} from "./mobile.js";



document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        initApp();
    }
})


const initApp = ()=>{
    NavBar();
    autoType();
    
    agroProject();
    showItems(false);


    const width = screen.width;

    if(width <= 576){
        mobileSideBar();
        throughDisplay();
        revealItems();
    }else{
        animationWhileScroll();
        changeStyles();
    }

    setTimeout(()=>{
        endLoading();
    },1000);

    throughDisplay();
}

const endLoading = () =>{
    const body = document.querySelector("body");
    const loadingPage = document.querySelector(".loading");

    loadingPage.style.backgroundColor = "transparent";
    body.style.overflowY = "visible";
    document.querySelector(".loading h1").style.display = "none";

    setTimeout(()=>{
        loadingPage.style.display = "none";
    },2000);
}