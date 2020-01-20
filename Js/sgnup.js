
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

    if (!name.value) {
        //errors[0].style.visibility = 'visible';
        errors[0].classList.add('name_error');

        //name.style.border = "1px solid red";
        return false;
    }

    else if (lastName.value === '' || lastName.value == null) {
        errors[1].classList.add('name_error');
        //lastName.style.border = "1px solid red";
        return false;
    }

    else if (adr_pattern.test(email.value) == false) {
        errors[2].classList.add('name_error');
        //email.style.border = "1px solid red";
        return false;
    }

    else if (password.value.length <= 3) {
        //messages = 'Password must be longer than 3 characters';
        errors[3].classList.add('name_error');
        //password.style.border = "1px solid red";
        return false;
    }

    else if (password.value.length >= 10) {
        //messages = 'Password must be less than 10 characters';
        errors[3].classList.add('name_error');
        errors[3].innerHTML = 'Password must be less than 10 characters';
        //password.style.border = "1px solid red";
        return false;

    }

    else if (password.value === 'password') {
        //messages = 'Password cannot be password';
        errors[3].classList.add('name_error');
        errors[3].innerHTML = 'Password cannot be password';
        password.style.border = "1px solid red";
        return false;
    }

    else if (password.value !== confirmPassword.value) {
        //messages = 'Your password and confirmation password do not match.';
        errors[4].classList.add('name_error');
        errors[4].innerHTML = 'Your password and confirmation password do not match.';
        confirmPassword.style.border = "1px solid red";
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


