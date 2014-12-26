'use strict';

/**
 * @ngdoc function
 * @name dndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dndApp
 */
angular.module('dndApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
