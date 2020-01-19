// let Btn = document.getElementById('btn');
// Btn.addEventListener('click', valid);

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


    let errors = document.getElementsByClassName('name_error');


    let messages = false;

    if (!name.value) {
        //messages ='Name is required';
        errors[0].style.visibility = 'visible';
        return false;
    }

    else if (lastName.value === '' || lastName.value == null) {
        //messages ='Last Name is required';
        errors[1].style.visibility = 'visible';
        return false;
    }

    else if (adr_pattern.test(email.value) == false) {
        //messages = 'Email is incorrect';
        errors[2].style.visibility = 'visible';
        return false;
    }

    else if (password.value.length <= 3) {
        //messages = 'Password must be longer than 3 characters';
        errors[3].style.visibility = 'visible';
        return false;
    }

    else if (password.value.length >= 10) {
        //messages = 'Password must be less than 10 characters';
        errors[3].style.visibility = 'visible';
        errors[3].innerHTML = 'Password must be less than 10 characters';
        return false;

    }

    else if (password.value === 'password') {
        //messages = 'Password cannot be password';
        errors[3].style.visibility = 'visible';
        errors[3].innerHTML = 'Password cannot be password';
        return false;
    }

    else if (password.value !== confirmPassword.value) {
        //messages = 'Your password and confirmation password do not match.';
        errors[4].style.visibility = 'visible';
        errors[4].innerHTML = 'Your password and confirmation password do not match.';
        return false;
    }

    // if (messages) {
    //     alert(messages);
    // }

    else {
        savelocalStorage();

        window.location.assign("congSignUp.html");
    }
}


