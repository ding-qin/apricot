'use strict';

(function() {
  var app = angular.module('pocApp');

  app.constant('MESSAGE_EN', {
    LOGIN_USERNAME: 'Username',
    LOGIN_PASSWORD: 'Password',

    FOOTER: 'Nothing but a proof of concept',

    FORM_EMAIL: 'Email',
    FORM_MOBILE: 'Mobile Phone',
    FORM_LANDLINE: 'Landline',
    FORM_SEARCH_ADDRESS: 'Search for Address',
    FORM_POSTCODE: 'Postcode',
    FORM_SUBURB: 'Suburb',
    FORM_PROPERTY: 'Property',
    FORM_BTN_NEXT: 'Next',
    FORM_BTN_PREVIOUS: 'Previous',
    FORM_BTN_SUBMIT: 'Submit',

    FORM_VALIDATION_EMAIL_REQUIRED:'Please enter email',
    FORM_VALIDATION_EMAIL_VALID: 'Invalid email',
    FORM_VALIDATION_AT_LEAST_ONE_PHONE: 'Please enter either mobile or landline'
  });
})();
