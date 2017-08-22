app
		.controller(
				'SSOLoginController',
				function($scope, $state, $mdDialog, $mdMedia, $sessionStorage,
						$cookies, ProductsService, AuthenticationService) {

					$scope.labels = labels;
					$scope.errors = errors;
					$scope.error = false;
					$scope.onAlertClose = function(error) {
						$scope.error = false;
					};

					$scope.userDetails = null;
					ProductsService
							.userLoginDetails(function(response, status) {

								if (status != 200) {
									$scope.error = true;
									if (response != undefined) {
										$scope.errorMsg = response.error;
										$scope.status = status;
									}
									$scope.status = 404;
									$scope.errorMsg = "Server Down.... You are not able to login untill Server Starts";
								} else {
									$scope.userDetails = response;
									if ($scope.userDetails.length == 0) {
										$scope.error = true;
										$scope.status = 404;
										$scope.errorMsg = "Server Down.... You are not able to login untill Server Starts";
									}

								}
							});

					$scope.onSubmit = function() {
						(function initController() { // reset login status
							AuthenticationService.ClearCredentials();
						})();

						for (i in $scope.userDetails) {

							if ($scope.user.username === 'admin'
									&& $scope.user.password === 'admin') {
								sessionStorage.setItem('user',
										$scope.user.username);
								$cookies.put('User',
										'admin');
/*								$cookies.put('User',
										$scope.userDetails[i].userId);*/
								AuthenticationService.SetCredentials(
										$scope.user.username,
										$scope.user.password);

								$state.go('SSOHome');
							}
							/*
							 * if ($scope.user.userName ===
							 * $scope.userDetails[i].userName &&
							 * $scope.user.passWord ===
							 * $scope.userDetails[i].password) {
							 * sessionStorage.setItem('user',
							 * $scope.user.userName); $cookies.put('User',
							 * $scope.userDetails[i].userId);
							 * AuthenticationService.SetCredentials(
							 * $scope.user.userName, $scope.user.passWord);
							 * 
							 * $state.go('dashboard.home'); }
							 */
						}
						$scope.error = true;
						$scope.status = 404;
						$scope.errorMsg = "Username or Password is incorrect";
					};

				});
