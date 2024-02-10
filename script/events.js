import showItems from "./animate.js";
import {hideItems} from "./animate.js";
import {revealAbout,hideAbout,footAnimate,animateProfiles} from "./animate.js";


var lastScrollTop = 0;
const navBar = document.querySelector(".header");


// NavBar Controll using scrolling
const NavBar=()=>{
    window.addEventListener("scroll",()=>{
        var currentScrollTop = window.scrollY || document.documentElement.currentScrollTop;

        if(currentScrollTop > lastScrollTop){
            navBar.style.top = "-70px";
        }else{
            navBar.style.top = "0";
        }
        lastScrollTop= currentScrollTop;
    });
}

//Animation using Scrolling
    
const animationWhileScroll = ()=>{
    window.addEventListener("scroll",()=>{
        
        const curr = window.scrollY;
        if(curr <= 550){
            showItems();
        }else{
            hideItems();
        }

        if(curr >= 190 && curr < 1000){
            revealAbout();
        }else if(curr < 190){
            hideAbout();
        }

        if(curr >= 1000){
            hideAbout();
        }

        if(curr > 900 && curr < 1600){
            animateProfiles(true);
        }else{
            animateProfiles(false);
        }

        if(curr > 2300){
            footAnimate(true);
        }else{
            footAnimate(false);
        }

        throughDisplay(Math.floor(curr));
    })
}

const throughDisplay = (curr)=>{
    const display = document.querySelector(".display");
    display.textContent = curr;
}

    // Showing Mobile Side Bar

const mobileSideBar = ()=>{
    const menuIcon = document.querySelector(".showMenu");

    menuIcon.addEventListener("click",()=>{
        const status = document.querySelector(".menuItems");
        status.style.top = "0";
        status.style.right = "0";
        menuIcon.style.display = "none";
    });

    //Hiding Mobile Hide Bar
    const hideMenu = document.querySelector(".hideMenu");

    hideMenu.addEventListener("click",()=>{
        const status = document.querySelector(".menuItems");
        status.style.top = "-20rem";
        status.style.right = "-20rem";
        menuIcon.style.display = "flex";
    });

}



export default NavBar;
export {animationWhileScroll,mobileSideBar};

