'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description # adminPosHeader
 */

app.directive('sidebar', [ '$location', function() {
	return {
		templateUrl : 'resource/js/directives/sidebar/sidebar.html',
		restrict : 'E',
		replace : true,
		scope : {},
		controller : function($scope) {
			$scope.selectedMenu = 'dashboard';
			$scope.collapseVar = 0;
			$scope.multiCollapseVar = 0;
			$scope.labels = labels;
			$scope.check = function(x) {

				if (x == $scope.collapseVar)
					$scope.collapseVar = 0;
				else
					$scope.collapseVar = x;
			};

			$scope.multiCheck = function(y) {

				if (y == $scope.multiCollapseVar)
					$scope.multiCollapseVar = 0;
				else
					$scope.multiCollapseVar = y;
			};
		}
	}
} ]);
