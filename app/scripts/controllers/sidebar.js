'use strict';

angular.module('pocApp')
  .controller('SidebarCtrl', ['$scope', '$cookies', '$location',
    function ($scope, $cookies, $location) {
      // Highligh the menu option based on the link.
      $scope.selectItem = function(clickedLink) {
        for (var i=0; i<$scope.menu.length; i++) {
          var item = $scope.menu[i];
          if (item.link === clickedLink) {
            item.isSelected = true;
          } else {
            item.isSelected = false;
          }
        }
        // Save the menu object to cookie to reserve the click status.
        $cookies.putObject('ap-menu', $scope.menu);
      };

      // First check whether cookie contains the menu object when refreshing the page.
      $scope.menu = $cookies.getObject('ap-menu');
      if ($scope.menu === undefined) {
        // Set default menu object if no cookie available
        $scope.menu = [
          {
            link: '#/',
            icon: 'person',
            titleLabel: 'SIDEBAR_PERSONAL_INFORMATION',
            isSelected: true
          },
          {
            link: '#/applicants',
            icon: 'group',
            titleLabel: 'SIDEBAR_APPLICANTS',
            isSelected: false
          }
        ];

        // If url is not the root url, menu highlighting is done via below code.
        var path = $location.path();
        if (path !== '' && path !== '/') {
          $scope.selectItem('#' + path);
        }
      }

    }]);
