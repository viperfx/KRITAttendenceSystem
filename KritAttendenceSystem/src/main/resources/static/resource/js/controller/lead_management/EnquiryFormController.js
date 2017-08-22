app.controller(
				'enquiryFormController',
				function($scope, $state, ProductsService) {

					$scope.labels = labels;
					$scope.errors = errors;
					$scope.resetVar = {};
					$scope.success = false;
					$scope.reset = function() {
						$scope.lead = angular.copy($scope.resetVar);
						$scope.contactSearchText = "";
						$scope.lead.contactId = null;
						$scope.lead.suffix = null;
						$scope.suffixSearchText = "";
						$scope.lead.industry = null;
						$scope.industrySearchText = ""
						$scope.product = null;
						$scope.productSearchText = "";
					};

					$scope.lead = new LeadData();
					$scope.suffixes = Suffix;
					$scope.industryType = new Industries();
					$scope.industries = $scope.industryType
							.getSelectedAutoCompleteIndustries();

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
					$scope.onAlertClose = function($error) {
						$scope.error = false;
					};

					$scope.onClose = function(success) {
						$scope.success = false;
					};
					ProductsService
							.contacts(function(response, status) {

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

								$scope.contact = new Contacts();
								for (i in response) {
									$scope.contact.set(response[i]);
									$scope.contact.add($scope.contact.toJson());
								}
								$scope.contacts = $scope.contact.getContacts();
								$scope.contactDetails = $scope.contact
										.getSelectedAutoCompleteContact($scope.contacts);
							});

					$scope.contactSearch = function(query) {
						var results = query ? $scope.contactDetails
								.filter($scope.createFilterFor(query))
								: $scope.contactDetails, deferred;
						return results;
					};

					$scope.selectContact = function(contactId) {
						if (contactId != null) {
							for (i in $scope.contacts) {
								if ($scope.contacts[i].CONTACT_ID == contactId.contactId) {
									$scope.lead.suffix = $scope.contacts[i].SUFFIX;
									$scope.lead.firstName = $scope.contacts[i].FIRST_NAME;
									$scope.lead.emailId = $scope.contacts[i].EMAIL_ID;
									$scope.lead.lastName = $scope.contacts[i].LAST_NAME;
									$scope.lead.companyName = $scope.contacts[i].COMPANY_NAME;
									$scope.lead.mobileNumber = $scope.contacts[i].MOBILE_NUMBER;
									$scope.lead.client = $scope.contacts[i].CLIENT;
									$scope.lead.industry = $scope.contacts[i].INDUSTRY;
								}
							}
						}
					};

					$scope.createFilterFor = function(query) {
						var lowercaseQuery = angular.lowercase(query);
						return function filterFn(state) {
							return (state.value.indexOf(lowercaseQuery) === 0);
						};
					}

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

					$scope.submit = function(lead, product) {
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
								|| $scope.lead.companyName == undefined
								&& $scope.lead.companyName == null
								|| $scope.lead.mobileNumber == undefined
								&& $scope.lead.mobileNumber == null
								|| $scope.lead.client == undefined
								&& $scope.lead.client == null
								|| $scope.lead.industry == undefined
								&& $scope.lead.industry == null) {
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
							if ($scope.lead.companyName == undefined
									&& $scope.lead.companyName == null) {
								$scope.errorMsg = $scope.errorMsg + "  "
										+ $scope.labels.COMPANY_NAME;
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
							if ($scope.lead.client == undefined
									&& $scope.lead.client == null) {
								$scope.errorMsg = $scope.errorMsg + "  "
										+ $scope.labels.CLIENT;
							}
							if ($scope.lead.industry == undefined
									&& $scope.lead.industry == null) {
								$scope.errorMsg = $scope.errorMsg + "  "
										+ $scope.labels.INDUSTRY;
							}
							$scope.errorMsg = $scope.errorMsg + "  "
									+ $scope.errors.MANDATORY_FIELDS;

						} else {
							$scope.error = false;
							$scope.addOrUpdateController(lead, product);
						}
					};

					// $scope.categoryDetails = new ContactCategory();

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

					$scope.addOrUpdateController = function(lead, product) {
						lead.productId = product.productId;
						lead.productName = product.productName;
						lead.productCode = product.productCode;
						lead.suffix = lead.suffix.value;
						lead.industry = lead.industry.value;

						lead.setLead(lead);
						var dataDB = lead.ToLeadFromJSON(lead.ToJSONLeadData());

						/*
						 * if (contact.contactId) { // TODO Update
						 * ProductsService.updateContacts(dataDB, function(data,
						 * status) { if (status != 200) { showError($scope,
						 * data.message, status); return; } hideError($scope);
						 * var contactData = contact.getContactsData(data);
						 * contact.updateContact(contactData, $scope.contacts);
						 * $mdDialog.hide(); }); } else {
						 */

						ProductsService
								.addLeads(
										dataDB,
										function(data, status) {

											if (status == 200) {
												$scope.success = true;
												$scope.successMsg = "Data Added Successfully"
												// response.error;
												$scope.status = status;
												$scope.error = false;
												$scope.reset();
												$scope.lead = lead;
												$scope.lead.fillOneLead(data);
												$scope.reset();

											} else {
												$scope.error = true;
												$scope.errorMsg = data.message;
												$scope.status = status;
											}
										});
						// }

					};

				});