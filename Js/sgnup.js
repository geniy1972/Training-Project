
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



    for (i = 0; i < containers.length; i++) {
        containers[i].classList.remove('has_errors', 'error_long', 'error_less', 'error_required', 'error_blank', 'error_confirmPassword');
    }

    function removeErrors() {
        for (i = 0; i < containers.length; i++) {
            containers[i].classList.remove('has_errors', 'error_long', 'error_less', 'error_required', 'error_blank', 'error_confirmPassword');
        }
    }
    name.addEventListener('input', removeErrors);
    lastName.addEventListener('input', removeErrors);
    email.addEventListener('input', removeErrors);
    password.addEventListener('input', removeErrors);
    confirmPassword.addEventListener('input', removeErrors);


    if (!name.value) {
        containers[0].classList.add('has_errors');
        inputs[0].focus();
        return false;
    }

    else if (!lastName.value) {
        containers[1].classList.add('has_errors');
        inputs[1].focus();
        return false;
    }

    else if (adr_pattern.test(email.value) == false) {
        containers[2].classList.add('has_errors');
        inputs[2].focus();
        return false;
    }

    else if (password.value.length <= 3) {

        containers[3].classList.add('has_errors', 'error_long');
        inputs[3].focus();
        return false;
    }

    else if (password.value.length >= 10) {

        containers[3].classList.add('has_errors', 'error_less');
        inputs[3].focus();
        return false;
    }

    else if (password.value === 'password') {
        containers[3].classList.add('has_errors', 'error_required');
        inputs[3].focus();
        return false;
    }

    else if (!confirmPassword.value) {
        containers[4].classList.add('has_errors', 'error_blank');
        inputs[4].focus();
        return false;
    }

    else if (password.value !== confirmPassword.value) {
        containers[4].classList.add('has_errors', 'error_confirmPassword');
        inputs[4].focus();
        return false;
    }


    else {
        let obj = new Object();
        obj.name = name.value;
        obj.lastName = lastName.value;
        obj.password = password.value;
        obj.email = email.value;

        savelocalStorage(obj);

        window.location.assign("congSignUp.html");
    }
}


