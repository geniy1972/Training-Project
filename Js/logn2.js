
let form = document.getElementById('form');
form.addEventListener('submit', valid);

let email = document.getElementById('email');

let password = document.getElementById('password');

let containers = document.querySelectorAll('.fields');

let inputs = document.getElementsByClassName('field');


function valid() {
    event.preventDefault();

    if (checkUsers(email.value, password.value)) {
        window.location.assign("congLogIn.html");
    }
    else {
        // вывод ошибки

        for (i = 0; i < containers.length; i++) {
            containers[i].classList.remove('has_errors', 'error_authentication', 'error_blank');
        }

        function removeErrors() {
            for (i = 0; i < containers.length; i++) {
                containers[i].classList.remove('has_errors', 'error_authentication', 'error_blank');
            }
        }

        email.addEventListener('input', removeErrors);
        password.addEventListener('input', removeErrors);


        if (!email.value) {
            containers[0].classList.add('has_errors', 'error_blank');
            inputs[0].focus();
            return false;

        }
        else if (!password.value) {
            containers[1].classList.add('has_errors', 'error_blank');
            inputs[1].focus();
            return false;
        }

        if (!checkUsers()) {
            containers[0].classList.add('has_errors', 'error_authentication');
            containers[1].classList.add('has_errors', 'error_authentication');
            return false;
        }

    }

}



