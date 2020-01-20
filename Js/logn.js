// let Btn = document.getElementById('btn');
// Btn.addEventListener('click', valid);

let form = document.getElementById('form');
form.addEventListener('submit', valid);


function valid() {
    event.preventDefault();

    let email = document.getElementById('email');

    let password = document.getElementById('password');



    if (checkUsers(email.value, password.value)) {
        window.location.assign("congLogIn.html");
    }
    else {
        // вывод ошибки
    }

}



