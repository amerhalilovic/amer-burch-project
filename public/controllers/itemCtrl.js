app.controller("itemsCtrl", function ($scope, $http) {

    $scope.get_Items= function(){
        $http({
            url: '/api/items',
            method: "GET",
        }).then(res => {
            
            $scope.items = res.data
        })
    }
});