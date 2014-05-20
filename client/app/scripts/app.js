'use strict';

angular
  .module('socketClientApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .when('/user/:id', {
        templateUrl: 'views/user-details.html',
        controller: 'UserDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
