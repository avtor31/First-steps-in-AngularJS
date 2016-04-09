'use strict';

var myApp=angular.module('myApp', []);
myApp.controller('phoneController', function($scope) {

    $scope.phones = [{
        name: 'Nokia Lumia 630',
        year: 2014,
        price: 200,
        company: {
            name: 'Nokia',
            country: '?????????'
        }
    },{
        name: 'Samsung Galaxy S 4',
        year: 2014,
        price: 400,
        company: {
            name: 'Samsung',
            country: '?????????? ?????'
        }
    },{
        name: 'Mi 5',
        year: 2015,
        price: 300,
        company: {
            name: 'Xiaomi',
            country: '?????'
        }
    }]
});