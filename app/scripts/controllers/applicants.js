'use strict';

/**
 * @ngdoc function
 * @name pocApp.controller:ApplicantsCtrl
 * @description
 * # ApplicantsCtrl
 * Controller of the pocApp
 */
angular.module('pocApp')
  .controller('ApplicantsCtrl', ['$scope', '$mdDialog', function ($scope, $mdDialog) {

    function DialogController($scope, $mdDialog, application, applicantIndex) {
      console.log('==> applicantIndex:', applicantIndex);

      if (applicantIndex >= 0) {
        $scope.applicant = application.applicants[applicantIndex];
      }

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.save = function() {
        if (applicantIndex >= 0) {
          // Replace existing object in array
          application.applicants.splice(applicantIndex, 1);
          application.applicants.splice(applicantIndex, 0, $scope.applicant);
        } else {
          // Add new object to array
          application.applicants.push($scope.applicant);
        }

        $mdDialog.hide();
      };

      $scope.countries = [
        {
          'abbrev': 'AU',
          'nameLabel': 'FORM_COUNTRY_AU'
        },
        {
          'abbrev': 'NZ',
          'nameLabel': 'FORM_COUNTRY_NZ'
        }
      ];
    }

    $scope.parentApplication = $scope.appCtrl.application;

    $scope.showAdd = function(ev, applicantIndex) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'applicant.html',
        targetEvent: ev,
        locals: {
          'application': $scope.parentApplication,
          'applicantIndex': applicantIndex
        }
      });
    };

  }]);
