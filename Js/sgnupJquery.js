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

    const classArray = $(errorsTypes).map(function (index, item) {
        return 'error_' + item
    }).get().join(" ");
    console.log(classArray);
    //console.log(classArray.join(" "));


    let errorsFunctions = {
        blank: function (input) {
            if (!$(input).val()) {
                //let elParent = input.parentNode;
                //elParent.classList.add('has_errors', 'error_blank');
                $(input).parent().addClass('has_errors error_blank');  //???????????????????????????
                return false;
            }
            else {
                return true;
            }
        },
        validEmail: function (input) {
            const adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}$/i;
            if (adr_pattern.test($(input).val()) == false) {
                //let elParent = input.parentNode;
                //elParent.classList.add('has_errors', 'error_validEmail');
                $(input).parent().addClass('has_errors error_validEmail');
                return false;
            }
            else {
                return true;
            }
        },
        long: function (input) {
            if ($(input).val().length <= 3) {
                //let elParent = input.parentNode;
                //elParent.classList.add('has_errors', 'error_long');
                $(input).parent().addClass('has_errors error_long');
                return false;
            }
            else {
                return true;
            }
        },
        less: function (input) {
            if ($(input).val().length >= 10) {
                //let elParent = input.parentNode;
                //elParent.classList.add('has_errors', 'error_less');
                $(input).parent().addClass('has_errors error_less');
                return false;
            }
            else {
                return true;
            }
        },
        required: function (input) {
            if ($(input).val() === 'password') {
                //let elParent = input.parentNode;
                //elParent.classList.add('has_errors', 'error_required');
                $(input).parent().addClass('has_errors error_required');
                return false;
            }
            else {
                return true;
            }
        },
        confirmPassword: function (input) {
            if ($(password).val() !== $(input).val()) {
                //let elParent = input.parentNode;
                //elParent.classList.add('has_errors', 'error_confirmPassword');
                $(input).parent().addClass('has_errors error_confirmPassword');
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
        // $(elParent).parent('div').removeClass(...classArray);
        // $(elParent).parent('div').removeClass('has_errors');
        $(target).parent('div').removeClass(classArray);     //???????????????????????????
        $(target).parent('div').removeClass('has_errors');  //???????????????????????????
    }

    //form.addEventListener('input', removeErrors);
    $('#form').on('change', removeErrors);          //???????????????????????????


    function valid() {
        event.preventDefault();
        let errors = false;
        let error = false;

        // for (i = 0; i < containers.length; i++) {
        //     containers[i].classList.remove(...classArray);
        //     containers[i].classList.remove('has_errors');
        // }
        $('.fields').removeClass(classArray);
        $('.fields').removeClass('has_errors');





        // for (let i = 0; i < inputs.length; i++) {
        //     for (let j = 0; j < errorsTypes.length; j++) {
        //         if (inputs[i].getAttribute('data-errors').includes(errorsTypes[j])) {
        //             error = !errorsFunctions[errorsTypes[j]](inputs[i]);
        //             if (error == true) {
        //                 errors = true;
        //             }
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




        console.log(errors);
        if (!errors) {
            let obj = new Object();
            //obj.name = name.value;
            obj.name = $(name).val();
            //obj.lastName = lastName.value;
            obj.lastName = $(lastName).val();
            //obj.password = password.value;
            obj.password = $(password).val();
            //obj.email = email.value;
            obj.email = $(email).val();

            savelocalStorage(obj);

            window.location.assign("congSignUp.html");
        }

    }

});






