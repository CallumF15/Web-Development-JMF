/*jslint browser: true */
/*eslint-env browser */
/*global $, console, alert */
/*jslint white: true */

$.validator.setDefaults({

    errorElement: "span",
    errorClass: "help-block",
    highlight: function(element) {
        'use strict';
        var child = ':nth-child(1)';
        $(element).parent().children(child).is('.is-valid, .is-invalid')  ?
            $(element).parent().children(child).removeClass('is-valid').addClass('is-invalid') :
        $(element).parent().children(child).addClass('is-invalid');
    },
    unhighlight: function(element) {
        'use strict';
        var child = ':nth-child(1)';
        $(element).parent().children(child).is('.is-valid, .is-invalid')  ?
            $(element).parent().children(child).removeClass('is-invalid').addClass('is-valid') :
        $(element).parent().children(child).addClass('is-valid');
    },
    errorPlacement: function (error, element) {
        'use strict';
        if (element.prop('type') === 'checkbox' || element.prop('type') === 'radio') {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});
$("#contactform").validate({
    rules: {
        'email': {
            required: true,
            maxlength: 200
        },
        'phone': {
            required: true,
            rangelength: [11,11]
        },
        'comment': {
            required: true,
            rangelength: [10, 500]
        }
    },
    messages: {
        'phone': {
            required: "Enter your phone number.",
            maxlength: "Your phone number cannot exceed 11 characters"
        },
        'email': {
            required: "Enter your email.",
            maxlength: "Your email cannot exceed 200 characters"
        },
        'comment': {
            required: "Please enter your message.",
            maxlength: "Your message cannot exceed 200 words"
        }
    }

});

