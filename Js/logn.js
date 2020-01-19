// let Btn = document.getElementById('btn');
// Btn.addEventListener('click', valid);

let form = document.getElementById('form');
form.addEventListener('submit', valid);


function valid() {

    let email = document.getElementById('email');

    let password = document.getElementById('password');

    let errors = document.getElementsByClassName('name_error');



    //let messages = false;

    // if (email.value === '' || email.value == null) {
    //     messages = 'Email is required';
    // }

    let myArr = JSON.parse(localStorage.savedUsersArray);

    for (let i = 0; i < myArr.length; i++) {
        if (email.value != myArr[i].email) {
            errors[0].style.visibility = 'visible';
            return false;
        }

        else if (password.value !== myArr[i].password) {
            //messages = 'Password is incorrect';
            errors[1].style.visibility = 'visible';
            return false;
        }
        else {
            window.location.assign("congLogIn.html");
        }

    }

    // if (email.value !== myArr) {
    //     //messages = 'Email is incorrect';
    //     errors[0].style.visibility = 'visible';
    //     return false;
    // }

    // else if (email.value === '' || email.value == null) {
    //     //messages = 'Email is required';
    //     errors[0].style.visibility = 'visible';
    //     errors[0].innerHTML = 'Email is required';
    //     return false;
    // }

    // else if (password.value === '' || password.value == null) {
    //     //messages = 'Password is required';
    //     errors[1].style.visibility = 'visible';
    //     errors[1].innerHTML = 'Password is required';
    //     return false;
    // }

    // else if (password.value !== myArr) {
    //     //messages = 'Password is incorrect';
    //     errors[1].style.visibility = 'visible';
    //     return false;
    // }


    // else
    //     window.location.assign("congLogIn.html");


    // if (messages) {
    //     alert(messages);
    // }


}


// email.addEventListener('input', checkEmail);


// password.addEventListener('input', checkPassword);

