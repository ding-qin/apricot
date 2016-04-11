'use strict';

/**
 * @ngdoc function
 * @name pocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pocApp
 */
angular.module('pocApp')
  .controller('MainCtrl', ['$scope', '$location',
              function ($scope, $location) {
    $scope.title='step1';

    $scope.validate = function(url) {
      var isMobileInvalid = angular.isUndefined($scope.$parent.application.primaryContact.mobile) || $scope.$parent.application.primaryContact.mobile === '';
      var isLandlineInvalid = angular.isUndefined($scope.$parent.application.primaryContact.landline) || $scope.$parent.application.primaryContact.landline === '';
      if (isMobileInvalid && isLandlineInvalid) {
        $scope.step1Form.mobile.$setValidity('atleastone', false);
        $scope.step1Form.landline.$setValidity('atleastone', false);
      } else {
        $scope.step1Form.mobile.$setValidity('atleastone', true);
        $scope.step1Form.landline.$setValidity('atleastone', true);
        $location.path(url);
      }
    };

    $scope.$watch('$parent.application.primaryContact.mobile', function(newValue, oldValue) {
      if (newValue !== '') {
        $scope.step1Form.mobile.$setValidity('atleastone', true);
        $scope.step1Form.landline.$setValidity('atleastone', true);
      }
    });

    $scope.$watch('$parent.application.primaryContact.landline', function(newValue, oldValue) {
      if (newValue !== '') {
        $scope.step1Form.landline.$setValidity('atleastone', true);
        $scope.step1Form.mobile.$setValidity('atleastone', true);
      }
    });
  }]);
