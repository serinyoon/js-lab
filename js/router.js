var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
    templateUrl: './partials/home.html'
  }).
  when('/dragdrop', {
    templateUrl: './partials/dragdrop.html'
  });
}]);