app.controller(
				'leadManagementController',
				function($scope, $state, $mdMedia, $mdDialog, ProductsService,
						sharedProperties) {

					$scope.labels = labels;
					$scope.errors = errors;
					$scope.success = false;
					$scope.selected = new Array();
					$scope.allSelected = false;
					$scope.suffixes = Suffix;
					$scope.selectedLeadStatus = null;
					$scope.selectedUser = null;
					$scope.leadStatusCount = null;
					$scope.onAlertClose = function($error) {
						$scope.error = false;
					};

					$scope.onClose = function(success) {
						$scope.success = false;
					};
					
					$scope.leadStatusCount = sharedProperties.getObjectDataService();
					
					ProductsService.leads(function(response, status) {
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
						$scope.lead = new LeadData();
						for (i in response) {
							$scope.lead.set(response[i]);
							$scope.lead.add($scope.lead.ToJSONLeadData());

						}
						$scope.leads = $scope.lead.getLeads($scope.leadStatusCount);
						$scope.leadStatuses = $scope.lead
								.getSelectedAutoCompleteLeadStatus();
					});

					$scope.select = function(lead, leads) {
						var index = null;
						for (i in $scope.selected) {
							if (lead == $scope.selected[i]) {
								index = i;
							}
						}
						if (index) {
							$scope.selected.splice(index, 1);
						} else {
							$scope.selected.push(lead);
						}
						$scope.selectedAllCheck(leads);
					};

					$scope.selectAll = function(leads) {
						// var contactLength = 0;
						// var selectedLength = 0;
						var selectedAll = false;

						/*
						 * for (a in contacts) { contactLength = a; } for (b in
						 * $scope.selected) { selectedLength = b; }
						 */for (j in leads) {
							var index = null;
							for (i in $scope.selected) {
								if (leads[j].LEAD_ID == $scope.selected[i]) {
									index = i;
								}

							}
							if (index == null) {
								$scope.selected.push(leads[j].LEAD_ID);
								selectedAll = true;
							}

						}
						if (selectedAll == false) {
							$scope.selected = new Array();
						}
					};

					$scope.selectedCheck = function(lead) {
						for (i in $scope.selected) {
							if (lead == $scope.selected[i]) {
								return true;
							}
						}
						return false;

					};

					$scope.selectedAllCheck = function(leads) {
						for (j in leads) {
							var index = null;
							for (i in $scope.selected) {
								if (leads[j].LEAD_ID == $scope.selected[i]) {
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

					$scope.leadStatusSearch = function(query) {
						var results = query ? $scope.leadStatuses.filter($scope
								.createFilterFor(query)) : $scope.leadStatuses, deferred;
						return results;
					};

					$scope.createFilterFor = function(query) {
						var lowercaseQuery = angular.lowercase(query);
						return function filterFn(state) {
							return (state.value.indexOf(lowercaseQuery) === 0);
						};
					};

					$scope.setLeadStatus = function(leadStatus) {
						if (leadStatus) {
							if ($scope.selected != null && $scope.selected != 0) {
								for (i in $scope.selected) {
									for (j in $scope.leads) {
										var lead = null;
										if ($scope.leads[j].LEAD_ID == $scope.selected[i]) {
											$scope.leads[j].LEAD_STATUS = leadStatus;
											lead = $scope.leads[j];

											$scope.lead.setLeads($scope.leads);
											var dataDB = $scope.lead
													.ToLeadFromJSON(lead);

											ProductsService
													.updateLead(
															dataDB,
															function(data,
																	status) {
																if (status != 200) {
																	showError(
																			$scope,
																			data.message,
																			status);
																	return;
																}
																hideError($scope);
																$scope.success = true;
																$scope.successMsg = "Status Changed Successfully";
																var leadData = $scope.lead
																		.getLeadsData(data);
																$scope.lead
																		.updateLead(
																				leadData,
																				$scope.leads);
																$scope.selected
																		.splice(
																				i,
																				1);
															});

										}

									}

								}
							} else {
								showError($scope, "Select Lead First", status);
							}
						} else {
							showError($scope, "Select Status First", status);
						}

					};

					$scope.assignUser = function(user) {
						if (user) {
							if ($scope.selected != null && $scope.selected != 0) {
								for (i in $scope.selected) {
									for (j in $scope.leads) {
										var lead = null;
										if ($scope.leads[j].LEAD_ID == $scope.selected[i]) {
											$scope.leads[j].USER_ID = user.userName.userId;

											lead = $scope.leads[j];

											$scope.lead.setLeads($scope.leads);
											var dataDB = $scope.lead
													.ToLeadFromJSON(lead);

											ProductsService
													.updateLead(
															dataDB,
															function(data,
																	status) {
																if (status != 200) {
																	showError(
																			$scope,
																			data.message,
																			status);
																	return;
																}
																hideError($scope);
																$scope.success = true;
																$scope.successMsg = "User Seted Successfully";
																var leadData = $scope.lead
																		.getLeadsData(data);
																$scope.lead
																		.updateLead(
																				leadData,
																				$scope.leads);
																$scope.selected
																		.splice(
																				i,
																				1);
															});

										}

									}

								}

							} else {
								showError($scope, "Select Lead First", status);
							}
						} else {
							showError($scope, "Select User First", status);
						}

					};

					ProductsService
							.userLoginDetails(function(response, status) {
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
								$scope.tempUsers = $scope.user.getUsers();
								$scope.users = $scope.user
										.getSelectedAutoCompleteUser($scope.tempUsers);
								/*
								 * $scope.userStatuses = $scope.user
								 * .getSelectedAutoCompleteUserStatus();
								 */
							});

					$scope.userSearch = function(query) {
						var results = query ? $scope.users.filter($scope
								.createFilterFor(query)) : $scope.users, deferred;
						return results;
					};

					$scope.edit = function($event, lead, leads) {
						var leadData = new LeadData();
						leadData.setLeads(leads);
						leadData.editLeadData(lead);

						sharedProperties.setObjectDataService(leadData);
						sharedProperties.setAllDataService(leads);

						/*
						 * sharedProperties.setContactDetails(leadData);
						 * sharedProperties.setContactsDetails(leads);
						 */
						$state.go('dashboard.LeadDetailsForm');

						/*
						 * var useFullScreen = ($mdMedia('sm') ||
						 * $mdMedia('xs')); $mdDialog .show({ controller :
						 * 'leadDetailsFormController', templateUrl :
						 * 'pages/view/lead_management/leadDetailsForm.html',
						 * parent : angular.element(document.body), targetEvent :
						 * $event, clickOutsideToClose : false, fullscreen :
						 * useFullScreen, });
						 */
					};
				});