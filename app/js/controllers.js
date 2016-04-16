var myApp=angular.module('myApp', []);
var myController1 = myApp.controller("myController", function($scope) {

    $scope.data = { time : new Date() };

    $scope.updateTime = function() {
        $scope.data.time = new Date();
    }
    $scope.watchedData = {value: 10};

    $scope.$watch(
        function(){
            return $scope.watchedData.value;
        },
        function(newVal, oldVal){
            console.log("$scope.watchedData oldVal: " + oldVal);
            document.getElementById('oldScreen').value = oldVal;
            console.log("$scope.watchedData newVal: " + newVal);
            document.getElementById('newScreen').value = newVal;
        }
    );

    document.getElementById("updateTimeButton")
        .addEventListener('click', function() {
            console.log("update time clicked");
            $scope.data.time = new Date();
        });
    document.getElementById("updateTimeButtonWithWatch")
        .addEventListener('click', function() {
            $scope.watchedData.value += $scope.watchedData.value;
            console.log("It was clicked update time - watch button and it change $scope.watchedData value to: "
                + $scope.watchedData.value);
            $scope.$digest();
        });
    document.getElementById("updateTimeButtonWithDigest")
        .addEventListener('click', function() {
            console.log("update time clicked");
            $scope.data.time = new Date();
            $scope.$digest();
        });
    document.getElementById("updateTimeButtonWithApply")
        .addEventListener('click', function() {
            $scope.$apply(function() {
                console.log("update time clicked");
                $scope.data.time = new Date();
            });
        });
});