'use strict';

angular.module('pocApp')
  .controller('ToolbarCtrl', ['$scope', '$mdSidenav',
      function ($scope, $mdSidenav) {
        $scope.showSidebar = function() {
          $mdSidenav('left').toggle();
        };
    }]);
