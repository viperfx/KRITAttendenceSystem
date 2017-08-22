var addProductController = app.controller('addProductController', function(
		$scope, $state, $mdDialog, $mdSidenav, $mdDateLocale, $timeout, $q,
		$log, $filter, ProductsService, sharedProperties) {

	// $scope.product = new Product();
	$scope.labels = labels;
	$scope.errors = errors;
	$scope.resetVar = {};

	/* $('#datetimepicker1').datetimepicker(); */

	$scope.reset = function() {
		$scope.product = angular.copy($scope.resetVar);

		$scope.product.productCategory = null;
		$scope.searchText = "";
	};

	$scope.back = function() {
		$state.go('dashboard.ProductDetails');
	}

	$scope.submit = function(product, products) {
		$scope.error = true;
		$scope.status = {
			isFirstOpen : false,
			isFirstDisabled : false
		};

		if (product.productActive == undefined) {
			product.productActive = false;
		}
		if (product.taxable == undefined) {
			product.taxable = false;
		}
		$scope.errorMsg = "";
		if ($scope.product.productCode == undefined
				&& $scope.product.productCode == null
				|| $scope.product.productName == undefined
				&& $scope.product.productName == null
				|| $scope.product.manufacturer == undefined
				&& $scope.product.manufacturer == null
				|| $scope.product.productCategory == undefined
				&& $scope.product.productCategory == null) {
			if ($scope.product.productCode == undefined
					&& $scope.product.productCode == null) {
				$scope.errorMsg = $scope.errorMsg + "  "
						+ $scope.labels.PRODUCT_CODE;
			}
			if ($scope.product.productName == undefined
					&& $scope.product.productName == null) {
				$scope.errorMsg = $scope.errorMsg + "  "
						+ $scope.labels.PRODUCT_NAME;
			}
			if ($scope.product.manufacturer == undefined
					&& $scope.product.manufacturer == null) {
				$scope.errorMsg = $scope.errorMsg + "  "
						+ $scope.labels.MANUFACTURER;
			}
			if ($scope.product.productCategory == undefined
					&& $scope.product.productCategory == null) {
				$scope.errorMsg = $scope.errorMsg + "  "
						+ $scope.labels.PRODUCT_CATEGORY;
			}

			$scope.errorMsg = $scope.errorMsg + "  "
					+ $scope.errors.MANDATORY_FIELDS;

		} else {
			$scope.error = false;
			$scope.addOrUpdateController(product, products);
		}
	};

	$scope.product = sharedProperties.getObjectDataService();
	$scope.products = sharedProperties.getAllDataService();
	$scope.isUpdate = sharedProperties.getProcessDetails();

	if ($scope.product == null) {
		$scope.product = new Product();
	}

	$scope.categoryDetails = new ProductCategory();
	$scope.onAlertClose = function($error) {

		$scope.error = false;
	};

	$scope.onClose = function(success) {
		$scope.success = false;
	};

	$scope.status = {
		isFirstOpen : true,
		isFirstDisabled : false
	};

	/**
	 * Search for states... use $timeout to simulate remote dataservice call.
	 */
	$scope.querySearch = function(query) {
		var results = query ? $scope.states.filter($scope
				.createFilterFor(query)) : $scope.states, deferred;
		return results;

	}

	$scope.addOrUpdateController = function(product, products) {
		product.setProducts(products);
		// category.setCategories(categories);
		product.setProductData(product);

		var dataDB = product.toJsonProductDTO(product.toJson());

		if (product.productId) {
			// TODO Update
			ProductsService.updateProducts(dataDB, function(data, status) {
				if (status != 200) {
					showError($scope, data.message, status);
					return;
				}
				hideError($scope);
				$scope.product = product;
				var productData = $scope.product.getProductsData(data);
				$scope.product.updateProduct(productData, $scope.products);
				$scope.reset();
				$state.go('dashboard.ProductDetails');

			});

		} else {

			ProductsService.addProducts(dataDB, function(data, status) {

				if (status == 200) {
					$scope.success = true;
					$scope.SuccessMsg = "Data Added Successfully"
					// response.error;
					$scope.status = status;
					$scope.error = false;
					$scope.product = product;
					$scope.product.fillOneRow(data);
					$scope.reset();

					$state.go('dashboard.ProductDetails');

				} else {
					$scope.error = true;
					$scope.errorMsg = data.message;
					$scope.status = status;
				}
			});
		}

	};

	/**
	 * Create filter function for a query string
	 */
	$scope.createFilterFor = function(query) {
		var lowercaseQuery = angular.lowercase(query);
		return function filterFn(state) {
			return (state.value.indexOf(lowercaseQuery) === 0);
		};
	}

	/**
	 * Build `states` list of key/value pairs
	 */
	ProductsService.categories(function(response, status) {

		if (status != 200) {
			$scope.errorMsg = response.error;
			$scope.status = status;

			$scope.states = new Array();
			return;
		}

		$scope.categoryDetails = new ProductCategory();
		for (i in response) {
			$scope.categoryDetails.setCategory(response[i]);
			$scope.categoryDetails.addCategory($scope.categoryDetails
					.toJsonCategory());
		}

		$scope.states = $scope.categoryDetails.getAutoCompleteCategory();
		$scope.categories = $scope.categoryDetails.getProductCategories();
	});

	$scope.openCategoryForm = function() {
		$mdSidenav('right').toggle();
	}

	$scope.addCategory = function(newCategory, categories) {

		$scope.categoryDetails.setCategories(categories);
		$scope.categoryDetails.setCategory(newCategory);

		var dataDB = $scope.categoryDetails.FromJsonCategory();
		ProductsService.addcategories(dataDB, function(data, status) {

			if (status == 200) {
				$scope.error = false;
				$scope.categoryDetails.fillCategoryData(data);
				$scope.states = $scope.categoryDetails
						.getAutoCompleteCategory();
				$mdDialog.hide();
			} else {
				$scope.error = true;
				$scope.errorMsg = data.message;
				$scope.status = status;
			}
		});

	}

	$scope.hide = function() {
		$mdDialog.hide();
	}
	$scope.cancel = function() {
		$scope.reset();
		$mdDialog.cancel();
	}

});
