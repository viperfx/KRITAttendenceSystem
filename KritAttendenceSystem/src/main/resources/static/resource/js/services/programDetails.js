var programDetails;

/* To store object of product */
var Programs = function() {
	
	this.programsId;
	this.programsName;
	this.programs_Description;
	this.programs_Head;
	this.program;
	this.programs = [];

	this.programs_Instructor;
	
	/* set product */
	this.set = function(programs) {
		var instructorDetails = new Instructor();
			
		this.programsId = programs.programsId;
		this.programsName = programs.programsName;
		this.programsDescription = programs.programsDescription;
		this.programs_Instructor = programs.programsHeadId;
		/*
		 * this.programs = [];
		 */
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
			PROGRAMS_ID : this.programsId,
			PROGRAMS_NAME : this.programsName,
			PROGRAMS_DESCRIPTION : this.programsDescription,
			PROGRAMS_INSTRUCTOR : this.programs_Instructor
			};
	};

	this.toJsonProgramsDTO = function(programs) {
		return {
		"programsId" : programs.PROGRAMS_ID == undefined && programs.PROGRAMS_ID == null ? null : programs.PROGRAMS_ID,
		"programsName" : programs.PROGRAMS_NAME  == undefined && programs.PROGRAMS_NAME == null ? null : programs.PROGRAMS_NAME,
		"programsDescription" : programs.PROGRAMS_DESCRIPTION  == undefined && programs.PROGRAMS_DESCRIPTION  == null ? null : programs.PROGRAMS_DESCRIPTION ,
		"programs_Head_Id" : programs.PROGRAMS_INSTRUCTOR  == undefined && programs.PROGRAMS_INSTRUCTOR  == null ? null : programs.PROGRAMS_INSTRUCTOR ,
		};
	};

	this.getProgramss = function() {
		return this.programs;
	};

	this.setProgramss = function(programsArray) {
		this.programs = programsArray;
	};

/*
 * this.editProgramss = function(editProgramss) {
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
	this.getProgramssData = function(programs) {
		this.set(programs);
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
		this.programs.push(row);
	};

/*
 * this.remove = function(indexes) {
 * 
 * if (indexes == null) { alert("Please Try again"); } else { for (i in indexes) {
 * this.programs[indexes[i]].IS_DELETED = true; } return this.programs; } };
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

		this.programs = dataDB;
		this.set(this.programs);
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
	this.removeProgramsByObject = function(programs) {
		for (i in this.programs) {

			if (this.programs[i].PROGRAMS_ID == programs.programsId) {
				var index = this.programs.indexOf(this.programs[i]);
				this.deleteFromJson(index);
			}

		}

	};

};
