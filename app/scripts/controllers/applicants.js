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
    // ApplicantCtrl
    function ApplicantCtrl($scope, $mdDialog, applicant) {

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

      $scope.applicant = applicant;

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.save = function() {
        $mdDialog.hide($scope.applicant);
      };
    } // ~ ApplicantCtrl

    // DeleteApplicantCtrl
    function DeleteApplicantCtrl($scope, $mdDialog, applicantName) {

      $scope.applicantName = applicantName;

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.delete = function() {
        $mdDialog.hide();
      };
    } // ~ DeleteApplicantCtrl

    $scope.showApplicantDialog = function(ev, applicantIndex) {
      $mdDialog.show({
        controller: ApplicantCtrl,
        templateUrl: 'applicant.html',
        targetEvent: ev,
        locals: {
          'applicant': $scope.selectApplicant(applicantIndex)
        }
      }).then(function(savedApplicant) {
        $scope.saveApplicant(applicantIndex, savedApplicant);
      });
    };

    $scope.deleteApplicantDialog = function(ev, applicantIndex) {
      $mdDialog.show({
        controller: DeleteApplicantCtrl,
        templateUrl: 'delete-applicant.html',
        targetEvent: ev,
        locals: {
          'applicantName': $scope.selectApplicant(applicantIndex).name
        }
      }).then(function() {
        $scope.deleteApplicant(applicantIndex);
      });
    };

    $scope.selectApplicant = function(applicantIndex) {
      var selectedApplicant = {};
      var countOfParentApplicants = $scope.appCtrl.application.applicants.length;
      if (applicantIndex >= 0 && applicantIndex < countOfParentApplicants) {
        selectedApplicant = $scope.appCtrl.application.applicants[applicantIndex];
      }
      return selectedApplicant;
    };

    $scope.saveApplicant = function(applicantIndex, savedApplicant) {
      var countOfParentApplicants = $scope.appCtrl.application.applicants.length;
      if (applicantIndex >= 0 && applicantIndex < countOfParentApplicants) {
        // Replace existing object in array
        $scope.appCtrl.application.applicants.splice(applicantIndex, 1);
        $scope.appCtrl.application.applicants.splice(applicantIndex, 0, savedApplicant);
      } else {
        // Add new object to array
        $scope.appCtrl.application.applicants.push(savedApplicant);
      }
    };

    $scope.deleteApplicant = function(applicantIndex) {
      var countOfParentApplicants = $scope.appCtrl.application.applicants.length;
      if (applicantIndex >= 0 && applicantIndex < countOfParentApplicants) {
        // Delete existing object in array
        $scope.appCtrl.application.applicants.splice(applicantIndex, 1);
      }
    };
  }]);
