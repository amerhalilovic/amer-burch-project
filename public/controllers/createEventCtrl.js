var arr = angular.module("app")

app.controller("createEventCtrl", function ($scope, $http, $location) {
    $scope.organisator = "";
    $scope.address = "";
    $scope.date = "";

    $scope.submit = function(){
        if(!$scope.organisator || !$scope.address || !$scope.date){
            alert("All fields are required")
        }else{
            $http({
                url: '/api/event',
                method: "POST",
                data: { 
                    'organisator' : $scope.organisator,
                    "adresa": $scope.address,
                    "date": $scope.date
                }
            }).then(res => {
                $location.path("/events")
            })
        }
    }
});