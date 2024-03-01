
//agroculture
const createProject = () =>{

    const title = document.querySelector(".card .heading h3");
    title.style.fontSize = "1.5rem";
    title.style.letterSpacing = "2px";
    title.textContent = "Agrocart";

    const logo = document.querySelector(".projectLogo img");
    logo.src = "./images/project/agroCart/cart.png";


    const discription = document.querySelector(".discription");
    discription.style.fontSize = "0.8rem";
    discription.style.padding = "10px";
    discription.style.letterSpacing = "1px";
    discription.textContent = "This is an online commerce project.This project was specifically created with agriculture in mind. Farmers are able to market their goods, and consumers can buy organic goods to meet their needs.";

    const techImages = document.querySelector(".techImages");
    techImages.append(createImage("html"));
    techImages.append(createImage("php"));
    techImages.append(createImage("css"));
    techImages.append(createImage("js"));
    techImages.append(createImage("mysql"));


    const techImagesTwo = document.querySelector(".techImagesTwo");

    techImagesTwo.append(createImage("html"));
    techImagesTwo.append(createImage("mysql"));
    techImagesTwo.append(createImage("css"));
    techImagesTwo.append(createImage("js"));

}

const createImage = (tech) =>{
    const img = document.createElement("img");
    img.style.width = "40px";
    img.src = `./images/project/agroCart/Tech Stack/${tech}.png`
    img.style.opacity = "0.9";

    return img;
}

export default createProject;
export {createImage};