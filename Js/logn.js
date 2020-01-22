
let form = document.getElementById('form');
form.addEventListener('submit', valid);

let email = document.getElementById('email');

let password = document.getElementById('password');

let containers = document.querySelectorAll('.fields');
let errors = document.getElementsByTagName('span');
let inputs = document.getElementsByClassName('field');

// inputs[0].onblur = function () {
//     if (!email.value) {
//         inputs[0].classList.add('error-inputs');
//         errors[0].classList.add('name_error');
//         inputs[0].focus();

//     }
//     else {
//         inputs[0].classList.remove('error-inputs');
//         errors[0].classList.remove('name_error');
//     }
// }

// inputs[1].onblur = function () {
//     if (!password.value) {
//         inputs[1].classList.add('error-inputs');
//         errors[1].classList.add('name_error');
//         inputs[1].focus();
//     }
//     else {
//         inputs[1].classList.remove('error-inputs');
//         errors[1].classList.remove('name_error');
//     }
// }

function valid() {
    event.preventDefault();


    if (checkUsers(email.value, password.value)) {
        window.location.assign("congLogIn.html");
    }
    else {
        // вывод ошибки

        for (i = 0; i < containers.length; i++) {
            containers[i].classList.remove('has_errors');
        }

        function removeErrors() {
            for (i = 0; i < inputs.length; i++) {
                inputs[i].classList.remove('error-inputs');
            }
            for (i = 0; i < containers.length; i++) {
                containers[i].classList.remove('has_errors');
            }
        }

        for (i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('change', removeErrors);
        }

        if (!email.value) {
            //inputs[0].classList.add('error-inputs');
            containers[0].classList.add('has_errors');
            inputs[0].focus();
            return false;

        }
        else if (!password.value) {
            // inputs[1].classList.add('error-inputs');
            containers[1].classList.add('has_errors');
            inputs[1].focus();
            return false;
        }

        if (!checkUsers()) {
            containers[0].classList.add('has_errors');
            errors[0].innerHTML = 'Email or Password is incorrect';
            // inputs[0].classList.add('error-inputs');
            containers[1].classList.add('has_errors');
            errors[1].innerHTML = 'Email or Password is incorrect';
            // inputs[1].classList.add('error-inputs');
        }

    }

}



