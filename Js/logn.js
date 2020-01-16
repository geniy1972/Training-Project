let Btn = document.getElementById('btn');
Btn.addEventListener('click', valid);

function valid() {
    const name = document.getElementById('name');
    
    
    const password = document.getElementById('password');
    
    
    
    let messages = false;

    if (email.value === '' || email.value == null) {
        messages ='Email is required';
    }

    else if (email.value !== localStorage.EmailStorage) {
        messages = 'Email is incorrect';
    }


    else if (password.value === '' || password.value == null) {
        messages = 'Password is required';
    }

    else if (password.value !== localStorage.passwordStorage) {
        messages = 'Password is incorrect';
    }

    
    if (messages) {
        alert(messages);
    }

    else
        window.location.assign("congLogIn.html");
    
}


