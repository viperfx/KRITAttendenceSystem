var mainController = angular.module('KRIT').controller('mainController',
		function($scope, $state, $mdSidenav) {
			$scope.labels = labels;
			$scope.errors = errors;

			$state.go("dashboard.ProductDetails");

		});
