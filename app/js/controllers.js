var myApp=angular.module('myApp', []);
myApp.controller('phoneController', function($scope) {

    $scope.phones = [{
        name: 'Nokia Lumia 630',
        year: 2014,
        price: 200,
        company: 'Nokia'
    },{
        name: 'Samsung Galaxy S 4',
        year: 2014,
        price: 400,
        company: 'Samsung'
    },{
        name: 'Mi 5',
        year: 2015,
        price: 300,
        company: 'Xiaomi'
    }];
    $scope.tablets = [{
        name: 'Samsung Galaxy Tab S4',
        year: 2014,
        price: 300,
        company: 'Samsung'
    },{
        name: 'LG G PAD 8.3',
        year: 2013,
        price: 180,
        company: 'LG'
    },{
        name: 'IdeaTab A8',
        year: 2014,
        price: 220,
        company: 'Lenovo'
    }];
    $scope.data = {};
    //Expression to evaluate when a new partial is loaded
    $scope.setFile = function () {
        if($scope.data.mode=='Tablets')
            return 'partial/tabletsList.html';
        else if($scope.data.mode=='Phones')
            return 'partial/phonesList.html';
    };
    $scope.modes = [{
        value: 'Tablets',
        label: 'Tablets'
    },{
        value: 'Phones',
        label: 'Phones'
    }];
});