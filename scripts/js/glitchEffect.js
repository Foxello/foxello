var glitchImage = document.querySelector(".projects__image");
for(let i =0;i<20;i++){
    let glitchBox = document.createElement("div")
        glitchBox.className = "glitchBox";
        glitchImage.appendChild(glitchBox);
}
let glitchArray = document.querySelectorAll(".glitchBox");
var glitchInterval = setInterval(() => {
    for(let i =0;i<glitchArray.length;i++){
        glitchArray[i].style.left = Math.floor(Math.random()*100) + "%";
        glitchArray[i].style.top = Math.floor(Math.random()*100) + "%";
        glitchArray[i].style.width = Math.floor(Math.random()*25) + "%";
        glitchArray[i].style.height = Math.floor(Math.random()*10) + "%";
        glitchArray[i].style.bachgroundPosition = Math.floor(Math.random()*20 + "%");
    }
}, 300);
