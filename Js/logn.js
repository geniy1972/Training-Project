let Btn = document.getElementById('btn');
Btn.addEventListener('click', valid);

function valid() {
    const name = document.getElementById('name');


    const password = document.getElementById('password');



    let messages = false;

    // if (email.value === '' || email.value == null) {
    //     messages = 'Email is required';
    // }

    // if (email.value !== localStorage.EmailStorage) {
    //     messages = 'Email is incorrect';
    // }

    let myArr = localStorage.savedUsersArray;
    for (let i = 0; i < myArr.length; i++) {
        if (email.value !== myArr[i].email) {
            messages = 'Email is incorrect';
        }
        else
            window.location.assign("congLogIn.html");
    }


    // else if (password.value === '' || password.value == null) {
    //     messages = 'Password is required';
    // }

    // else if (password.value !== localStorage.passwordStorage) {
    //     messages = 'Password is incorrect';
    // }


    if (messages) {
        alert(messages);
    }

    // else
    //     window.location.assign("congLogIn.html");

}



let array = [{ lastName: "Chernitskiy", password: "1111111", email: "1@tut.by" }, { lastName: "Chernitskiy2", password: "2111111", email: "2@tut.by" }, { lastName: "Chernitskiy3", password: "3222222", email: "3@tut.by" }];

array.forEach(function (item, i) {
    console.log(item.email);
})


