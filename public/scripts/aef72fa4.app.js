'use strict';

var drunkenOctoAdventureApp = angular.module('drunkenOctoAdventureApp', ['firebase', 'ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/gift-for-baby-carlie', {
        templateUrl: 'views/gift-for-baby-carlie.html',
        controller: 'Gift-For-Baby-CarlieCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
