var programDetails;

/* To store object of product */
var Student = function() {

	this.studentId;
	this.studentFirstName;
	this.studentLastName;
	this.studentAddress;
	this.studentPhoneNumber;
	this.studentEmail;
	this.password;
	this.studentPhoto;
	this.student;
	this.students = [];

	/* set product */
	this.set = function(student) {
		programDetails = new Programs();

		this.studentId = student.studentId;
		this.studentFirstName = student.studentFirstName;
		this.studentLastName = student.studentLastName;
		this.studentAddress = student.studentAddress;
		this.studentPhoneNumber = student.studentPhoneNumber;
		this.studentEmail = student.studentEmail;
		this.password = student.password;
		this.studentPhoto = student.studentPhoto;
		this.program = programDetails
				.toJson(programDetails.set(student.programs));
		/*
		 * this.programs = [];
		 */
	};

	/*
	 * this.setProductData = function(product) { categoryDetails = new
	 * ProductCategory();
	 * 
	 * this.productId = product.productId; this.productCode =
	 * product.productCode; this.productActive = product.productActive;
	 * this.productName = product.productName; this.manufacturer =
	 * product.manufacturer; this.productCategory = categoryDetails
	 * .getCaegories(product.productCategory); this.taxable = product.taxable;
	 * this.salesEndDate = product.salesEndDate; this.supportExpiryDate =
	 * product.supportExpiryDate; this.salesStartDate = product.salesStartDate;
	 * this.supportStartDate = product.supportStartDate; this.createdDate =
	 * product.createdDate; // getLongToDate(product.createdDate);
	 * this.lastModifiedDate = product.lastModifiedDate; this.unitPrice =
	 * product.unitPrice; this.salesTax = product.salesTax; this.serviceTax =
	 * product.serviceTax; this.vat = product.vat; this.commissionRateInPercent =
	 * product.commissionRateInPercent; this.commissionRate =
	 * product.commissionRate; this.usageUnit = product.usageUnit;
	 * this.qtyInStock = product.qtyInStock; this.description =
	 * product.description; this.isDeleted = product.isDeleted;
	 * this.selectToDelete = false; };
	 */
	this.toJson = function() {
		return {
			STUDENT_ID : this.studentId,
			STUDENT_FIRST_NAME : this.studentFirstName,
			STUDENT_LAST_NAME : this.studentLastName,
			STUDENT_ADDRESS : this.studentAddress,
			STUDENT_PHONE_NUMBER : this.studentPhoneNumber,
			STUDENT_EMAIL : this.studentEmail,
			PASSWORD : this.password,
			STUDENT_PHOTO : this.studentPhoto,
			PROGRAM : this.program
		};
	};

	this.toJsonStudentDTO = function(student) {
		return {
			"studentId" : student.STUDENT_ID == undefined
					&& student.STUDENT_ID == null ? null : student.STUDENT_ID,
			"studentFirstName" : student.STUDENT_FIRST_NAME == undefined
					&& student.STUDENT_FIRST_NAME == null ? null
					: student.STUDENT_FIRST_NAME,
			"studentLastName" : student.STUDENT_LAST_NAME == undefined
					&& student.STUDENT_LAST_NAME == null ? null
					: student.STUDENT_LAST_NAME,
			"studentAddress" : student.STUDENT_ADDRESS == undefined
					&& student.STUDENT_ADDRESS == null ? null
					: student.STUDENT_ADDRESS,
			"studentPhoneNumber" : student.STUDENT_PHONE_NUMBER == undefined
					&& student.STUDENT_PHONE_NUMBER == null ? null
					: student.STUDENT_PHONE_NUMBER,
			"studentEmail" : student.STUDENT_EMAIL == undefined
					&& student.STUDENT_EMAIL == null ? null
					: student.STUDENT_EMAIL,
			"password" : student.PASSWORD == undefined
					&& student.PASSWORD == null ? null : student.PASSWORD,
			"studentPhoto" : student.STUDENT_PHOTO == undefined
					&& student.STUDENT_PHOTO == null ? null
					: student.STUDENT_PHOTO,
			"programId" : student.PROGRAM.PROGRAMID == undefined
					&& student.PROGRAM.PROGRAMID == null ? null
					: student.PROGRAM.PROGRAMID
		};
	};

	this.getStudents = function() {
		return this.students;
	};

	this.setStudents = function(studentsArray) {
		this.students = studentsArray;
	};

	/*
	 * this.editStudents = function(editStudents) {
	 * 
	 * this.productId = editProducts.PRODUCT_ID; this.productCode =
	 * editProducts.PRODUCT_CODE; this.productName = editProducts.PRODUCT_NAME;
	 * this.manufacturer = editProducts.MANUFACTURER; this.productActive =
	 * editProducts.PRODUCT_ACTIVE; this.taxable = editProducts.TAXABLE;
	 * this.productCategory = this.getSelectedAutoCompleteEdit(category);
	 * this.salesStartDate = editProducts.SALES_START_DATE; this.salesEndDate =
	 * editProducts.SALES_END_DATE; this.supportStartDate =
	 * editProducts.SUPPORT_START_DATE; this.supportExpiryDate =
	 * editProducts.SUPPORT_EXPIRY_DATE; this.unitPrice =
	 * editProducts.UNIT_PRICE; this.usageUnit = editProducts.USAGE_UNIT;
	 * this.serviceTax = editProducts.SERVICE_TAX; this.salesTax =
	 * editProducts.SALES_TAX; this.vat = editProducts.VAT;
	 * this.commissionRateInPercent = editProducts.COMMISSION_RATE_INPERCENT;
	 * this.commissionRate = editProducts.COMMISSION_RATE; this.description =
	 * editProducts.DESCRIPTION; this.qtyInStock = editProducts.QTY_IN_STOCK; };
	 * 
	 * this.getSelectedAutoCompleteEdit = function(category) { if
	 * (category.SUSPENDED == false) { tempProductCategory = { value :
	 * category.PRODUCT_CATEGORY_CODE + " : " + category.PRODUCT_CATEGORY_NAME,
	 * display : category.PRODUCT_CATEGORY_CODE + " : " +
	 * category.PRODUCT_CATEGORY_NAME, productCategoryId :
	 * category.PRODUCTCATEGORYID, productCategoryName :
	 * category.PRODUCT_CATEGORY_NAME, suspended : category.SUSPENDED }
	 * 
	 * return tempProductCategory; } };
	 * 
	 * this.getSelectedAutoCompleteProduct = function(product) { var
	 * tempProduct; var tempProducts = new Array(); for (i in product) {
	 * tempProduct = { value : product[i].PRODUCT_NAME, display :
	 * product[i].PRODUCT_NAME, productName : product[i].PRODUCT_NAME,
	 * productCode : product[i].PRODUCT_CODE, productId : product[i].PRODUCT_ID }
	 * tempProducts.push(tempProduct); } return tempProducts; };
	 */
	this.getStudentsData = function(student) {
		this.set(student);
		return this.toJson();
	};

	/*
	 * this.updateProduct = function(product, products) { for (i in products) {
	 * if (products[i].PRODUCT_ID == product.PRODUCT_ID) {
	 * 
	 * products[i].PRODUCT_CODE = product.PRODUCT_CODE;
	 * products[i].PRODUCT_ACTIVE = product.PRODUCT_ACTIVE;
	 * products[i].PRODUCT_NAME = product.PRODUCT_NAME; products[i].MANUFACTURER =
	 * product.MANUFACTURER; products[i].TAXABLE = product.TAXABLE;
	 * products[i].PRODUCT_CATEGORY = product.PRODUCT_CATEGORY;
	 * products[i].SALES_END_DATE = product.SALES_END_DATE;
	 * products[i].SUPPORT_EXPIRY_DATE = product.SUPPORT_EXPIRY_DATE;
	 * products[i].SALES_START_DATE = product.SALES_START_DATE;
	 * products[i].SUPPORT_START_DATE = product.SUPPORT_START_DATE;
	 * products[i].CREATED_DATE = product.CREATED_DATE;
	 * products[i].LAST_MODIFIED_DATE = product.LAST_MODIFIED_DATE;
	 * products[i].UNIT_PRICE = product.UNIT_PRICE; products[i].SALES_TAX =
	 * product.SALES_TAX; products[i].SERVICE_TAX = product.SERVICE_TAX;
	 * products[i].VAT = product.VAT; products[i].COMMISSION_RATE_INPERCENT =
	 * product.COMMISSION_RATE_INPERCENT; products[i].COMMISSION_RATE =
	 * product.COMMISSION_RATE; products[i].USAGE_UNIT = product.USAGE_UNIT;
	 * products[i].QTY_IN_STOCK = product.QTY_IN_STOCK; products[i].DESCRIPTION =
	 * product.DESCRIPTION; } } }
	 */
	this.add = function(row) {
		this.students.push(row);
	};

	/*
	 * this.remove = function(indexes) {
	 * 
	 * if (indexes == null) { alert("Please Try again"); } else { for (i in
	 * indexes) { this.students[indexes[i]].IS_DELETED = true; } return
	 * this.students; } };
	 */

	this.fillTable = function(dataDB) {

		for (i in dataDB) {
			if (dataDB[i].deleted === false) {
				this.product = dataDB[i];
				this.set(this.product);
				this.add(this.toJson());
			}
		}
	};

	this.fillOneRow = function(dataDB) {

		this.student = dataDB;
		this.set(this.student);
		this.add(this.toJson());
	};

	/*
	 * this.deleteFromJson = function(index) {
	 * 
	 * if (index == -1) { // do nothing. } else { this.products.splice(index,
	 * 1); }
	 * 
	 * 
	 * for (i in this.products) {
	 * 
	 * if (product.productId == this.products[i].PRODUCT_ID) {
	 * this.products.splice(i, 1); } } }
	 */
	this.removeStudentByObject = function(student) {
		for (i in this.students) {

			if (this.students[i].STUDENT_ID == student.studentId) {
				var index = this.students.indexOf(this.students[i]);
				this.deleteFromJson(index);
			}

		}

	};

};
