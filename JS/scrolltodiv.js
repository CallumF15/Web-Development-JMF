/*jslint browser: true */
/*eslint-env browser */
/*global $*/
/*jslint white: true */
/*exported scroll */

$( "#services-navigation .service-box" ).click(function() {

    var element = document.getElementById('myDiv');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });

});


$( ".services-side-bar .service-extension" ).click(function() {
    document.getElementById('myDiv').scrollIntoView();
});
