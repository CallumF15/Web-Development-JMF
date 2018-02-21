/*jslint browser: true */
/*eslint-env browser */
/*global $, alert */
/*jslint white: true */

$(document).ready(function () {
    'use strict';
    $('a').click(function () {
        //removing the previous selected menu state
        $('nav').find('li.active').removeClass('active');
        //adding the state for this parent menu
        $(this).parents("li").addClass('active');
    });
});
