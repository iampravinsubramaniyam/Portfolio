document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        initApp();
    }
})


const initApp = ()=>{
    showItems();
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

    window.addEventListener("scroll",()=>{
        var currentScrollTop = window.scrollY || document.documentElement.currentScrollTop;

        if(currentScrollTop > lastScrollTop){
            navBar.style.top = "-70px";
        }else{
            navBar.style.top = "0";
        }
        lastScrollTop= currentScrollTop;
    });

    window.addEventListener("scroll",()=>{
        if(window.scrollY === 0){
            showItems();
        }else{
            hideItems();
        }

        console.log(Math.floor(window.scrollY));
    })

    const menuIcon = document.querySelector(".showMenu");

    menuIcon.addEventListener("click",()=>{
        const status = document.querySelector(".menuItems");
        status.style.top = "0";
        status.style.right = "0";
        menuIcon.style.display = "none";
    });

    const hideMenu = document.querySelector(".hideMenu");

    hideMenu.addEventListener("click",()=>{
        const status = document.querySelector(".menuItems");
        status.style.top = "-20rem";
        status.style.right = "-20rem";
        menuIcon.style.display = "flex";
    });


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

const hideItems= ()=>{
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
    logo.style.opacity = "0";
    logo.style.letterSpacing = "0";
    
    showMenuList(menuList)
}

const showMenuList = (menuList) =>{
    for(let point = 0; point < menuList.length; point++){
        menuList[point].style.transform = "rotateX(0deg)";
    }
}






