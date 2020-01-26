
let form = document.getElementById('form');
form.addEventListener('submit', valid);


// let name = document.getElementById('name');
// let lastName = document.getElementById('lastName');
// let email = document.getElementById('email');
// let password = document.getElementById('password');
// let confirmPassword = document.getElementById('confirmPassword');
// const adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}$/i;


// let containers = document.querySelectorAll('.fields');
// let inputs = document.getElementsByClassName('field');




function valid() {

    event.preventDefault();
    //event.stopPropagation();

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
        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                for (let j = 0; j < containers.length; j++) {
                    containers[j].classList.add('has_errors');
                    //return false;
                }
                return false;
            }
            else {
                return true;
            }
        }
    }

    //Валидация формата Email
    function ValidateEmail() {
        //let adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}$/i;
        if (adr_pattern.test(email.value) == false) {
            for (let j = 0; j < containers.length; j++) {
                containers[j].classList.add('has_errors', 'error_notValidEmail');
            }
            return false;
        }
        else {
            return true;
        }
    }

    //Валидация на Short Password
    function ShortPassword() {
        if (password.value.length <= 3) {
            for (let j = 0; j < containers.length; j++) {
                containers[j].classList.add('has_errors', 'error_long');
            }
            return false;
        }
        else {
            return true;
        }
    }

    //Валидация на Long Password
    function LongPassword() {
        if (password.value.length >= 10) {
            for (let j = 0; j < containers.length; j++) {
                containers[j].classList.add('has_errors', 'error_less');
            }
            return false;
        }
        else {
            return true;
        }
    }

    //Валидация на Password != 'password'
    function Password() {
        if (password.value === 'password') {
            for (let j = 0; j < containers.length; j++) {
                containers[j].classList.add('has_errors', 'error_required');
            }
            return false;
        }
        else {
            return true;
        }
    }

    //Валидация на Password == confirmPassword
    function ConfirmPassword() {
        if (password.value !== confirmPassword.value) {
            for (let j = 0; j < containers.length; j++) {
                containers[j].classList.add('has_errors', 'error_confirmPassword');
            }
            return false;
        }
        else {
            return true;
        }
    }


    // function removeErrors() {
    //     //console.log(this)
    //     for (i = 0; i < containers.length; i++) {
    //         containers[i].classList.remove('has_errors', 'error_long', 'error_less', 'error_required', 'error_blank', 'error_confirmPassword');
    //         //classList.remove('has_errors', 'error_long', 'error_less', 'error_required', 'error_blank', 'error_confirmPassword', 'error_notValidEmail');
    //     }
    // }

    function removeErrors(event) {
        let target, elParent;
        target = event.target;
        elParent = target.parentNode;
        elParent.classList.remove('has_errors', 'error_long', 'error_less', 'error_required', 'error_blank', 'error_confirmPassword', 'error_notValidEmail')
    }

    form.addEventListener('input', removeErrors);

    // name.addEventListener('input', removeErrors);
    // lastName.addEventListener('input', removeErrors);
    // email.addEventListener('input', removeErrors);
    // password.addEventListener('input', removeErrors);
    // confirmPassword.addEventListener('input', removeErrors);


    for (i = 0; i < containers.length; i++) {
        containers[i].classList.remove('has_errors', 'error_long', 'error_less', 'error_required', 'error_blank', 'error_confirmPassword', 'error_notValidEmail');

    }

    for (let i = 0; i < inputs.length; i++) {
        console.log(inputs[i].getAttribute('data-errors'));
        if (inputs[i].getAttribute('data-errors') == 'blank') {
            checkFieldsPresence();
        }
        // else if (inputs[i].getAttribute('data-errors') == 'validEmail') {
        //     ValidateEmail();
        // }
        else if (inputs[i].getAttribute('data-errors') == 'long') {
            ShortPassword();
        }
    }








}


