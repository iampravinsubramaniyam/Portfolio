

var two = "/images/project/agroCart/login.PNG";
const changeImage = ()=>{
    console.log(typeof document.querySelector(".project .laptop .screen img").src);
    document.querySelector(".project .laptop .screen img").src = two;
}




export default changeImage;