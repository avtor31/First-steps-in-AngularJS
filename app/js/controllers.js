var myApp=angular.module('myApp', []);
myApp.controller('QuestionController', function($scope, dataFactory, myValue, myMath, PI, myService, myProvider) {

    myProvider.doService();

    console.log("myMath.PI ", myMath.PI);
    myMath.PI = 5;
    console.log("myMath.PI ", myMath.PI);

    myService.doIt("I am myService and function doIt(..) was called.");
    var yourService = {};
    myService.doIt.bind(yourService, "I am yourService and function doIt(..) was called.")();

    $scope.question = dataFactory.question;

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

    $scope.injectedValue = myValue;

    console.log('$scope.injectedValue.view: ' + $scope.injectedValue.view + '; myValue: ' + myValue.type);
});
