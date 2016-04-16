var myApp=angular.module('myApp', []);
myApp.controller('QuestionController', function($scope, dataService) {

    $scope.question = dataService.question;

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
