import createProject from "./project.js";
import showItems from "./animate.js";
import {hideItems,showMenuList,autoType} from "./animate.js";
import NavBar from "./events.js";
import {animationWhileScroll,mobileSideBar,projectEvent,changeStyles} from "./events.js";



document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        initApp();
    }
})


const initApp = ()=>{
    showItems(false); // Revaling Items while Loading
    NavBar();
    autoType();
    animationWhileScroll();
    mobileSideBar();
    createProject();
    projectEvent();
    changeStyles();
}