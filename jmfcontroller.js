/*jslint browser: true*/
/*eslint-env browser*/
/*global angular*/
/*jslint white: true*/

var myJmfApp = angular.module('ngjmf', []);

myJmfApp.controller('jmfcontroller', function($scope){
    'use strict';
    $scope.hello = 'hello world!';
    });
