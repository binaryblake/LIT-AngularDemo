'use strict';

angular.module('angularExample', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'directions'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('directions', {
        url: '/directions',
        templateUrl: 'app/components/directions/directions.html',
        controller: 'directionsCtrl',
        controllerAs: 'directions'
      });

    $urlRouterProvider.otherwise('/');
  })
;
