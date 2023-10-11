'use strict';

/**
 * E-RECOV module for related content.
 */

angular
    .module('quantum-ventura-inc.e-recov', [
      'ngRoute',
      'quantum-ventura-inc.common'
    ])
    .config(function ($routeProvider) {
      $routeProvider
          .when('/e-recov', {
            title: 'E-RECOV',
            template: '<e-recov></e-recov>',
            menuItem: 'e-recov'
          });
    });