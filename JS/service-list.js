/*jslint browser: true*/
/*eslint-env browser*/
/*global angular*/
/*jslint white: true*/
 /*exported AdminController */
 /*jshint unused:false*/

var myApp = angular.module('ngjmf', []);

myApp.controller('AdminController', function($scope){
    'use strict';
    $scope.items = ['Loft Conversions', 'Decking and Fencing','Conservatories','Fitted Kitchens',
                   'Roofing'];
    $scope.AddItem = function() {
        $scope.items.push($scope.newItem);
    }
});

//function AdminController($scope){
//    'use strict';
//    $scope.items = ['cabbage', 'umbrella', 'steam train'];
//    $scope.AddItem = function() {
//        $scope.items.push($scope.newItem);
//    }
//}



