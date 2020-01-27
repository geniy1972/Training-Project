
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
    let inputs = document.getElementsByClassName('field');  //all inputs

    let errors = false;



    //Валидация пустых полей
    function checkFieldsPresence(input) {

        if (!input.value) {
            // for (let j = 0; j < containers.length; j++) {
            //     containers[j].classList.add('has_errors', 'error_blank');
            //     return false;
            // }
            // let target, elParent;
            // target = event.target;
            let elParent = input.parentNode;
            elParent.classList.add('has_errors', 'error_blank');
            errors = true;
            return false;

        }
        else {
            return true;
        }

    }



    //Валидация формата Email
    function ValidateEmail(input) {
        //let adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}$/i;
        if (adr_pattern.test(email.value) == false) {
            // for (let j = 0; j < containers.length; j++) {
            //     containers[j].classList.add('has_errors', 'error_notValidEmail');
            //     return false;
            // }

            let elParent = input.parentNode;
            elParent.classList.add('has_errors', 'error_notValidEmail');
            errors = true;
            return false;
        }
        else {
            return true;
        }
    }



    //Валидация на Short Password
    function ShortPassword(input) {
        if (password.value.length <= 3) {
            // for (let j = 0; j < containers.length; j++) {
            //     containers[j].classList.add('has_errors', 'error_long');
            //     return false;
            // }
            // let target, elParent;
            // target = event.target;
            let elParent = input.parentNode;
            elParent.classList.add('has_errors', 'error_long');
            errors = true;
            return false;

            //return false;
        }
        else {
            return true;
        }
    }


    //Валидация на Long Password
    function LongPassword(input) {
        if (password.value.length >= 10) {
            // for (let j = 0; j < containers.length; j++) {
            //     containers[j].classList.add('has_errors', 'error_less');
            //     return false;
            // }
            // let target, elParent;
            // target = event.target;
            let elParent = input.parentNode;
            elParent.classList.add('has_errors', 'error_less');
            errors = true;
            return false;
        }
        else {
            return true;
        }
    }


    //Валидация на Password != 'password'
    function Password(input) {
        if (password.value === 'password') {
            // for (let j = 0; j < containers.length; j++) {
            //     containers[j].classList.add('has_errors', 'error_required');
            //     return false;
            // }
            // let target, elParent;
            // target = event.target;
            let elParent = input.parentNode;
            elParent.classList.add('has_errors', 'error_required');
            errors = true;
            return false;

        }
        else {
            return true;
        }
    }


    //Валидация на Password == confirmPassword
    function ConfirmPassword() {
        if (password.value !== confirmPassword.value) {
            // for (let j = 0; j < containers.length; j++) {
            //     containers[j].classList.add('has_errors', 'error_confirmPassword');
            //     return false;
            // }
            let target, elParent;
            target = event.target;
            elParent = target.parentNode;
            elParent.classList.add('has_errors', 'error_confirmPassword');
            errors = true;
            return false;

        }
        else {
            return true;
        }
    }


    for (i = 0; i < containers.length; i++) {
        containers[i].classList.remove('has_errors', 'error_notValidEmail', 'error_long', 'error_less', 'error_required', 'error_blank', 'error_confirmPassword');
    }


    function removeErrors(event) {
        let target, elParent;
        target = event.target;
        elParent = target.parentNode;
        elParent.classList.remove('has_errors', 'error_notValidEmail', 'error_long', 'error_less', 'error_required', 'error_blank', 'error_confirmPassword')
    }

    form.addEventListener('input', removeErrors);

    // name.addEventListener('input', removeErrors);
    // lastName.addEventListener('input', removeErrors);
    // email.addEventListener('input', removeErrors);
    // password.addEventListener('input', removeErrors);
    // confirmPassword.addEventListener('input', removeErrors);





    for (let i = 0; i < inputs.length; i++) {
        console.log(inputs[i].getAttribute('data-errors'));
        if (inputs[i].getAttribute('data-errors').includes('blank')) {
            checkFieldsPresence(inputs[i]);
        }

        else if (inputs[i].getAttribute('data-errors').includes('validEmail')) {
            ValidateEmail(inputs[i]);
        }
        else if (inputs[i].getAttribute('data-errors').includes('long')) {
            ShortPassword(inputs[i]);
        }
        else if (inputs[i].getAttribute('data-errors').includes('less')) {
            LongPassword(inputs[i]);
        }
        else if (inputs[i].getAttribute('data-errors').includes('required')) {
            Password(inputs[i]);
        }
        else if (inputs[i].getAttribute('data-errors').includes('confirmPassword')) {
            ConfirmPassword(inputs[i]);
        }
    }



    if (!errors) {
        let obj = new Object();
        obj.name = name.value;
        obj.lastName = lastName.value;
        obj.password = password.value;
        obj.email = email.value;

        savelocalStorage(obj);

        window.location.assign("congSignUp.html");
    }


}


