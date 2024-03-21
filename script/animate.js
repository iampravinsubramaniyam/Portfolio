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
        if(screen.width <= 992){
            skillSet[point].style.width = "50%";
        }else{
            skillSet[point].style.width = "40%";
        }
    }

    if(screen.width <= 768){
        myPara.style.height = "100%";
    }else if(screen.width <= 992){
        myPara.style.height = "85%";
    }else{
        myPara.style.height = "100%";
    }

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



export default showItems;
export {hideItems,showMenuList,autoType};
export {revealAbout,hideAbout,revealProfiles,hideProfiles};
