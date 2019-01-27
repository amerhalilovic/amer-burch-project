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