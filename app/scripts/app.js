'use strict';

/**
 * @ngdoc overview
 * @name dndApp
 * @description
 * # dndApp
 *
 * Main module of the application.
 */
angular
  .module('dndApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/simplednd', {
        templateUrl: 'views/simplednd.html',
        controller: 'SimpleDndCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
