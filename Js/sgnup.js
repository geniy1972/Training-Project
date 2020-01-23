
let form = document.getElementById('form');
form.addEventListener('submit', valid);

function valid() {

    event.preventDefault();

    let name = document.getElementById('name');
    let lastName = document.getElementById('lastName');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword');
    const adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}$/i;


    let containers = document.querySelectorAll('.fields');
    let inputs = document.getElementsByClassName('field');

    // let generateError = function (text) {
    //     for (i = 0; i < containers.length; i++) {
    //         containers[i].classList.add('has_errors');
    //     }
    //     let error = document.createElement('div')
    //     error.className = 'error'
    //     error.style.color = 'red'
    //     error.innerHTML = text
    //     return error
    // }

    //

    //Валидация пустых полей
    function checkFieldsPresence() {
        for (var i = 0; i < fields.length; i++) {
            if (!inputs[i].value) {
                console.log('field is blank', inputs[i])
                return false;
            }
            else {
                return true;
            }
        }
    }

    //Валидация формата Email
    function ValidateEmail() {
        let adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}$/i;
        if (adr_pattern.test(email.value) == false) {
            return false;
        }
        else {
            return true;
        }
    }

    //Валидация на Short Password
    function ShortPassword() {
        if (password.value.length <= 3) {
            return false;
        }
        else {
            return true;
        }
    }

    //Валидация на Long Password
    function LongPassword() {
        if (password.value.length >= 10) {
            return false;
        }
        else {
            return true;
        }
    }

    //Валидация на Password != 'password'
    function Password() {
        if (password.value === 'password') {
            return false;
        }
        else {
            return true;
        }
    }

    //Валидация на Password == confirmPassword
    function ConfirmPassword() {
        if (password.value !== confirmPassword.value) {
            return false;
        }
        else {
            return true;
        }
    }


    function removeErrors() {
        for (i = 0; i < containers.length; i++) {
            containers[i].classList.remove('has_errors', 'error_long', 'error_less', 'error_required', 'error_blank', 'error_confirmPassword');
        }
    }

    function

        name.addEventListener('input', removeErrors);
    lastName.addEventListener('input', removeErrors);
    email.addEventListener('input', removeErrors);
    password.addEventListener('input', removeErrors);
    confirmPassword.addEventListener('input', removeErrors);


    for (i = 0; i < containers.length; i++) {
        containers[i].classList.remove('has_errors', 'error_long', 'error_less', 'error_required', 'error_blank', 'error_confirmPassword');
    }

    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            console.log('field is blank', inputs[i])
            for (j = 0; j < containers.length; j++) {
                containers[j].classList.add('has_errors', 'error_long', 'error_blank');
            }

        }

    }

    // for (i = 0; i < containers.length; i++) {
    //     containers[i].classList.remove('has_errors', 'error_long', 'error_less', 'error_required', 'error_blank', 'error_confirmPassword');
    // }

    // function removeErrors() {
    //     for (i = 0; i < containers.length; i++) {
    //         containers[i].classList.remove('has_errors', 'error_long', 'error_less', 'error_required', 'error_blank', 'error_confirmPassword');
    //     }
    // }
    // name.addEventListener('input', removeErrors);
    // lastName.addEventListener('input', removeErrors);
    // email.addEventListener('input', removeErrors);
    // password.addEventListener('input', removeErrors);
    // confirmPassword.addEventListener('input', removeErrors);


    // if (!name.value) {
    //     containers[0].classList.add('has_errors');
    //     inputs[0].focus();
    //     return false;
    // }

    // else if (!lastName.value) {
    //     containers[1].classList.add('has_errors');
    //     inputs[1].focus();
    //     return false;
    // }

    // else if (adr_pattern.test(email.value) == false) {
    //     containers[2].classList.add('has_errors');
    //     inputs[2].focus();
    //     return false;
    // }

    // else if (password.value.length <= 3) {

    //     containers[3].classList.add('has_errors', 'error_long');
    //     inputs[3].focus();
    //     return false;
    // }

    // else if (password.value.length >= 10) {

    //     containers[3].classList.add('has_errors', 'error_less');
    //     inputs[3].focus();
    //     return false;
    // }

    // else if (password.value === 'password') {
    //     containers[3].classList.add('has_errors', 'error_required');
    //     inputs[3].focus();
    //     return false;
    // }

    // else if (!confirmPassword.value) {
    //     containers[4].classList.add('has_errors', 'error_blank');
    //     inputs[4].focus();
    //     return false;
    // }

    // else if (password.value !== confirmPassword.value) {
    //     containers[4].classList.add('has_errors', 'error_confirmPassword');
    //     inputs[4].focus();
    //     return false;
    // }


    // else {
    //     let obj = new Object();
    //     obj.name = name.value;
    //     obj.lastName = lastName.value;
    //     obj.password = password.value;
    //     obj.email = email.value;

    //     savelocalStorage(obj);

    //     window.location.assign("congSignUp.html");
    // }
}


