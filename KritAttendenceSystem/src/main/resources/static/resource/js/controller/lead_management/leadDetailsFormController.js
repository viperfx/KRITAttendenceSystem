app.controller(
				'leadDetailsFormController',
				function($scope, $state, $mdDialog, $filter, ProductsService,
						sharedProperties) {
					$scope.labels = labels;
					$scope.errors = errors;
					$scope.suffixes = Suffix;

					$scope.lead = sharedProperties.getObjectDataService();
					$scope.leads = sharedProperties.getAllDataService();

					if ($scope.lead == null) {
						$scope.lead = new LeadData();
					}
					$scope.industryType = new Industries();
					$scope.industries = $scope.industryType
							.getSelectedAutoCompleteIndustries();

					$scope.back = function() {
						$state.go('dashboard.LeadManagement');
					}

					$scope.reset = function() {
						$scope.lead = angular.copy($scope.resetVar);
						$scope.lead.suffix = null;
						$scope.suffixSearchText = "";
						$scope.lead.industry = null;
						$scope.industrySearchText = ""
						$scope.lead.productName = null;
						$scope.productSearchText = "";
						$scope.lead.leadStatus = null;
						$scope.searchLeadStatus = "";

						$scope.lead.leadSource = null;
						$scope.searchLeadSource = "";

						$scope.otherCountryName = null;
						$scope.searchOtherCountry = "";

						$scope.otherStateName = null;
						$scope.searchOtherState = "";
						$scope.otherCityName = null;
						$scope.searchOtherCity = "";
					};

					$scope.leadStatuses = $scope.lead
							.getSelectedAutoCompleteLeadStatus();
					$scope.leadStatusSearch = function(query) {
						var results = query ? $scope.leadStatuses.filter($scope
								.createFilterFor(query)) : $scope.leadStatuses, deferred;
						return results;
					}

					$scope.leadSources = $scope.lead
							.getSelectedAutoCompleteLeadSources();
					$scope.leadSourceSearch = function(query) {
						var results = query ? $scope.leadSources.filter($scope
								.createFilterFor(query)) : $scope.leadSources, deferred;
						return results;
					}

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

					if ($scope.lead.leadId) {
						if ($scope.lead.otherAddressShell != null
								&& $scope.lead.otherAddressShell.addressCityShell != null)
							$scope.otherCityName = $scope.lead.otherAddressShell.addressCityShell.cityName;

						if ($scope.lead.otherAddressShell != null
								&& $scope.lead.otherAddressShell.addressStateShell != null)
							$scope.otherStateName = $scope.lead.otherAddressShell.addressStateShell.stateName;

						if ($scope.lead.otherAddressShell != null
								&& $scope.lead.otherAddressShell.addressCountryShell != null)
							$scope.otherCountryName = $scope.lead.otherAddressShell.addressCountryShell.countryName;

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
					};

					ProductsService
							.products(function(response, status) {

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

								$scope.productEnquiry = new Product();
								for (i in response) {
									$scope.productEnquiry.set(response[i]);
									$scope.productEnquiry
											.add($scope.productEnquiry.toJson());
								}
								$scope.productsList = $scope.productEnquiry
										.getProducts();
								$scope.productsLists = $scope.productEnquiry
										.getSelectedAutoCompleteProduct($scope.productsList);
							});

					$scope.productSearch = function(query) {
						var results = query ? $scope.productsLists
								.filter($scope.createFilterFor(query))
								: $scope.productsLists, deferred;
						return results;
					};

					$scope.cancel = function(event) {
						$mdDialog.hide();
					};

					$scope.submit = function(lead) {
						$scope.error = true;
						$scope.status = {
							isFirstOpen : false,
							isFirstDisabled : false
						};

						$scope.errorMsg = "";
						if ($scope.lead.suffix == undefined
								&& $scope.lead.suffix == null
								|| $scope.lead.firstName == undefined
								&& $scope.lead.firstName == null
								|| $scope.lead.emailId == undefined
								&& $scope.lead.emailId == null
								|| $scope.lead.lastName == undefined
								&& $scope.lead.lastName == null
								|| $scope.lead.mobileNumber == undefined
								&& $scope.lead.mobileNumber == null
								|| $scope.lead.industry == undefined
								&& $scope.lead.industry == null
								|| $scope.lead.productName == undefined
								&& $scope.lead.productName == null) {
							if ($scope.lead.suffix == undefined
									&& $scope.lead.suffix == null) {
								$scope.errorMsg = $scope.errorMsg + "  "
										+ $scope.labels.SUFFIX;
							}
							if ($scope.lead.firstName == undefined
									&& $scope.lead.firstName == null) {
								$scope.errorMsg = $scope.errorMsg + "  "
										+ $scope.labels.FIRST_NAME;
							}
							if ($scope.lead.emailId == undefined
									&& $scope.lead.emailId == null) {
								$scope.errorMsg = $scope.errorMsg + "  "
										+ $scope.labels.EMAIL_ID;
							}
							if ($scope.lead.lastName == undefined
									&& $scope.lead.lastName == null) {
								$scope.errorMsg = $scope.errorMsg + "  "
										+ $scope.labels.LAST_NAME;
							}
							if ($scope.lead.mobileNumber == undefined
									&& $scope.lead.mobileNumber == null) {
								$scope.errorMsg = $scope.errorMsg + "  "
										+ $scope.labels.MOBILE_NUMBER;
							}
							if ($scope.lead.industry == undefined
									&& $scope.lead.industry == null) {
								$scope.errorMsg = $scope.errorMsg + "  "
										+ $scope.labels.INDUSTRY;
							}

							if ($scope.lead.productName == undefined
									&& $scope.lead.productName == null) {
								$scope.errorMsg = $scope.errorMsg + "  "
										+ $scope.labels.PRODUCT;
							}
							$scope.errorMsg = $scope.errorMsg + "  "
									+ $scope.errors.MANDATORY_FIELDS;

						} else {
							$scope.error = false;
							$scope.updateLead(lead);
						}
					};

					$scope.updateLead = function(lead) {

						if (lead.leadId) {

							if ($scope.otherCountryName == null) {
								if (lead.otherAddressShell != null)
									lead.otherAddressShell.addressCountryShell = null;
							} else {
								if ($scope.otherCountryName.countryId != undefined) {
									if (lead.otherAddressShell == null) {
										lead.otherAddressShell = {};
									}
									lead.otherAddressShell.addressCountryShell = $scope.otherCountryName;
								}

							}

							if ($scope.otherStateName == null) {
								if (lead.otherAddressShell != null)
									lead.otherAddressShell.addressStateShell = null;
							} else {
								if ($scope.otherStateName.stateId != undefined) {

									lead.otherAddressShell.addressStateShell = $scope.otherStateName;
								}

							}

							if ($scope.otherCityName == null) {
								if (lead.otherAddressShell != null)
									lead.otherAddressShell.addressCityShell = null;
							} else {
								if ($scope.otherCityName.cityId != undefined) {

									lead.otherAddressShell.addressCityShell = $scope.otherCityName;
								}

							}
						} else {

							if (lead.otherAddressShell != null) {
								lead.otherAddressShell.addressCountryShell = $scope.otherCountryName;
								lead.otherAddressShell.addressStateShell = $scope.otherStateName;
								lead.otherAddressShell.addressCityShell = $scope.otherCityName;
							} else {
								lead.otherAddressShell = {};
								if ($scope.otherCountryName) {
									lead.otherAddressShell.addressCountryShell = null;
									lead.otherAddressShell.addressCountryShell = $scope.otherCountryName;
								}

								if ($scope.otherStateName) {
									lead.otherAddressShell.addressStateShell = null;
									lead.otherAddressShell.addressStateShell = $scope.otherStateName;
								}

								if ($scope.otherCityName) {
									lead.otherAddressShell.addressCityShell = null;
									lead.otherAddressShell.addressCityShell = $scope.otherCityName;
								}
							}

						}

						$scope.lead.setLeads($scope.leads);
						$scope.lead.setLead(lead);
						var dataDB = $scope.lead.ToLeadFromJSON($scope.lead
								.ToJSONLeadData());

						ProductsService.updateLead(dataDB, function(data,
								status) {
							if (status != 200) {
								showError($scope, data.message, status);
								return;
							} else {
								hideError($scope);
								var leadData = $scope.lead.getLeadsData(data);
								$scope.lead.updateLead(leadData, $scope.leads);

								$state.go('dashboard.LeadManagement');
							}
						});

					};
				});
