'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description # adminPosHeader
 */
app.directive('stats', function() {
	return {
		templateUrl : 'resource/js/directives/dashboard/stats/stats.html',
		restrict : 'E',
		replace : true,
		scope : {
			'model' : '=',
			'comments' : '@',
			'number' : '@',
			'name' : '@',
			'colour' : '@',
			'details' : '@',
			'type' : '@',
			'status' : '@',
			'goto' : '@'
		},
		controller : function($scope, $state, sharedProperties) {
			$scope.labels = labels;
			$scope.getData = function(statusType) {
				sharedProperties.setObjectDataService(statusType);
				$state.go('dashboard.LeadManagement');
			}

		}

	}
});
