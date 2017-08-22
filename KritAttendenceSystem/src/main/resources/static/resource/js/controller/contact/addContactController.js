app.controller(
				'addContactController',
				function($scope, $state, $mdDialog, $mdSidenav, $mdDateLocale,
						$timeout, $q, $log, $filter, ProductsService,
						sharedProperties) {

					// $scope.contact = new Contact();
					$scope.labels = labels;
					$scope.errors = errors;

					$scope.contact = sharedProperties.getObjectDataService();
					$scope.contacts = sharedProperties.getAllDataService();
					$scope.isUpdate = sharedProperties.getProcessDetails();
					if ($scope.isUpdate == false) {
						$scope.contact = new Contacts();
					}

					$scope.resetVar = {};
					$scope.suffixes = Suffix;
					$scope.industryType = new Industries();
					$scope.industries = $scope.industryType
							.getSelectedAutoCompleteIndustries();

					$scope.back = function() {
						$state.go('dashboard.Contacts');
					}

					$scope.reset = function() {
						$scope.contact = angular.copy($scope.resetVar);
						$scope.contact.suffix = null;
						$scope.suffixSearchText = "";
						$scope.contact.industry = null;
						$scope.industrySearchText = "";

						$scope.deliveryCountryName = null;
						$scope.searchDeliveryCountry = "";
						$scope.deliveryStateName = null;
						$scope.searchDeliveryState = "";
						$scope.deliveryCityName = null;
						$scope.searchDeliveryCity = "";

						$scope.mailingCountryName = null;
						$scope.searchMailingCountry = "";
						$scope.mailingStateName = null;
						$scope.searchMailingState = "";
						$scope.mailingCityName = null;
						$scope.searchMailingCity = "";

						$scope.otherCountryName = null;
						$scope.searchOtherCountry = "";
						$scope.otherStateName = null;
						$scope.searchOtherState = "";
						$scope.otherCityName = null;
						$scope.searchOtherCity = "";
					};

					$scope.suffixSearch = function(query) {
						var results = query ? $scope.suffixes.filter($scope
								.createFilterFor(query)) : $scope.suffixes, deferred;
						return results;
					}

					$scope.industrySearch = function(query) {
						var results = query ? $scope.industries.filter($scope
								.createFilterFor(query)) : $scope.industries, deferred;
						return results;
					}

					$scope.otherCityName = null;
					$scope.otherStateName = null;
					$scope.otherCountryName = null;
					$scope.mailingCountryName = null;
					$scope.mailingStateName = null;
					$scope.mailingCityName = null;
					$scope.deliveryCountryName = null;
					$scope.deliveryStateName = null;
					$scope.deliveryCityName = null;

					if ($scope.contact.contactId) {
						if ($scope.contact.otherAddressShell != null
								&& $scope.contact.otherAddressShell.addressCityShell != null)
							$scope.otherCityName = $scope.contact.otherAddressShell.addressCityShell.cityName;

						if ($scope.contact.otherAddressShell != null
								&& $scope.contact.otherAddressShell.addressStateShell != null)
							$scope.otherStateName = $scope.contact.otherAddressShell.addressStateShell.stateName;

						if ($scope.contact.otherAddressShell != null
								&& $scope.contact.otherAddressShell.addressCountryShell != null)
							$scope.otherCountryName = $scope.contact.otherAddressShell.addressCountryShell.countryName;

						if ($scope.contact.mailingAddressShell != null
								&& $scope.contact.mailingAddressShell.addressCityShell != null)
							$scope.mailingCityName = $scope.contact.mailingAddressShell.addressCityShell.cityName;

						if ($scope.contact.mailingAddressShell != null
								&& $scope.contact.mailingAddressShell.addressStateShell != null)
							$scope.mailingStateName = $scope.contact.mailingAddressShell.addressStateShell.stateName;

						if ($scope.contact.mailingAddressShell != null
								&& $scope.contact.mailingAddressShell.addressCountryShell != null)
							$scope.mailingCountryName = $scope.contact.mailingAddressShell.addressCountryShell.countryName;

						if ($scope.contact.deliveryAddressShell != null
								&& $scope.contact.deliveryAddressShell.addressCityShell != null)
							$scope.deliveryCityName = $scope.contact.deliveryAddressShell.addressCityShell.cityName;

						if ($scope.contact.deliveryAddressShell != null
								&& $scope.contact.deliveryAddressShell.addressStateShell != null)
							$scope.deliveryStateName = $scope.contact.deliveryAddressShell.addressStateShell.stateName;

						if ($scope.contact.deliveryAddressShell != null
								&& $scope.contact.deliveryAddressShell.addressCountryShell != null)
							$scope.deliveryCountryName = $scope.contact.deliveryAddressShell.addressCountryShell.countryName;
					}

					ProductsService
							.countries(function(response, status) {

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

								$scope.country = new Countries();

								for (i in response) {
									$scope.country.setCountry(response[i]);
									$scope.country.addCountry($scope.country
											.ToCountryJSON());
								}
								$scope.formCountries = $scope.country
										.getCountries();
								$scope.countries = $scope.country
										.getSelectedAutoCompleteCountry($scope.formCountries);

							});

					$scope.countrySearch = function(query) {
						var results = query ? $scope.countries.filter($scope
								.createFilterFor(query)) : $scope.countries, deferred;
						return results;
					}

					$scope.createFilterFor = function(query) {
						var lowercaseQuery = angular.lowercase(query);
						return function filterFn(state) {
							return (state.value.indexOf(lowercaseQuery) === 0);
						};
					}

					$scope.listOfStates = function(selectedCountry) {
						if (selectedCountry) {
							var tempStates = [];
							for (i in $scope.statesList) {
								if (selectedCountry.countryId == $scope.statesList[i].countryId) {
									tempStates.push($scope.statesList[i]);
								}
							}
							$scope.states = tempStates;
						}
					}

					ProductsService
							.states(function(response, status) {

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

								$scope.state = new States();

								for (i in response) {
									$scope.state.setState(response[i]);
									$scope.state.addStates($scope.state
											.ToStateJSON());
								}
								$scope.formStates = $scope.state.getStates();
								$scope.statesList = $scope.state
										.getSelectedAutoCompleteState($scope.formStates);
								$scope.states = $scope.statesList;

							});

					$scope.stateSearch = function(query) {
						var results = query ? $scope.states.filter($scope
								.createFilterFor(query)) : $scope.states, deferred;
						return results;
					}

					$scope.listOfCities = function(selectedState) {
						if (selectedState) {
							var tempCities = [];
							for (i in $scope.citiesList) {
								if (selectedState.stateId == $scope.citiesList[i].stateId) {
									tempCities.push($scope.citiesList[i]);
								}
							}
							$scope.cities = tempCities;
						}
					}

					ProductsService
							.cities(function(response, status) {

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

								$scope.city = new Cities();

								for (i in response) {
									$scope.city.setCity(response[i]);
									$scope.city.addCity($scope.city
											.ToCityJSON());
								}

								$scope.formCities = $scope.city.getCities();
								$scope.citiesList = $scope.city
										.getSelectedAutoCompleteCity($scope.formCities);
								$scope.cities = $scope.citiesList;
							});

					$scope.citySearch = function(query) {
						var results = query ? $scope.cities.filter($scope
								.createFilterFor(query)) : $scope.cities, deferred;
						return results;
					}

					$scope.submit = function(contact) {
						$scope.error = true;
						$scope.status = {
							isFirstOpen : false,
							isFirstDisabled : false
						};

						$scope.errorMsg = "";
						if ($scope.contact.suffix == undefined
								&& $scope.contact.suffix == null
								|| $scope.contact.firstName == undefined
								&& $scope.contact.firstName == null
								|| $scope.contact.emailId == undefined
								&& $scope.contact.emailId == null
								|| $scope.contact.lastName == undefined
								&& $scope.contact.lastName == null
								|| $scope.contact.mobileNumber == undefined
								&& $scope.contact.mobileNumber == null
								|| $scope.contact.client == undefined
								&& $scope.contact.client == null
								|| $scope.contact.industry == undefined
								&& $scope.contact.industry == null) {
							if ($scope.contact.suffix == undefined
									&& $scope.contact.suffix == null) {
								$scope.errorMsg = $scope.errorMsg + "  "
										+ $scope.labels.SUFFIX;
							}
							if ($scope.contact.firstName == undefined
									&& $scope.contact.firstName == null) {
								$scope.errorMsg = $scope.errorMsg + "  "
										+ $scope.labels.FIRST_NAME;
							}
							if ($scope.contact.emailId == undefined
									&& $scope.contact.emailId == null) {
								$scope.errorMsg = $scope.errorMsg + "  "
										+ $scope.labels.EMAIL_ID;
							}
							if ($scope.contact.lastName == undefined
									&& $scope.contact.lastName == null) {
								$scope.errorMsg = $scope.errorMsg + "  "
										+ $scope.labels.LAST_NAME;
							}
							if ($scope.contact.mobileNumber == undefined
									&& $scope.contact.mobileNumber == null) {
								$scope.errorMsg = $scope.errorMsg + "  "
										+ $scope.labels.MOBILE_NUMBER;
							}
							if ($scope.contact.client == undefined
									&& $scope.contact.client == null) {
								$scope.errorMsg = $scope.errorMsg + "  "
										+ $scope.labels.CLIENT;
							}
							if ($scope.contact.industry == undefined
									&& $scope.contact.industry == null) {
								$scope.errorMsg = $scope.errorMsg + "  "
										+ $scope.labels.INDUSTRY;
							}
							$scope.errorMsg = $scope.errorMsg + "  "
									+ $scope.errors.MANDATORY_FIELDS;

						} else {
							$scope.error = false;
							$scope.addOrUpdateController(contact);
						}
					};

					$scope.cancel = function(event) {
						$mdDialog.hide();
					};

					// $scope.categoryDetails = new ContactCategory();
					$scope.onAlertClose = function($error) {
						$scope.error = false;
					};

					$scope.status = {
						isFirstOpen : true,
						isFirstDisabled : false
					};

					/**
					 * Search for states... use $timeout to simulate remote
					 * dataservice call.
					 */
					$scope.querySearch = function(query) {
						var results = query ? $scope.states.filter($scope
								.createFilterFor(query)) : $scope.states, deferred;
						return results;
					}

					$scope.addOrUpdateController = function(contact) {

						if (contact.contactId) {

							if ($scope.deliveryCountryName == null) {
								if (contact.deliveryAddressShell != null)
									contact.deliveryAddressShell.addressCountryShell = null;
							} else {
								if ($scope.deliveryCountryName.countryId != undefined) {
									if (contact.deliveryAddressShell == null) {
										contact.deliveryAddressShell = {};
									}
									contact.deliveryAddressShell.addressCountryShell = $scope.deliveryCountryName;

								}

							}
							if ($scope.deliveryStateName == null) {
								if (contact.deliveryAddressShell != null)
									contact.deliveryAddressShell.addressStateShell = null;
							} else {
								if ($scope.deliveryStateName.stateId != undefined) {

									contact.deliveryAddressShell.addressStateShell = $scope.deliveryStateName;
								}

							}

							if ($scope.deliveryCityName == null) {
								if (contact.deliveryAddressShell != null)
									contact.deliveryAddressShell.addressCityShell = null;
							} else {
								if ($scope.deliveryCityName.cityId != undefined) {
									contact.deliveryAddressShell.addressCityShell = $scope.deliveryCityName;
								}

							}

							if ($scope.mailingCountryName == null) {
								if (contact.mailingAddressShell != null)
									contact.mailingAddressShell.addressCountryShell = null;
							} else {
								if ($scope.mailingCountryName.countryId != undefined) {
									if (contact.mailingAddressShell == null) {
										contact.mailingAddressShell = {};
									}
									contact.mailingAddressShell.addressCountryShell = $scope.mailingCountryName;
								}

							}

							if ($scope.mailingStateName == null) {
								if (contact.mailingAddressShell != null)
									contact.mailingAddressShell.addressStateShell = null;
							} else {
								if ($scope.mailingStateName.stateId != undefined) {

									contact.mailingAddressShell.addressStateShell = $scope.mailingStateName;
								}

							}

							if ($scope.mailingCityName == null) {
								if (contact.mailingAddressShell != null)
									contact.mailingAddressShell.addressCityShell = null;
							} else {
								if ($scope.mailingCityName.cityId != undefined) {

									contact.mailingAddressShell.addressCityShell = $scope.mailingCityName;
								}

							}

							if ($scope.otherCountryName == null) {
								if (contact.otherAddressShell != null)
									contact.otherAddressShell.addressCountryShell = null;
							} else {
								if ($scope.otherCountryName.countryId != undefined) {
									if (contact.otherAddressShell == null) {
										contact.otherAddressShell = {};
									}
									contact.otherAddressShell.addressCountryShell = $scope.otherCountryName;
								}

							}

							if ($scope.otherStateName == null) {
								if (contact.otherAddressShell != null)
									contact.otherAddressShell.addressStateShell = null;
							} else {
								if ($scope.otherStateName.stateId != undefined) {

									contact.otherAddressShell.addressStateShell = $scope.otherStateName;
								}

							}

							if ($scope.otherCityName == null) {
								if (contact.otherAddressShell != null)
									contact.otherAddressShell.addressCityShell = null;
							} else {
								if ($scope.otherCityName.cityId != undefined) {

									contact.otherAddressShell.addressCityShell = $scope.otherCityName;
								}

							}
						} else {

							if (contact.otherAddressShell != null) {
								contact.otherAddressShell.addressCountryShell = $scope.otherCountryName;
								contact.otherAddressShell.addressStateShell = $scope.otherStateName;
								contact.otherAddressShell.addressCityShell = $scope.otherCityName;
							} else {
								contact.otherAddressShell = {};
								if ($scope.otherCountryName) {
									contact.otherAddressShell.addressCountryShell = null;
									contact.otherAddressShell.addressCountryShell = $scope.otherCountryName;
								}

								if ($scope.otherStateName) {
									contact.otherAddressShell.addressStateShell = null;
									contact.otherAddressShell.addressStateShell = $scope.otherStateName;
								}

								if ($scope.otherCityName) {
									contact.otherAddressShell.addressCityShell = null;
									contact.otherAddressShell.addressCityShell = $scope.otherCityName;
								}
							}

							if (contact.mailingAddressShell != null) {
								contact.mailingAddressShell.addressCountryShell = $scope.mailingCountryName;
								contact.mailingAddressShell.addressStateShell = $scope.mailingStateName;
								contact.mailingAddressShell.addressCityShell = $scope.mailingCityName;
							} else {
								contact.mailingAddressShell = {};
								if ($scope.mailingCountryName) {
									contact.mailingAddressShell.addressCountryShell = null;
									contact.mailingAddressShell.addressCountryShell = $scope.mailingCountryName;
								}

								if ($scope.mailingStateName) {
									contact.mailingAddressShell.addressStateShell = null;
									contact.mailingAddressShell.addressStateShell = $scope.mailingStateName;
								}

								if ($scope.mailingCityName) {
									contact.mailingAddressShell.addressCityShell = null;
									contact.mailingAddressShell.addressCityShell = $scope.mailingCityName;
								}
							}

							if (contact.deliveryAddressShell != null) {
								contact.deliveryAddressShell.addressCountryShell = $scope.deliveryCountryName;
								contact.deliveryAddressShell.addressStateShell = $scope.deliveryStateName;
								contact.deliveryAddressShell.addressCityShell = $scope.deliveryCityName;
							} else {
								contact.deliveryAddressShell = {};
								if ($scope.deliveryCountryName) {
									contact.deliveryAddressShell.addressCountryShell = null;
									contact.deliveryAddressShell.addressCountryShell = $scope.deliveryCountryName;
								}

								if ($scope.deliveryStateName) {
									contact.deliveryAddressShell.addressStateShell = null;
									contact.deliveryAddressShell.addressStateShell = $scope.deliveryStateName;
								}

								if ($scope.deliveryCityName) {
									contact.deliveryAddressShell.addressCityShell = null;
									contact.deliveryAddressShell.addressCityShell = $scope.deliveryCityName;
								}
							}

						}

						contact.setContacts($scope.contacts);

						contact.set(contact);
						var dataDB = contact.toJsonContactDTO(contact.toJson());

						if (contact.contactId) {
							// TODO Update
							ProductsService.updateContacts(dataDB,
									function(data, status) {
										if (status != 200) {
											showError($scope, data.message,
													status);
											return;
										}
										hideError($scope);
										var contactData = contact
												.getContactsData(data);
										contact.updateContact(contactData,
												$scope.contacts);
										$scope.reset();
										/* $mdDialog.hide(); */
										$state.go('dashboard.Contacts');

									});

						} else {

							ProductsService.addContacts(dataDB, function(data,
									status) {

								if (status == 200) {
									$scope.error = false;
									$scope.contact.fillOneRow(data);
									$scope.reset();
									/* $mdDialog.hide(); */
									$state.go('dashboard.Contacts');
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

				});
