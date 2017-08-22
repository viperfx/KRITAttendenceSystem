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

var labels = {
	/* Dashboard */
	DASHBOARD : 'Dashboard',
	ENQUIRY_STATUS : 'Enquiry Status',
	CHARTS : 'Charts',
	CHART : 'Chart',
	DONUT : 'Donut',
	LINE : 'Line',
	BAR : 'Bar',
	AREA : 'Area',

	LEADS : 'Leads',
	TOTAL_LEADS : 'Total Leads',
	UN_ATTENDED_LEADS : 'Un-Attended Leads',
	ATTENDED_LEADS : 'Attended Leads',
	CLOSED_LEADS : 'Closed Leads',
	VIEW_DETAILS : 'View Details',
	FOLLOWUP_LEADS : 'Followup Leads',
	LOST_LEADS : 'Lost Leads',
	POTENTIAL_LEADS : 'Potential Leads',
	WEEK : 'week',
	TOTAL : 'Total',
	NEW : 'New',
	POTENTIAL : 'Potential',
	UNATTENDED : 'Unattended',

	/* Multiuse */
	APP : 'Biss Pro',
	SAVE : 'Save',
	DELETE : 'Delete',
	EDIT : 'Edit',
	BACK : 'Back',
	DASHBOARD : 'Dashboard',
	LEAD_MANAGEMENT : 'Lead Management',
	USER_MANAGEMENT : 'User Management',
	PRODUCT_MANAGEMENT : 'Product Management',
	PRODUCT_CATEGORY_MANAGEMENT : 'Product-Category Management',
	CONTACT_MANAGEMENT : 'Contact Management',
	ENQUIRY_MANAGEMENT : 'Enquiry Management',
	ALL_DATA : 'All Data',

	/* Product */
	PRODUCTS : 'Products',
	ACTIVE : 'Active',
	TAXABLE : 'Taxable',
	NEWPRODUCT : 'Add Product',
	PRODUCT_CATEGORY : 'Category',
	ADD_PRODUCT_CATEGORY : 'Add Product Category',
	UPDATE_PRODUCT : 'Update Product',
	PRODUCTTYPE : 'Product Type',
	BASICDETAILS : 'Basic Details',
	ADDITIONALDETAILS : 'Additional Details',
	CUSTOMDETAILS : 'Custom Details',
	PRODUCT_ID : 'Id',
	PRODUCT_CODE : 'Code',
	PRODUCT_ACTIVE : 'Product Active',
	PRODUCT_NAME : 'Name',
	MANUFACTURER : 'Manufacturer',
	TAXABLE : 'Taxable',
	TAXES : 'Tax',
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
	PRODUCT_CATEGORY : 'Subcategory',
	RESET : 'Reset',
	SUCCESS : 'Success',
	LOGIN : 'Login',
	REMEMBER_ME : 'Remember Me',
	INSTRUCTOR : 'Instructor',
	STUDENT : 'Student',
	DELETE_PRODUCT : 'Delete Product',
	FIND_PRODUCTS : 'Find Products',

	/* category */
	PRODUCT_CATEGORY_CODE : 'Category Code',
	PRODUCT_CATEGORY_NAME : 'Category Name',
	PARENT_CATEGORY : 'Parent Category',
	ROOT_CATEGORY : 'Root Category',
	PRODUCT_CATEGORY : 'Product Base-Category',
	UPDATE_PRODUCT_CATEGORY : 'Update Category',

	/* Contacts */
	CONTACTS : 'Contacts',
	CONTACT_ID : 'contactId',
	SUFFIX : 'Suffix',
	FIRST_NAME : 'First Name',
	COMPANY_NAME : 'Company Name',
	INDUSTRY : 'Industry',
	EMAIL_ID : 'EmailId',
	MOBILE_NUMBER : 'Mobile Number',
	LAST_NAME : 'Last Name',
	CLIENT : 'Client',
	PHONE_NUMBER : 'Phone Number',
	OTHER_PHONE_NUMBER : 'Other Phone Number',
	REPORTS_TO : 'ReportsTo',
	DESIGNATION : 'Designation',
	DEPARTMENT : 'Department',
	HOME_PHONE_NUMBER : 'Home Phone Number',
	FAX : 'Fax',
	DATE_OF_BIRTH : 'Date Of Birth',
	ASSISTANT_PHONE_NUMBER : 'Assistant Phone Number',
	ALTERNATE_EMAIL_ID : 'Alternate EmailId',
	SKYPE_ID : 'Skype Id',
	TWITTER : 'Twitter',
	SECONDARY_EMAIL_ID : 'Secondary Email Id',
	DESCRIPTION : 'Description',
	WEBSITE : 'Website',
	MAILING_ADDRESS_SHELL : 'Mailing AddressShell',
	MAILING_ADDRESS_ID : 'Mailing AddressId',
	OTHER_ADDRESS_SHELL : 'Other AddressShell',
	OTHER_ADDRESS_ID : 'Other AddressId',
	DELIVERY_ADDRESS_SHELL : 'Delivery AddressShell',
	DELIVERY_ADDRESS_ID : 'Delivery AddressId',
	ADD_COUNTRY : 'Add Country',
	ADD_STATE : 'Add State',
	ADD_CITY : 'Add City',
	ADDRESS_DETAILS : 'Address Details',
	STREET : 'Street',
	ZIP : 'Zip',
	CONTACT_DETAILS : 'Contact Details',
	ADD_CONTACT : 'Add Contact',
	DELETE_CONTACT : 'Delete Contact',
	UPDATE_CONTACT : 'Update Contact',

	/* Lead Management */
	ENQUIRY : 'Enquiry',
	NAME : 'Name',
	ENQUIRY_DETAILS : 'Enquiry Details',
	LEAD_DETAILS : 'Lead Details',
	PRODUCT : 'Product',
	LEADSOURCE : 'Lead Source',
	LEADSTATUS : 'Lead Status',
	ANNUALREVENUE : 'Annual Revenue',
	ASSIGNED_USER : 'Assigned User',
	APPLY_STATUS : 'Apply Status',
	APPLY_USER : 'Apply User',
	UPDATE_LEAD : 'Update Lead',

	/* User Management */
	USER : 'User',
	USER_LIST : 'User List',
	USER_DETAILS : 'User Details',
	MIDDLE_NAME : 'Middle Name',
	USER_ID : 'User Id',
	NICK_NAME : 'Nick Name',
	MALE : 'Male',
	FEMALE : 'Female',
	GENDER : 'Gender',
	ROLE : 'Role',
	DEPARTMENT : 'Department',
	PASSWORD : 'Password',
	USERNAME : 'User Name',
	GROUP : 'Group',
	ADD_USER : 'Add User',
	UPDATE_USER : 'Update User',

	/* Instructor */
	INSTRUCTOR_ID : "InstructorId",
	INSTRUCTOR_FIRST_NAME : "InstructorFirstName",
	INSTRUCTOR_LAST_NAME : "InstructorLastName",
	INSTRUCTOR_ADDRESS : "InstructorAddress",
	INSTRUCTORE_MAIL : "InstructorEmail",
	PASSWORD : "password",

	/* Student */
	STUDENT_ID : "StudentId",
	STUDENT_FIRST_NAME : "StudentFirstName",
	STUDENT_LAST_NAME : "StudentLastName",
	STUDENT_ADDRESS : "StudentAddress",
	STUDENT_PHONE_NUMBER : "StudentPhoneNumber",
	STUDENT_EMAIL : "StudentEmail",
	PASSWORD : "password",
	STUDENT_PHOTO : "StudentPhoto",

	/* Activity */
	ACTIVITY_ID : "ActivityId",
	ACTIVITY_NAME : "ActivityName",

	/* College */
	COLLEGE_ID : "CollegeId",
	COLLEGE_NAME : "CollegeName",
	COLLEGE_ADDRESS : "CollegeAddress",
	COLLEGE_PHONE_NUMBER : "CollegePhoneNumber",
	COLLEGEE_MAIL : "collegeEmail",
	COURSE_ID : "CourseId",
	COURSE_NAME : "CourseName",
	COURSE_DESCRIPTION : "CourseDescription",

	/* Course */
	COURSE_ID : "CourseId",
	COURSE_NAME : "Course Name",
	COURSE_DESCRIPTION : "Course Description",
	
	/* courseActivities */
	COURSE_ACTIVITIES_ID : "CourseActivitiesId",
	CREDIT : "Credit",

	/* Course Schedule */
	COURSE_SCHEDULE_ID : "CourseScheduleId",
	COURSE_SCHEDULE_DATE : "CourseScheduleDate",
	COURSE_SCHEDULE_TIME_FROM : "CourseScheduleTimeFrom",
	COURSE_SCHEDULE_TIME_TO : "CourseScheduleTimeTo",
	COURSE_SCHEDULE_CLASSROOM : "CourseScheduleClassroom",

	/* Grade */
	GRADE_ID : "GradeId",
	STUDENT : "Student",
	GRADE_GAINED_MARKS : "GradeGainedMarks",

	/* Programs */
	PROGRAMSID : "ProgramsId",
	PROGRAMS_NAME : "ProgramsName",
	PROGRAMS_DESCRIPTION : "ProgramsDescription",
	PROGRAMS_HEAD_ID : "ProgramsHeadId",

	/* ProgramCourse */
	PROGRAMS_COURSE_ID : "ProgramsCourseId",
	PROGRAMS : "Programs",
	COURSE : "Course",
	PROGRAMS_CREDIT : "ProgramsCredit",
	INSTRUCTOR : "Instructor",
	
	/* default */
	MY_PROFILE : "My Profile",
	SCHEDULE : "Schedule",
	ATTENDANCE : "Attendance",
	GRADE : "Grade",
	GRADES : "Grades",
	ATTENDANCE : "Attendance",
	ACTIVITY_NAME : "Activity Name",
	GAINDED_GRADE : "Gained Grade",
	CREDIT : "CREDIT",
	LOGOUT : "LOGOUT",
	COURSE_SCHEDULE : "Course Schedule",
	INSTRUCTOR_NAME : "Instructor Name",
	DATE : "Date",
	TIME_FROM : "Time From",
	TIME_TO : "Time To",
	CLASSROOM : "Classroom",
	STATUS : "Status"
		
/*	SCHEDULE_DATE : "CourseScheduleDate",
	SCHEDULE_TIME_FROM : "CourseScheduleTimeFrom",
	SCHEDULE_TIME_TO : "CourseScheduleTimeTo",
	SCHEDULE_CLASSROOM : "CourseScheduleClassroom"
*/
	
}

var errors = {
	ERROR : 'Error !',
	REQUIRED : 'is required',
	MAXLENGTH12 : 'must not contain more than 12 character',
	MAXLENGTH13 : 'must not contain more than 13 character',
	MAXLENGTH50 : 'must not contain more than 50 character',
	MAXLENGTH150 : 'must not contain more than 150 character',
	MAXLENGTH5 : 'must not contain more than 5 character',
	MINLENGTH3 : 'must contain more than 3 digits',
	VALUEFORMAT : 'must contain 0.00 value or more',
	MAXLENGTHFORMAT : 'must be less than 100.00%',
	MINVALUE : 'may contain 00 value',
	MIN_DATE : 'Date Cannot be taken before 01/01/1970',
	MAX_DATE : "Date cannot be taken after Today's Date",
	EMAILCHECK : 'Enter Valid Email Exa. abc@def.com',
	MINLENGTH13 : 'must contain country code, exa. +91....',
	MANDATORY_FIELDS : 'Fields are Mandatory'
};
