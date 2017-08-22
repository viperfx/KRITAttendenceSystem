app
		.controller(
				'courseScheduleController',
				function($scope, $compile, $state, $mdDialog, $mdMedia,
						$sessionStorage, AppRestService, sharedProperties,
						DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder) {

					$scope.selected = new Array();
					$scope.labels = labels;
					$scope.errors = errors;
					$scope.allSelected = false;
					$scope.storedProducts = null;

					/*
					 * $scope.select = function(product, products) { var index =
					 * null; for (i in $scope.selected) { if (product ==
					 * $scope.selected[i]) { index = i; } } if (index) {
					 * $scope.selected.splice(index, 1); } else {
					 * $scope.selected.push(product); }
					 * $scope.selectedAllCheck(products); };
					 * 
					 * $scope.selectAll = function(products) { // var
					 * contactLength = 0; // var selectedLength = 0; var
					 * selectedAll = false;
					 * 
					 * 
					 * for (a in contacts) { contactLength = a; } for (b in
					 * $scope.selected) { selectedLength = b; } for (j in
					 * products) { var index = null; for (i in $scope.selected) {
					 * if (products[j].PRODUCT_ID == $scope.selected[i]) { index =
					 * i; } } if (index == null) {
					 * $scope.selected.push(products[j].PRODUCT_ID); selectedAll =
					 * true; } } if (selectedAll == false) { $scope.selected =
					 * new Array(); } };
					 * 
					 * $scope.selectedCheck = function(product) { for (i in
					 * $scope.selected) { if (product == $scope.selected[i]) {
					 * return true; } } return false; };
					 * 
					 * $scope.selectedAllCheck = function(products) { for (j in
					 * products) { var index = null; for (i in $scope.selected) {
					 * if (products[j].PRODUCT_ID == $scope.selected[i]) { index =
					 * i; break; } } if (index == null) { $scope.allSelected =
					 * false; break; } $scope.allSelected = true; } };
					 */
					AppRestService
							.getCourseScheduleDetails(function(response, status) {
								$scope.error = false;
								if (status != 200) {
									$scope.error = true;
									if (response != undefined) {
										$scope.errorMsg = response.error;
										$scope.status = status;
									}
									$scope.status = 404;
									$scope.errorMsg = "Server Down";
								}
								var programId = sessionStorage
										.getItem("programId");
								$scope.courseScheduleDetails = new CourseSchedule();
								for (i in response) {
									if (programId === response[i].programs.programsId) {
										$scope.courseScheduleDetails
												.set(response[i]);
										$scope.courseScheduleDetails
												.addCourseSchedule($scope.courseScheduleDetails
														.toJson());

									}

								}
								$scope.courseSchedules = $scope.courseScheduleDetails
										.getCourseSchedules();
							});
					/*
					 * ProductsService.products(function(response, status) {
					 * 
					 * $scope.error = false;
					 * 
					 * if (status != 200) { $scope.error = true; if (response !=
					 * undefined) { $scope.errorMsg = response.error;
					 * $scope.status = status; } $scope.status = 404;
					 * $scope.errorMsg = "Server Down"; }
					 * 
					 * $scope.product = new Product(); for (i in response) {
					 * $scope.product.set(response[i]);
					 * $scope.product.add($scope.product.toJson()); }
					 * $scope.products = $scope.product.getProducts();
					 * $scope.storedProducts = $scope.products; });
					 * 
					 * ProductsService.categories(function(response, status) {
					 * 
					 * if (status != 200) { if (response == null) {
					 * $scope.errorMsg = "Server Down"; } else { $scope.errorMsg =
					 * response.error; } $scope.status = status; $scope.error =
					 * true; $scope.categories = $scope.states = new Array();
					 * return; }
					 * 
					 * $scope.productCategory = new ProductCategory(); for (i in
					 * response) {
					 * $scope.productCategory.setCategory(response[i]);
					 * $scope.productCategory
					 * .addCategory($scope.productCategory .toJsonCategory()); }
					 * 
					 * $scope.states = $scope.productCategory
					 * .getAutoCompleteCategory(); var tempCategories =
					 * $scope.productCategory .getProductCategories();
					 * 
					 * $scope.categories = $scope.productCategory
					 * .getProductSubCategory(tempCategories);
					 * 
					 * });
					 * 
					 * $scope.categorySearch = function(query) { var results =
					 * query ? $scope.states.filter($scope
					 * .createFilterFor(query)) : $scope.states, deferred;
					 * return results; }
					 * 
					 *//**
						 * Create filter function for a query string
						 */
					/*
					 * $scope.createFilterFor = function(query) { var
					 * lowercaseQuery = angular.lowercase(query); return
					 * function filterFn(state) { return
					 * (state.value.indexOf(lowercaseQuery) === 0); }; }
					 * 
					 * $scope.findProducts = function(selectedCategory) {
					 * $scope.categorySearchRecursion(selectedCategory);
					 * $scope.storedProducts = $scope.product.getProducts(); var
					 * tempProducts = []; for (i in $scope.storedProducts) { for
					 * (j in $scope.selectedCategories) {
					 * 
					 * if
					 * ($scope.storedProducts[i].PRODUCT_CATEGORY.PRODUCTCATEGORYID ==
					 * $scope.selectedCategories[j].productCategoryId) {
					 * tempProducts.push($scope.storedProducts[i]); break; } } }
					 * $scope.products = tempProducts; $scope.selectedCategories =
					 * new Array(); };
					 * 
					 * $scope.getAllData = function() { $scope.products =
					 * $scope.product.getProducts(); };
					 * 
					 * $scope.categorySearchRecursion =
					 * function(selectedCategory) {
					 * 
					 * for (i in $scope.states) { if
					 * ($scope.states[i].productCategorySubcategory ==
					 * selectedCategory.productCategoryId) { $scope
					 * .categorySearchRecursion($scope.states[i]); } }
					 * $scope.selectedCategories.push(selectedCategory); return; }
					 */
					// fires On Alert close.
					$scope.onAlertClose = function(error) {
						$scope.error = false;
					};

					$scope.onClose = function(success) {
						$scope.success = false;
					};

					$scope.labels = labels;

					$scope.selectAll = false;
					$scope.isSelectedOne = false;

					$scope.selected = [];
					$scope.selectedOne = function() {
						if ($scope.selected.length > 0) {
							return false;
						}
						return true;
					}
					$scope.toggle = function(product, selected) {
						var idx = selected.indexOf(product);
						if (idx > -1) {
							$scope.selected.splice(idx, 1);
						} else {
							$scope.selected.push(product);
						}
					};
					$scope.exists = function(product, selected) {
						return selected.indexOf(product) > -1;
					};
					$scope.isIndeterminate = function() {
						return ($scope.selected.length !== 0 && $scope.selected.length !== $scope.products.length);
					};
					$scope.isChecked = function() {
						return $scope.selected.length === $scope.products.length;
					};
					$scope.toggleAll = function() {
						if ($scope.selected.length === $scope.products.length) {
							$scope.selected = [];
						} else if ($scope.selected.length === 0
								|| $scope.selected.length > 0) {
							$scope.selected = $scope.products.slice(0);
						}
					};

					$scope.onRemove = function(event, products, selected) {

						if (selected != null && selected.length != 0) {
							var confirm = $mdDialog.confirm().title('Delete')
									.textContent('Are you sure?').ariaLabel(
											'Delete').targetEvent(event).ok(
											'Yes').cancel('No');

							$mdDialog.show(confirm).then(
									function(productDetails) {
										$scope.removeData(products, selected);
										// $scope.products =
										// product.getProducts();
									});
						} else {
							$scope.error = true;
							$scope.errorMsg = "Select Data First";

						}

					};

					$scope.removeData = function(products, selected) {

						for (i in selected) {
							for (j in products) {
								var product = null;
								if (products[j].PRODUCT_ID == selected[i]) {
									products[j].IS_DELETED = true;
									product = products[j];

									$scope.product.setProducts(products);
									var dataDB = $scope.product
											.toJsonProductDTO(product);

									ProductsService
											.updateProducts(
													dataDB,
													function(data, status) {

														if (status != 200) {
															$scope.error = true;
															if (data != undefined) {
																$scope.errorMsg = data.error;
																$scope.status = status;
															}
															$scope.status = 404;
															$scope.errorMsg = "Server Down";
														} else {

															$scope.product
																	.removeProductByObject(data);

															$scope.error = false;
															$scope.success = true;
															$scope.successMsg = "Data Deleted Successfully";
															$scope.selected
																	.splice(i,
																			1);
														}
													});
								}

							}

						}

						/*
						 * var product = new Product();
						 * product.setProducts(products); var deletedData = [];
						 * 
						 * for (j in products) { if (pdct.PRODUCT_ID ==
						 * products[j].PRODUCT_ID) {
						 * 
						 * products[j].IS_DELETED = true; var dataDB = product
						 * .toJsonProductDTO(products[j]); ProductsService
						 * .updateProducts( dataDB, function(data, status) {
						 * 
						 * if (status != 200) { $scope.error = true;
						 * $scope.errorMsg = data.message; $scope.status =
						 * status; }
						 * 
						 * if (status == 200) { $scope.success = true;
						 * $scope.SuccessMsg = "Data Removed Successfully" //
						 * response.error; $scope.status = status; $scope.error =
						 * false; deletedData.push(data); //
						 * productDetails.deleteFromJson(data); }
						 * 
						 * }); } }
						 * 
						 * $scope.product.removeProductByObject(deletedData);
						 *//*
							 * for (i in $scope.products) { for (j in
							 * deletedData) { if (deletedData.productId ==
							 * $scope.products[i].PRODUCT_ID) {
							 * $scope.products.splice(i, 1);
							 * $scope.dtInstance.reloadData(); } } }
							 */
						// return product;
					}

					$scope.editDetails = function($event, $index, product,
							products, category) {
						var productDetails = new Product();
						productDetails.setProducts(products);
						productDetails.editProducts(product, category);
						sharedProperties.setObjectDataService(productDetails);
						sharedProperties.setAllDataService(products);
						sharedProperties.setProcessDetails(true);

						$state.go('dashboard.AddProduct');

						/*
						 * var useFullScreen = ($mdMedia('sm') ||
						 * $mdMedia('xs')); $mdDialog.show({ controller :
						 * 'addProductController', templateUrl :
						 * 'pages/view/AddProduct.html', parent :
						 * angular.element(document.body), targetEvent : $event,
						 * clickOutsideToClose : false, fullscreen :
						 * useFullScreen,
						 * 
						 * });
						 */
					};

					$scope.onregister = function($event, products) {

						var productDetails = new Product();
						sharedProperties.setObjectDataService(productDetails);
						sharedProperties.setAllDataService(products);
						sharedProperties.setProcessDetails(false);
						$state.go('dashboard.AddProduct');

						/*
						 * var useFullScreen = ($mdMedia('sm') ||
						 * $mdMedia('xs')) && $scope.customFullscreen;
						 * $mdDialog.show({ controller : 'addProductController',
						 * templateUrl : 'pages/view/AddProduct.html', parent :
						 * angular.element(document.body), targetEvent : $event,
						 * clickOutsideToClose : false, fullscreen :
						 * useFullScreen, });
						 */

					};

					$scope.showProductCategory = function($event) {
						$state.go('dashboard.ProductCategories');
					};
				});
