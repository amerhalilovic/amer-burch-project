var arr = angular.module("app")

app.controller("sendStoryCtrl", function ($scope, $http, $location) {
    $scope.nickname = "";
    $scope.text = "";

    $scope.submit = function(){
        if(!$scope.nickname || !$scope.text){
            alert("All fields are required")
        }else{
            $http({
                url: '/api/story',
                method: "POST",
                data: { 
                    'nick' : $scope.nickname,
                    "text": $scope.text,
                }
            }).then(res => {
                $location.path("/stories")
            })
        }
    }
});