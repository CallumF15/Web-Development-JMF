/*jslint browser: true */
/*eslint-env browser */
/*global $*/
/*jslint white: true */
/*exported scroll */
/* eslint-disable no-console */

$(document).ready( function() {
    changeClass();
});

$(window).resize(function () {
    changeClass();
});

function changeClass(){

    var viewportWidth = $(document).width();

    if (viewportWidth <= 768) {
        $("#nav1").removeClass("container").addClass("container-fluid");
    }else
        $("#nav1").removeClass("container-fluid").addClass("container");
}
