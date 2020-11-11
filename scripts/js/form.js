// "use strict"

// document.addEventListener("DOMContentLoaded",()=>{
//     const form = document.querySelector("#form");
//     form.addEventListener("submit",formSend);

//     async function formSend(e){
//         e.preventDefault();

//         let error = formValidate(form);
//         let formData = new FormData(form);
//         if(error === 0){
//             form.parentElement.classList.add("_sending");
//             let response = await fetch("sendmail.php",{
//                 method: 'POST',
//                 body: formData
//             });
//             if(response.ok){
//                 let result = await response.json();
//                 alert(result.message + "=)");
//                 form.reset();
//                 form.parentElement.classList.remove("_sending")
//             }else{
//                 alert("Error!")
//                 form.parentElement.classList.remove("_sending")
//             }
//         }else{
//             alert("Enter required fields!");
//         }
//     }

//     function formValidate(form){
//         let error = 0;
//         let formReq = document.querySelectorAll("._req");
        
//         for (let index = 0; index < formReq.length; index++) {
//             const input = formReq[index];
//             formRemoveError(input);
//             if(input.value ===""){alert("fdsf");
//                 formAddError(input);
//                 error++;
//             }
//         }
//         return error;
//     }
//     function formAddError(input){
//         input.parentElement.classList.add("_error");
//         input.classList.add("_error");
//     }
//     function formRemoveError(input){
//         input.parentElement.classList.remove("_error");
//         input.classList.remove("_error");
//     }
// });