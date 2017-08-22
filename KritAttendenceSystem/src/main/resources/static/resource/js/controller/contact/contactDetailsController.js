app.controller(
		'contactDetailsController',
		function($scope, $compile, $state, $mdDialog, $mdMedia,
				ProductsService, sharedProperties, DTOptionsBuilder,
				DTColumnDefBuilder, DTColumnBuilder) {

			$scope.labels = labels;
			$scope.errors = errors;
			$scope.selected = new Array();
			$scope.allSelected = false;

			$scope.select = function(contact, contacts) {
				var index = null;
				for (i in $scope.selected) {
					if (contact == $scope.selected[i]) {
						index = i;
					}
				}
				if (index) {
					$scope.selected.splice(index, 1);
				} else {
					$scope.selected.push(contact);
				}
				$scope.selectedAllCheck(contacts);
			};

			$scope.selectAll = function(contacts) {
				// var contactLength = 0;
				// var selectedLength = 0;
				var selectedAll = false;

				/*
				 * for (a in contacts) { contactLength = a; } for (b in
				 * $scope.selected) { selectedLength = b; }
				 */for (j in contacts) {
					var index = null;
					for (i in $scope.selected) {
						if (contacts[j].CONTACT_ID == $scope.selected[i]) {
							index = i;
						}

					}
					if (index == null) {
						$scope.selected.push(contacts[j].CONTACT_ID);
						selectedAll = true;
					}

				}
				if (selectedAll == false) {
					$scope.selected = new Array();
				}
			};

			$scope.selectedCheck = function(contact) {
				for (i in $scope.selected) {
					if (contact == $scope.selected[i]) {
						return true;
					}
				}
				return false;

			};

			$scope.selectedAllCheck = function(contacts) {
				for (j in contacts) {
					var index = null;
					for (i in $scope.selected) {
						if (contacts[j].CONTACT_ID == $scope.selected[i]) {
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

			ProductsService.contacts(function(response, status) {

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
			});

			$scope.alertOn = function() {
				alert("Hello Controller is working");
			}

			// fires On Alert close.
			$scope.onAlertClose = function($error) {
				$scope.error = false;
			};

			$scope.onRemove = function(event, contacts, contact) {
				if($scope.selected != null && $scope.selected != 0){
				var confirm = $mdDialog.confirm().title('Delete').textContent(
						'Are you sure?').ariaLabel('Delete').targetEvent(event)
						.ok('Yes').cancel('No');

				$mdDialog.show(confirm).then(function(productDetails) {
					$scope.removeData(contacts, contact);
				});
				}else{
					$scope.error = true;
					$scope.errorMsg = "Select Data First";
				}
			};
			$scope.removeData = function(contacts, contact) {
				var newContact = new Contacts();
				newContact.setContacts(contacts);
				var deletedData = [];

				for (i in $scope.selected) {
					for (j in contacts) {
						if ($scope.selected[i] == contacts[j].CONTACT_ID) {

							contacts[j].IS_DELETED = true;
							var dataDB = newContact
									.toJsonContactDTO(contacts[j]);
							ProductsService.updateContacts(dataDB, function(
									data, status) {

								if (status != 200) {
									$scope.error = true;
									$scope.errorMsg = data.message;
									$scope.status = status;

								} else {

									$scope.error = false;
									deletedData.push(data);
									$scope.success = true;
									$scope.successMsg = "Data Deleted Successfully";
								}
							});
						}
					}

					$scope.contact.removeContactByObject(deletedData);
					$scope.selected.splice(i,1);
				}
				
			};

			$scope.editDetails = function($event, $index, contact, contacts) {
				var contactDetails = new Contacts();
				contactDetails.setContacts(contacts);
				contactDetails.editContacts(contact);

				sharedProperties.setObjectDataService(contactDetails);
				sharedProperties.setAllDataService(contacts);
				sharedProperties.setProcessDetails(true);
				
				$state.go('dashboard.EditContacts');
			};

			$scope.addContactDetails = function($event, contact, contacts) {

				var contactDetails = new Contacts();

				sharedProperties.setObjectDataService(contactDetails);
				sharedProperties.setAllDataService(contacts);
				sharedProperties.setProcessDetails(false);

				$state.go('dashboard.EditContacts');
				
				/*var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
				$mdDialog.show({
					controller : 'addContactController',
					templateUrl : 'pages/view/contact/EditContact.html',
					parent : angular.element(document.body),
					targetEvent : $event,
					clickOutsideToClose : false,
					fullscreen : useFullScreen,
				});*/

			};

		});
