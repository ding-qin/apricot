'use strict';

angular.module('pocApp')
  .controller('I18nCtrl', ['$scope','$window','$translate',
      function ($scope, $window, $translate) {
        this.languages = [
          {name:'English', abbrev:'en-US'},
          {name:'中文', abbrev:'zh-CN'}
        ];
        this.selectedLanguage = 'en-US';

        var language = $window.navigator.userLanguage || $window.navigator.language;
        if (language.indexOf('zh') === 0) {
          this.selectedLanguage = 'zh-CN';
        }
        $translate.use(this.selectedLanguage);
        
        this.changeLanguage = function() {
          $translate.use(this.selectedLanguage);
        };

      }]);
