app.controller('productNavigationController', function($scope, $compile,
		$state, $mdDialog, $mdMedia, ProductsService, sharedProperties,
		DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder) {

	$scope.labels = labels;

	$scope.productDetails = function() {

		$state.go('dashboard.ProductNavigation.ProductDetails');
	};
	$scope.onregister = function() {

		/*
		 * var productDetails = new Product();
		 * sharedProperties.setProductDetails(productDetails);
		 * sharedProperties.setProductsDetails(products);
		 */
		sharedProperties.setPageDetails(false);
		$state.go('dashboard.ProductNavigation.AddProduct');

		/*
		 * var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) &&
		 * $scope.customFullscreen; $mdDialog.show({ controller :
		 * 'addProductController', templateUrl : 'pages/view/AddProduct.html',
		 * parent : angular.element(document.body), targetEvent : $event,
		 * clickOutsideToClose : false, fullscreen : useFullScreen, });
		 */

	};

	$scope.showProductCategory = function() {
		$state.go('dashboard.ProductNavigation.ProductCategories');
	};

	$scope.addCategory = function() {
		sharedProperties.setPageDetails(false);
		$state.go('dashboard.ProductNavigation.AddProductCategory');

	};

});
