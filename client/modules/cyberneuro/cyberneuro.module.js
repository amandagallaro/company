'use strict';

/**
 * CyberNeuro RT module for user profile and related content.
 */

angular
    .module('quantum-ventura-inc.cyberneuro', [
      'ngRoute',
      'quantum-ventura-inc.common'
    ])
    .config(function ($routeProvider) {
      $routeProvider
          .when('/cyberneuro', {
            title: 'CyberNeuro RT',
            template: '<cyberneuro></cyberneuro>',
            menuItem: 'cyberneuro'
          });
    });