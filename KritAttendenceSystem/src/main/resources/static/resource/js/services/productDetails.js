var productDetails;
var categoryDetails;

/* To store object of product and productCategory */

var Product = function() {

	this.productId;
	this.productCode;d
	this.productName;
	this.manufacturer;
	this.productActive;
	this.taxable;
	/* categoryDetails */
	this.productCategory;

	this.salesStartDate;
	this.salesEndDate;
	this.supportStartDate;
	this.supportExpiryDate;

	this.unitPrice;
	this.usageUnit;
	this.serviceTax;
	this.salesTax;
	this.vat;
	this.commissionRateInPercent;
	this.commissionRate;
	this.description;

	this.qtyInStock;

	this.createdDate;
	this.lastModifiedDate;

	this.isDeleted;

	this.timezone;
	this.product;
	this.products = [];

	/* To Delete Multiple Product */
	this.selectToDelete;

	/* set product */
	this.set = function(product) {
		categoryDetails = new ProductCategory();

		this.productId = product.productId;
		this.productCode = product.productCode;
		this.productActive = product.productActive;
		this.productName = product.productName;
		this.manufacturer = product.manufacturer;
		this.productCategory = categoryDetails
				.getCaegories(product.productCategoryShell);
		this.taxable = product.taxable;

		// SalesEndDate changed to saleEndDate;
		this.salesEndDate = product.saleEndDate == 0 ? null : new Date(
				product.saleEndDate); // product.saleEndDate
		this.supportExpiryDate = product.supportExpiryDate == 0 ? null
				: new Date(product.supportExpiryDate); // product.supportExpiryDate;
		this.salesStartDate = product.salesStartDate == 0 ? null : new Date(
				product.salesStartDate);// product.salesStartDate
		this.supportStartDate = product.supportStartDate == 0 ? null
				: new Date(product.supportStartDate); // getLongToDate(product.supportStartDate)
		this.createdDate = product.createdDate; // getLongToDate(product.createdDate);
		this.lastModifiedDate = product.lastModifiedDate;
		this.unitPrice = product.unitPrice;
		this.salesTax = product.salesTax;
		this.serviceTax = product.serviceTax;
		this.vat = product.vat;
		this.commissionRateInPercent = product.commissionRateInPercent;
		this.commissionRate = product.commissionRate;
		this.usageUnit = product.usageUnit;
		this.qtyInStock = product.qtyInStock;
		this.description = product.description;
		this.isDeleted = product.isDeleted;
		this.selectToDelete = false;

	};

	this.setProductData = function(product) {
		categoryDetails = new ProductCategory();

		this.productId = product.productId;
		this.productCode = product.productCode;
		this.productActive = product.productActive;
		this.productName = product.productName;
		this.manufacturer = product.manufacturer;
		this.productCategory = categoryDetails
				.getCaegories(product.productCategory);
		this.taxable = product.taxable;
		this.salesEndDate = product.salesEndDate;
		this.supportExpiryDate = product.supportExpiryDate;
		this.salesStartDate = product.salesStartDate;
		this.supportStartDate = product.supportStartDate;
		this.createdDate = product.createdDate; // getLongToDate(product.createdDate);
		this.lastModifiedDate = product.lastModifiedDate;
		this.unitPrice = product.unitPrice;
		this.salesTax = product.salesTax;
		this.serviceTax = product.serviceTax;
		this.vat = product.vat;
		this.commissionRateInPercent = product.commissionRateInPercent;
		this.commissionRate = product.commissionRate;
		this.usageUnit = product.usageUnit;
		this.qtyInStock = product.qtyInStock;
		this.description = product.description;
		this.isDeleted = product.isDeleted;
		this.selectToDelete = false;

	};
	this.toJson = function() {
		return {
			PRODUCT_ID : this.productId,
			PRODUCT_CODE : this.productCode,
			PRODUCT_ACTIVE : this.productActive,
			PRODUCT_NAME : this.productName,
			MANUFACTURER : this.manufacturer,
			TAXABLE : this.taxable,

			/* category Details */
			PRODUCT_CATEGORY : this.productCategory,

			SALES_END_DATE : this.salesEndDate,
			SUPPORT_EXPIRY_DATE : this.supportExpiryDate,
			SALES_START_DATE : this.salesStartDate,
			SUPPORT_START_DATE : this.supportStartDate,
			CREATED_DATE : this.createdDate,
			LAST_MODIFIED_DATE : this.lastModifiedDate,
			UNIT_PRICE : this.unitPrice,
			SALES_TAX : this.salesTax,
			SERVICE_TAX : this.serviceTax,
			VAT : this.vat,
			COMMISSION_RATE_INPERCENT : this.commissionRateInPercent,
			COMMISSION_RATE : this.commissionRate,
			USAGE_UNIT : this.usageUnit,
			QTY_IN_STOCK : this.qtyInStock,
			DESCRIPTION : this.description,
			IS_DELETED : this.isDeleted

		};
	};

	this.toJsonProductDTO = function(product) {
		return {
			"productId" : product.PRODUCT_ID == undefined
					&& product.PRODUCT_ID == null ? null : product.PRODUCT_ID,
			"productCode" : product.PRODUCT_CODE == undefined
					&& product.PRODUCT_CODE == null ? null
					: product.PRODUCT_CODE,
			"productActive" : product.PRODUCT_ACTIVE == undefined
					&& product.PRODUCT_ACTIVE == null ? null
					: product.PRODUCT_ACTIVE,
			"productName" : product.PRODUCT_NAME == undefined
					&& product.PRODUCT_NAME == null ? null
					: product.PRODUCT_NAME,
			"manufacturer" : product.MANUFACTURER == undefined
					&& product.MANUFACTURER == null ? null
					: product.MANUFACTURER,
			"taxable" : product.TAXABLE == undefined && product.TAXABLE == null ? null
					: product.TAXABLE,
			"productCategoryId" : product.PRODUCT_CATEGORY.PRODUCTCATEGORYID == undefined
					&& product.PRODUCT_CATEGORY.PRODUCTCATEGORYID == null ? null
					: product.PRODUCT_CATEGORY.PRODUCTCATEGORYID,
			"saleEndDate" : product.SALES_END_DATE == undefined
					&& product.SALES_END_DATE == null ? null : new Date(
					product.SALES_END_DATE).getTime(),
			"supportExpiryDate" : product.SUPPORT_EXPIRY_DATE == undefined
					&& product.SUPPORT_EXPIRY_DATE == null ? null : new Date(
					product.SUPPORT_EXPIRY_DATE).getTime(),
			"salesStartDate" : product.SALES_START_DATE == undefined
					&& product.SALES_START_DATE == null ? null : new Date(
					product.SALES_START_DATE).getTime(),
			"supportStartDate" : product.SUPPORT_START_DATE == undefined
					&& product.SUPPORT_START_DATE == null ? null : new Date(
					product.SUPPORT_START_DATE).getTime(),
			"unitPrice" : product.UNIT_PRICE == undefined
					&& product.UNIT_PRICE == null ? null : product.UNIT_PRICE,
			"salesTax" : product.SALES_TAX == undefined
					&& product.SALES_TAX == null ? null : product.SALES_TAX,
			"serviceTax" : product.SERVICE_TAX == undefined
					&& product.SERVICE_TAX == null ? null : product.SERVICE_TAX,
			"vat" : product.VAT == undefined && product.VAT == null ? null
					: product.VAT,
			"commissionRateInPercent" : product.COMMISSION_RATE_INPERCENT == undefined
					&& product.COMMISSION_RATE_INPERCENT == null ? null
					: product.COMMISSION_RATE_INPERCENT,
			"commissionRate" : product.COMMISSION_RATE == undefined
					&& product.COMMISSION_RATE == null ? null
					: product.COMMISSION_RATE,
			"usageUnit" : product.USAGE_UNIT == undefined
					&& product.USAGE_UNIT == null ? null : product.USAGE_UNIT,
			"qtyInStock" : product.QTY_IN_STOCK == undefined
					&& product.QTY_IN_STOCK == null ? null
					: product.QTY_IN_STOCK,
			"description" : product.DESCRIPTION == undefined
					&& product.DESCRIPTION == null ? null : product.DESCRIPTION,
			"deleted" : product.IS_DELETED == undefined
					&& product.IS_DELETED == null ? false : product.IS_DELETED,
			"timeZone" : getUserTimeZone()
		};
	};

	this.getProducts = function() {
		return this.products;
	};

	this.setProducts = function(productsArray) {
		this.products = productsArray;
	};

	this.editProducts = function(editProducts, category) {

		this.productId = editProducts.PRODUCT_ID;
		this.productCode = editProducts.PRODUCT_CODE;
		this.productName = editProducts.PRODUCT_NAME;
		this.manufacturer = editProducts.MANUFACTURER;
		this.productActive = editProducts.PRODUCT_ACTIVE;
		this.taxable = editProducts.TAXABLE;
		this.productCategory = this.getSelectedAutoCompleteEdit(category);
		this.salesStartDate = editProducts.SALES_START_DATE;
		this.salesEndDate = editProducts.SALES_END_DATE;
		this.supportStartDate = editProducts.SUPPORT_START_DATE;
		this.supportExpiryDate = editProducts.SUPPORT_EXPIRY_DATE;
		this.unitPrice = editProducts.UNIT_PRICE;
		this.usageUnit = editProducts.USAGE_UNIT;
		this.serviceTax = editProducts.SERVICE_TAX;
		this.salesTax = editProducts.SALES_TAX;
		this.vat = editProducts.VAT;
		this.commissionRateInPercent = editProducts.COMMISSION_RATE_INPERCENT;
		this.commissionRate = editProducts.COMMISSION_RATE;
		this.description = editProducts.DESCRIPTION;
		this.qtyInStock = editProducts.QTY_IN_STOCK;
	};

	this.getSelectedAutoCompleteEdit = function(category) {
		if (category.SUSPENDED == false) {
			tempProductCategory = {
				value : category.PRODUCT_CATEGORY_CODE + " : "
						+ category.PRODUCT_CATEGORY_NAME,
				display : category.PRODUCT_CATEGORY_CODE + " : "
						+ category.PRODUCT_CATEGORY_NAME,
				productCategoryId : category.PRODUCTCATEGORYID,
				productCategoryName : category.PRODUCT_CATEGORY_NAME,
				suspended : category.SUSPENDED
			}

			return tempProductCategory;
		}
	};

	this.getSelectedAutoCompleteProduct = function(product) {
		var tempProduct;
		var tempProducts = new Array();
		for (i in product) {
			tempProduct = {
				value : product[i].PRODUCT_NAME,
				display : product[i].PRODUCT_NAME,
				productName : product[i].PRODUCT_NAME,
				productCode : product[i].PRODUCT_CODE,
				productId : product[i].PRODUCT_ID
			}
			tempProducts.push(tempProduct);
		}
		return tempProducts;

	};

	this.getProductsData = function(product) {
		this.set(product);
		return this.toJson();
	};

	this.updateProduct = function(product, products) {
		for (i in products) {
			if (products[i].PRODUCT_ID == product.PRODUCT_ID) {

				products[i].PRODUCT_CODE = product.PRODUCT_CODE;
				products[i].PRODUCT_ACTIVE = product.PRODUCT_ACTIVE;
				products[i].PRODUCT_NAME = product.PRODUCT_NAME;
				products[i].MANUFACTURER = product.MANUFACTURER;
				products[i].TAXABLE = product.TAXABLE;
				products[i].PRODUCT_CATEGORY = product.PRODUCT_CATEGORY;
				products[i].SALES_END_DATE = product.SALES_END_DATE;
				products[i].SUPPORT_EXPIRY_DATE = product.SUPPORT_EXPIRY_DATE;
				products[i].SALES_START_DATE = product.SALES_START_DATE;
				products[i].SUPPORT_START_DATE = product.SUPPORT_START_DATE;
				products[i].CREATED_DATE = product.CREATED_DATE;
				products[i].LAST_MODIFIED_DATE = product.LAST_MODIFIED_DATE;
				products[i].UNIT_PRICE = product.UNIT_PRICE;
				products[i].SALES_TAX = product.SALES_TAX;
				products[i].SERVICE_TAX = product.SERVICE_TAX;
				products[i].VAT = product.VAT;
				products[i].COMMISSION_RATE_INPERCENT = product.COMMISSION_RATE_INPERCENT;
				products[i].COMMISSION_RATE = product.COMMISSION_RATE;
				products[i].USAGE_UNIT = product.USAGE_UNIT;
				products[i].QTY_IN_STOCK = product.QTY_IN_STOCK;
				products[i].DESCRIPTION = product.DESCRIPTION;
			}
		}
	}

	this.add = function(row) {
		this.products.push(row);
	};

	this.remove = function(indexes) {

		if (indexes == null) {
			alert("Please Try again");
		} else {
			for (i in indexes) {
				this.products[indexes[i]].IS_DELETED = true;
			}
			return this.products;
		}
	};

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

		this.product = dataDB;
		this.set(this.product);
		this.add(this.toJson());
	};

	this.deleteFromJson = function(index) {

		if (index == -1) { // do nothing.

		} else {
			this.products.splice(index, 1);
		}

		/*
		 * for (i in this.products) {
		 * 
		 * if (product.productId == this.products[i].PRODUCT_ID) {
		 * this.products.splice(i, 1); } }
		 */
	}

	this.removeProductByObject = function(product) {
		for (i in this.products) {

			if (this.products[i].PRODUCT_ID == product.productId) {
				var index = this.products.indexOf(this.products[i]);
				this.deleteFromJson(index);
			}

		}

	};

};
var ProductCategory = function() {

	this.productCategoryId;
	this.productCategoryCode;
	this.productCategoryName;

	this.productCategoryCreatedDate;
	this.productCategoryLastModifiedDate;

	this.timezone;
	this.suspended;
	this.productCategorySubcategory = null;
	this.categories = [];

	this.fillCategoryData = function(category) {
		categoryDetails.setCategory(category);
		categoryDetails.addCategory(categoryDetails.toJsonCategory());
		return categoryDetails.getProductCategories();
	};

	this.setCategories = function(categoriesArray) {
		this.categories = categoriesArray;
	};

	this.getCaegories = function(category) {
		this.setCategory(category);
		return this.toJsonCategory();
	};

	this.getAutoCompleteCategory = function() {
		var tempProductCategory;
		var tempProductCategories = new Array();
		var tempCategories = this.getProductCategories();
		for (i in tempCategories) {
			if (tempCategories[i].SUSPENDED == false) {
				tempProductCategory = {
					value : tempCategories[i].PRODUCT_CATEGORY_CODE + " : "
							+ tempCategories[i].PRODUCT_CATEGORY_NAME,
					display : tempCategories[i].PRODUCT_CATEGORY_CODE + " : "
							+ tempCategories[i].PRODUCT_CATEGORY_NAME,
					productCategoryId : tempCategories[i].PRODUCTCATEGORYID,
					productCategoryName : tempCategories[i].PRODUCT_CATEGORY_NAME,
					productCategorySubcategory : tempCategories[i].PRODUCT_CATEGORY_SUBCATEGORY,
					suspended : tempCategories[i].SUSPENDED
				}

				tempProductCategories.push(tempProductCategory);
			}
		}
		return tempProductCategories;
	};

	/* To Set Category */
	this.setCategory = function(category) {
		this.productCategoryId = category.productCategoryId;
		this.productCategoryCode = category.productCategoryCode;
		this.productCategoryName = category.productCategoryName;
		this.productCategoryCreatedDate = category.productCategoryCreatedDate;
		this.productCategoryLastModifiedDate = category.productCategoryLastModifiedDate;
		this.timezone = category.timezone;
		this.productCategorySubcategory = category.productCategorySubcategory == -1 ? null
				: category.productCategorySubcategory;
		this.suspended = category.suspended;

	};

	this.getProductSubCategory = function(categories) {
		var tempCategories = categories;
		for (i in categories) {
			for (j in tempCategories) {
				if (categories[i].PRODUCT_CATEGORY_SUBCATEGORY == tempCategories[j].PRODUCTCATEGORYID) {
					categories[i].PRODUCT_CATEGORY_SUBCATEGORY = tempCategories[j].PRODUCT_CATEGORY_NAME;
				}
			}
		}

		return categories;

	};

	this.toJsonCategory = function() {
		return {
			PRODUCTCATEGORYID : this.productCategoryId,
			PRODUCT_CATEGORY_CODE : this.productCategoryCode,
			PRODUCT_CATEGORY_NAME : this.productCategoryName,
			PRODUCT_CATEGORY_CREATED_DATE : this.productCategoryCreatedDate,
			PRODUCT_CATEGORY_LASTMODIFIED_DATE : this.productCategoryLastModifiedDate,
			TIMEZONE : this.timezone,
			PRODUCT_CATEGORY_SUBCATEGORY : this.productCategorySubcategory,
			SUSPENDED : this.suspended
		};
	};

	this.toJsonDTO = function(productCategory) {
		return {

			"productCategoryId" : productCategory.PRODUCTCATEGORYID == undefined
					&& productCategory.PRODUCTCATEGORYID == null ? null
					: productCategory.PRODUCTCATEGORYID,
			"productCategoryCode" : productCategory.PRODUCT_CATEGORY_CODE == undefined
					&& productCategory.PRODUCT_CATEGORY_CODE == null ? null
					: productCategory.PRODUCT_CATEGORY_CODE,
			"productCategoryName" : productCategory.PRODUCT_CATEGORY_NAME == undefined
					&& productCategory.PRODUCT_CATEGORY_NAME == null ? null
					: productCategory.PRODUCT_CATEGORY_NAME,
			"productCategorySubcategory" : productCategory.PRODUCT_CATEGORY_SUBCATEGORY == undefined
					&& productCategory.PRODUCT_CATEGORY_SUBCATEGORY == null ? -1
					: productCategory.PRODUCT_CATEGORY_SUBCATEGORY.productCategoryId,
			"timeZone" : getUserTimeZone(),
			"suspended" : productCategory.SUSPENDED
		};
	}

	this.getProductCategories = function() {
		return this.categories;
	};

	this.setProductCategory = function(storedData) {
		this.categories = storedData;
	};

	this.fillOneRow = function(dataDB) {
		this.productCategory = dataDB;
		this.setCategory(this.productCategory);
		this.addCategory(this.toJsonCategory());
	};

	this.updateCategory = function(categories, categoryDetails) {
		for (i in categories) {
			if (categories[i].PRODUCTCATEGORYID == categoryDetails.PRODUCTCATEGORYID) {
				categories[i].PRODUCTCATEGORYID = categoryDetails.PRODUCTCATEGORYID;
				categories[i].PRODUCT_CATEGORY_CODE = categoryDetails.PRODUCT_CATEGORY_CODE;
				categories[i].PRODUCT_CATEGORY_NAME = categoryDetails.PRODUCT_CATEGORY_NAME;
				categories[i].PRODUCT_CATEGORY_SUBCATEGORY = categoryDetails.PRODUCT_CATEGORY_SUBCATEGORY;
				categories[i].SUSPENDED = categoryDetails.SUSPENDED;
			}
		}
	};

	this.addCategory = function(category) {
		this.categories.push(category);
	};

	this.editCategory = function(editCategory) {
		this.productCategoryId = editCategory.PRODUCTCATEGORYID;
		this.productCategoryCode = editCategory.PRODUCT_CATEGORY_CODE;
		this.productCategoryName = editCategory.PRODUCT_CATEGORY_NAME;
		this.productCategorySubcategory = editCategory.PRODUCT_CATEGORY_SUBCATEGORY;

		var autoFilterArray = this.getAutoCompleteCategory();

		for (i in autoFilterArray) {
			if (autoFilterArray[i].productCategoryId == editCategory.PRODUCT_CATEGORY_SUBCATEGORY) {
				this.productCategorySubcategory = autoFilterArray[i].value;
			}
		}
		this.suspended = editCategory.SUSPENDED;
	};

	this.removeCategory = function(index) {
		if (index == -1) {
			// do nothing.
		} else {
			this.categories.splice(index, 1);
		}
	};

	this.removeByObject = function(productCategory) {
		for (i in this.categories) {

			if (productCategory.productCategoryId == this.categories[i].PRODUCTCATEGORYID) {
				var index = this.categories.indexOf(this.categories[i]);
				this.removeCategory(index);
			}

		}
	};
}