app.controller(
				'addProductCategoryController',
				function($scope, $state, $mdDialog, $mdMedia, $mdSidenav,
						$document, $timeout, $q, $log, $mdToast,
						DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder,
						ProductsService, sharedProperties) {

					$scope.labels = labels;

					$scope.errors = errors;
					$scope.searchText = "";
					$scope.resetVar = {};
					$scope.successSave = true;

					$scope.back = function(){
						$state.go('dashboard.ProductCategories');
					}
					
					ProductsService.categories(function(response, status) {

						if (status != 200) {
							if (response == null) {
								$scope.errorMsg = "Server Down";
							} else {
								$scope.errorMsg = response.error;
							}
							$scope.status = status;
							$scope.error = true;
							$scope.categories = new Array();
							$scope.states = new Array();
							return;
						}

						var productCategory = new ProductCategory();
						for (i in response) {
							productCategory.setCategory(response[i]);
							productCategory.addCategory(productCategory
									.toJsonCategory());
						}

						$scope.states = productCategory
								.getAutoCompleteCategory();
						$scope.categories = productCategory
								.getProductCategories();

					});

					$scope.querySearch = function(query) {
						var results = query ? $scope.states.filter($scope
								.createFilterFor(query)) : $scope.states, deferred;
						return results;
					}

					$scope.onAlertClose = function($error) {
						$scope.error = false;
					};

					$scope.reset = function() {
						$scope.category = angular.copy($scope.resetVar);
						$scope.category.productCategorySubcategory = null;
						$scope.searchText = "";
					};

					$scope.isUpdate = sharedProperties.getProcessDetails();
					if ($scope.isUpdate == true) {
						$scope.category = sharedProperties.getObjectDataService();
						$scope.categories = sharedProperties
								.getAllDataService();
					}

					$scope.submit = function(category, categories) {
						$scope.status = {
							isFirstOpen : false,
							isFirstDisabled : false
						};

						$scope.errorMsg = "";
						if ($scope.category.productCategoryCode == undefined
								&& $scope.category.productCategoryCode == null
								|| $scope.category.productCategoryName == undefined
								&& $scope.category.productCategoryName == null) {
							if ($scope.category.productCategoryCode == undefined
									|| $scope.category.productCategoryCode == null) {
								$scope.errorMsg = $scope.errorMsg + "  "
										+ $scope.labels.PRODUCT_CATEGORY_CODE;
							}
							if ($scope.category.productCategoryName == undefined
									|| $scope.category.productCategoryName == null) {
								$scope.errorMsg = $scope.errorMsg + "  "
										+ $scope.labels.PRODUCT_CATEGORY_NAME;
							}

							$scope.errorMsg = $scope.errorMsg + "  "
									+ $scope.errors.MANDATORY_FIELDS;
							$scope.error = true;

						} else {
							$scope.error = false;
							$scope.addOrUpdateProductCategory(category,
									categories);
						}
					};

					$scope.onClose = function(event) {
						cancelDialouge($scope, $mdDialog);
					};

					/**
					 * Search for states... use $timeout to simulate remote
					 * dataservice call.
					 */

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
					 * If Product-Category ID is present it will update. else
					 * add new Product-Category.
					 * 
					 */
					$scope.addOrUpdateProductCategory = function(category,
							categories) {
						var productCategory = new ProductCategory();
						productCategory.setCategories(categories);
						productCategory.setCategory(category);

						var dataDB = productCategory.toJsonDTO(productCategory
								.toJsonCategory());

						if (!category.productCategoryId) {
							ProductsService
									.addcategories(
											dataDB,
											function(data, status) {
												if (status != 200) {
													showError($scope,
															data.message,
															status);
													$scope.error = true;
													$scope.errorMsg = data.message;
													return;
												}
												hideError($scope);
												if (status == 200) {
													$scope.success = true;
													$scope.successSave = false;
													$scope.successMsg = "Data inserted Successfully";
													$scope.status = status;
												}
												productCategory
														.fillOneRow(data);
												$scope.states = productCategory
														.getAutoCompleteCategory();
												$scope.categories = productCategory
														.getProductCategories();
												$scope.reset();
												$state
														.go('dashboard.ProductCategories');
											});
						} else {

							ProductsService
									.updateCategories(
											dataDB,
											function(data, status) {

												if (status != 200) {
													showError($scope,
															data.message,
															status);
													return;
												}

												hideError($scope);
												if (status == 200) {
													$scope.success = true;
													$scope.successSave = false;
													$scope.successMsg = "Data Updated Successfully";
													$scope.status = status;
												}

												var category = productCategory
														.getCaegories(data);
												productCategory.updateCategory(
														categories, category);
												$scope.reset();
												$state
														.go('dashboard.ProductCategories');
											});
						}

					}

					$scope.hide = function() {
						$mdDialog.hide();
					}
					$scope.cancel = function() {
						$mdDialog.cancel();
					}

				});
