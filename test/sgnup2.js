

let form = document.querySelector('.formWithValidation');
let validateBtn = form.querySelector('.validateBtn');
let email = document.getElementById('email');
let password = form.querySelector('.password');
let passwordConfirmation = form.querySelector('.passwordConfirmation');
let fields = form.querySelectorAll('.field');
const adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}$/i;




let generateError = function (text) {

    let error = document.createElement('div')
    error.className = 'error'
    error.style.color = 'red'
    error.innerHTML = text;
    return error
}


let removeValidation = function () {
    let errors = form.querySelectorAll('.error')
    for (let i = 0; i < errors.length; i++) {
        errors[i].remove()
    }
}



let checkFieldsPresence = function () {
    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            //console.log('field is blank', fields[i])
            let error = generateError('Cannot be blank');

            form[i].parentElement.insertBefore(error, fields[i])
            return false;
        }
        else {
            return true;
        }
    }
}

// let checkEmail = function () {
//     if (adr_pattern.test(email.value) == false) {
//         //console.log('Email is incorrect')
//         let error = generateError('Email is incorrect')
//         console.log(error)
//         email.parentElement.insertBefore(error, email)
//     }
// }

let checkPasswordMatch = function () {
    if (password.value !== passwordConfirmation.value) {
        //console.log('not equals')
        let error = generateError('Password does not match')
        //console.log(error)
        password.parentElement.insertBefore(error, password)
        return false;
    }
    else {
        return true;
    }
}

function savelocalStorage() {
    let obj = new Object();

    let objArray = localStorage.getItem('savedUsersArray');
    if (!objArray) {
        objArray = [];
    }
    else {
        objArray = JSON.parse(objArray);
    }

    obj.name = name.value;
    obj.lastName = lastName.value;
    obj.password = password.value;
    obj.email = email.value;

    objArray.push(obj);

    localStorage.setItem("savedUsersArray", JSON.stringify(objArray));
}



form.addEventListener('submit', function () {
    event.preventDefault();

    removeValidation();

    //checkFieldsPresence()

    // checkEmail()

    if (checkPasswordMatch() && checkFieldsPresence()) {
        savelocalStorage();
    }




    //window.location.assign("congSignUp.html");



})