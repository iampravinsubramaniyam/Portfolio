import showItems from "./animate.js";
import {hideItems} from "./animate.js";
import {revealAbout,hideAbout,revealProfiles,hideProfiles} from "./animate.js";
import {animateTechImages} from "./project.js";


var old;
window.addEventListener("blur",()=>{
    old = document.title;
    document.title = "hey click me 🙃";
});

window.addEventListener("focus",()=>{
    document.title = old;
});



var lastScrollTop = 0;
const navBar = document.querySelector(".header");


// NavBar Controll using scrolling
const NavBar=()=>{
    window.addEventListener("scroll",()=>{
        var currentScrollTop = window.scrollY || document.documentElement.currentScrollTop;

        if(currentScrollTop > lastScrollTop){
            navBar.style.top = "-100px";
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
        console.log(curr);

    });
}


const home = ()=>{
    const logo = document.querySelector(".logo");
    // const images = document.querySelectorAll(".techImages img");
    const sidebar = document.querySelector(".sideBar");
    sidebar.style.right = "-500px";
    logo.style.color = "#58C5E8";
    document.querySelector(".logoFirstLetter").style.color = "#58C5E8";
    document.title = "Home | Praveen.FL";
    hideProfiles();


    hideAbout();

};

const about = () =>{
    revealAbout();
    const logo = document.querySelector(".logo");
    logo.style.color = "rgb(14, 140, 157)";
    logo.style.opacity = "0.7";
    document.querySelector(".logoFirstLetter").style.color = "rgb(14, 140, 157)";
    document.title = "About | Praveen.FL";
    const sidebar = document.querySelector(".sideBar");
    sidebar.style.right = "-5px";
}


const profiles = () =>{
    const logo = document.querySelector(".logo");
    logo.style.opacity = "0.8";
    document.title = "Profiles | Praveen.FL";
    revealProfiles();
    const sidebar = document.querySelector(".sideBar");
    sidebar.style.right = "-15px";
}



const revealProject = () =>{
    const backImage = document.querySelector(".mask .designImage");
    backImage.style.opacity = "1";
    animateTechImages(true);
    if(screen.width <= 992){
        document.querySelector(".project .mask .projectHeading h1").style.left = "-40px";
    }else{
        document.querySelector(".project .mask .projectHeading h1").style.left = "-60px";
    }


    document.title = "Projects | Praveen.FL";
}

const hideProject = () =>{
    const backImage = document.querySelector(".mask .designImage");
    backImage.style.opacity = "0";
    animateTechImages(false);
    document.querySelector(".project .mask .projectHeading h1").style.left = "-600px";
}


var contact = true;

const Contact = (condition) =>{
    if(contact && condition){
        const links = document.querySelectorAll(".contactLinkWrapper a");

        for(let index = 0; index < links.length; ++index){
            links[index].style.left = "0px";
        }

        contact = false;
    }else if(!condition){
        const links = document.querySelectorAll(".contactLinkWrapper a");

        for(let index = 0; index < links.length; ++index){
            links[index].style.left = "900px";
        }

        contact = true;
    }
}

const resume = (condition) =>{
    const msg = document.querySelector(".downloadMsg");

    condition?msg.style.width = "180px":msg.style.width = "0%";
    condition?msg.style.padding = "12px":msg.style.padding = "0px";
}

var resumeCondition = false;

if(screen.width > 992){
    const cvButton = document.querySelector(".resumeContainer a");

    cvButton.addEventListener("mouseover",()=>{
        resume(true);
        document.querySelector(".resumeContainer a").style.opacity = "1";
        document.querySelector(".resumeContainer p").style.opacity = "1";
        document.querySelector(".resumeContainer p").style.letterSpacing = "2px";
        // document.querySelector(".downloadMsg").textContent = "Download";
    })

    cvButton.addEventListener("mouseout",()=>{
        resume(false);
        document.querySelector(".resumeContainer a").style.opacity = "0.8";
        document.querySelector(".resumeContainer p").style.opacity = "0.7";
        document.querySelector(".resumeContainer p").style.letterSpacing = "0px";
        // document.querySelector(".downloadMsg").textContent = "Click\xa0me\xa0to\xa0download";
    })
}else{
    resumeCondition = true;
}


const changeStyles = () =>{
    window.addEventListener("scroll",()=>{
        const curr = window.scrollY;
        if(curr <= 500){
            home();
        }
        if(curr >= 200){
            about();
        }
        if(curr >= 1000){
            profiles();
        }

        if(curr >= 700 && resumeCondition){
            resume(true);
        }else if (curr && resumeCondition){
            resume(false);
        }

        if(curr > 2090){
            document.querySelector(".sideBar").style.display = "none";
        }else{
            document.querySelector(".sideBar").style.display = "flex";
        }

        if(curr >= 2100){
            revealProject();
        }else if(curr <= 1500 && screen.width >= 992){
            hideProject();
            Contact(false);
        }

        if(curr >= 2300){
            Contact(true);
        }


        if(curr >= 1900 && screen.width <= 2000){
            revealProject();
        }

        if(curr >= 2200 && screen.width <= 2000){
            Contact(true);
        }else if(curr >= 2000 && screen.width <= 992){
            Contact(true);
        }



        // 768px
        if(screen.width <= 768){
            if(curr <= 600){
                hideProject();
                Contact(false);
            }

            if(screen.width <= 768 && curr >=1350){
                revealProject();
            }
            if(screen.width <= 768 && curr >=1550){
                Contact(true);
            }
        }



    });

}


export default NavBar;
export {animationWhileScroll,changeStyles};
export{revealProject,hideProject,Contact};

