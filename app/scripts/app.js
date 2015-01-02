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
        'ngTouch',
        'draganddrop'
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
            .when('/html5dnd', {
                templateUrl: 'views/html5dnd.html',
                controller: 'Html5DndCtrl'
            })
            .when('/simplednd', {
                templateUrl: 'views/simplednd.html',
                controller: 'SimpleDndCtrl'
            })
            .when('/ngrepeatdnd', {
                templateUrl: 'views/ngrepeatdnd.html',
                controller: 'NgrepeatDndCtrl'
            })
            .when('/angulardnd', {
                templateUrl: 'views/angulardnd.html',
                controller: 'AngularDnDCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
