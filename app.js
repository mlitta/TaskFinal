let regPhone = /\+7\(\d{3}\)\d{3}-\d{4}/;
let phone = document.querySelector("#phone");
let regName = /^[a-zA-Z]*$/;
let name = document.querySelector("#name");
let regEmail = /my(\.|-)[a-zA-Z]*@mail.ru/;
let email = document.querySelector("#email");


let btn = document.querySelector('button');
btn.addEventListener('click', buttonClickHandler);

function buttonClickHandler(event) {
   let testP = regPhone.test(phone.value);
   let testN = regName.test(name.value);
   let testEm = regEmail.test(email.value);

   let phoneErr = document.querySelector('.phoneErr');
   let nameErr = document.querySelector('.nameErr');
   let emailErr = document.querySelector('.emailErr');

   if(!testP) {
       phoneErr.innerText = "Формат номера телефона +7(000)000-0000";
       phoneErr.classList.remove("hidden");
       phone.classList.add("red-border");
   } else {
       phoneErr.classList.add("hidden");
       phone.classList.remove("red-border");
   }

   if(!testN) {
       nameErr.innerText = "Имя должно содержать буквы А-Я";
       nameErr.classList.remove("hidden");
       name.classList.add("red-border");
    } else {
        nameErr.classList.add("hidden");
        name.classList.remove("red-border");
    }

    if(!testEm) {
        emailErr.innerText = "E-mail должен быть формата mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.";
        emailErr.classList.remove("hidden");
        email.classList.add("red-border");
     } else {
        emailErr.classList.add("hidden");
        email.classList.remove("red-border");
     }
}