import {createImage} from "./project.js";

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
    showMenuList(menuList);
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


// profile section

const revealProfiles = ()=>{
    const profiles = document.querySelector(".myProfiles");
    const title = document.querySelector(".titleWraper");

    profiles.style.left = "5%";
    title.style.top = "5vh";

}

const hideProfiles = () =>{
    const profiles = document.querySelector(".myProfiles");
    const title = document.querySelector(".titleWraper");
    profiles.style.left = "-70%";
    title.style.top = "50vh";
}


const blogProject = () =>{
    const title = document.querySelector(".heading h3");
    const logo = document.querySelector(".projectLogo img");
    const discription = document.querySelector(".discription");

    title.textContent = `Bloging${'\xa0'.repeat(1)}Website`;
    logo.src = "./images/project/Blog/blog.png";
    discription.textContent = "It is an online blogging platform where individuals share their thoughts, experiences, expertise, and opinions on various topics through regular posts or articles. These posts can cover a wide range of subjects, including personal stories, hobbies, interests, news, reviews, tutorials, and much more.";
    
    document.querySelector(".techImages").style.display = "none";

    document.querySelector(".techImagesTwo").style.display = "flex";

    document.querySelector(".blog").style.backgroundColor = "rgba(0, 0, 0, 0.175)";

    document.querySelector(".agro").style.backgroundColor = "transparent";
    
    setTimeout(()=>{
        revealTechSkills();
    },50);
    
    hideAgro();    

}


const agroProject = ()=>{
    const title = document.querySelector(".heading h3");
    const logo = document.querySelector(".projectLogo img");
    const discription = document.querySelector(".discription");
    const techImages = document.querySelector(".techImages");

    title.textContent = "Agrocart";
    discription.textContent = "It's a website-based farming project.The primary goal of this project is to provide an interface between farmers and buyers";
    logo.src = "./images/project/agroCart/cart.png";
    techImages.style.display = "flex";

    document.querySelector(".techImagesTwo").style.display = "none";

    const blogTitle = document.querySelector(".blog");

    blogTitle.style.backgroundColor = "transparent";

    const agroTitle = document.querySelector(".agro");
    agroTitle.style.backgroundColor = "rgba(0, 0, 0, 0.175)";

    setTimeout(()=>{
        hideTechSkills();
    },0);

    setTimeout(()=>{
        revealAgro();
    },0);

}

var revealed = false;
const revealTechSkills =()=>{
    const images = document.querySelectorAll(".techImagesTwo img");

    if(revealed === false){
        for(let point = 0; point < images.length; point++){
            images[point].style.top = "30px";
        }
        revealed = true;
    }
    
}

const hideTechSkills = () =>{
    const images = document.querySelectorAll(".techImagesTwo img");

    if(revealed === true){
        for(let point = 0; point < images.length; point++){
            images[point].style.top = "-300px";
        }
        revealed = false;
    }
}

var agroTechHided = false;

const hideAgro = () =>{
    const images = document.querySelectorAll(".techImages img");
    
    if(agroTechHided === false){
        for(let point = 0; point < images.length; ++point){
            images[point].style.bottom = "-300px";
        }
        agroTechHided = true;
    }
}


const revealAgro = () =>{
    const images = document.querySelectorAll(".techImages img");
    
    if(agroTechHided === true){
        for(let point = 0; point < images.length; ++point){
            images[point].style.bottom = "30%";
        }
        agroTechHided = false;
    }

    // const title = document.querySelector(".heading h3");
    // title.style.width = "50%";
}

export default showItems;
export {hideItems,showMenuList,autoType};
export {revealAbout,hideAbout,revealProfiles,hideProfiles};
export {blogProject,agroProject};