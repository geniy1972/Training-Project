let Btn = document.getElementById('btn');
Btn.addEventListener('click', valid);

function valid() {
    const name = document.getElementById('name');
    
    
    const password = document.getElementById('password');
    
    
    
    let messages = false;

    if (name.value === '' || name.value == null) {
        messages ='Name is required';
    }


    else if (password.value === '' || password.value == null) {
        messages = 'Password is required';
    }

    
    if (messages) {
        alert(messages);
    }

    else
        window.location.assign("congLogIn.html");
    
}


