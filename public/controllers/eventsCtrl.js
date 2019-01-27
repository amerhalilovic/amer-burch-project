app.controller("eventsCtrl", function ($scope, $http, $location) {

    $scope.get_Events= function(){
        $http({
            url: '/api/events',
            method: "GET",
        }).then(res => {
            $scope.events = res.data
        })
    }
});