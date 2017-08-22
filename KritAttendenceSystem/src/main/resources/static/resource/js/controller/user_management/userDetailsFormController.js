app.controller(
		'userDetailsFormController',
		function($scope, $state, $mdDialog, $filter, ProductsService,
				sharedProperties) {
			$scope.labels = labels;
			$scope.errors = errors;
			$scope.suffixes = Suffix;
			$scope.resetVar = {};
			$scope.user = sharedProperties.getObjectDataService();
			$scope.users = sharedProperties.getAllDataService();
			$scope.isUpdate = sharedProperties.getProcessDetails();
			$scope.reset = function() {
				$scope.user = angular.copy($scope.resetVar);
				$scope.user.suffix = null;
				$scope.suffixSearchText = "";
			};

			$scope.back = function(){
				$state.go('dashboard.UserList');
			} 
			
			$scope.suffixSearch = function(query) {
				var results = query ? $scope.suffixes.filter($scope
						.createFilterFor(query)) : $scope.suffixes, deferred;
				return results;
			}

			$scope.createFilterFor = function(query) {
				var lowercaseQuery = angular.lowercase(query);
				return function filterFn(state) {
					return (state.value.indexOf(lowercaseQuery) === 0);
				};
			}

			$scope.cancel = function(event) {
				$mdDialog.hide();
			};

			$scope.submit = function(user, users) {
				$scope.error = true;
				$scope.status = {
					isFirstOpen : false,
					isFirstDisabled : false
				};

				$scope.errorMsg = "";
				if ($scope.user.suffix == undefined
						&& $scope.user.suffix == null
						|| $scope.user.firstName == undefined
						&& $scope.user.firstName == null
						|| $scope.user.middleName == undefined
						&& $scope.user.middleName == null
						|| $scope.user.lastName == undefined
						&& $scope.user.lastName == null
						|| $scope.user.nickName == undefined
						&& $scope.user.nickName == null
						|| $scope.user.gender == undefined
						&& $scope.user.gender == null
						|| $scope.user.emailId == undefined
						&& $scope.user.emailId == null
						|| $scope.user.mobileNumber == undefined
						&& $scope.user.mobileNumber == null
						|| $scope.user.role == undefined
						&& $scope.user.role == null
						|| $scope.user.department == undefined
						&& $scope.user.department == null
						|| $scope.user.userName == undefined
						&& $scope.user.userName == null
						|| $scope.user.password == undefined
						&& $scope.user.password == null
						|| $scope.user.group == undefined
						&& $scope.user.group == null
						|| $scope.user.dateOfBirth == undefined
						&& $scope.user.dateOfBirth == null) {

					if ($scope.user.suffix == undefined
							&& $scope.user.suffix == null) {
						$scope.errorMsg = $scope.errorMsg + "  "
								+ $scope.labels.SUFFIX;
					}
					if ($scope.user.firstName == undefined
							&& $scope.user.firstName == null) {
						$scope.errorMsg = $scope.errorMsg + "  "
								+ $scope.labels.FIRST_NAME;
					}
					if ($scope.user.middleName == undefined
							&& $scope.user.middleName == null) {
						$scope.errorMsg = $scope.errorMsg + "  "
								+ $scope.labels.MIDDLE_NAME;
					}
					if ($scope.user.lastName == undefined
							&& $scope.user.lastName == null) {
						$scope.errorMsg = $scope.errorMsg + "  "
								+ $scope.labels.LAST_NAME;
					}
					if ($scope.user.nickName == undefined
							&& $scope.user.nickName == null) {
						$scope.errorMsg = $scope.errorMsg + "  "
								+ $scope.labels.NICK_NAME;
					}
					if ($scope.user.gender == undefined
							&& $scope.user.gender == null) {
						$scope.errorMsg = $scope.errorMsg + "  "
								+ $scope.labels.GENDER;
					}

					if ($scope.user.emailId == undefined
							&& $scope.user.emailId == null) {
						$scope.errorMsg = $scope.errorMsg + "  "
								+ $scope.labels.EMAIL_ID;
					}

					if ($scope.user.mobileNumber == undefined
							&& $scope.user.mobileNumber == null) {
						$scope.errorMsg = $scope.errorMsg + "  "
								+ $scope.labels.MOBILE_NUMBER;
					}
					if ($scope.user.role == undefined
							&& $scope.user.role == null) {
						$scope.errorMsg = $scope.errorMsg + "  "
								+ $scope.labels.ROLE;
					}

					if ($scope.user.department == undefined
							&& $scope.user.department == null) {
						$scope.errorMsg = $scope.errorMsg + "  "
								+ $scope.labels.DEPARTMENT;
					}
					if ($scope.user.userName == undefined
							&& $scope.user.userName == null) {
						$scope.errorMsg = $scope.errorMsg + "  "
								+ $scope.labels.USER_NAME;
					}

					if ($scope.user.password == undefined
							&& $scope.user.password == null) {
						$scope.errorMsg = $scope.errorMsg + "  "
								+ $scope.labels.PASSWORD;
					}
					if ($scope.user.group == undefined
							&& $scope.user.group == null) {
						$scope.errorMsg = $scope.errorMsg + "  "
								+ $scope.labels.GROUP;
					}

					if ($scope.user.dateOfBirth == undefined
							&& $scope.user.dateOfBirth == null) {
						$scope.errorMsg = $scope.errorMsg + "  "
								+ $scope.labels.DATE_OF_BIRTH;
					}

					$scope.errorMsg = $scope.errorMsg + "  "
							+ $scope.errors.MANDATORY_FIELDS;

				} else {
					$scope.error = false;
					$scope.updateUser(user, users);
				}
			};

			$scope.updateUser = function(user, users) {

				$scope.user.setUsers(users);
				$scope.user.set(user);

				var dataDB = $scope.user
						.toJsonUserDTO($scope.user.toJsonUser());

				if (user.userId) {
					ProductsService.updateUser(dataDB, function(data, status) {

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
							var userData = $scope.user.getUsersData(data);
							$scope.user.updateUser(userData, users);
							$scope.reset();
							$state.go('dashboard.UserList');
//							$mdDialog.hide();
						}
					});
				} else {
					ProductsService.addUser(dataDB, function(data, status) {

						if (status == 200) {
							$scope.error = false;
							$scope.user.fillOneRow(data);
							$scope.reset = {};
							$state.go('dashboard.UserList');
							/*$mdDialog.hide();*/
						} else {
							$scope.error = true;
							$scope.errorMsg = data.message;
							$scope.status = status;
						}
					});

				}
			};

		});

/*
 * Stored
 * 
 * 
 * 
 * /*$scope.genders = $scope.user.getSelectedAutoCompleteGender();
 * 
 * $scope.genderSearch = function(query) { var results = query ?
 * $scope.genders.filter($scope .createFilterFor(query)) : $scope.genders,
 * deferred; return results; };
 */
/*
 * $scope.otherCityName = null; $scope.otherStateName = null;
 * $scope.otherCountryName = null;
 * 
 * if ($scope.user.userId) { if ($scope.user.otherAddressShell != null &&
 * $scope.user.otherAddressShell.addressCityShell != null) $scope.otherCityName =
 * $scope.user.otherAddressShell.addressCityShell.cityName;
 * 
 * if ($scope.user.otherAddressShell != null &&
 * $scope.user.otherAddressShell.addressStateShell != null)
 * $scope.otherStateName =
 * $scope.user.otherAddressShell.addressStateShell.stateName;
 * 
 * if ($scope.user.otherAddressShell != null &&
 * $scope.user.otherAddressShell.addressCountryShell != null)
 * $scope.otherCountryName =
 * $scope.user.otherAddressShell.addressCountryShell.countryName; }
 * 
 * ProductsService .countries(function(response, status) {
 * 
 * if (status != 200) { $scope.error = true; if (response != undefined) {
 * $scope.errorMsg = response.error; $scope.status = status; } $scope.status =
 * 404; $scope.errorMsg = "Server Down"; }
 * 
 * $scope.error = false;
 * 
 * $scope.country = new Countries();
 * 
 * for (i in response) { $scope.country.setCountry(response[i]);
 * $scope.country.addCountry($scope.country .ToCountryJSON()); }
 * $scope.formCountries = $scope.country .getCountries(); $scope.countries =
 * $scope.country .getSelectedAutoCompleteCountry($scope.formCountries);
 * 
 * });
 * 
 * $scope.countrySearch = function(query) { var results = query ?
 * $scope.countries.filter($scope .createFilterFor(query)) : $scope.countries,
 * deferred; return results; }
 * 
 * $scope.listOfStates = function(selectedCountry) { if (selectedCountry) { var
 * tempStates = []; for (i in $scope.statesList) { if (selectedCountry.countryId ==
 * $scope.statesList[i].countryId) { tempStates.push($scope.statesList[i]); } }
 * $scope.states = tempStates; } }
 * 
 * ProductsService .states(function(response, status) {
 * 
 * if (status != 200) { $scope.error = true; if (response != undefined) {
 * $scope.errorMsg = response.error; $scope.status = status; } $scope.status =
 * 404; $scope.errorMsg = "Server Down"; }
 * 
 * $scope.error = false;
 * 
 * $scope.state = new States();
 * 
 * for (i in response) { $scope.state.setState(response[i]);
 * $scope.state.addStates($scope.state .ToStateJSON()); } $scope.formStates =
 * $scope.state.getStates(); $scope.statesList = $scope.state
 * .getSelectedAutoCompleteState($scope.formStates); $scope.states =
 * $scope.statesList;
 * 
 * });
 * 
 * $scope.stateSearch = function(query) { var results = query ?
 * $scope.states.filter($scope .createFilterFor(query)) : $scope.states,
 * deferred; return results; }
 * 
 * $scope.listOfCities = function(selectedState) { if (selectedState) { var
 * tempCities = []; for (i in $scope.citiesList) { if (selectedState.stateId ==
 * $scope.citiesList[i].stateId) { tempCities.push($scope.citiesList[i]); } }
 * $scope.cities = tempCities; } }
 * 
 * ProductsService .cities(function(response, status) {
 * 
 * if (status != 200) { $scope.error = true; if (response != undefined) {
 * $scope.errorMsg = response.error; $scope.status = status; } $scope.status =
 * 404; $scope.errorMsg = "Server Down"; }
 * 
 * $scope.error = false;
 * 
 * $scope.city = new Cities();
 * 
 * for (i in response) { $scope.city.setCity(response[i]);
 * $scope.city.addCity($scope.city .ToCityJSON()); }
 * 
 * $scope.formCities = $scope.city.getCities(); $scope.citiesList = $scope.city
 * .getSelectedAutoCompleteCity($scope.formCities); $scope.cities =
 * $scope.citiesList; });
 * 
 * $scope.citySearch = function(query) { var results = query ?
 * $scope.cities.filter($scope .createFilterFor(query)) : $scope.cities,
 * deferred; return results; };
 * 
 * ProductsService .products(function(response, status) {
 * 
 * $scope.error = false;
 * 
 * if (status != 200) { $scope.error = true; if (response != undefined) {
 * $scope.errorMsg = response.error; $scope.status = status; } $scope.status =
 * 404; $scope.errorMsg = "Server Down"; }
 * 
 * $scope.productEnquiry = new Product(); for (i in response) {
 * $scope.productEnquiry.set(response[i]); $scope.productEnquiry
 * .add($scope.productEnquiry.toJson()); } $scope.productsList =
 * $scope.productEnquiry .getProducts(); $scope.productsLists =
 * $scope.productEnquiry .getSelectedAutoCompleteProduct($scope.productsList);
 * });
 * 
 * $scope.productSearch = function(query) { var results = query ?
 * $scope.productsLists .filter($scope.createFilterFor(query)) :
 * $scope.productsLists, deferred; return results; };
 * 
 * 
 * 
 * 
 * if (user.userId) {
 * 
 * if ($scope.otherCountryName == null) { if (user.otherAddressShell != null)
 * user.otherAddressShell.addressCountryShell = null; } else { if
 * ($scope.otherCountryName.countryId != undefined) { if (user.otherAddressShell ==
 * null) { user.otherAddressShell = {}; }
 * user.otherAddressShell.addressCountryShell = $scope.otherCountryName; } }
 * 
 * if ($scope.otherStateName == null) { if (user.otherAddressShell != null)
 * user.otherAddressShell.addressStateShell = null; } else { if
 * ($scope.otherStateName.stateId != undefined) {
 * 
 * user.otherAddressShell.addressStateShell = $scope.otherStateName; } }
 * 
 * if ($scope.otherCityName == null) { if (user.otherAddressShell != null)
 * user.otherAddressShell.addressCityShell = null; } else { if
 * ($scope.otherCityName.cityId != undefined) {
 * 
 * user.otherAddressShell.addressCityShell = $scope.otherCityName; } } } else {
 * 
 * if (user.otherAddressShell != null) {
 * user.otherAddressShell.addressCountryShell = $scope.otherCountryName;
 * user.otherAddressShell.addressStateShell = $scope.otherStateName;
 * user.otherAddressShell.addressCityShell = $scope.otherCityName; } else {
 * user.otherAddressShell = {}; if ($scope.otherCountryName) {
 * user.otherAddressShell.addressCountryShell = null;
 * user.otherAddressShell.addressCountryShell = $scope.otherCountryName; }
 * 
 * if ($scope.otherStateName) { user.otherAddressShell.addressStateShell = null;
 * user.otherAddressShell.addressStateShell = $scope.otherStateName; }
 * 
 * if ($scope.otherCityName) { user.otherAddressShell.addressCityShell = null;
 * user.otherAddressShell.addressCityShell = $scope.otherCityName; } } }
 * 
 */