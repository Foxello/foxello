var scrollX = 0;
var svg = document.querySelectorAll(".hi__window__logo path,polygon");
var buttonContact = document.querySelectorAll(".window__button");
var scrollFlag = true;
var spanArray = document.querySelectorAll(".info__skills span")
var navIcons = document.querySelectorAll(".nav__list a")
const currentIcon = {
    lastNumber:0,
    curNumber:0
}
var burgerButton = document.querySelector(".burger");
burgerButton.addEventListener("click",()=>{
    var nav = document.querySelector(".hi__menu");
    nav.classList.toggle("_open");
})
navIcons[currentIcon.curNumber].classList.toggle("currentIcon")
svg.forEach(element => {
    element.classList.add("svg__animate");
})

function bubbleButton(){
    
}

for(let i = 0;i<buttonContact.length;i++){
    buttonContact[i].addEventListener("click", function(e){
        let ripples = document.createElement("span");
        ripples.classList.add("bubble");
        ripples.style.left =  e.clientX - e.target.getBoundingClientRect().left + "px";
        ripples.style.top = e.clientY - e.target.getBoundingClientRect().top + "px"  ;
        this.appendChild(ripples);
        setTimeout(()=>{
            ripples.remove();
        },1000)
    })
}


const colors = [
    "#08FDD8",
    "#FF0054"
]

for(let i = 0;i<navIcons.length;i++){
    if(!scrollFlag){
        break;
    }
    navIcons[i].onclick = ()=>{
        document.querySelector(".hi__menu").classList.remove("_open");
        scrollX = i*90;
        currentIcon.lastNumber = currentIcon.curNumber;
        currentIcon.curNumber = i;
        document.querySelector('.hi__container').style.transform = 
        'rotateX(' + scrollX + 'deg)';
        changeCurIcon();
    }
}

function changeCurIcon(){
    navIcons[currentIcon.lastNumber].classList.toggle("currentIcon");
    navIcons[currentIcon.curNumber].classList.toggle("currentIcon");
}

function createSquare(){
    const section = document.querySelector(".hi__window");
    const square = document.createElement("span");
    square.classList.add("back__square")
    var size = Math.random() * 50 + 20;
    const bg = colors[Math.floor(Math.random()*colors.length)];
    square.style.backgroundColor = bg;
    square.style.width = size + "px";
    square.style.height = size + "px";
    square.style.top = Math.random() * innerHeight + "px";
    square.style.left = Math.random() * innerWidth + "px";
    section.appendChild(square);
    setTimeout(()=>{
        square.remove();
    },7000)
}

window.addEventListener("wheel", (e)=>{
    if(!scrollFlag){
        return;
    }
    if(e.deltaY >0){
        scrollX+=90;
        currentIcon.lastNumber = currentIcon.curNumber;
        var func = ()=>{
            if(currentIcon.curNumber == 3){
                return 0;
            }
            else{
                return currentIcon.curNumber + 1;
            }
        }
        currentIcon.curNumber = func();
        changeCurIcon();
        document.querySelector('.hi__container').style.transform = 
        'rotateX(' + scrollX + 'deg)';
    }
    else{
        scrollX-=90;
        currentIcon.lastNumber = currentIcon.curNumber;
        var func = ()=>{
            if(currentIcon.curNumber == 0){
                return 3;
            }
            else{
                return currentIcon.curNumber-1;
            }
        }
        currentIcon.curNumber = func();
        changeCurIcon();
        document.querySelector('.hi__container').style.transform = 
        'rotateX(' + scrollX + 'deg)';
    }
    
    scrollFlag = false;
    setTimeout(()=>{
        scrollFlag = true;
    },1000);
    setTimeout(()=>{
        spanArray[0].classList.add("info__mySkills__pixelRed");
        spanArray[1].classList.add("info__mySkills__pixelBlue")
    },1000)
})

var cubes = setInterval(createSquare,150);
