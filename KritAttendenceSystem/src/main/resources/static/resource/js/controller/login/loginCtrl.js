app
		.controller(
				'loginCtrl',
				function($scope, $state, $mdDialog, $mdMedia, $sessionStorage,
						$cookies, AuthenticationService, AppRestService) {

					$scope.labels = labels;
					$scope.errors = errors;
					$scope.error = false;
					$scope.onAlertClose = function(error) {
						$scope.error = false;
					};
					$scope.instructor = "Instructor";
					$scope.student = "Student";

					$scope.studentDetails = null;
					/*
					 * ProductsService .userLoginDetails(function(response,
					 * status) {
					 * 
					 * if (status != 200) { $scope.error = true; if (response !=
					 * undefined) { $scope.errorMsg = response.error;
					 * $scope.status = status; } $scope.status = 404;
					 * $scope.errorMsg = "Server Down.... You are not able to
					 * login untill Server Starts"; } else { $scope.userDetails =
					 * response; if ($scope.userDetails.length == 0) {
					 * $scope.error = true; $scope.status = 404; $scope.errorMsg =
					 * "Server Down.... You are not able to login untill Server
					 * Starts"; } } });
					 */

					$scope.onSubmit = function() {
						(function initController() { // reset login status
							AuthenticationService.ClearCredentials();
						})();

						if($scope.role === null || $scope.role === undefined){
							$scope.error = true;
							$scope.errorMsg = "Please Select Role to Login";
						}else if ($scope.role === $scope.instructor) {
							AppRestService
									.getInstructorDetails(function(data, status) {

										if (status == 200) {
											$scope.success = true;
											$scope.SuccessMsg = "Data Added Successfully"
											// response.error;
											$scope.status = status;
											$scope.error = false;
											$scope.instructor = instructor;
											$scope.instructor.fillOneRow(data);
											$scope.reset();

											$state
													.go('dashboard.ProductDetails');

										} else {
											$scope.error = true;
											$scope.errorMsg = data.message;
											$scope.status = status;
										}
									});
						} else if ($scope.role === $scope.student) {
							AppRestService
									.getStudentDetails(function(response,
											status) {

										if (status == 200) {
											// response.error;
											$scope.status = status;
											$scope.error = false;
											$scope.studentDetails = new Student();
											for (i in response) {
												$scope.studentDetails
														.set(response[i]);
												$scope.studentDetails
														.add($scope.studentDetails
																.toJson());
											}

											// $scope.reset();
											var students = $scope.studentDetails.getStudents();
											for (i in students) {

												if ($scope.user.userName === students[i].STUDENT_EMAIL
														&& $scope.user.passWord === students[i].PASSWORD) {
													sessionStorage
															.setItem(
																	'user',
																	students[i].STUDENT_FIRST_NAME+" "+students[i].STUDENT_LAST_NAME);
													sessionStorage
													.setItem(
															'programId',
															students[i].PROGRAM.PROGRAMS_ID);
													sessionStorage
													.setItem(
															'studentId',
															students[i].STUDENT_ID);
											
													$cookies
															.put(
																	'User',
																	students[i].STUDENT_ID);
													AuthenticationService
															.SetCredentials(
																	$scope.user.userName,
																	$scope.user.passWord);

													$state.go('dashboard.home');

												}else {
													$scope.error = true;
													$scope.errorMsg = "Invalid Username/Password. Enter correct information to login";

												}

											}

										} else {
											$scope.error = true;
											$scope.status = 402;
											$scope.errorMsg = "Username or Password is incorrect";
										}
									});
						}else {
							$scope.error = true;
							$scope.status = 405;
							$scope.errorMsg = "Something went Wrong. Try Again";
						}
						/*
						 * for (i in $scope.userDetails) {
						 * 
						 * if ($scope.user.userName ===
						 * $scope.userDetails[i].userName &&
						 * $scope.user.passWord ===
						 * $scope.userDetails[i].password) {
						 * sessionStorage.setItem('user', $scope.user.userName);
						 * $cookies.put('User', $scope.userDetails[i].userId);
						 * AuthenticationService.SetCredentials(
						 * $scope.user.userName, $scope.user.passWord);
						 * 
						 * $state.go('dashboard.home');
						 *  }
						 *  } $scope.error = true; $scope.status = 404;
						 * $scope.errorMsg = "Username or Password is
						 * incorrect";
						 */
						};

				});
