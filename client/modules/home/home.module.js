'use strict';

/**
 * Home module for displaying home page content.
 */

angular
    .module('quantum-ventura-inc.home', [
      'ngRoute',
      'monospaced.elastic',
      'quantum-ventura-inc.common'
    ])
    .config(function ($routeProvider) {
      $routeProvider
          .when('/', {
            title: 'Quantum Ventura Inc Home',
            template: '<home></home>',
            menuItem: 'home'
          });
    });