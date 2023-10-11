'use strict';

/**
 * Diamond-Droid module for related content.
 */

angular
    .module('quantum-ventura-inc.diamond-droid', [
      'ngRoute',
      'quantum-ventura-inc.common'
    ])
    .config(function ($routeProvider) {
      $routeProvider
          .when('/diamond-droid', {
            title: 'Diamond-Droid',
            template: '<diamond-droid></diamond-droid>',
            menuItem: 'diamond-droid'
          });
    });