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

// let myArr = JSON.parse(localStorage.savedUsersArray);

// function checkEmail() {
//     for (let i = 0; i < myArr.length; i++) {
//         if (email.value != myArr[i].email) {
//             errors[0].style.visibility = 'visible';
//         }
//     }
// }

// function checkPassword() {
//     for (let i = 0; i < myArr.length; i++) {
//         if (password.value != myArr[i].password) {
//             errors[1].style.visibility = 'visible';
//         }
//     }
// }