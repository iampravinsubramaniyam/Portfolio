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
    cloud.style.right= "1rem";
    boat.style.left = "3rem";
    logo.style.opacity = "1";
    logo.style.letterSpacing = "0.3em";
    
    showMenuList(menuList)
}

const showMenuList = (menuList) =>{
    for(let point = 0; point < menuList.length; point++){
        menuList[point].style.transform = "rotateX(0deg)";
    }
}





