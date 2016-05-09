'use strict';

angular.module('expensesApp.auth', [
  'expensesApp.constants',
  'expensesApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
