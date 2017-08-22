/**
 * getHeadersForJsonType to get JSON header.
 * 
 * @global
 */
var getHeadersForJsonType = function() {
	return "Content-Type: application/json;charset=UTF-8";

};

/* SSO Prefixes */
var PREFIX_SSO = "http://172.16.1.117:8080/sso";
var SSODETAILS = "ssoDetails";
var getSSOURL = function() {
	return PREFIX_SSO + "/" + SSODETAILS;
};


/* User Prefixes */
var PREFIX_USER = "http://172.16.1.117:20000/login";
var LOGINUSERS = "users";
var ADDUSER = "addUser";
var UPDATEUSER = "updateUser";
var getUserURL = function() {
	return PREFIX_USER + "/" + LOGINUSERS;
};

var getAddUserURL = function() {
	return PREFIX_USER + "/" + ADDUSER;
};

var getUpdateUserURL = function() {
	return PREFIX_USER + "/" + UPDATEUSER;
};

/**
 * Product prefixes.
 * 
 * @global
 * 
 * http://172.16.1.117:20000/product/products
 */
var PREFIX = "http://172.16.1.117:20000/product";
var PRODUCTS = "products";
var ADDPRODUCT = "addProduct";
var CATEGORIES = "productCategories";
var ADDCATEGORY = "addProductCategory";
var UPDATEPRODUCT = "updateProduct";
var UPDATECATEGORY = "updateProductCategory";

/**
 * Products URL.
 * 
 * @global
 */

var getProductsURL = function() {
	return PREFIX + "/" + PRODUCTS;
};

/* Add Product URL */
var getAddProductsURL = function() {
	return PREFIX + "/" + ADDPRODUCT;
};

/* Update Product URL */
var getUpdateProductsURL = function() {
	return PREFIX + "/" + UPDATEPRODUCT;
};

/* Get Category URL */
var getCategoriesURL = function() {
	return PREFIX + "/" + CATEGORIES;
};

/* Add category URL */
var addCategoriesURL = function() {
	return PREFIX + "/" + ADDCATEGORY;
};

/* Update category URL */
var getUpdateCategoriesURL = function() {
	return PREFIX + "/" + UPDATECATEGORY;
};

/**
 * Contacts URL.
 * 
 * @global
 */
var getContactsURL = function() {
	return PREFIX_CONTACT + "/" + CONTACTS;
};

/* Update Product URL */
var getUpdateContactsURL = function() {
	return PREFIX_CONTACT + "/" + UPDATECONTACT;
};

var addContactsURL = function() {
	return PREFIX_CONTACT + "/" + ADDCONTACTS;
};
var PREFIX_CONTACT = "http://172.16.1.117:20000/contact";
var CONTACTS = "contacts";
var UPDATECONTACT = "updateContact";
var ADDCONTACTS = "addContact";

var PREFIX_ADDRESSS = "http://172.16.1.117:20000/region";
var COUNTRIES = "countries";
var getCountriesURL = function() {
	return PREFIX_ADDRESSS + "/" + COUNTRIES;
};

var STATES = "states";
var getStatesURL = function() {
	return PREFIX_ADDRESSS + "/" + STATES;
};

var CITIES = "cities";
var getCitiesURL = function() {
	return PREFIX_ADDRESSS + "/" + CITIES;
};

var PREFIX_LEAD = "http://172.16.1.117:20000/lead";
var LEADS = "leads";
var ADD_LEAD = "addLead";
var UPDATE_LEAD = "updateLead"
var getLeadsURL = function() {
	return PREFIX_LEAD + "/" + LEADS;
};

var getAddLeadsURL = function() {
	return PREFIX_LEAD + "/" + ADD_LEAD;
};

var getUpdateLeadsURL = function() {
	return PREFIX_LEAD + "/" + UPDATE_LEAD;
};

/* Dashboard Lead Statuses */
var PREFIX_DASHBOARD_LEADS = "http://172.16.1.117:20000/dashBoard";
var LEAD_STATUSES = "mainTabs?id=";

var getLeadStatusURL = function() {
	return PREFIX_DASHBOARD_LEADS + "/" + LEAD_STATUSES;
};

/* Dashboard Line Charts */
var LINE_CHARTS = "lineChart?id=";

var getLineChartURL = function() {
	return PREFIX_DASHBOARD_LEADS + "/" + LINE_CHARTS;
};

/* Dashboard Area Charts */
var AREA_CHARTS = "areaChart?id=";

var getAreaChartURL = function() {
	return PREFIX_DASHBOARD_LEADS + "/" + AREA_CHARTS;
};

/**
 * Product from service.
 * 
 * @global
 */
angular.module('BissPro').factory(
		'ProductsService',
		function($http, $cookies) {
			var service = {};

			/* To Get Login User Data */
			service.userLoginDetails = function(callback) {
				var URL = getUserURL();
				$http.get(URL).success(
						function(Response, Status, Headers, Config) {
							callback(Response, Status);
						}).error(function(Response, Status, Headers, Config) {
					callback(Response, Status);
				});
			}
			
			/* To Get SSO Data */
			service.ssoDetails = function(callback) {
				var URL = getSSOURL();
				$http.get(URL).success(
						function(Response, Status, Headers, Config) {
							callback(Response, Status);
						}).error(function(Response, Status, Headers, Config) {
					callback(Response, Status);
				});
			}

			/* Dashboard Status and Donut chart Get Data */
			service.leadStatuses = function(dataDB, callback) {
				var URL = getLeadStatusURL() + $cookies.get('User');

				$http.put(URL, dataDB, getHeadersForJsonType()).success(
						function(data, status, headers) {
							callback(data, status);
						}).error(function(data, status, header, config) {
					callback(data, status);
				});
			}
			
			/* Dashboard Line chart Get Data */
			service.lineChartData = function(dataDB, callback) {
				var URL = getLineChartURL() + $cookies.get('User');

				$http.put(URL, dataDB, getHeadersForJsonType()).success(
						function(data, status, headers) {
							callback(data, status);
						}).error(function(data, status, header, config) {
					callback(data, status);
				});
			}

			/* Dashboard Area chart Get Data */
			service.areaChartData = function(dataDB, callback) {
				var URL = getAreaChartURL() + $cookies.get('User');

				$http.put(URL, dataDB, getHeadersForJsonType()).success(
						function(data, status, headers) {
							callback(data, status);
						}).error(function(data, status, header, config) {
					callback(data, status);
				});
			}

			/* To Add User */
			service.addUser = function(dataDB, callback) {
				var URL = getAddUserURL();

				$http.put(URL, dataDB, getHeadersForJsonType()).success(
						function(data, status, headers) {
							callback(data, status);
						}).error(function(data, status, header, config) {
					callback(data, status);
				});
			}

			service.updateUser = function(dataDB, callback) {
				var URL = getUpdateUserURL();

				$http.put(URL, dataDB, getHeadersForJsonType()).success(
						function(data, status, headers) {
							callback(data, status);
						}).error(function(data, status, header, config) {
					callback(data, status);
				});
			}
			/* To get Products */
			service.products = function(callback) {
				var URL = getProductsURL();
				$http.get(URL).success(
						function(Response, Status, Headers, Config) {
							callback(Response, Status);
						}).error(function(Response, Status, Headers, Config) {
					callback(Response, Status);
				});
			}
			/* To send Product */
			service.addProducts = function(dataDB, callback) {
				var URL = getAddProductsURL();

				$http.put(URL, dataDB, getHeadersForJsonType()).success(
						function(data, status, headers) {
							callback(data, status);
						}).error(function(data, status, header, config) {
					callback(data, status);
				});
			}

			/* To Delete or Update Product */
			service.updateProducts = function(dataDB, callback) {
				var URL = getUpdateProductsURL();

				$http.put(URL, dataDB, getHeadersForJsonType()).success(
						function(data, status, headers) {
							callback(data, status);
						}).error(function(data, status, header, config) {
					callback(data, status);
				});
			}

			service.getFreshData = function() {
				var URL = getProductsURL();
				return $http.get(URL).then(function(response) {
					alert(response.data);
					return response.data;
				});
			}
			/* To get Categories */
			service.categories = function(callback) {
				var URL = getCategoriesURL();
				$http.get(URL).success(
						function(Response, Status, Headers, Config) {
							callback(Response, Status);
						}).error(function(Response, Status, Headers, Config) {
					callback(Response, Status);
				});
			}

			service.addcategories = function(dataDB, callback) {
				var URL = addCategoriesURL();

				$http.put(URL, dataDB, getHeadersForJsonType()).success(
						function(data, status, headers) {
							callback(data, status);
						}).error(function(data, status, header, config) {
					callback(data, status);
				});
			}

			service.updateCategories = function(dataDB, callback) {
				var URL = getUpdateCategoriesURL();

				$http.put(URL, dataDB, getHeadersForJsonType()).success(
						function(data, status, headers) {
							callback(data, status);
						}).error(function(data, status, header, config) {
					callback(data, status);
				});
			}

			/* To get Contacts */
			service.contacts = function(callback) {
				var URL = getContactsURL();
				$http.get(URL).success(
						function(Response, Status, Headers, Config) {
							callback(Response, Status);
						}).error(function(Response, Status, Headers, Config) {
					callback(Response, Status);
				});
			}

			service.addContacts = function(dataDB, callback) {
				var URL = addContactsURL();

				$http.put(URL, dataDB, getHeadersForJsonType()).success(
						function(data, status, headers) {
							callback(data, status);
						}).error(function(data, status, header, config) {
					callback(data, status);
				});
			}

			/* To Delete or Update Contact */
			service.updateContacts = function(dataDB, callback) {
				var URL = getUpdateContactsURL();

				$http.put(URL, dataDB, getHeadersForJsonType()).success(
						function(data, status, headers) {
							callback(data, status);
						}).error(function(data, status, header, config) {
					callback(data, status);
				});
			}

			/* To get Countries */
			service.countries = function(callback) {
				var URL = getCountriesURL();
				$http.get(URL).success(
						function(Response, Status, Headers, Config) {
							callback(Response, Status);
						}).error(function(Response, Status, Headers, Config) {
					callback(Response, Status);
				});
			}

			/* To get States */
			service.states = function(callback) {
				var URL = getStatesURL();
				$http.get(URL).success(
						function(Response, Status, Headers, Config) {
							callback(Response, Status);
						}).error(function(Response, Status, Headers, Config) {
					callback(Response, Status);
				});
			}

			/* To get Cities */
			service.cities = function(callback) {
				var URL = getCitiesURL();
				$http.get(URL).success(
						function(Response, Status, Headers, Config) {
							callback(Response, Status);
						}).error(function(Response, Status, Headers, Config) {
					callback(Response, Status);
				});
			}

			service.leads = function(callback) {
				var URL = getLeadsURL();
				$http.get(URL).success(
						function(Response, Status, Headers, Config) {
							callback(Response, Status);
						}).error(function(Response, Status, Headers, Config) {
					callback(Response, Status);
				});
			}

			service.addLeads = function(dataDB, callback) {
				var URL = getAddLeadsURL();

				$http.put(URL, dataDB, getHeadersForJsonType()).success(
						function(data, status, headers) {
							callback(data, status);
						}).error(function(data, status, header, config) {
					callback(data, status);
				});
			}

			service.updateLead = function(dataDB, callback) {
				var URL = getUpdateLeadsURL();

				$http.put(URL, dataDB, getHeadersForJsonType()).success(
						function(data, status, headers) {
							callback(data, status);
						}).error(function(data, status, header, config) {
					callback(data, status);
				});
			}

			return service;
		});
