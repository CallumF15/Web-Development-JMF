/*jslint browser: true */
/*eslint-env browser */
/*global $, alert */
/*jslint white: true */

$(document).ready(function () {
    'use strict';
//    $('a').click(function () {
//        //removing the previous selected menu state
//        $('nav li').removeClass('active');
//        //adding the state for this parent menu
//        $(this).addClass('active');
//    });

    var selector = 'nav li';

    $(selector).click(function(){
        $(selector).removeClass('active');
        $(this).addClass('active');
    });
});

