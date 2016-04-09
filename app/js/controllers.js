'use strict';

var myApp=angular.module('myApp', []);
myApp.controller("parentController", function ($scope) {
    $scope.model={
        name: "Table",
        value: 'red'
    }
});
myApp.controller("firstChildController", function ($scope) {
    $scope.model={
        name: "Car",
        value: 'bmw'
    }
});
myApp.controller("secondChildController", function ($scope) {
});