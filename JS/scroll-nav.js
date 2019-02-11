/*jslint browser: true */
/*eslint-env browser */
/*global $ */
/*jslint white: true */
/* eslint-disable no-console */

$(document).ready(function(){
    $(window).scroll(function() {
        var hT = $('#scroll-to').offset().top,
            hH = $('#scroll-to').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        console.log((hT-wH) , wS);
        if (wS > (hT+hH-wH)){
            document.getElementById("hider").style.display = "block";
        }else{
            document.getElementById("hider").style.display = "none";
        }
    });
});

