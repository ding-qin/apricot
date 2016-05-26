'use strict';

/**
 * @ngdoc function
 * @name pocApp.controller:PersonalInformationCtrl
 * @description
 * # PersonalInformationCtrl
 * Controller of the pocApp
 */
angular.module('pocApp')
  .controller('PersonalInformationCtrl', ['$scope',
              function ($scope) {
    $scope.title = 'personal information';
    //this.parentApplication = this.application;
  }]);
