app.controller("storyCtrl", function ($scope, $http) {

    $scope.editing = {
        id: "",
        text: ""
    };

    $scope.get_Storys= function(){
        $http({
            url: '/api/stories',
            method: "GET",
        }).then(res => {
            $scope.stories = res.data
        })
    }
    $scope.delete= function(id){
        $http({
            url:'/api/story/'+id,
            method: "DELETE"
        }).then(function(res){
            $scope.get_Storys();
            alert("Story deleted")
        })
    }
    $scope.edit = function(story){
        $scope.editing.id = story._id;
        $scope.editing.text = story.text;
    }
    $scope.confirm = function(){
        $http({
            url: '/api/story/'+$scope.editing.id,
            method: "PUT",
            data: { 
                "text": $scope.editing.text
            }
        }).then(function(res){
            $scope.get_Storys();
            alert("Story updated")
            $scope.editing = {
                id: "",
                text: ""
            };
        })
    }
});