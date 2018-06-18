/*jslint browser: true */
/*eslint-env browser */
/*global $, alert */
/*jslint white: true */

//$(document).ready(function () {
//    'use strict';
////    $('a').click(function () {
////        //removing the previous selected menu state
////        $('nav li').removeClass('active');
////        //adding the state for this parent menu
////        $(this).addClass('active');
////    });
//
//    var selector = 'nav li';
//
//    $(selector).click(function(){
//        $(selector).removeClass('active');
//        $(this).addClass('active');
//    });
//});

$(function() {
  $('a[data-toggle="tab"]').on('shown', function(e){
    //save the latest tab using a cookie:
    $.cookie('last_tab', $(e.target).attr('href'));
  });

  //activate latest tab, if it exists:
  var lastTab = $.cookie('last_tab');
    var selector = 'nav li';
  if (lastTab) {
      $('nav ul').children().removeClass('active');
      $('a[href='+ lastTab +']').parents('li:first').addClass('active');
      $('div.tab-content').children().removeClass('active');
      $(lastTab).addClass('active');
  }
});
