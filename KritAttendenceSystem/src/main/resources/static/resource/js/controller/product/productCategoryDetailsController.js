app.controller('productCategoryDetailsController', function($scope, $state,
		$mdDialog, $mdMedia, $mdSidenav, $document, $timeout, $q, $log,
		$mdToast, DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder,
		ProductsService, sharedProperties) {

	$scope.category = new ProductCategory();
	$scope.labels = labels;

	$scope.errors = errors;
	$scope.searchText = "";

	$scope.categories = [];

	$scope.selected = new Array();
	$scope.allSelected = false;

	$scope.select = function(category, categories) {
		var index = null;
		for (i in $scope.selected) {
			if (category == $scope.selected[i]) {
				index = i;
			}
		}
		if (index) {
			$scope.selected.splice(index, 1);
		} else {
			$scope.selected.push(category);
		}
		$scope.selectedAllCheck(categories);
	};

	$scope.selectAll = function(categories) {
		// var contactLength = 0;
		// var selectedLength = 0;
		var selectedAll = false;

		/*
		 * for (a in contacts) { contactLength = a; } for (b in $scope.selected) {
		 * selectedLength = b; }
		 */for (j in categories) {
			var index = null;
			for (i in $scope.selected) {
				if (categories[j].PRODUCTCATEGORYID == $scope.selected[i]) {
					index = i;
				}

			}
			if (index == null) {
				$scope.selected.push(categories[j].PRODUCTCATEGORYID);
				selectedAll = true;
			}

		}
		if (selectedAll == false) {
			$scope.selected = new Array();
		}
	};

	$scope.selectedCheck = function(category) {
		for (i in $scope.selected) {
			if (category == $scope.selected[i]) {
				return true;
			}
		}
		return false;

	};

	$scope.selectedAllCheck = function(categories) {
		for (j in categories) {
			var index = null;
			for (i in $scope.selected) {
				if (categories[j].PRODUCTCATEGORYID == $scope.selected[i]) {
					index = i;
					break;
				}

			}
			if (index == null) {
				$scope.allSelected = false;
				break;
			}
			$scope.allSelected = true;
		}

	};

	$scope.onAlertClose = function($error) {
		$scope.error = false;
	};

	$scope.onClose = function(event) {
		cancelDialouge($scope, $mdDialog);
	};

	$scope.querySearch = function(query) {
		var results = query ? $scope.states.filter($scope
				.createFilterFor(query)) : $scope.states, deferred;
		return results;
	}

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
	 * Add or Update Product-Category.
	 * 
	 * If Product-Category ID is present it will update. else add new
	 * Product-Category.
	 * 
	 */

	ProductsService.categories(function(response, status) {

		if (status != 200) {
			if (response == null) {
				$scope.errorMsg = "Server Down";
			} else {
				$scope.errorMsg = response.error;
			}
			$scope.status = status;
			$scope.error = true;
			$scope.categories = $scope.states = new Array();
			return;
		}

		$scope.productCategory = new ProductCategory();
		for (i in response) {
			$scope.productCategory.setCategory(response[i]);
			$scope.productCategory.addCategory($scope.productCategory
					.toJsonCategory());
		}

		$scope.states = $scope.productCategory.getAutoCompleteCategory();
		var tempCategories = $scope.productCategory.getProductCategories();

		$scope.categories = $scope.productCategory
				.getProductSubCategory(tempCategories);

	});

	/**
	 * Trigger's new Category-form event.
	 * 
	 */
	/*
	 * $scope.openCategory = function(event, categories) {
	 * 
	 * $scope.category = new ProductCategory();
	 * 
	 * $scope.category.setCategories(categories); $scope.states =
	 * $scope.category .getAutoCompleteCategory(); }
	 */
	/**
	 * Trigger's edit Category-form event.
	 * 
	 */
	$scope.editDetails = function($event, category, categories) {

		var productCategory = new ProductCategory();
		productCategory.setCategories(categories);
		productCategory.editCategory(category);

		sharedProperties.setObjectDataService(productCategory);
		sharedProperties.setAllDataService(categories);
		sharedProperties.setProcessDetails(true);

		$state.go('dashboard.AddProductCategory');
		/*
		 * $scope.states = productCategory .getAutoCompleteCategory();
		 * $scope.categories = productCategory .getProductCategories();
		 */

		/*
		 * $scope.category = $scope.productCategory; $scope.states =
		 * $scope.productCategory .getAutoCompleteCategory(); $scope.categories =
		 * $scope.productCategory .getProductCategories();
		 */

		/*
		 * var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')); $mdDialog
		 * .show({ controller : 'addProductCategoryController', templateUrl :
		 * 'pages/component/AddProductCategory.html', parent :
		 * angular.element(document.body), targetEvent : $event,
		 * clickOutsideToClose : false, fullscreen : useFullScreen, });
		 */
	}

	/**
	 * Trigger's Remove Product-Category event.
	 * 
	 */
	$scope.onRemoveCategory = function($event, categories, selected) {

		if (selected != null && selected != 0) {
			var confirm = $mdDialog.confirm().title('Delete').textContent(
					'Are you sure?').ariaLabel('Delete').targetEvent(event).ok(
					'Yes').cancel('No');

			$mdDialog.show(confirm).then(function() {
				$scope.removeProductCategory(categories, selected);

			}, function() {
				// Do nothing
			});

		} else {
			$scope.error = true;
			$scope.errorMsg = "Select Data First";

		}
	};

	$scope.removeProductCategory = function(categories, selected) {

		$scope.productCategory.setCategories(categories);
		for (i in selected) {
			for (j in categories) {
				if (categories[j].PRODUCTCATEGORYID == selected[i]) {

					categories[j].SUSPENDED = true;
					var dataDB = $scope.productCategory
							.toJsonDTO(categories[j]);
					ProductsService.updateCategories(dataDB, function(data,
							status) {

						if (status != 200) {
							showError($scope, data.message, status);
							$scope.error = true;
							$scope.errorMsg = data.message;
							return;
						}

						hideError($scope);
						$scope.productCategory.removeByObject(data);
						if (status == 200) {
							$scope.success = true;
							$scope.successMsg = "Data Deleted Successfully";
							$scope.status = status;
							$scope.selected.splice(i, 1);
						}
					});

				}

			}

		}

	};

	$scope.hide = function() {
		$mdDialog.hide();
	}
	$scope.cancel = function() {
		$mdDialog.cancel();
	}

	$scope.onregister = function($event, categories) {

		var productCategory = new ProductCategory();
		sharedProperties.setObjectDataService(productCategory);
		sharedProperties.setAllDataService(categories);
		sharedProperties.setProcessDetails(false);

		$state.go('dashboard.AddProductCategory');

	};
});