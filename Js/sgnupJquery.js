$(document).ready(function () {

    // let form = document.getElementById('form');
    // form.addEventListener('submit', valid);
    $('#form').on('submit', valid);


    //let name = document.getElementById('name');
    let name = $('#name');
    //let lastName = document.getElementById('lastName');
    let lastName = $('#lastName');
    //let email = document.getElementById('email');
    let email = $('#email');
    //let password = document.getElementById('password');
    let password = $('#password');
    //let confirmPass = document.getElementById('confirmPassword');
    let confirmPass = $('#confirmPassword');
    //const adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}$/i;

    //let containers = document.querySelectorAll('.fields');
    let containers = $('.fields');
    console.log(containers);
    //let inputs = document.getElementsByClassName('field');  //all inputs
    let inputs = $('.field');  //all inputs
    console.log(inputs);

    const errorsTypes = ['blank', 'validEmail', 'long', 'less', 'required', 'confirmPassword'];

    // const classArray = errorsTypes.map(function (item) {
    //     return 'error_' + item
    // })

    const classArray = $(errorsTypes).map(function (item) {
        return 'error_' + item
    })
    console.log(classArray);

    let errorsFunctions = {
        blank: function (input) {
            if (!$('input').val()) {
                //let elParent = input.parentNode;
                //elParent.classList.add('has_errors', 'error_blank');
                $('input').parent().addClass('has_errors', 'error_blank');
                return false;
            }
            else {
                return true;
            }
        },
        validEmail: function (input) {
            const adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}$/i;
            if (adr_pattern.test($('input').val()) == false) {
                //let elParent = input.parentNode;
                //elParent.classList.add('has_errors', 'error_validEmail');
                $('input').parent().addClass('has_errors', 'error_validEmail');
                return false;
            }
            else {
                return true;
            }
        },
        long: function (input) {
            if ($(password).val().length <= 3) {
                //let elParent = input.parentNode;
                //elParent.classList.add('has_errors', 'error_long');
                $('input').parent().addClass('has_errors', 'error_long');
                return false;
            }
            else {
                return true;
            }
        },
        less: function (input) {
            if ($(password).val().length >= 10) {
                //let elParent = input.parentNode;
                //elParent.classList.add('has_errors', 'error_less');
                $('input').parent().addClass('has_errors', 'error_less');
                return false;
            }
            else {
                return true;
            }
        },
        required: function (input) {
            if ($(password).val() === 'password') {
                //let elParent = input.parentNode;
                //elParent.classList.add('has_errors', 'error_required');
                $('input').parent().addClass('has_errors', 'error_required');
                return false;
            }
            else {
                return true;
            }
        },
        confirmPassword: function (input) {
            if ($(password).val() !== $(confirmPass).val()) {
                //let elParent = input.parentNode;
                //elParent.classList.add('has_errors', 'error_confirmPassword');
                $('input').parent().addClass('has_errors', 'error_confirmPassword');
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
        //elParent.classList.remove(...classArray);
        //elParent.classList.remove('has_errors');
        $(elParent).parent().removeClass(...classArray);
        $(elParent).parent().removeClass('has_errors');
    }

    //form.addEventListener('input', removeErrors);
    $('#form').on('change', removeErrors);          //???????????????????????????


    function valid() {
        event.preventDefault();
        let errors = false;
        let error = false;

        for (i = 0; i < containers.length; i++) {
            containers[i].classList.remove(...classArray);
            containers[i].classList.remove('has_errors');
        }


        for (let i = 0; i < inputs.length; i++) {
            for (let j = 0; j < errorsTypes.length; j++) {
                if (inputs[i].getAttribute('data-errors').includes(errorsTypes[j])) {
                    error = !errorsFunctions[errorsTypes[j]](inputs[i]);
                    if (error == true) {
                        errors = true;
                    }
                }
            }
        }


        console.log(errors);
        if (!errors) {
            let obj = new Object();
            obj.name = name.value;
            obj.lastName = lastName.value;
            obj.password = password.value;
            obj.email = email.value;

            savelocalStorage(obj);

            window.location.assign("congSignUp.html");
        }

    }

});






