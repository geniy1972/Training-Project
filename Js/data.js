let objArray = localStorage.getItem('savedUsersArray');
if (!objArray) {
    objArray = [];
}
else {
    objArray = JSON.parse(objArray);
}

function savelocalStorage(obj) {
    objArray.push(obj);
    localStorage.setItem("savedUsersArray", JSON.stringify(objArray));
}

function checkUsers(email, password) {
    //let myArr = JSON.parse(localStorage.savedUsersArray);

    for (let i = 0; i < objArray.length; i++) {
        if (email == objArray[i].email && password == objArray[i].password) {
            return true;
        }
    }
    return false;
}

