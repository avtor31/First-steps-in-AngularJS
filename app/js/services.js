'use strict';

myApp.value('myValue', {view:"tiranozavrus", type:"rex"});

myApp.constant('PI', 3.14);

myApp.constant('myMath', {'PI': 3.14});

myApp.service('myService', function() {
    this.doIt = function(a) {
        console.log('call to service function doIt: ', a);
    }
})

myApp.provider("myProvider", function() {
    var provider = {};

    provider.$get = function() {
        var service = {};
        service.doService = function() {
            console.log("myProvider: Service Done!");
        }
        return service;
    }
    return provider;
});

myApp.factory('myFactory', function() {
    return 'myFactory called';
})

myApp.factory('dataFactory', function(){
    return{
        question:{
            text: 'Which framework is better to use?',
            author: 'Ivan Ivanov',
            date: '20/10/2013',
            answers:
                [{
                    text: 'AngularJS!',
                    author: 'Vova Sidorov',
                    date: '20/10/2013',
                    rate:2
                },{
                    text: 'AngularJS is the best',
                    author: 'Oleg Kuznetsov',
                    date: '20/10/2013',
                    rate:0
                },{
                    text: 'I prefer a knockout',
                    author: 'noname',
                    date: '21/10/2013',
                    rate:0
                }]
        }
    };
}


)

