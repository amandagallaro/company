'use strict';

/**
 * Our partnerships module for related content.
 */

angular
    .module('quantum-ventura-inc.our-partnerships', [
      'ngRoute',
      'quantum-ventura-inc.common'
    ])
    .config(function ($routeProvider) {
      $routeProvider
          .when('/our-partnerships', {
            title: 'Our Partnerships',
            template: '<our-partnerships></our-partnerships>',
            menuItem: 'our-partnerships'
          });
    });