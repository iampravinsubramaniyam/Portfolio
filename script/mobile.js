
const  throughDisplay= ()=>{
    // const display = document.querySelector(".display");
    // window.addEventListener("scroll",()=>{
        
    //     const curr = window.scrollY;
    //     display.textContent = Math.floor(curr);
        
    // })
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

const revealItems = () =>{
    window.addEventListener("scroll",()=>{
        
        const curr = window.scrollY;
        if(curr >= 500 && curr < 2000){ // about
            if(curr >=900){
                revealTechStack();
            }
            revealMobileAbout();
        }else{
            hideMobileAbout();
            hideTechStack();
        }

        if(curr >= 1550){
            revealProfiles();
        }else if(curr <= 1250){
            hideProfiles();
        }

        if(curr >= 2400){
            revealProjectTech();
        }else{
            hideProjectTech();
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

var techStackStatus = true;
const revealTechStack = () =>{
    if(techStackStatus){
        const skillSet = document.querySelectorAll("#mySkills img");

        for(let point = 0; point < skillSet.length; ++point){
            skillSet[point].style.width = "50%";
        }
        techStackStatus = false;
    }
}

const hideTechStack  = () =>{
    if(!techStackStatus){
        const skillSet = document.querySelectorAll("#mySkills img");

        for(let point = 0; point < skillSet.length; ++point){
            skillSet[point].style.width = "0%";
        }
        techStackStatus = true;
    }
}

var profileStatus = true;
const revealProfiles = () =>{
    if(profileStatus){
        const profiles = document.querySelector(".myProfiles");
        profiles.style.left = "0";

        profileStatus = false;
    }

}

const hideProfiles = () =>{
    if(!profileStatus){
        const profiles = document.querySelector(".myProfiles");
        profiles.style.left = "-1000px";

        profileStatus = true;
    }
}

var projectTech = true;

const revealProjectTech = () =>{
    const images = document.querySelectorAll(".techImages img");
    
    if(projectTech){
        for(let point = 0; point < images.length; ++point){
            images[point].style.bottom = "30%";
        }
        projectTech = false;
    }
}

const hideProjectTech = () =>{
    const images = document.querySelectorAll(".techImages img");
    
    if(!projectTech){
        for(let point = 0; point < images.length; ++point){
            images[point].style.bottom = "-300px";
        }
        projectTech = true;
    }
}

export default mobileSideBar;

export {throughDisplay,revealItems};