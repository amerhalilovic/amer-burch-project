const app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "./views/home.html"
  })
  .when("/events", {
    templateUrl: "./views/events.html"
  })
  .when("/createEvent", {
    templateUrl: "./views/createEvent.html"
  })
  .when("/dogs", {
    templateUrl: "./views/dogs.html"
  })
  .when("/stories", {
    templateUrl: "./views/stories.html"
  })
  .when("/sendStory", {
    templateUrl: "./views/sendStory.html"
  })
  .when("/rehoming", {
    templateUrl: "./views/rehoming.html"
  })
  .when("/items", {
    templateUrl: "./views/items.html"
  })
});
/*app.config(['$routeProvider',
  function config($routeProvider) {
    $routeProvider.
      when('/', {
        template: '<h1>eo me brete</h1>'
      })
      otherwise('/');
  }
]);*/
    
//app.config(function($routeProvider) {
  //$routeProvider
  //.when("/", {
  //  templateUrl : "./views/home.html"
  //})
  /*.when("/rehoming", {
    templateUrl : "rehoming.html"
  })
  .when("/storie", {
    templateUrl : "storie.html"
  }).when("/items", {
    templateUrl : "items.html"
  })
  .when("/dogs", {
    templateUrl : "dogs.html"
  }).when("/sendstorie",{
    templateUrl:"sendstori.html"
  })*/
  //.otherwise({redirectTo: '/'});

  /*$locationProvider.html5Mode({
        enabled:true,
        requireBase:false
  });*/
//});