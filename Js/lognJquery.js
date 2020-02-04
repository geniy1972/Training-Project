$(document).ready(function () {
    // let form = document.getElementById('form');
    // form.addEventListener('submit', valid);
    $('#formLogIn').on('submit', valid);

    //let email = document.getElementById('email');
    let email = $('#email_logIn');
    //let password = document.getElementById('password');
    let password = $('#password_logIn');

    //let containers = document.querySelectorAll('.fields');
    let containers = $('.fields');
    //let inputs = document.getElementsByClassName('field');
    let inputs = $('.field');  //all inputs

    const errorsTypes = ['blank', 'authentication'];

    // const classArray = errorsTypes.map(function (item) {
    //     return 'error_' + item
    // })
    const classArray = $(errorsTypes).map(function (index, item) {
        return 'error_' + item
    }).get().join(" ");
    console.log(classArray);

    let errorsFunctions = {
        blank: function (input) {
            if (!$(input).val()) {
                // let elParent = input.parentNode;
                // elParent.classList.add('has_errors', 'error_blank');
                $(input).parent().addClass('has_errors error_blank');
                return false;
            }
            else {
                return true;
            }
        },
        authentication: function (input) {
            if (!checkUsers()) {
                // let elParent = input.parentNode;
                // elParent.classList.add('has_errors', 'error_authentication');
                $(input).parent().addClass('has_errors error_authentication');
                return false;
            }
            else {
                return true;
            }
        }
    }


    function removeErrors(event) {
        let target, elParent;
        target = event.target;
        elParent = target.parentNode;
        // elParent.classList.remove(...classArray);
        // elParent.classList.remove('has_errors');
        $(target).parent('div').removeClass(classArray);
        $(target).parent('div').removeClass('has_errors');
    }

    //form.addEventListener('input', removeErrors);
    $('#formLogIn').on('change', removeErrors);


    function valid() {
        event.preventDefault();
        // let errors = false;
        // let error = false;


        // for (i = 0; i < containers.length; i++) {
        //     containers[i].classList.remove(...classArray);
        //     containers[i].classList.remove('has_errors');
        // }
        $('.fields').removeClass(classArray);
        $('.fields').removeClass('has_errors');


        // for (let i = 0; i < inputs.length; i++) {
        //     for (let j = 0; j < errorsTypes.length; j++) {
        //         if (inputs[i].getAttribute('data-errors').includes(errorsTypes[j])) {
        //             errorsFunctions[errorsTypes[j]](inputs[i]);
        //         }
        //     }
        // }
        $(inputs).each(function (i) {
            for (let j = 0; j < errorsTypes.length; j++) {
                if ($(this).attr('data-errors').includes(errorsTypes[j])) {
                    error = !errorsFunctions[errorsTypes[j]](inputs[i]);
                    if (error == true) {
                        errors = true;
                    }
                }
            }
        })


        // if (checkUsers(email.value, password.value)) {
        //     window.location.assign("congLogIn.html");
        // }
        if (checkUsers($(email).val(), $(password).val())) {
            window.location.assign("congLogIn.html");
        }
    }
})





