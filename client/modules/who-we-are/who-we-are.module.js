'use strict';

/**
 * Who we are module for user profile and related content.
 */

angular
    .module('quantum-ventura-inc.who-we-are', [
      'ngRoute',
      'quantum-ventura-inc.common'
    ])
    .config(function ($routeProvider) {
      $routeProvider
          .when('/who-we-are', {
            title: 'Who We Are',
            template: '<who-we-are></who-we-are>',
            menuItem: 'who-we-are'
          });
    });