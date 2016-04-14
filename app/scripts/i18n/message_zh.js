'use strict';

(function() {
  var app = angular.module('pocApp');

  app.constant('MESSAGE_ZH', {
    LOGIN_USERNAME: '用户名',
    LOGIN_PASSWORD: '密码',

    FORM_EMAIL: '电子邮件',
    FORM_MOBILE: '手机号码',
    FORM_LANDLINE: '固定电话',
    FORM_SEARCH_ADDRESS: '搜索地址',
    FORM_POSTCODE: '邮编',
    FORM_SUBURB: '郊区',
    FORM_PROPERTY: '房产',
    FORM_BTN_NEXT: '下一页',
    FORM_BTN_PREVIOUS: '上一页',
    FORM_BTN_SUBMIT: '提交',

    FORM_VALIDATION_EMAIL_REQUIRED:'请输入电子邮件',
    FORM_VALIDATION_EMAIL_VALID: '无效的电子邮件',
    FORM_VALIDATION_AT_LEAST_ONE_PHONE: '请输入手机号或者固定电话'
  });
})();
