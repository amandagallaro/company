'use strict';

/**
 * Profile component gives the user the means to view/edit their public profile info.
 */

angular.module('quantum-ventura-inc.what-we-do').component('what-we-do', {
  templateUrl: '/client/what-we-do.html',
  controller: function ($rootScope) {
    // 'common' variable is always added to the root scope and it contains common things like user info, common functions etc.
    this.user = $rootScope.common.user /* this is not needed actually. we can always directly use {{common.user}} variable directly in any view */;
  }
});