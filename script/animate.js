const showItems = ()=>{
    const linkBar = document.querySelector(".linkBar");
    const cloud = document.querySelector(".cloud");
    const boat = document.querySelector(".boat");
    const logo = document.querySelector(".logo");
    const menuList = document.querySelectorAll(".header .menuItems li a");
    linkBar.style.right = "0";
    linkBar.style.opacity = "0.4";
    cloud.style.right= "1rem";
    cloud.style.opacity="1";
    boat.style.left = "3rem";
    logo.style.opacity = "1";
    logo.style.letterSpacing = "0.3em";
    
    showMenuList(menuList)
}


const hideItems= (hideLogo)=>{
    const linkBar = document.querySelector(".linkBar");
    const cloud = document.querySelector(".cloud");
    const boat = document.querySelector(".boat");
    const logo = document.querySelector(".logo");
    const menuList = document.querySelectorAll(".header .menuItems li a");
    linkBar.style.right = "70rem";
    linkBar.style.opacity = "0";
    cloud.style.right= "70rem";
    cloud.style.opacity = "0";
    boat.style.left = "0rem";

    if(hideLogo){
        logo.style.opacity = "0";
        logo.style.letterSpacing = "0";  
    }
    showMenuList(menuList)
}



const showMenuList = (menuList) =>{
    for(let point = 0; point < menuList.length; point++){
        menuList[point].style.transform = "rotateX(0deg)";
    }
}

const autoType = ()=>{
    //Autotype
    var typed = new Typed("#autoType",{
        strings:["PraveenSubramaniyam","Coder","Front-End Developer","Programmer"],
        typeSpeed:120,
        backSpeed:120,
        loop:true
    });

    var typed = new Typed("#lastUpdated",{
        strings:["@Last Updated 2024"],
        typeSpeed:100,
        backSpeed:100,
        loop:false
    });
}


const revealAbout = ()=>{
    const myPara = document.getElementById("para");
    const skillSet = document.querySelectorAll("#mySkills img");
    const skillSetHeading = document.querySelector("#skillSetHeading");
    const aboutHeading = document.querySelector("#aboutTitle");


    for(let point = 0; point < skillSet.length; ++point){
        skillSet[point].style.width = "50%";
    }

    myPara.style.height = "100%";
    skillSetHeading.style.transform = "rotateX(0deg)";
    aboutHeading.style.opacity = "1";
}

const hideAbout =()=>{
    const myPara = document.getElementById("para");
    const skillSet = document.querySelectorAll("#mySkills img");
    const skillSetHeading = document.querySelector("#skillSetHeading");
    const aboutHeading = document.querySelector("#aboutTitle");

    for(let point = 0; point < skillSet.length; ++point){
        skillSet[point].style.width = "0%";
    }

    myPara.style.height = "0%";
    skillSetHeading.style.transform = "rotateX(90deg)";

    aboutHeading.style.opacity = "0";
}


// footer animation

const footAnimate = (isTrue)=>{
    const wishMessage = document.querySelector(".footerWish");
    const links = document.querySelectorAll(".footer .foot .follow img");
    const myName = document.querySelectorAll(".footer .foot p span");
    const contactForm = document.querySelector(".contact");
    const myPic = document.querySelector(".foot .greet .myPic");

    if(isTrue){
        //setting transitions

        wishMessage.style.transition  = "5s linear"
        contactForm.style.transition = "3s linear";
        myPic.style.transition = "2s linear";


        for(let point = 0; point < links.length; ++point){
            links[point].style.transition = "3s";
        }

        for(let point = 0; point < myName.length; ++point){
            myName[point].style.transition = "2s linear";
        }

        //modifi

        wishMessage.style.width = "100%";
        
        for(let point= 0; point < links.length; ++point){
            links[point].style.boxShadow = "1px 2px 5px #226b77";
        }

        for(let point = 0; point < myName.length; ++point){
            myName[point].style.color = "#226b77";
        }

        contactForm.style.opacity = "1";

        myPic.style.boxShadow = "0.5px 1px 4px #226b77";
        
    }else{
        //removing transitions
        wishMessage.style.transition  = "0s";
        contactForm.style.transition = "1s";
        myPic.style.transition = "0s";


        for(let point = 0; point < links.length; ++point){
            links[point].style.transition = "0s";
        }

        for(let point = 0; point < myName.length; ++point){
            myName[point].style.transition = "0s";
        }


        //modifie
        wishMessage.style.width = "0%";

        for(let point= 0; point < links.length; ++point){
            links[point].style.boxShadow = "";
        }

        for(let point = 0; point < myName.length; ++point){
            myName[point].style.color = "black";
        }

        contactForm.style.opacity = "0";

        myPic.style.boxShadow = "";
    }    
    
}

// profile section

const animateProfiles = (show)=>{
    const line = document.querySelectorAll(".profileTitle p");
    const profiles = document.querySelectorAll(".linkWrap");

    if(show){
        for(let point = 0; point < line.length; ++point){
            line[point].style.transition = "5s";
        }

        for(let point = 0; point < line.length; ++point){
            line[point].style.width = "100%";
        }

        for(let point = 0; point < profiles.length; ++point){
            profiles[point].querySelector("a").style.width ="90px";
            profiles[point].querySelector("img").style.boxShadow = "1px 2px 5px #226b77";
        }


    }else{
        for(let point = 0; point < line.length; ++point){
            line[point].style.transition = "0s";
        }
       
        for(let point = 0; point < line.length; ++point){
            line[point].style.width = "0%";
        }

        for(let point = 0; point < profiles.length; ++point){
            profiles[point].querySelector("a").style.width ="0px";
            profiles[point].querySelector("img").style.boxShadow = "";
        }

    }
}


export default showItems;
export {hideItems,showMenuList,autoType};
export {revealAbout,hideAbout,footAnimate,animateProfiles};