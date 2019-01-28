app.controller("dogsController",function($scope,$http){
$scope.dogs = [];
    $scope.get_Dogs = function(){
        $http({
            url: '/api/dogs',
            method: "GET",
        }).then(res => {
            
            $scope.dogs = res.data
        })
    }
    for(var i=0;i<$scope.dogs.length;i++)
    {if($scope.dogs[i].easyToTrain == 5)
    {
        $scope.dogs[i].easyToTrain= "Very easy, smart dog"
    } else if($scope.dogs[i].easyToTrain == 4){
        $scope.dogs[i].easyToTrain="Not so hard "
    } else if($scope.dogs[i].easyToTrain == 3) {
        $scope.dogs[i].easyToTrain="Normal"
    } else if ($scope.dogs[i].easyToTrain == 2 ) {
        $scope.dogs[i].easyToTrain="Hard"
    } else if ($scope.dogs[i].easyToTrain == 1)
    {
        $scope.dogs[i].easyToTrain="Very hard";
    }
    }

})