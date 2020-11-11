// Отправка данных на сервер
function send(event, php){
    console.log("Отправка запроса");
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    
    req.onload = function() {
        if (req.status >= 200 && req.status < 400) {
        json = JSON.parse(this.response); // Ебанный internet explorer 11
            console.log(json);
            
            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            
            if (json.result == "success") {
                // Если сообщение отправлено
                alert("Сообщение отправлено");
            } else {
                // Если произошла ошибка
                alert("Ошибка. Сообщение не отправлено");
            }
        // Если не удалось связаться с php файлом
        } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
    
    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function() {alert("Ошибка отправки запроса");};
    req.send(new FormData(event.target));
    event.target.reset();
    
}


function checkInput(input){
    var inputValue = input.value;
    if(input.classList.contains("inputCity")){
        return /[0-9]/.test(inputValue);
    }else if(input.classList.contains("inputMail")){
        return !(/@/.test(inputValue));
    }else{
        return !(/[a-zA-Zа-яА-Я]/.test(inputValue));
    }
}

var progress= 0;
var numb = document.querySelector(".numb");
var numbCount = 0;
var cityUser = document.querySelector(".contact__form__inputBox .inputCity");
var mailUser = document.querySelector(".contact__form__inputBox .inputMail");
var progressBarLeft = document.querySelector(".left .progress");
var progressBarRight = document.querySelector(".right .progress");
const arrayInputs = Array.from(document.querySelectorAll(".contact__form__inputBox input"));
arrayInputs.push(document.querySelector(".contact__form__inputBox textarea"));
for (let index = 0; index < arrayInputs.length; index++) {
    const element = arrayInputs[index];
    element.addEventListener("change",()=>{
        if(checkInput(element)){
            if(!(element.parentElement.classList.contains("_inputError")) && !(element.parentElement.classList.contains("_inputOk")) || element.parentElement.classList.contains("_inputError")){
                element.parentElement.classList.add("_inputError");
                return;
            }

            element.parentElement.classList.remove("_inputOk");
            element.parentElement.classList.add("_inputError");
            numbCount-=25;
            numb.innerHTML = numbCount;
            if(progress!=0){
                
                if(progress<=180){
                    progress-=90;
                    progressBarLeft.style.transform = "rotate(" + progress + "deg)";
                }
                else{
                    progress-=90;
                    progressBarRight.style.transform = "rotate(" + (progress-180) + "deg)";
                }
            }
        }else{
            if(element.parentElement.classList.contains("_inputOk")){
                return;
            }
            element.parentElement.classList.remove("_inputError");
            element.parentElement.classList.add("_inputOk");
            numbCount+=25;
            numb.innerHTML = numbCount;
            progress+=90;
            if(progress<=180){
                progressBarLeft.style.transform = "rotate(" + progress + "deg)";
            }else{
                progressBarRight.style.transform = "rotate(" + (progress-180) + "deg)";
            }
        }
    })
}
