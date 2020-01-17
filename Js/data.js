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