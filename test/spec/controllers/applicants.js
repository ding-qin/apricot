'use strict';

describe('Controller: ApplicantsCtrl', function () {

  // load the controller's module
  beforeEach(module('pocApp',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'pascalprecht.translate',
    'ngMessages',
    'ngMaterial'));

  var controller, scope, mockDialog;

  beforeEach(inject(function($$q, $animate, $injector) {
    mockDialog = $injector.get('$mdDialog');

    // Spy on animation effects.
    spyOn($animate, 'leave').and.callFake(function(element) {
      element.remove();
      return $$q.when();
    });
    spyOn($animate, 'enter').and.callFake(function(element, parent) {
      parent.append(element);
      return $$q.when();
    });
  }));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$mdDialog_) {
    scope = $rootScope.$new();
    controller = $controller('ApplicantsCtrl', {
      $scope: scope,
      $mdDialog: _$mdDialog_
    });
    $rootScope.$apply();
  }));

  it('should show pop up to create new applicant', function () {

  });
});
