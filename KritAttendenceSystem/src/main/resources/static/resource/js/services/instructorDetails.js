var instructorDetails;

/* To store object of product */
var Instructor = function() {
	
	this.instructorId;
	this.instructorFirstName;
	this.instructorLastName;
	this.instructorAddress;
	this.instructorEmail;
	this.password;
	this.instructorPhoto;
	this.instructor;
	this.instructors = [];

	
	/* set product */
	this.set = function(instructor) {
		this.instructorId = instructor.instructorId;
		this.instructorFirstName = instructor.instructorFirstName;
		this.instructorLastName = instructor.instructorLastName;
		this.instructorAddress = instructor.instructorAddress;
		this.instructorEmail = instructor.instructorEmail;
		this.password = instructor.password;
		this.instructorPhoto = instructor.instructorPhoto;
	};

/*
 * this.setProductData = function(product) { categoryDetails = new
 * ProductCategory();
 * 
 * this.productId = product.productId; this.productCode = product.productCode;
 * this.productActive = product.productActive; this.productName =
 * product.productName; this.manufacturer = product.manufacturer;
 * this.productCategory = categoryDetails
 * .getCaegories(product.productCategory); this.taxable = product.taxable;
 * this.salesEndDate = product.salesEndDate; this.supportExpiryDate =
 * product.supportExpiryDate; this.salesStartDate = product.salesStartDate;
 * this.supportStartDate = product.supportStartDate; this.createdDate =
 * product.createdDate; // getLongToDate(product.createdDate);
 * this.lastModifiedDate = product.lastModifiedDate; this.unitPrice =
 * product.unitPrice; this.salesTax = product.salesTax; this.serviceTax =
 * product.serviceTax; this.vat = product.vat; this.commissionRateInPercent =
 * product.commissionRateInPercent; this.commissionRate =
 * product.commissionRate; this.usageUnit = product.usageUnit; this.qtyInStock =
 * product.qtyInStock; this.description = product.description; this.isDeleted =
 * product.isDeleted; this.selectToDelete = false; };
 */	
	this.toJson = function() {
		return {
			INSTRUCTOR_ID : this.instructorId,
			INSTRUCTOR_FIRST_NAME : this.instructorFirstName,
			INSTRUCTOR_LAST_NAME : this.instructorLastName,
			INSTRUCTOR_ADDRESS : this.instructorAddress,
			INSTRUCTOR_EMAIL : this.instructorEmail,
			PASSWORD : this.password,
			INSTRUCTOR_PHOTO : this.instructorPhoto,
			PROGRAM : this.program
			};
	};

	this.toJsonInstructorDTO = function(instructor) {
		return {
		"instructorId" : instructor.INSTRUCTOR_ID == undefined && instructor.INSTRUCTOR_ID == null ? null : instructor.INSTRUCTOR_ID,
		"instructorFirstName" : instructor.INSTRUCTOR_FIRST_NAME  == undefined && instructor.INSTRUCTOR_FIRST_NAME == null ? null : instructor.INSTRUCTOR_FIRST_NAME,
		"instructorLastName" : instructor.INSTRUCTOR_LAST_NAME  == undefined && instructor.INSTRUCTOR_LAST_NAME == null ? null : instructor.INSTRUCTOR_LAST_NAME,
		"instructorAddress" : instructor.INSTRUCTOR_ADDRESS  == undefined && instructor.INSTRUCTOR_ADDRESS  == null ? null : instructor.INSTRUCTOR_ADDRESS ,
		"instructorEmail" : instructor.INSTRUCTOR_EMAIL  == undefined && instructor.INSTRUCTOR_EMAIL == null ? null : instructor.INSTRUCTOR_EMAIL,
		"password" : instructor.PASSWORD  == undefined && instructor.PASSWORD == null ? null : instructor.PASSWORD,
		"instructorPhoto" : instructor.INSTRUCTOR_PHOTO  == undefined && instructor.INSTRUCTOR_PHOTO == null ? null : instructor.INSTRUCTOR_PHOTO,
		"programId" : instructor.PROGRAM.PROGRAMID  == undefined && instructor.PROGRAM.PROGRAMID == null ? null : instructor.PROGRAM.PROGRAMID
		};
	};

	this.getInstructors = function() {
		return this.instructors;
	};

	this.setInstructors = function(instructorsArray) {
		this.instructors = instructorsArray;
	};

/*
 * this.editInstructors = function(editInstructors) {
 * 
 * this.productId = editProducts.PRODUCT_ID; this.productCode =
 * editProducts.PRODUCT_CODE; this.productName = editProducts.PRODUCT_NAME;
 * this.manufacturer = editProducts.MANUFACTURER; this.productActive =
 * editProducts.PRODUCT_ACTIVE; this.taxable = editProducts.TAXABLE;
 * this.productCategory = this.getSelectedAutoCompleteEdit(category);
 * this.salesStartDate = editProducts.SALES_START_DATE; this.salesEndDate =
 * editProducts.SALES_END_DATE; this.supportStartDate =
 * editProducts.SUPPORT_START_DATE; this.supportExpiryDate =
 * editProducts.SUPPORT_EXPIRY_DATE; this.unitPrice = editProducts.UNIT_PRICE;
 * this.usageUnit = editProducts.USAGE_UNIT; this.serviceTax =
 * editProducts.SERVICE_TAX; this.salesTax = editProducts.SALES_TAX; this.vat =
 * editProducts.VAT; this.commissionRateInPercent =
 * editProducts.COMMISSION_RATE_INPERCENT; this.commissionRate =
 * editProducts.COMMISSION_RATE; this.description = editProducts.DESCRIPTION;
 * this.qtyInStock = editProducts.QTY_IN_STOCK; };
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
 * this.getSelectedAutoCompleteProduct = function(product) { var tempProduct;
 * var tempProducts = new Array(); for (i in product) { tempProduct = { value :
 * product[i].PRODUCT_NAME, display : product[i].PRODUCT_NAME, productName :
 * product[i].PRODUCT_NAME, productCode : product[i].PRODUCT_CODE, productId :
 * product[i].PRODUCT_ID } tempProducts.push(tempProduct); } return
 * tempProducts; };
 */
	this.getInstructorsData = function(instructor) {
		this.set(instructor);
		return this.toJson();
	};

/*
 * this.updateProduct = function(product, products) { for (i in products) { if
 * (products[i].PRODUCT_ID == product.PRODUCT_ID) {
 * 
 * products[i].PRODUCT_CODE = product.PRODUCT_CODE; products[i].PRODUCT_ACTIVE =
 * product.PRODUCT_ACTIVE; products[i].PRODUCT_NAME = product.PRODUCT_NAME;
 * products[i].MANUFACTURER = product.MANUFACTURER; products[i].TAXABLE =
 * product.TAXABLE; products[i].PRODUCT_CATEGORY = product.PRODUCT_CATEGORY;
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
		this.instructors.push(row);
	};

/*
 * this.remove = function(indexes) {
 * 
 * if (indexes == null) { alert("Please Try again"); } else { for (i in indexes) {
 * this.instructors[indexes[i]].IS_DELETED = true; } return this.instructors; } };
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

		this.instructor = dataDB;
		this.set(this.instructor);
		this.add(this.toJson());
	};

/*	this.deleteFromJson = function(index) {

		if (index == -1) { // do nothing.

		} else {
			this.products.splice(index, 1);
		}

		
		 * for (i in this.products) {
		 * 
		 * if (product.productId == this.products[i].PRODUCT_ID) {
		 * this.products.splice(i, 1); } }
		 
	}
*/
	this.removeInstructorByObject = function(instructor) {
		for (i in this.instructors) {

			if (this.instructors[i].INSTRUCTOR_ID == instructor.instructorId) {
				var index = this.instructors.indexOf(this.instructors[i]);
				this.deleteFromJson(index);
			}

		}

	};

};
