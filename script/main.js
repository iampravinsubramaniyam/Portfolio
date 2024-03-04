import createProject from "./project.js";
import showItems from "./animate.js";
import {hideItems,showMenuList,autoType} from "./animate.js";
import NavBar from "./events.js";
import {animationWhileScroll,projectEvent,changeStyles} from "./events.js";
import mobileSideBar from "./mobile.js"



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
    changeStyles();
    showItems(false);


    const width = screen.width;
    if(width <= 576){
        mobileSideBar();
    }else{
        animationWhileScroll();
    }
}