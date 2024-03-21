
const agroProject = () =>{
    const discription = document.querySelector(".discription .projectContent");
    discription.textContent = "This is an online e-commerce project.This project was specifically created with agriculture in mind. Farmers are able to market their goods, and consumers can buy organic goods to meet their needs.";

    const techImages = document.querySelector("#techImages");
    techImages.style.width = "100%";
    techImages.style.height = "80%";

    techImages.append(createImage("html"));
    techImages.append(createImage("php"));
    techImages.append(createImage("css"));
    techImages.append(createImage("js"));
    techImages.append(createImage("mysql"));


}

const createImage = (tech) =>{
    const img = document.createElement("img");
    img.classList.add("images");
    if(screen.width <= 576){
        img.style.width = "30px";
    }else{
        img.style.width = "0px";
    }
    img.src = `./images/project/agroCart/Tech Stack/${tech}.png`
    img.style.opacity = "0.9";

    return img;
}


const agroBtn = document.querySelector(".agro");
const blogBtn = document.querySelector(".blog");



blogBtn.addEventListener("click",(event)=>{

    agroBtn.style.border="none";
    agroBtn.style.color = "black";
    event.target.style.color = "#1193AB";
    event.target.style.border="1px solid #08606f";

    const discription = document.querySelector(".discription .projectContent");
    discription.textContent = "It is an online blogging platform where individuals share their thoughts, experiences, expertise, and opinions on various topics through regular posts or articles. These posts can cover a wide range of subjects, including personal stories, hobbies, interests, news, reviews, tutorials, and much more.";

    const techImages = document.querySelector("#techImages");
    techImages.innerHTML = "";


    techImages.append(createImage("html"));
    techImages.append(createImage("js"));
    techImages.append(createImage("css"));
    techImages.append(createImage("mysql"));
    techImages.append(createImage("php"));

    setTimeout(()=>{
        animateTechImages(true);
    },100);

});

agroBtn.addEventListener("click",(event)=>{
    blogBtn.style.border="none";
    blogBtn.style.color = "black";

    event.target.style.border="1px solid #08606f";
    event.target.style.color =  "#1193AB";

    const discription = document.querySelector(".discription .projectContent");

    discription.textContent = "This is an online e-commerce project.This project was specifically created with agriculture in mind. Farmers are able to market their goods, and consumers can buy organic goods to meet their needs.";

    const techImages = document.querySelector("#techImages");
    techImages.innerHTML = "";


    techImages.append(createImage("html"));
    techImages.append(createImage("php"));
    techImages.append(createImage("css"));
    techImages.append(createImage("js"));
    techImages.append(createImage("mysql"));

    setTimeout(()=>{
        animateTechImages(true);
    },100);
})


const animateTechImages = (condition) =>{
    const images =  document.querySelectorAll("#techImages .images");

    
    for(let index = 0; index < images.length; ++index){
        if(condition){
            images[index].style.width = "30px";
        }else{
            images[index].style.width = "0px";
        }
    }
}




export default agroProject;
export {animateTechImages};