
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


    let errors = document.getElementsByTagName('span');
    let inputs = document.getElementsByClassName('field');

    if (!name.value) {
        errors[0].classList.add('name_error');
        inputs[0].classList.add('inputs');
        return false;
    }

    else if (lastName.value === '' || lastName.value == null) {
        errors[1].classList.add('name_error');
        inputs[1].classList.add('inputs');
        return false;
    }

    else if (adr_pattern.test(email.value) == false) {
        errors[2].classList.add('name_error');
        inputs[2].classList.add('inputs');
        return false;
    }

    else if (password.value.length <= 3) {
        errors[3].classList.add('name_error');
        inputs[3].classList.add('inputs');
        return false;
    }

    else if (password.value.length >= 10) {
        errors[3].classList.add('name_error');
        errors[3].innerHTML = 'Password must be less than 10 characters';
        inputs[3].classList.add('inputs');
        return false;

    }

    else if (password.value === 'password') {
        errors[3].classList.add('name_error');
        errors[3].innerHTML = 'Password cannot be password';
        inputs[3].classList.add('inputs');
        return false;
    }

    else if (password.value !== confirmPassword.value) {
        errors[4].classList.add('name_error');
        errors[4].innerHTML = 'Your password and confirmation password do not match.';
        inputs[4].classList.add('inputs');
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


