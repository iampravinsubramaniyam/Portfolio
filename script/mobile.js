

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


export default mobileSideBar;