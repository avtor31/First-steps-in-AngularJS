var myApp=angular.module('myApp', []);
myApp.controller('QuestionController', function($scope) {

    $scope.question={
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
    };

    $scope.sortparam = '-rate';

    $scope.voteUp = function (answer){
        answer.rate++;
    };

    $scope.voteDown = function (answer){
        answer.rate--;
    };

    $scope.questColorClass= "questcolor";

    $scope.changeClass = function (e) {
        $scope.questColorClass = e.type == "mouseenter" ? "questselectedcolor" : "questcolor";
        console.log("questColorClass: " + $scope.questColorClass);
        console.log("event type: " + e.type);
    }
});