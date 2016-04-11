'use strict';

/**
 * @ngdoc overview
 * @name pocApp
 * @description
 * # pocApp
 *
 * Main module of the application.
 */
angular
  .module('pocApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'pascalprecht.translate',
    'ngMessages'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/step2', {
        templateUrl: 'views/step2.html',
        controller: 'Step2Ctrl',
        controllerAs: 'step2'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$translateProvider', 'MESSAGE_EN', 'MESSAGE_ZH',
              function($translateProvider, MESSAGE_EN, MESSAGE_ZH) {
                $translateProvider.translations('en-US', MESSAGE_EN);
                $translateProvider.translations('zh-CN', MESSAGE_ZH);

                $translateProvider.preferredLanguage('en-US');
                $translateProvider.useSanitizeValueStrategy('escaped');
              }])
  .controller('ApplicationCtrl', ['$scope', function ($scope) {
    $scope.application={};
  }]);
