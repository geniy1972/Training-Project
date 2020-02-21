
let form = document.getElementById('form');
form.addEventListener('submit', valid);

let email = document.getElementById('email');
let password = document.getElementById('password');

let containers = document.querySelectorAll('.fields');
let inputs = document.getElementsByClassName('field');

const errorsTypes = ['blank', 'authentication'];

const classArray = errorsTypes.map(function (item) {
    return 'error_' + item
})

let errorsFunctions = {
    blank: function (input) {
        if (!input.value) {
            let elParent = input.parentNode;
            elParent.classList.add('has_errors', 'error_blank');
            return false;
        }
        else {
            return true;
        }
    },
    authentication: function (input) {
        if (!checkUsers()) {
            let elParent = input.parentNode;
            elParent.classList.add('has_errors', 'error_authentication');
            return false;
        }
        else {
            return true;
        }
    }
}


function removeErrors(event) {
    let target, elParent;
    target = event.target;
    elParent = target.parentNode;
    elParent.classList.remove(...classArray);
    elParent.classList.remove('has_errors');
}

form.addEventListener('input', removeErrors);


function valid() {
    event.preventDefault();
    // let errors = false;
    // let error = false;


    for (i = 0; i < containers.length; i++) {
        containers[i].classList.remove(...classArray);
        containers[i].classList.remove('has_errors');
    }


    for (let i = 0; i < inputs.length; i++) {
        for (let j = 0; j < errorsTypes.length; j++) {
            if (inputs[i].getAttribute('data-errors').includes(errorsTypes[j])) {
                errorsFunctions[errorsTypes[j]](inputs[i]);
            }
        }
    }


    if (checkUsers(email.value, password.value)) {
        window.location.assign("congLogIn.html");
    }

}



