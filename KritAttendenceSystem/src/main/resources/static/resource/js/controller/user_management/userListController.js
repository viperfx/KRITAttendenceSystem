app.controller(
		'userListController',
		function($scope, $state, $mdMedia, $mdDialog, ProductsService,
				sharedProperties) {

			$scope.labels = labels;
			$scope.errors = errors;
			$scope.success = false;
			$scope.selected = new Array();
			$scope.allSelected = false;
			$scope.suffixes = Suffix;
			$scope.selectedUserStatus = null;

			$scope.onAlertClose = function(error) {
				$scope.error = false;
			};

			$scope.onClose = function(success) {
				$scope.success = false;
			};

			ProductsService.userLoginDetails(function(response, status) {
				if (status != 200) {
					$scope.error = true;
					if (response != undefined) {
						$scope.errorMsg = response.error;
						$scope.status = status;
					}
					$scope.status = 404;
					$scope.errorMsg = "Server Down";
				}
				$scope.error = false;
				$scope.user = new Users();
				for (i in response) {
					$scope.user.set(response[i]);
					$scope.user.add($scope.user.toJsonUser());

				}
				$scope.users = $scope.user.getUsers();
				/*
				 * $scope.userStatuses = $scope.user
				 * .getSelectedAutoCompleteUserStatus();
				 */
			});

			$scope.select = function(user, users) {
				var index = null;
				for (i in $scope.selected) {
					if (user == $scope.selected[i]) {
						index = i;
					}
				}
				if (index) {
					$scope.selected.splice(index, 1);
				} else {
					$scope.selected.push(user);
				}
				$scope.selectedAllCheck(users);
			};

			$scope.selectAll = function(users) {
				// var contactLength = 0;
				// var selectedLength = 0;
				var selectedAll = false;

				/*
				 * for (a in contacts) { contactLength = a; } for (b in
				 * $scope.selected) { selectedLength = b; }
				 */for (j in users) {
					var index = null;
					for (i in $scope.selected) {
						if (users[j].USER_ID == $scope.selected[i]) {
							index = i;
						}

					}
					if (index == null) {
						$scope.selected.push(users[j].USER_ID);
						selectedAll = true;
					}

				}
				if (selectedAll == false) {
					$scope.selected = new Array();
				}
			};

			$scope.selectedCheck = function(user) {
				for (i in $scope.selected) {
					if (user == $scope.selected[i]) {
						return true;
					}
				}
				return false;

			};

			$scope.selectedAllCheck = function(users) {
				for (j in users) {
					var index = null;
					for (i in $scope.selected) {
						if (users[j].USER_ID == $scope.selected[i]) {
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

			/*
			 * $scope.userStatusSearch = function(query) { var results = query ?
			 * $scope.userStatuses.filter($scope .createFilterFor(query)) :
			 * $scope.userStatuses, deferred; return results; };
			 */
			$scope.createFilterFor = function(query) {
				var lowercaseQuery = angular.lowercase(query);
				return function filterFn(state) {
					return (state.value.indexOf(lowercaseQuery) === 0);
				};
			};

			/*
			 * $scope.setUserStatus = function(userStatus) { if (userStatus) {
			 * for (i in $scope.selected) { for (j in $scope.users) { var user =
			 * null; if ($scope.users[j].USER_ID == $scope.selected[i]) {
			 * $scope.users[j].USER_STATUS = userStatus; user = $scope.users[j];
			 * 
			 * $scope.user.setUsers($scope.users); var dataDB = $scope.user
			 * .ToUserFromJSON(user);
			 * 
			 * ProductsService .updateUser( dataDB, function(data, status) { if
			 * (status != 200) { showError( $scope, data.message, status);
			 * return; } hideError($scope); var userData = $scope.user
			 * .getUsersData(data); $scope.user .updateUser( userData,
			 * $scope.users); }); } } } } };
			 */

			$scope.deleteUsers = function($event, users, selected) {
				if (selected != null && selected != 0) {
					for (i in selected) {
						for (j in users) {
							var user = null;
							if (users[j].USER_ID == selected[i]) {
								users[j].IS_DELETED = true;
								user = users[j];

								$scope.user.setUsers(users);
								var dataDB = $scope.user.toJsonUserDTO(user);

								ProductsService.updateUser(dataDB, function(
										data, status) {

									if (status != 200) {
										$scope.error = true;
										if (data != undefined) {
											$scope.errorMsg = data.error;
											$scope.status = status;
										}
										$scope.status = 404;
										$scope.errorMsg = "Server Down";
									} else {
										$scope.error = false;
										$scope.success = true;
										$scope.successMsg = "User Assigned Successfully";
										$scope.user.removeUserByObject(data);
										$scope.selected.splice(i, 1);
									}
								});
							}

						}

					}
				}else{
					$scope.error = true;
					$scope.errorMsg = "Select User First";
				}
			};

			$scope.edit = function($event, user, users) {
				var userData = new Users();
				userData.setUsers(users);
				userData.editUsers(user);
				sharedProperties.setObjectDataService(userData);
				sharedProperties.setAllDataService(users);
				sharedProperties.setProcessDetails(true);
				$state.go('dashboard.UserDetailsForm');
				/*
				 * var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
				 * $mdDialog .show({ controller : 'userDetailsFormController',
				 * templateUrl :
				 * 'pages/view/user_management/UserDetailsForm.html', parent :
				 * angular.element(document.body), targetEvent : $event,
				 * clickOutsideToClose : false, fullscreen : useFullScreen, });
				 */
			};

			$scope.addUserDetails = function($event, users) {

				var user = new Users();

				sharedProperties.setObjectDataService(user);
				sharedProperties.setAllDataService(users);
				sharedProperties.setProcessDetails(false);
				$state.go('dashboard.UserDetailsForm');
				/*
				 * var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
				 * $mdDialog .show({ controller : 'userDetailsFormController',
				 * templateUrl :
				 * 'pages/view/user_management/UserDetailsForm.html', parent :
				 * angular.element(document.body), targetEvent : $event,
				 * clickOutsideToClose : false, fullscreen : useFullScreen, });
				 */

			};
		});