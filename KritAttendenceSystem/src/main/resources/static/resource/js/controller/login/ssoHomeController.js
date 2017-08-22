app
		.controller(
				'SSOHomeController',
				function($scope, $state, ProductsService) {

					ProductsService
							.ssoDetails(function(response, status) {
								if (status != 200) {
									$scope.error = true;
									if (response != undefined) {
										$scope.errorMsg = response.error;
										$scope.status = status;
									}
									$scope.status = 404;
									$scope.errorMsg = "Server Down.... You are not able to login untill Server Starts";
								} else {
									$scope.companyData = response;
									$scope.error = false;

								}

							});

				});