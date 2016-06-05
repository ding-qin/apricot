'use strict';

describe('Controller: ApplicantsCtrl', function () {

  // load the controller's module
  beforeEach(module('pocApp'));

  var controller, applicationScope, applicantsScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    applicationScope = $rootScope.$new();
    applicationScope.application = {
      applicants: [
        {
          'name': 'Tom Cruise',
          'birthday': new Date('1980-10-05'),
          'country': 'AU',
          'zipcode': '3000'
        }
      ]
    };

    applicantsScope = applicationScope.$new();
    applicantsScope.appCtrl = applicationScope;
    controller = $controller('ApplicantsCtrl', {
      $scope: applicantsScope
    });

  }));

  it('should return expected applicant name for right index', function () {
    var selectedApplicant = applicantsScope.selectApplicant(0);
    expect(selectedApplicant.name).toBe('Tom Cruise');
  });

  it('should return undefined applicant name for wrong index', function () {
    var selectedApplicant = applicantsScope.selectApplicant(-1);
    expect(selectedApplicant.name).toBeUndefined();

    var selectedApplicant = applicantsScope.selectApplicant(100);
    expect(selectedApplicant.name).toBeUndefined();
  });

  it('should create new applicant', function () {
    var newApplicant = {
      'name': 'James',
      'birthday': new Date('1970-02-15'),
      'country': 'NZ',
      'zipcode': '3003'
    };

    var countOfOriginalApplicants = applicantsScope.appCtrl.application.applicants.length;
    applicantsScope.saveApplicant(-1, newApplicant);

    var countOfCurrentApplicants = applicantsScope.appCtrl.application.applicants.length;
    expect(countOfOriginalApplicants + 1).toEqual(countOfCurrentApplicants);

    var lastApplicant = applicantsScope.appCtrl.application.applicants[countOfCurrentApplicants - 1];
    expect(lastApplicant.name).toBe('James');
  });

  it('should update existing applicant', function () {
    var applicantIndex = 0;
    var selectedApplicant = applicantsScope.selectApplicant(applicantIndex);
    // Modify selectedApplicant
    var newName = 'New name';
    selectedApplicant.name = newName;

    var countOfOriginalApplicants = applicantsScope.appCtrl.application.applicants.length;
    applicantsScope.saveApplicant(applicantIndex, selectedApplicant);

    var countOfCurrentApplicants = applicantsScope.appCtrl.application.applicants.length;
    expect(countOfOriginalApplicants).toEqual(countOfCurrentApplicants);

    var lastApplicant = applicantsScope.appCtrl.application.applicants[applicantIndex];
    expect(lastApplicant.name).toBe(newName);
  });

  it('should delete selected applicant with right index', function() {
    var countOfOriginalApplicants = applicantsScope.appCtrl.application.applicants.length;
    applicantsScope.deleteApplicant(0);

    var countOfCurrentApplicants = applicantsScope.appCtrl.application.applicants.length;
    expect(countOfOriginalApplicants - 1).toEqual(countOfCurrentApplicants);
  });

  it('should delete nothing with wrong index', function() {
    var countOfOriginalApplicants = applicantsScope.appCtrl.application.applicants.length;
    applicantsScope.deleteApplicant(100);

    var countOfCurrentApplicants = applicantsScope.appCtrl.application.applicants.length;
    expect(countOfOriginalApplicants).toEqual(countOfCurrentApplicants);
  });
});
