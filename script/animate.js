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

    if(hideLogo === true){
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


export default showItems;
export {hideItems,showMenuList,autoType};

