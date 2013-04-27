'use strict';

var drunkenOctoAdventureApp = angular.module('drunkenOctoAdventureApp', ['firebase', 'ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
