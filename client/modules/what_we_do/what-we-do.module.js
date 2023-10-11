'use strict';

/**
 * What we do module for related content.
 */

angular
    .module('quantum-ventura-inc.what-we-do', [
      'ngRoute',
      'quantum-ventura-inc.common'
    ])
    .config(function ($routeProvider) {
      $routeProvider
          .when('/what-we-do', {
            title: 'What We Do',
            template: '<what-we-do></what-we-do>',
            menuItem: 'what-we-do'
          });
    });