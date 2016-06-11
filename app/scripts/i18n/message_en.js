'use strict';

(function() {
  var app = angular.module('pocApp');

  app.constant('MESSAGE_EN', {
    LANGUAGE: 'Language',

    SIDEBAR_PERSONAL_INFORMATION: 'Personal Information',
    SIDEBAR_APPLICANTS: 'Applicants',

    FORM_EMAIL: 'Email *',
    FORM_MOBILE: 'Mobile Phone',
    FORM_LANDLINE: 'Landline',
    FORM_PHONE: 'Phone Number',
    FORM_ADDRESS: 'Address *',
    FORM_POSTCODE: 'Postcode',
    FORM_SUBURB: 'Suburb',
    FORM_PROPERTY: 'Property',
    FORM_NAME: 'Name',
    FORM_BIRTHDAY: 'Birthday',
    FORM_COUNTRY: 'Country',
    FORM_ZIPCODE: 'Zip Code',
    FORM_DRIVER_LICENSE: 'Driver License',
    FORM_PRIVACY_CONSENT: 'Do you consent for us to check your credit history with external agencies?',

    FORM_VALIDATION_EMAIL:'Your email must be between 10 and 50 characters long and look like an e-mail address.',
    FORM_VALIDATION_AT_LEAST_ONE_PHONE: 'Please enter either mobile or landline',
    FORM_VALIDATION_ADDRESS: 'Please enter valid address',

    FORM_COUNTRY_AU: 'Australia',
    FORM_COUNTRY_NZ: 'New Zealand',

    FORM_BTN_SUBMIT: 'Submit',
    FORM_BTN_CANCEL: 'Cancel',
    FORM_BTN_SAVE: 'Save',
    FORM_BTN_DELETE: 'Delete',

    DIALOG_DELETE_APPLICANT: 'Are you sure to delete '
  });
})();
