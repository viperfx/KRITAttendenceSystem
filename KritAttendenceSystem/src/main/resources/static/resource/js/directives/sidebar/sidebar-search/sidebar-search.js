'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

app.directive('sidebarSearch',function() {
    return {
      templateUrl:'resource/js/directives/sidebar/sidebar-search/sidebar-search.html',
      restrict: 'E',
      replace: true,
      scope: {
      },
      controller:function($scope, $sessionStorage){
        $scope.selectedMenu = 'home';
        $scope.username = sessionStorage.getItem("user");
      }
    }
  });
