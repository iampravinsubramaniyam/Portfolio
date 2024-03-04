import createProject from "./project.js";
import showItems from "./animate.js";
import {autoType} from "./animate.js";
import NavBar from "./events.js";
import {animationWhileScroll,projectEvent,changeStyles} from "./events.js";
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
    
    createProject();
    projectEvent();
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

}