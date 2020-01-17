let Btn = document.getElementById('btn');
Btn.addEventListener('click', valid);




function valid() {



    let name = document.getElementById('name');
    let lastName = document.getElementById('lastName');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword');
    const adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}$/i;


    let errors = document.getElementsByClassName('name_error');

    let messages = false;

    if (name.value === '' || name.value == null) {
        //messages ='Name is required';
        errors[0].style.visibility = 'visible';
    }

    else if (lastName.value === '' || lastName.value == null) {
        //messages ='Last Name is required';
        errors[1].style.visibility = 'visible';
    }

    else if (adr_pattern.test(email.value) == false) {
        messages = 'Email is incorrect';
    }

    else if (password.value.length <= 6) {
        messages = 'Password must be longer than 6 characters';
    }

    else if (password.value.length >= 20) {
        messages = 'Password must be less than 20 characters';
    }

    else if (password.value === 'password') {
        messages = 'Password cannot be password';
    }

    else if (password.value !== confirmPassword.value) {
        messages = 'Your password and confirmation password do not match.';
    }

    if (messages) {
        alert(messages);
    }

    else {
        savelocalStorage();

        window.location.assign("congSignUp.html");
    }
}

