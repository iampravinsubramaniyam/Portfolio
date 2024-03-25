import { revealProject,hideProject,Contact } from "./events.js";

const  throughDisplay= ()=>{
    const display = document.querySelector(".display");
    window.addEventListener("scroll",()=>{
        
        const curr = window.scrollY;
        display.textContent = Math.floor(curr);
        
    })
}
const mobileSideBar = () =>{
    const showMenuIcon = document.querySelector("#menuShow");

    showMenuIcon.addEventListener("click",()=>{
        const items = document.querySelector("#menuItem");
        items.style.top = "0";
        items.style.right = "0";

        showMenuIcon.style.display = "none";
    })


    const hideMenuIcon = document.querySelector("#hideMenu");

    hideMenuIcon.addEventListener("click",()=>{
        const items = document.querySelector("#menuItem");
        items.style.top = "-20rem";
        items.style.right = "-20rem";

        showMenuIcon.style.display = "flex";
    })

}


const skills = (condition) =>{
    const skillSet = document.querySelectorAll("#mySkills img");

    for(let point = 0; point < skillSet.length; ++point){
        if(condition){
            if(screen.width <= 375){
                skillSet[point].style.width = "65%";
            }else{
                skillSet[point].style.width = "50%"
            }
        }else{
            skillSet[point].style.width = "0%";
        }
    }
}


const profiles = (condition) =>{
    const profiles = document.querySelector(".myProfiles");
    const title = document.querySelector(".titleWraper");
    if(condition){
        if(screen.width <= 375){
            profiles.style.left = "2%";
            title.style.top = "5vh"
        }else{
            profiles.style.left = "0%";
            title.style.top = "5vh"
        }
    }else{
        profiles.style.left = "-100%";
        title.style.top = "70vh";
    }

}





const revealItems = () =>{
    window.addEventListener("scroll",()=>{
        
        const curr = window.scrollY;
        if(curr >= 500 && curr < 2000){ // about
            revealMobileAbout();
        }else{
            hideMobileAbout();
      
        }

        if(curr >= 600){
            navColorChange("rgb(14, 140, 157)");
        }else{
            navColorChange("#58C5E8");
        }

        if(curr >= 800){
            skills(true);
        }else{
            skills(false);
        }

        if(curr >= 1400){
            profiles(true);
        }else if(curr <= 500){
            profiles(false);
        }

        if(curr >= 1600){
            revealProject();
        }else if (curr <= 1000){
            hideProject();
        }

        if(curr >= 1900){
            Contact(true);
        }else{
            Contact(false);
        }


    })
}

var aboutStatus = true;
const revealMobileAbout = () =>{
    if(aboutStatus){
        const myPara = document.getElementById("para");
        myPara.style.backgroundColor = "transparent";
        aboutStatus = false;
    }
}

const hideMobileAbout = ()=>{
    if(!aboutStatus){
        const myPara = document.getElementById("para");
        myPara.style.backgroundColor = "#76D7F1";
        aboutStatus = true;
    }
}


const navColorChange = (color) =>{
    const logo = document.querySelector(".logo");
    logo.style.color = color;
    document.querySelector(".logoFirstLetter").style.color = color;
};


export default mobileSideBar;

export {throughDisplay,revealItems};