'use strict';

/**
 * @ngdoc function
 * @name pocApp.controller:ApplicationCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the pocApp
 */
angular.module('pocApp')
  .controller('ApplicationCtrl', ['$scope', '$cookies',
    function ($scope, $cookies) {
    // When refresh the page, check whether cookie contains the reserved model
    this.application=$cookies.getObject('ap-application');
    if (this.application === undefined) {
      this.application = {
        applicants: [
          {
            'name': 'Tom Cruise',
            'birthday': new Date('1980-10-05'),
            'country': 'AU',
            'zipcode': '3000'
          }
        ]
      };
    }

    // Child controller could call this function on the input changes
    // to save model on client side.
    var app = this;
    this.saveOnClientSide = function() {
      $cookies.putObject('ap-application', app.application);
    };

  }]);
