import changeImage from "./project.js";

document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        initApp();
    }
})


const initApp = ()=>{
    showItems(false); // Revaling Items while Loading
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


    var lastScrollTop = 0;
    const navBar = document.querySelector(".header");

    // NavBar Controll using scrolling
    window.addEventListener("scroll",()=>{
        var currentScrollTop = window.scrollY || document.documentElement.currentScrollTop;

        if(currentScrollTop > lastScrollTop){
            navBar.style.top = "-70px";
        }else{
            navBar.style.top = "0";
        }
        lastScrollTop= currentScrollTop;
    });

    //Animation using Scrolling

    window.addEventListener("scroll",()=>{
        const curr = window.scrollY;
        if(curr === 0){
            showItems();
        }else{
            hideItems();
        }

        // if(curr >= 500){
        //     revealAbout();
        // }else if(curr < 500){
        //     hideAbout(false);
        // }
    })


    // Showing Mobile Side Bar
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

    const flag = document.querySelector(".project .projectContent .details");

    flag.addEventListener("scroll",(event)=>{
        changeImage();
    })

}


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

