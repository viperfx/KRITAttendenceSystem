'use strict';
/**
 * @ngdoc function
 * @name BissPro.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the BissPro
 */
app.controller('MainCtrl', function($position,$scope,$state) {
	  
  });

app.service('sharedProperties', function() {

	var contactsServices = null;
	var contactServices = null;
	return {
		getContactDetails : function() {
			return contactServices;
		},
		setContactDetails : function(contactDetails) {
			contactServices = null;
			contactServices = contactDetails;
		},
		getContactsDetails : function() {
			return contactsServices;
		},
		setContactsDetails : function(contactDetails) {
			contactsServices = null;
			contactsServices = contactDetails;
		}
	}
});