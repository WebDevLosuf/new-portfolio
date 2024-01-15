$(function () {
    const form = $('#form');
    const answer = $('#answer');

    form.validate({
        rules: {
            name: {
                required: true
            },
            tel: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: 'The field cannot be empty'
            },
            tel: {
                required: 'Enter your phone number',
                
            },
            message: {
                required: 'The field cannot be empty'
            }
        },
        submitHandler: ajaxFormSubmit
    });

    function ajaxFormSubmit() {
        const string = form.serialize();

        $.ajax({
            type: 'POST',
            url: '../php/mail.php',
            data: string,
            success: function (html) {
                form.slideUp(800);
                answer.html(html);
            }
        });

        return false;
    }
});