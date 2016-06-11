'use strict';

/**
 * @ngdoc function
 * @name pocApp.controller:PersonalInformationCtrl
 * @description
 * # PersonalInformationCtrl
 * Controller of the pocApp
 */
angular.module('pocApp')
  .controller('PersonalInformationCtrl', [function () {
    var self = this;

    this.phoneTypes = [
      {
        abbrev: 'mobile',
        nameLabel: 'FORM_MOBILE'
      },
      {
        abbrev: 'landline',
        nameLabel: 'FORM_LANDLINE'
      }
    ];

    self.addresses = [
      '12 Apostles Visitor Centre, Princetown, Victoria',
      '123 Queen Street, Melbourne, Victoria',
      '14 Mosig Court, Hampton Park, Victoria',
      '1000 Steps Carpark, C415, Ferny Creek, Victoria',
      '10 Verdun Drive, Narre Warren, Victoria',
      '125 Swanston Street, Melbourne, Victoria',
      '128 Princes Highway, Hallam, Victoria',
      '122 Fountain Drive, Narre Warren, Victoria'
    ];

    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(address) {
        return (address.indexOf(lowercaseQuery) > -1);
      };
    }

    function querySearch (query) {
      var results = query ? self.addresses.filter(createFilterFor(query)) : self.addresses;
      return results;
    }

    this.querySearch   = querySearch;
  }]);
