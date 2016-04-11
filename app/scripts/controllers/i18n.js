'use strict';

angular.module('pocApp')
  .controller('I18nCtrl', ['$scope','$window','$translate',
      function ($scope, $window, $translate) {
        var language = $window.navigator.userLanguage || $window.navigator.language;
        $scope.radioModel = 'en-US';
        $translate.use($scope.radioModel);
        $scope.region = 'America';
        if (language.indexOf('zh') === 0) {
          $scope.radioModel = 'zh-CN';
          $scope.region = 'China';
        }

        $scope.changeLanguage = function(langKey) {
          $translate.use(langKey);
          if (langKey.indexOf('zh') === 0) {
            $scope.region = 'China';
          } else {
            $scope.region = 'America';
          }
        };

      }]);
