$(document).ready(function () {

    $('#formSignUp').on('submit', valid);
    $('#formLogIn').on('submit', valid_login);

    let name = $('#name');

    let lastName = $('#lastName');

    let email = $('#email');

    let password = $('#password');

    let confirmPass = $('#confirmPassword');

    let containers = $('.fields');

    let inputs = $('.signup .field');  //all inputs
    let inputs_login = $('.signin .field');

    let email_logIn = $('#email_logIn');
    let password_logIn = $('#password_logIn');

    const errorsTypes = ['blank', 'validEmail', 'long', 'less', 'required', 'confirmPassword', 'authentication'];

    const classArray = $(errorsTypes).map(function (index, item) {
        return 'error_' + item
    }).get().join(" ");
    //console.log(classArray);

    let out = document.getElementById('out');

    let errorsFunctions = {
        blank: function (input) {
            if (!$(input).val()) {
                $(input).parent().addClass('has_errors error_blank');
                return false;
            }
            else {
                return true;
            }
        },
        validEmail: function (input) {
            const adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}$/i;
            if (adr_pattern.test($(input).val()) == false) {
                $(input).parent().addClass('has_errors error_validEmail');
                return false;
            }
            else {
                return true;
            }
        },
        long: function (input) {
            if ($(input).val().length <= 3) {
                $(input).parent().addClass('has_errors error_long');
                return false;
            }
            else {
                return true;
            }
        },
        less: function (input) {
            if ($(input).val().length >= 10) {
                $(input).parent().addClass('has_errors error_less');
                return false;
            }
            else {
                return true;
            }
        },
        required: function (input) {
            if ($(input).val() === 'password') {
                $(input).parent().addClass('has_errors error_required');
                return false;
            }
            else {
                return true;
            }
        },
        confirmPassword: function (input) {
            if ($(password).val() !== $(input).val()) {
                $(input).parent().addClass('has_errors error_confirmPassword');
                return false;
            }
            else {
                return true;
            }
        },
        authentication: function (input) {
            if (!checkUsers($(email_logIn).val(), $(password_logIn).val())) {
                $(input).parent().addClass('has_errors error_authentication');
                return false;
            }
            else {
                return true;
            }
        }
    }

    function fadeOutElement(elementOut, elementIn) {
        // $(elementOut).fadeOut(2000)
        // $(elementIn).fadeIn(2000);
        $(elementOut).fadeOut(2000, function () {
            $(elementIn).fadeIn(2000);
        });
    }

    let logInForm = $('.signin');
    let signUpForm = $('.signup');
    let congLogIn = $('.congLogIn')
    let congSignUp = $('.congSignUp')


    $(document).on('click', '#logIn', function () {
        // $(signUpForm).fadeOut(2000, function () {
        //     $(logInForm).fadeIn(2000);
        // });
        fadeOutElement(signUpForm, logInForm)
    })

    $(document).on('click', '#logInPage', function () {
        fadeOutElement(congSignUp, logInForm)
    })

    $(document).on('click', '#signUp', function () {
        // $(logInForm).fadeOut(2000, function () {
        //     $(signUpForm).fadeIn(2000);
        // });
        fadeOutElement(logInForm, signUpForm)
    })

    function removeErrors(event) {
        let target, elParent;
        target = event.target;
        elParent = target.parentNode;
        $(target).parent('div').removeClass(classArray);
        $(target).parent('div').removeClass('has_errors');
    }

    $('#formSignUp').on('change', removeErrors);
    $('#formLogIn').on('change', removeErrors);


    //



    function valid() {
        event.preventDefault();
        let errors = false;
        let error = false;

        $('.fields').removeClass(classArray);
        $('.fields').removeClass('has_errors');


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

            console.log(consistUsers());
            if (consistUsers()) {
                return false;
            }

            else {
                savelocalStorage(obj);
                //window.location.assign("congSignUp.html");
                $(signUpForm).fadeOut(2000, function () {
                    $('.congSignUp').fadeIn(2000);
                });
            }


        }

    }

    function valid_login() {
        event.preventDefault();

        // let errors_login = false;
        // let error_login = false;

        $('.fields').removeClass(classArray);
        $('.fields').removeClass('has_errors');



        $(inputs_login).each(function (i) {
            for (let j = 0; j < errorsTypes.length; j++) {
                if ($(this).attr('data-errors').includes(errorsTypes[j])) {
                    //error_login = !errorsFunctions[errorsTypes[j]](inputs_login[i]);
                    errorsFunctions[errorsTypes[j]](inputs_login[i]);
                    // if (error_login == true) {
                    //     errors_login = true;
                    // }
                }
            }
        })



        if (checkUsers($(email_logIn).val(), $(password_logIn).val())) {
            //window.location.assign("congLogIn.html");

            fadeOutElement(logInForm, congLogIn);


            $(logInForm).fadeOut(2000, function () {
                $(congLogIn).fadeIn(2000);

                // for (let i = 0; i < objArray.length; i++) {
                //     $.each(objArray[i], function (key, value) {
                //         $('#out').append(key + ": " + value + "<br>");
                //     })
                //     $('#out').append("<br>");
                // }

                // $.each(objArray, function (obj, data) {
                //     $.each(data, function (key, value) {
                //         $('#out').append(key + ": " + value + "<br>")
                //     })
                //     $('#out').append("<br>");
                // })

                // $.each(objArray, function (obj, data) {
                //     $.each(data, function (key, value) {
                //         $('#out').append(key + ": " + value + "<br>")
                //     })
                //     $('#out').append("<br>");
                // })


                let table = $('#table');
                let tr = $('<tr></tr>');
                let caption = $('<caption><h2>List of Users</h2></caption>')

                $.each(objArray[0], function (key, value) {
                    let th = $('<th></th>');
                    $(th).text(key)
                    $(tr).append(th);
                })
                $(table).append(tr);

                $.each(objArray, function (obj, data) {
                    let tr = $('<tr></tr>');

                    $.each(data, function (key, value) {
                        let td = $('<td></td>');
                        $(td).text(value)
                        $(tr).append(td);
                    })
                    $(table).append(caption);
                    $(table).append(tr);
                })

            });

        }

    }

});






