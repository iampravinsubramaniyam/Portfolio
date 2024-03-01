import showItems from "./animate.js";
import {hideItems} from "./animate.js";
import {revealAbout,hideAbout,revealProfiles,hideProfiles} from "./animate.js";
import {blogProject,agroProject} from "./animate.js";



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
        if(curr <= 800){
            showItems();
        }else{
            hideItems();
        }

        // if(curr >= 190 && curr < 1200){
        // }else if(curr < 190){
        // }

        // if(curr >= 1200){
        //     hideAbout();
        // }

        // if(curr >= 1000){
        // }
        
        // if(curr <= 200 || curr >= 2000){
        // }


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

const projectEvent = ()=>{
    const blog = document.querySelector(".blog");
    const agro = document.querySelector(".agro");

    blog.addEventListener("click",()=>{
        blogProject();
    })

    agro.addEventListener("click",()=>{
        agroProject();
    })


}

var techReveal = false;


const changeStyles = () =>{
    const home = document.querySelector("#home");
    const about = document.querySelector("#about");
    const profiles = document.querySelector("#profiles");
    const project = document.querySelector("#projects");

    home.addEventListener("mouseover",()=>{
        const logo = document.querySelector(".logo");
        const images = document.querySelectorAll(".techImages img");
        const sidebar = document.querySelector(".sideBar");
        sidebar.style.right = "-500px";
        logo.style.color = "#58C5E8";
        document.querySelector(".logoFirstLetter").style.color = "#58C5E8";
        document.title = "Home | Praveen.FL";
        hideProfiles();

        if(techReveal === true){
            for(let point = 0; point < images.length; point++){
                images[point].style.bottom = "-50px";
            }
            techReveal = false;
        }
        hideAbout();
        const title = document.querySelector(".heading h3");
        title.style.width = "0%";
    })

    about.addEventListener("mouseover",()=>{
        revealAbout();
        const logo = document.querySelector(".logo");
        logo.style.color = "rgb(14, 140, 157)";
        document.querySelector(".logoFirstLetter").style.color = "rgb(14, 140, 157)";
        document.title = "About | Praveen.FL";
        const sidebar = document.querySelector(".sideBar");
        sidebar.style.right = "-5px";
    })

    profiles.addEventListener("mouseover",()=>{
        document.title = "Profiles | Praveen.FL";
        revealProfiles();
        const sidebar = document.querySelector(".sideBar");
        sidebar.style.right = "-5px";
    })

    project.addEventListener("mouseover",()=>{
        const images = document.querySelectorAll(".techImages img");
        if(techReveal === false){
            for(let point = 0; point < images.length; point++){
                images[point].style.bottom = "30%";
            }
            techReveal = true;
        }
        document.title = "Project | Praveen.FL";
        const sidebar = document.querySelector(".sideBar");
        sidebar.style.right = "-5px";


        const title = document.querySelector(".heading h3");
        title.style.width = "50%";
    })


}


export default NavBar;
export {animationWhileScroll,mobileSideBar,projectEvent,changeStyles};

