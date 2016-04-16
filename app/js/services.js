'use strict';

myApp.factory('dataService', function(){
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
})

