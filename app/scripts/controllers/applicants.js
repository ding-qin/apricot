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
    function ApplicantCtrl($scope, $mdDialog, application, applicantIndex) {
      
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
    } // ~ ApplicantCtrl

    // DeleteApplicantCtrl
    function DeleteApplicantCtrl($scope, $mdDialog, application, applicantIndex) {

      if (applicantIndex >= 0) {
        $scope.applicantName = application.applicants[applicantIndex].name;
      }

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.delete = function() {
        if (applicantIndex >= 0) {
          // Delete existing object in array
          application.applicants.splice(applicantIndex, 1);
        }

        $mdDialog.hide();
      };
    } // ~ DeleteApplicantCtrl

    $scope.parentApplication = $scope.appCtrl.application;

    $scope.showApplicant = function(ev, applicantIndex) {
      $mdDialog.show({
        controller: ApplicantCtrl,
        templateUrl: 'applicant.html',
        targetEvent: ev,
        locals: {
          'application': $scope.parentApplication,
          'applicantIndex': applicantIndex
        }
      });
    };

    $scope.deleteApplicant = function(ev, applicantIndex) {
      $mdDialog.show({
        controller: DeleteApplicantCtrl,
        templateUrl: 'delete-applicant.html',
        targetEvent: ev,
        locals: {
          'application': $scope.parentApplication,
          'applicantIndex': applicantIndex
        }
      });
    };

  }]);
