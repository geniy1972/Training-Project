let Btn = document.getElementById('btn');
Btn.addEventListener('click', valid);

function valid() {
    const name = document.getElementById('name');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}$/i;
    
    let messages = false;

    if (name.value === '' || name.value == null) {
        messages ='Name is required';
    }

    else if (lastName.value === '' || lastName.value == null) {
        messages ='Last Name is required';
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
        localStorage.setItem("nameStorage", name.value);
        localStorage.setItem("passwordStorage", password.value);
        //window.location.assign("congSignUp.html");
        console.log(localStorage)

    }
}


