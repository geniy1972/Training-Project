
let form = document.getElementById('form');
form.addEventListener('submit', valid);


let name = document.getElementById('name');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
//const adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}$/i;

let containers = document.querySelectorAll('.fields');
let inputs = document.getElementsByClassName('field');  //all inputs

const classArray = ['has_errors', 'error_notValidEmail', 'error_long', 'error_less', 'error_required', 'error_blank', 'error_confirmPassword'];
console.log(classArray);
console.log('---------');

const newClassArray = classArray.join('","');
console.log(newClassArray);
console.log('---------');
const newClassArray2 = '"' + newClassArray + '"';
console.log(newClassArray2);
console.log(typeof newClassArray);


const newClassArray3 = String(classArray);
console.log(newClassArray3);

console.log(typeof newClassArray3);

let errors = false;
console.log(errors);




//Валидация пустых полей
function checkFieldsPresence(input) {
    if (!input.value) {
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
    const adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}$/i;
    if (adr_pattern.test(input.value) == false) {
        let elParent = input.parentNode;
        elParent.classList.add('has_errors', 'error_notValidEmail');
        // errors = true;
        return false;
    }
    else {
        return true;
    }
}

//Валидация на Short Password
function ShortPassword(input) {
    if (password.value.length <= 3) {
        let elParent = input.parentNode;
        elParent.classList.add('has_errors', 'error_long');
        // errors = true;
        return false;
    }
    else {
        return true;
    }
}

//Валидация на Long Password
function LongPassword(input) {
    if (password.value.length >= 10) {
        let elParent = input.parentNode;
        elParent.classList.add('has_errors', 'error_less');
        // errors = true;
        return false;
    }
    else {
        return true;
    }
}

//Валидация на Password != 'password'
function Password(input) {
    if (password.value === 'password') {
        let elParent = input.parentNode;
        elParent.classList.add('has_errors', 'error_required');
        // errors = true;
        return false;
    }
    else {
        return true;
    }
}

//Валидация на Password == confirmPassword
function ConfirmPassword(input) {
    if (password.value !== confirmPassword.value) {
        let elParent = input.parentNode;
        elParent.classList.add('has_errors', 'error_confirmPassword');
        // errors = true;
        return false;
    }
    else {
        return true;
    }
}

function removeErrors(event) {
    let target, elParent;
    target = event.target;
    elParent = target.parentNode;
    elParent.classList.remove('has_errors', 'error_notValidEmail', 'error_long', 'error_less', 'error_required', 'error_blank', 'error_confirmPassword');
    // elParent.classList.remove(newClassArray2);
}

form.addEventListener('input', removeErrors);//вынести наверх


function valid() {


    event.preventDefault();

    for (i = 0; i < containers.length; i++) {
        containers[i].classList.remove('has_errors', 'error_notValidEmail', 'error_long', 'error_less', 'error_required', 'error_blank', 'error_confirmPassword');
        // containers[i].classList.remove(newClassArray2);
    }


    for (let i = 0; i < inputs.length; i++) {

        if (inputs[i].getAttribute('data-errors').includes('blank')) {
            checkFieldsPresence(inputs[i]);
        }
        if (inputs[i].getAttribute('data-errors').includes('validEmail')) {
            ValidateEmail(inputs[i]);
        }
        if (inputs[i].getAttribute('data-errors').includes('long')) {
            ShortPassword(inputs[i]);
        }
        if (inputs[i].getAttribute('data-errors').includes('less')) {
            LongPassword(inputs[i]);
        }
        if (inputs[i].getAttribute('data-errors').includes('required')) {
            Password(inputs[i]);
        }
        if (inputs[i].getAttribute('data-errors').includes('confirmPassword')) {
            ConfirmPassword(inputs[i]);
        }

    }


    console.log(errors);
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



