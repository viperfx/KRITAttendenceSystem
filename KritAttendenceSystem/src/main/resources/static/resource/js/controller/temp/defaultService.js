/**
 * getUserTimeZone i.e. browser timezoen.
 * 
 * @global
 */
var getUserTimeZone = function() {
	var timeZone = jstz.determine().name();
	return timeZone;
}

/**
 * Application date and time format.
 * 
 * @global
 */
var dateFormat = 'MMM DD YYYY';
var longFormat = 'YYYYMMDD';

var getDateToLong = function(date) {
	// return date;
	return moment(date).format(longFormat);
};

var getLongToDate = function(timeStamp) {
	return moment().tz(new Date(timeStamp), getUserTimeZone()).format(
			dateFormat);
};

var showError = function($scope, message, status) {
	if ($scope) {
		$scope.error = true;
		$scope.errorMsg = message;
		$scope.status = status;
	}
};

var hideError = function($scope) {
	if ($scope) {
		$scope.error = false;
	}
}

var hideDialouge = function($scope, $mdDialog) {
	if ($scope) {
		if ($mdDialog) {
			$mdDialog.hide();
		}
	}
	$scope.cancel = function() {
		$mdDialog.cancel();
	};
};

var cancelDialouge = function($scope, $mdDialog) {
	if ($scope) {
		if ($mdDialog) {
			$mdDialog.cancel();
		}
	}
};

var columns = {
	PRODUCT_ID : 'Product Id',
	PRODUCT_CODE : 'Product Code',
	PRODUCT_NAME : 'Product Name',
	MANUFACTURER : 'Manufacturer',
	PRODUCT_CATEGORY : 'Product Category',
	EDIT : 'Edit'
};

var categoryColumns = {
	PRODUCT_CATEGORY_CODE : 'Category Code',
	PRODUCT_CATEGORY_NAME : 'Category Name',
	EDIT : 'Edit'
};

var labels = {
	APP : 'Biss Pro',
	SAVE : 'Save',
	DELETE : 'Delete',
	ACTIVE : 'Active',
	TAXABLE : 'Taxable',
	NEWPRODUCT : 'Add New Product',
	PRODUCT_CATEGORY : 'Product Category',
	ADD_PRODUCT_CATEGORY : 'Add Product Category',
	MODIFYPRODUCT : 'Modify Product',
	PRODUCTTYPE : 'Product Type',
	BASICDETAILS : 'Basic Details',
	ADDITIONALDETAILS : 'Additional Details',
	CUSTOMDETAILS : 'Custom Details',
	PRODUCT_ID : 'Id',
	PRODUCT_CODE : 'Product Code',
	PRODUCT_ACTIVE : 'Product Active',
	PRODUCT_NAME : 'Product Name',
	MANUFACTURER : 'Manufacturer',
	TAXABLE : 'Taxable',
	TAXES : 'Tax',
	PRODUCT_CATEGORY_CODE : 'Code',
	PRODUCT_CATEGORY_NAME : 'Name',
	SALES_END_DATE : 'Sales End Date',
	SUPPORT_EXPIRY_DATE : 'Support Expiry Date',
	SALES_START_DATE : 'Sales Start Date',
	SUPPORT_START_DATE : 'Support Start Date',
	CREATED_DATE : 'Created Date',
	LAST_MODIFIED_DATE : 'Last Modified Date',
	UNIT_PRICE : 'Unit Price',
	SALES_TAX : 'Sales Tax',
	SERVICE_TAX : 'Service Tax',
	VAT : 'Vat',
	COMMISSION_RATE_INPERCENT : 'Commission Rate In Percent',
	COMMISSION_RATE : 'Commission Rate',
	USAGE_UNIT : 'Usage Unit',
	QTY_IN_STOCK : 'Qty in Stock',
	DESCRIPTION : 'Description',
	
	/* Contacts */
	CONTACT_ID : 'contactId',
	SUFFIX : 'suffix',
	FIRST_NAME : 'firstName',
	COMPANY_NAME : 'companyName',
	EMAIL_ID : 'emailId',
	MOBILE_NUMBER : 'mobileNumber',
	LAST_NAME : 'lastName',
	CLIENT : 'client',
	PHONE_NUMBER : 'phoneNumber',
	OTHER_PHONE_NUMBER : 'otherPhoneNumber',
	REPORTS_TO : 'reportsTo',
	DESIGNATION : 'designation',
	DEPARTMENT : 'department',
	HOME_PHONE_NUMBER : 'homePhoneNumber',
	FAX : 'fax',
	DATE_OF_BIRTH : 'dateOfBirth',
	ASSISTANT_PHONE_NUMBER : 'assistantPhoneNumber',
	ALTERNATE_EMAIL_ID : 'alternateEmailId',
	SKYPE_ID : 'skypeId',
	SECONDARY_EMAIL_ID : 'secondaryEmailId',
	DESCRIPTION : 'description',
	MAILING_ADDRESS_SHELL : 'mailingAddressShell',
	MAILING_ADDRESS_ID : 'mailingAddressId',
	OTHER_ADDRESS_SHELL : 'otherAddressShell',
	OTHER_ADDRESS_ID : 'otherAddressId',
	DELIVERY_ADDRESS_SHELL : 'deliveryAddressShell',
	DELIVERY_ADDRESS_ID : 'deliveryAddressId',
	ADD_COUNTRY : 'Add Country',
	ADD_STATE : 'Add State',
	ADD_CITY : 'Add City',
	ADDRESS_DETAILS : 'Address Details',
	STREET : 'Street',
	ZIP : 'Zip',
	
	/* Lead Management */
	INQUIRY_FORM : 'Inquiry Form',
	INQUIRY_DETAILS : 'Inquiry Details'
}

var errors = {
	REQUIRED : 'is required',
	EMAILCHECK : 'Enter valid Email. Exa. abc@def.com',
	MAXLENGTH12 : 'must not contain more than 12 character',
	MAXLENGTH50 : 'must not contain more than 50 character',
	MAXLENGTH150 : 'must not contain more than 150 character',
	MAXLENGTH5 : 'must not contain more than 5 character',
	MAXLENGTH13 : 'must not more than 13 digits',
	MINLENGTH3 : 'must contain more than 3 digits',
	MINLENGTH13 : 'must contain country code, exa. +91....',
	VALUEFORMAT : 'must contain 0.00 value or more',
	MAXLENGTHFORMAT : 'must be less than 100.00%',
	MINVALUE : 'may contain 00 value',
	MANDATORY_FIELDS : 'Fields are Mandatory'
};