'use strict';

(function() {
  var app = angular.module('pocApp');

  app.constant('MESSAGE_ZH', {
    LANGUAGE: '语言',

    SIDEBAR_PERSONAL_INFORMATION: '个人信息',
    SIDEBAR_APPLICANTS: '申请人',

    FORM_EMAIL: '电子邮件 *',
    FORM_MOBILE: '手机号码',
    FORM_LANDLINE: '固定电话',
    FORM_ADDRESS: '联系地址 *',
    FORM_POSTCODE: '邮编',
    FORM_SUBURB: '郊区',
    FORM_PROPERTY: '房产',
    FORM_BTN_SUBMIT: '提交',
    FORM_NAME: '名字',
    FORM_BIRTHDAY: '生日',
    FORM_COUNTRY: '国家',
    FORM_ZIPCODE: '邮政编码',

    FORM_VALIDATION_EMAIL:'请输入10到50位长度的电子邮件',
    FORM_VALIDATION_AT_LEAST_ONE_PHONE: '请输入手机号或者固定电话',

    FORM_COUNTRY_AU: '澳大利亚',
    FORM_COUNTRY_NZ: '新西兰'
  });
})();
