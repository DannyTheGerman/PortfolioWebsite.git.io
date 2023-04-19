
const colorBtn = document.querySelector("#colorBtn");
const container = document.querySelector("#container");
const myName = document.querySelector("#myName")
const imageBackGround = document.querySelector("#imageBack");
const topBar = document.querySelector("#topBar");
const sideBar = document.querySelector("#sideBar");
const topBarNoAnim = document.querySelector("#topBarNoAnim");
const topBarNoAnim2 = document.querySelector("#topBarNoAnim2");
const aboutBoxes = [document.querySelector("#aboutMe"), document.querySelector("#aboutGoals"), document.querySelector("#aboutBackground"), document.querySelector("#aboutEthic")];
const skillSection = document.querySelector("#skillSection");
const skillDivs = document.querySelectorAll(".skillDivs");
const myPhoto = document.querySelector("#myPhoto");

const bgDark = "rgb(42, 17, 70)";

let colorMode = "light";

colorBtn.onclick = function(){

    if(colorMode == "light"){
        colorMode = "dark";
        container.style.backgroundColor = bgDark;
        aboutSection.style.backgroundColor = bgDark;
        skillSection.style.backgroundColor = bgDark;
        myName.style.color = "white";
        imageBackGround.style.backgroundColor = "rgb(62, 39, 88)";
        topBar.style.backgroundImage = "linear-gradient(to right, rgb(97, 38, 160), rgb(218, 206, 232))";
        sideBar.style.backgroundImage = "linear-gradient(to right, rgb(218, 206, 232), rgb(97, 38, 160))";
        topBarNoAnim.style.backgroundImage = "linear-gradient(to right, rgb(97, 38, 160), rgb(218, 206, 232))";
        topBarNoAnim2.style.backgroundImage = "linear-gradient(to right, rgb(97, 38, 160), rgb(218, 206, 232))";
        aboutBoxes.forEach(element => element.style.backgroundColor = "rgb(104, 64, 151)");
        skillDivs.forEach(element => element.style.backgroundColor = "rgb(104, 64, 151)");
        myPhoto.src = "medark!.png";
        myPhoto.alt = "metoodark!.webp";

    } 
    else if(colorMode == "dark"){
        colorMode = "light";
        container.style.backgroundColor = "white";
        aboutSection.style.backgroundColor = "white";
        skillSection.style.backgroundColor = "white";
        myName.style.color = "rgb(29, 29, 29)";
        imageBackGround.style.backgroundColor = "rgb(218, 206, 232)";
        topBar.style.backgroundImage = "linear-gradient(to right, rgb(179, 133, 227), rgb(218, 206, 232))";
        sideBar.style.backgroundImage = "linear-gradient(to right, rgb(218, 206, 232), rgb(179, 133, 227))";
        topBarNoAnim.style.backgroundImage = "linear-gradient(to right, rgb(179, 133, 227), rgb(218, 206, 232))";
        topBarNoAnim2.style.backgroundImage = "linear-gradient(to right, rgb(97, 38, 160), rgb(218, 206, 232))";
        aboutBoxes.forEach(element => element.style.backgroundColor = "rgb(225, 198, 255)");
        skillDivs.forEach(element => element.style.backgroundColor = "rgb(225, 198, 255)");
        myPhoto.src = "me!.png";
        myPhoto.alt = "metoo!.webp";
    }
}

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{ 
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));







