/*jslint browser: true */
/*eslint-env browser */
/*global $, alert */
/*jslint white: true */

$('.ontop nav li').click(function(){
    'use strict';
    $('.ontop nav li').removeClass('active');
    $(this).addClass('active');
});

$('nav navbar-nav li').click(function(){
    'use strict';
    $('nav navbar-nav li').removeClass('active');
    $(this).addClass('active');
});
