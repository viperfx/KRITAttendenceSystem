/*Lead Owner:
Suffix:
First Name:
Title:
Phone:
Mobile:
Lead Source:
Industry:
 *Company:
 *Last Name:
Email:
Lead Status:
Annual Revenue:
Email Opt Out:
Fax:
Website:
Skype ID:
Secondary Email:
Twitter:
Street:
State:
Country:
City:
Zip Code:
Description:*/

var LeadData = function() {

	this.leadId;
	this.leadOwner;
	this.suffix;
	this.firstName;
	this.middleName;
	this.phoneNumber;
	this.mobileNumber;
	this.leadSource;
	this.leadSourceId;
	this.industry;
	this.companyName;
	this.lastName;
	this.emailId;
	this.client;
	this.leadStatusId;
	this.leadStatus;
	this.annualRevenue;
	this.emailOptOut;
	this.fax;
	this.website;
	this.skypeId;
	this.secondaryEmailId;
	this.twitter;
	this.mailingAddressShell;
	this.mailingAddressId;
	this.otherAddressShell;
	this.otherAddressId;
	this.deliveryAddressShell;
	this.deliveryAddressId;
	this.street;
	this.state;
	this.country;
	this.city;
	this.zipCode;
	this.description;
	this.leadDTO;
	this.productDTO;
	this.contactDTO;
	this.loginShell;
	this.userId;
	this.isDeleted = false;
	this.lead;
	this.leads = [];

	this.set = function(leadData) {

		if (leadData.isDeleted == false) {
			this.leadId = leadData.leadId;
			this.contactId = leadData.contactShell.contactId;
			this.suffix = leadData.contactShell.suffix;
			this.firstName = leadData.contactShell.firstName;
			this.middleName = leadData.contactShell.middleName;
			this.phoneNumber = leadData.contactShell.phoneNumber;
			this.mobileNumber = leadData.contactShell.mobileNumber;
			this.leadSource = leadData.leadSource;
			this.industry = leadData.contactShell.industry;
			this.companyName = leadData.contactShell.companyName;
			this.lastName = leadData.contactShell.lastName;
			this.emailId = leadData.contactShell.emailId;
			this.client = leadData.contactShell.client;
			this.leadStatus = leadData.leadStatus;
			this.annualRevenue = leadData.annualRevenue;
			this.fax = leadData.contactShell.fax;
			this.website = leadData.contactShell.website;
			this.skypeId = leadData.contactShell.skypeId;
			this.secondaryEmailId = leadData.contactShell.secondaryEmailId;
			this.twitter = leadData.contactShell.twitter;
			this.mailingAddressShell = leadData.contactShell.mailingAddressShell;
			this.mailingAddressId = leadData.contactShell.mailingAddressShell == undefined
					&& leadData.contactShell.mailingAddressShell == null ? null
					: leadData.contactShell.mailingAddressShell.addressId;
			this.otherAddressShell = leadData.contactShell.otherAddressShell;
			this.otherAddressId = leadData.contactShell.otherAddressShell == undefined
					&& leadData.contactShell.otherAddressShell == null ? null
					: leadData.contactShell.otherAddressShell.addressId;
			this.deliveryAddressShell = leadData.contactShell.deliveryAddressShell;
			this.deliveryAddressId = leadData.contactShell.deliveryAddressShell == undefined
					&& leadData.contactShell.deliveryAddressShell == null ? null
					: leadData.contactShell.deliveryAddressShell.addressId;

			this.description = leadData.contactShell.description;
			this.loginShell = leadData.loginShell;
			this.userId = leadData.loginShell == undefined
					&& leadData.loginShell == null ? null
					: leadData.loginShell.userId;

			this.isDeleted = leadData.isDeleted;
			this.productId = leadData.productShell.productId;
			this.productCode = leadData.productShell.productCode;
			this.productName = leadData.productShell.productName;
		}
		/*
		 * this.leadDTO = leadData.; this.productDTO = leadData.;
		 * this.contactDTO = leadData.;
		 */
	};

	this.setLead = function(leadData) {

		this.leadId = leadData.leadId;
		this.contactId = leadData.contactId;
		this.suffix = leadData.suffix;
		this.firstName = leadData.firstName;
		this.middleName = leadData.middleName;
		this.phoneNumber = leadData.phoneNumber;
		this.mobileNumber = leadData.mobileNumber;
		this.client = leadData.client;
		this.leadSource = leadData.leadSource;
		this.industry = leadData.industry;
		this.companyName = leadData.companyName;
		this.lastName = leadData.lastName;
		this.emailId = leadData.emailId;
		this.leadStatus = leadData.leadStatus;
		this.annualRevenue = leadData.annualRevenue;
		this.fax = leadData.fax;
		this.website = leadData.website;
		this.skypeId = leadData.skypeId;
		this.secondaryEmailId = leadData.secondaryEmailId;
		this.twitter = leadData.twitter;
		this.mailingAddressShell = leadData.mailingAddressShell;
		this.mailingAddressId = leadData.mailingAddressShell == undefined
				&& leadData.mailingAddressShell == null ? null
				: leadData.mailingAddressShell.addressId;
		this.otherAddressShell = leadData.otherAddressShell;
		this.otherAddressId = leadData.otherAddressShell == undefined
				&& leadData.otherAddressShell == null ? null
				: leadData.otherAddressShell.addressId;
		this.deliveryAddressShell = leadData.deliveryAddressShell;
		this.deliveryAddressId = leadData.deliveryAddressShell == undefined
				&& leadData.deliveryAddressShell == null ? null
				: leadData.deliveryAddressShell.addressId;

		this.description = leadData.description;
		this.loginShell = leadData.loginShell;
		this.userId = leadData.userId;
		this.isDeleted = leadData.isDeleted;
		this.productId = leadData.productId;
		this.productCode = leadData.productCode;
		this.productName = leadData.productName;

	};

	this.ToJSONLeadData = function() {
		return {
			LEAD_ID : this.leadId,
			CONTACT_ID : this.contactId,
			SUFFIX : this.suffix,
			FIRST_NAME : this.firstName,
			MIDDLE_NAME : this.middleName,
			LAST_NAME : this.lastName,
			COMPANY_NAME : this.companyName,
			EMAIL_ID : this.emailId,
			CLIENT : this.client,
			MOBILE_NUMBER : this.mobileNumber,
			INDUSTRY : this.industry,
			PHONE_NUMBER : this.phoneNumber,
			LEAD_SOURCE : this.leadSource,
			LEAD_STATUS : this.leadStatus,
			ANNUAL_REVENUE : this.annualRevenue,
			FAX : this.fax,
			WEBSITE : this.website,
			SKYPE_ID : this.skypeId,
			SECONDARY_EMAIL : this.secondaryEmailId,
			TWITTER : this.twitter,
			MAILING_ADDRESS_SHELL : this.mailingAddressShell,
			MAILING_ADDRESS_ID : this.mailingAddressShell == undefined
					&& this.mailingAddressShell == null ? null
					: this.mailingAddressShell.addressId,
			OTHER_ADDRESS_SHELL : this.otherAddressShell,
			OTHER_ADDRESS_ID : this.otherAddressShell == undefined
					&& this.otherAddressShell == null ? null
					: this.otherAddressShell.addressId,
			DELIVERY_ADDRESS_SHELL : this.deliveryAddressShell,
			DELIVERY_ADDRESS_ID : this.deliveryAddressShell == null
					&& this.deliveryAddressShell == undefined ? null
					: this.deliveryAddressShell.addressId,
			DESCRIPTION : this.description,
			LOGINSHELL : this.loginShell,
			USER_ID : this.userId,
			ISDELETED : this.isDeleted,
			PRODUCT_ID : this.productId,
			PRODUCT_CODE : this.productCode,
			PRODUCT_NAME : this.productName
		};
	};

	this.ToLeadFromJSON = function(lead) {
		return {
			productDTO : this.ToProductJSON(lead),
			contactDTO : this.ToContactJSON(lead),
			leadDTO : this.ToLeadJSON(lead)
		};
	};

	/*
	 * this.ToLoginShell = function(lead) { if (lead.LOGINSHELL == undefined &&
	 * lead.LOGINSHELL == null) { return { "userId" : lead.USER_ID == undefined &&
	 * lead.USER_ID == null ? -1 : lead.USER_ID, } }
	 * 
	 * return { "userId" : lead.LOGINSHELL.USER_ID == undefined &&
	 * lead.LOGINSHELL.USER_ID == null ? -1 : lead.LOGINSHELL.USER_ID, "suffix" :
	 * lead.LOGINSHELL.SUFFIX == undefined && lead.LOGINSHELL.SUFFIX == null ?
	 * null : lead.LOGINSHELL.SUFFIX, "firstName" : lead.LOGINSHELL.FIRST_NAME ==
	 * undefined && lead.LOGINSHELL.FIRST_NAME == null ? null :
	 * lead.LOGINSHELL.FIRST_NAME, "middleName" : lead.LOGINSHELL.MIDDLE_NAME ==
	 * undefined && lead.LOGINSHELL.MIDDLE_NAME == null ? null :
	 * lead.LOGINSHELL.MIDDLE_NAME,
	 * 
	 * "lastName" : lead.LOGINSHELL.LAST_NAME == undefined &&
	 * lead.LOGINSHELL.LAST_NAME == null ? null : lead.LOGINSHELL.LAST_NAME,
	 * 
	 * "nickName" : lead.LOGINSHELL.NICK_NAME == undefined &&
	 * lead.LOGINSHELL.NICK_NAME == null ? null : lead.LOGINSHELL.NICK_NAME,
	 * "gender" : lead.LOGINSHELL.GENDER == undefined && lead.LOGINSHELL.GENDER ==
	 * null ? null : lead.LOGINSHELL.GENDER.value == undefined &&
	 * lead.LOGINSHELL.GENDER.value == null ? lead.LOGINSHELL.GENDER :
	 * lead.LOGINSHELL.GENDER.value,
	 * 
	 * "emailId" : lead.LOGINSHELL.EMAIL_ID == undefined &&
	 * lead.LOGINSHELL.EMAIL_ID == null ? null : lead.LOGINSHELL.EMAIL_ID,
	 * 
	 * "mobileNumber" : lead.LOGINSHELL.MOBILE_NUMBER == undefined &&
	 * lead.LOGINSHELL.MOBILENUMBER == null ? null :
	 * lead.LOGINSHELL.MOBILE_NUMBER,
	 * 
	 * "role" : lead.LOGINSHELL.ROLE == undefined && lead.LOGINSHELL.ROLE ==
	 * null ? null : lead.LOGINSHELL.ROLE,
	 * 
	 * "department" : lead.LOGINSHELL.DEPARTMENT == undefined &&
	 * lead.LOGINSHELL.DEPARTMENT == null ? null : lead.LOGINSHELL.DEPARTMENT,
	 * 
	 * "group" : lead.LOGINSHELL.GROUP == undefined && lead.LOGINSHELL.GROUP ==
	 * null ? null : lead.LOGINSHELL.GROUP,
	 * 
	 * "dateOfBirth" : lead.LOGINSHELL.DATE_OF_BIRTH == undefined &&
	 * lead.LOGINSHELL.DATE_OF_BIRTH == null ? null : new Date(
	 * lead.LOGINSHELL.DATE_OF_BIRTH).getTime(),
	 * 
	 * "userName" : lead.LOGINSHELL.USERNAME == undefined &&
	 * lead.LOGINSHELL.USERNAME == null ? null : lead.LOGINSHELL.USERNAME,
	 * 
	 * "password" : lead.LOGINSHELL.PASSWORD == undefined &&
	 * lead.LOGINSHELL.PASSWORD == null ? null : lead.LOGINSHELL.PASSWORD,
	 * 
	 * "createdDate" : new Date().getTime(), "lastModifiedDate" : new
	 * Date().getTime(),
	 * 
	 * "isDeleted" : lead.LOGINSHELL.IS_DELETED == undefined &&
	 * lead.LOGINSHELL.IS_DELETED == null ? false : lead.LOGINSHELL.IS_DELETED,
	 * 
	 * "timeZone" : getUserTimeZone() } };
	 */
	this.ToLeadJSON = function(lead) {
		return {
			"leadId" : lead.LEAD_ID,
			"leadSource" : lead.LEAD_SOURCE == undefined
							&& lead.LEAD_SOURCE == null ? LeadSources[16].leadSource
							: lead.LEAD_SOURCE.value == undefined
									&& lead.LEAD_SOURCE.value == null ? lead.LEAD_SOURCE
									: lead.LEAD_SOURCE.value,
			"leadStatus" : lead.LEAD_STATUS == undefined
					&& lead.LEAD_STATUS == null ? LeadStatuses[0].leadStatus
					: lead.LEAD_STATUS.value == undefined
							&& lead.LEAD_STATUS.value == null ? lead.LEAD_STATUS
							: lead.LEAD_STATUS.value,
			"annualRevenue" : lead.ANNUAL_REVENUE == undefined
					&& lead.ANNUAL_REVENUE == null ? null : lead.ANNUAL_REVENUE,

			"description" : lead.DESCRIPTION == undefined
					&& lead.DESCRIPTION == null ? null : lead.DESCRIPTION,
			"isDeleted" : lead.IS_DELETED == undefined
					&& lead.IS_DELETED == null ? false : lead.IS_DELETED,
			"userId" : lead.USER_ID == undefined && lead.USER_ID == null ? -1
					: lead.USER_ID,
			"createdDate" : new Date().getTime(),
			"lastModifiedDate" : new Date().getTime(),
			"timeZone" : getUserTimeZone()
		}
	};

	this.ToProductJSON = function(lead) {
		var product = null;
		if (lead.PRODUCT_NAME.productName == undefined) {
			product = {
				"productId" : lead.PRODUCT_ID == undefined
						&& lead.PRODUCT_ID == null ? null : lead.PRODUCT_ID,
				"productCode" : lead.PRODUCT_CODE == undefined
						&& lead.PRODUCT_CODE == null ? null : lead.PRODUCT_CODE,
				"productName" : lead.PRODUCT_NAME == undefined
						&& lead.PRODUCT_NAME == null ? null : lead.PRODUCT_NAME,
				"isDeleted" : lead.IS_DELETED == undefined
						&& lead.IS_DELETED == null ? false : lead.IS_DELETED,
				"timeZone" : getUserTimeZone()
			}

		} else {
			product = {
				"productId" : lead.PRODUCT_NAME.productId == undefined
						&& lead.PRODUCT_NAME.productId == null ? null
						: lead.PRODUCT_NAME.productId,
				"productCode" : lead.PRODUCT_NAME.productCode == undefined
						&& lead.PRODUCT_NAME.productCode == null ? null
						: lead.PRODUCT_NAME.productCode,
				"productName" : lead.PRODUCT_NAME.productName == undefined
						&& lead.PRODUCT_NAME.productName == null ? null
						: lead.PRODUCT_NAME.productName,
				"isDeleted" : lead.IS_DELETED == undefined
						&& lead.IS_DELETED == null ? false : lead.IS_DELETED,
				"timeZone" : getUserTimeZone()
			}
		}
		return product;
	}

	this.ToContactJSON = function(lead) {
		return {

			"contactId" : lead.CONTACT_ID == undefined
					&& lead.CONTACT_ID == null ? null
					: lead.CONTACT_ID.contactId == undefined
							&& lead.CONTACT_ID.contactId == null ? lead.CONTACT_ID
							: lead.CONTACT_ID.contactId,

			"suffix" : lead.SUFFIX == undefined && lead.SUFFIX == null ? null
					: lead.SUFFIX.value == undefined
							&& lead.SUFFIX.value == null ? lead.SUFFIX
							: lead.SUFFIX.value,

			"firstName" : lead.FIRST_NAME == undefined
					&& lead.FIRST_NAME == null ? null : lead.FIRST_NAME,

			"companyName" : lead.COMPANY_NAME == undefined
					&& lead.COMPANY_NAME == null ? null : lead.COMPANY_NAME,

			"industry" : lead.INDUSTRY == undefined && lead.INDUSTRY == null ? null
					: lead.INDUSTRY.value == undefined
							&& lead.INDUSTRY.value == null ? lead.INDUSTRY
							: lead.INDUSTRY.value,

			"emailId" : lead.EMAIL_ID == undefined && lead.EMAIL_ID == null ? null
					: lead.EMAIL_ID,

			"mobileNumber" : lead.MOBILE_NUMBER == undefined
					&& lead.MOBILENUMBER == null ? null : lead.MOBILE_NUMBER,

			"lastName" : lead.LAST_NAME == undefined && lead.LAST_NAME == null ? null
					: lead.LAST_NAME,

			"client" : lead.CLIENT == undefined && lead.CLIENT == null ? null
					: lead.CLIENT,

			"phoneNumber" : lead.PHONE_NUMBER == undefined
					&& lead.PHONE_NUMBER == null ? null : lead.PHONE_NUMBER,

			"fax" : lead.FAX == undefined && lead.FAX == null ? null : lead.FAX,

			"skypeId" : lead.SKYPE_ID == undefined && lead.SKYPE_ID == null ? null
					: lead.SKYPE_ID,

			"twitter" : lead.TWITTER == undefined && lead.TWITTER == null ? null
					: lead.TWITTER,

			"secondaryEmailId" : lead.SECONDARY_EMAIL_ID == undefined
					&& lead.SECONDARY_EMAIL_ID == null ? null
					: lead.SECONDARY_EMAIL_ID,

			"description" : lead.DESCRIPTION == undefined
					&& lead.DESCRIPTION == null ? null : lead.DESCRIPTION,

			"website" : lead.WEBSITE == undefined && lead.WEBSITE == null ? null
					: lead.WEBSITE,

			"mailingStreet" : (lead.MAILING_ADDRESS_SHELL == undefined && lead.MAILING_ADDRESS_SHELL == null)
					|| (lead.MAILING_ADDRESS_SHELL.addressStreet == null && lead.MAILING_ADDRESS_SHELL.addressStreet == undefined) ? null
					: lead.MAILING_ADDRESS_SHELL.addressStreet,

			"mailingZip" : (lead.MAILING_ADDRESS_SHELL == undefined && lead.MAILING_ADDRESS_SHELL == null)
					|| (lead.MAILING_ADDRESS_SHELL.addressZip == undefined && lead.MAILING_ADDRESS_SHELL.addressZip == null) ? null
					: lead.MAILING_ADDRESS_SHELL.addressZip,

			"mailingAddressId" : lead.MAILING_ADDRESS_ID === undefined
					|| lead.MAILING_ADDRESS_ID === null ? -1
					: lead.MAILING_ADDRESS_ID,

			"otherStreet" : (lead.OTHER_ADDRESS_SHELL == undefined && lead.OTHER_ADDRESS_SHELL == null)
					|| (lead.OTHER_ADDRESS_SHELL.addressStreet == null && lead.OTHER_ADDRESS_SHELL.addressStreet == undefined) ? null
					: lead.OTHER_ADDRESS_SHELL.addressStreet,

			"otherCity" : (lead.OTHER_ADDRESS_SHELL == undefined && lead.OTHER_ADDRESS_SHELL == null)
					|| (lead.OTHER_ADDRESS_SHELL.addressCityShell == undefined && lead.OTHER_ADDRESS_SHELL.addressCityShell == null) ? null
					: lead.OTHER_ADDRESS_SHELL.addressCityShell.cityName,

			"otherState" : (lead.OTHER_ADDRESS_SHELL == undefined && lead.OTHER_ADDRESS_SHELL == null)
					|| (lead.OTHER_ADDRESS_SHELL.addressStateShell == undefined && lead.OTHER_ADDRESS_SHELL.addressStateShell == null) ? null
					: lead.OTHER_ADDRESS_SHELL.addressStateShell.stateName,

			"otherZip" : (lead.OTHER_ADDRESS_SHELL == undefined && lead.OTHER_ADDRESS_SHELL == null)
					|| (lead.OTHER_ADDRESS_SHELL.addressZip == undefined && lead.OTHER_ADDRESS_SHELL.addressZip == null) ? null
					: lead.OTHER_ADDRESS_SHELL.addressZip,

			"otherCountry" : (lead.OTHER_ADDRESS_SHELL == undefined && lead.OTHER_ADDRESS_SHELL == null)
					|| (lead.OTHER_ADDRESS_SHELL.addressCountryShell == undefined && lead.OTHER_ADDRESS_SHELL.addressCountryShell == null) ? null
					: lead.OTHER_ADDRESS_SHELL.addressCountryShell.countryName,

			"otherAddressId" : lead.OTHER_ADDRESS_ID == undefined
					&& lead.OTHER_ADDRESS_ID == null ? -1
					: lead.OTHER_ADDRESS_ID,

			"deliveryStreet" : (lead.DELIVERY_ADDRESS_SHELL == undefined && lead.DELIVERY_ADDRESS_SHELL == null)
					|| (lead.DELIVERY_ADDRESS_SHELL.addressStreet == null && lead.DELIVERY_ADDRESS_SHELL.addressStreet == undefined) ? null
					: lead.DELIVERY_ADDRESS_SHELL.addressStreet,

			"deliveryZip" : (lead.DELIVERY_ADDRESS_SHELL == undefined && lead.DELIVERY_ADDRESS_SHELL == null)
					|| (lead.DELIVERY_ADDRESS_SHELL.addressZip == undefined && lead.DELIVERY_ADDRESS_SHELL.addressZip == null) ? null
					: lead.DELIVERY_ADDRESS_SHELL.addressZip,

			"deliveryAddressId" : lead.DELIVERY_ADDRESS_ID == undefined
					&& lead.DELIVERY_ADDRESS_ID == null ? -1
					: lead.DELIVERY_ADDRESS_ID,

			"mailingAddressTypeId" : (lead.MAILING_ADDRESS_SHEL == undefined && lead.MAILING_ADDRESS_SHELL == null)
					|| (lead.MAILING_ADDRESS_SHELL.addressTypeId == null && lead.MAILING_ADDRESS_SHELL.addressTypeId == undefined) ? 1
					: lead.MAILING_ADDRESS_SHELL.addressTypeId,

			"otherAddressTypeId" : (lead.OTHER_ADDRESS_SHELL == undefined && lead.OTHER_ADDRESS_SHELL == null)
					|| (lead.OTHER_ADDRESS_SHELL.addressTypeId == null && lead.OTHER_ADDRESS_SHELL.addressTypeId == undefined) ? 2
					: lead.OTHER_ADDRESS_SHELL.addressTypeId,

			"deliveryAddressTypeId" : (lead.DELIVERY_ADDRESS_SHELL == undefined && lead.DELIVERY_ADDRESS_SHELL == null)
					|| (lead.DELIVERY_ADDRESS_SHELL.addressTypeId == null && lead.DELIVERY_ADDRESS_SHELL.addressTypeId == undefined) ? 3
					: lead.DELIVERY_ADDRESS_SHELL.addressTypeId,

			"isDeleted" : lead.IS_DELETED == undefined
					&& lead.IS_DELETED == null ? false : lead.IS_DELETED,
			"createdDate" : new Date().getTime(),
			"lastModifiedDate" : new Date().getTime(),
			"timeZone" : getUserTimeZone()
		}
	};

	this.add = function(leadData) {
		this.leads.push(leadData);
	}

	this.getLeads = function(leadStatusCount) {
		if (leadStatusCount == 1) {
			var temp = [];
			for (i in this.leads) {
				/* LeadStatuses[2].leadStatus = Attended */
				if (this.leads[i].LEAD_STATUS == LeadStatuses[1].leadStatus) {
					temp.push(this.leads[i]);
				}
			}
			return temp;
		} else if (leadStatusCount == 2) {
			var temp = [];
			for (i in this.leads) {
				/* LeadStatuses[2].leadStatus = Attended */
				if (this.leads[i].LEAD_STATUS == LeadStatuses[5].leadStatus) {
					temp.push(this.leads[i]);
				}
			}
			return temp;
		} else if (leadStatusCount == 3) {
			var temp = [];
			for (i in this.leads) {
				/* LeadStatuses[2].leadStatus = Attended */
				if (this.leads[i].LEAD_STATUS == LeadStatuses[0].leadStatus) {
					temp.push(this.leads[i]);
				}
			}
			return temp;
		} else {
			return this.leads;
		}
	}

	this.setLeads = function(leadData) {
		this.leads = leadData;
	};

	this.fillOneLead = function(dataDB) {

		if (dataDB.isDeleted === false) {
			this.lead = dataDB;
			this.set(this.lead);
			this.add(this.ToJSONLeadData());
		}

	};

	this.getLeadsData = function(lead) {
		this.set(lead);
		return this.ToJSONLeadData();
	};

	this.editLeadData = function(lead) {

		this.leadId = lead.LEAD_ID;
		this.contactId = lead.CONTACT_ID;
		this.suffix = lead.SUFFIX;
		this.firstName = lead.FIRST_NAME;
		this.lastName = lead.LAST_NAME;
		this.companyName = lead.COMPANY_NAME;
		this.emailId = lead.EMAIL_ID;
		this.client = lead.CLIENT;
		this.mobileNumber = lead.MOBILE_NUMBER;
		this.industry = lead.INDUSTRY;
		this.phoneNumber = lead.PHONE_NUMBER;
		this.leadSource = lead.LEAD_SOURCE;
		this.leadStatus = lead.LEAD_STATUS;
		this.annualRevenue = lead.ANNUAL_REVENUE;
		this.fax = lead.FAX;
		this.website = lead.WEBSITE;
		this.skypeId = lead.SKYPE_ID;
		this.secondaryEmailId = lead.SECONDARY_EMAIL;
		this.twitter = lead.TWITTER;
		this.mailingAddressShell = lead.MAILING_ADDRESS_SHELL;
		this.mailingAddressId = lead.MAILING_ADDRESS_ID;
		this.otherAddressShell = lead.OTHER_ADDRESS_SHELL;
		this.otherAddressId = lead.OTHER_ADDRESS_ID;
		this.deliveryAddressShell = lead.DELIVERY_ADDRESS_SHELL;
		this.deliveryAddressId = lead.DELIVERY_ADDRESS_ID;

		this.description = lead.DESCRIPTION;
		this.loginShell = lead.loginShell;
		this.userId = lead.USER_ID;
		this.isDeleted = lead.ISDELETED;
		this.productId = lead.PRODUCT_ID;
		this.productCode = lead.PRODUCT_CODE;
		this.productName = lead.PRODUCT_NAME;
	};

	this.updateLead = function(lead, leads) {

		for (i in leads) {

			if (leads[i].LEAD_ID == lead.LEAD_ID) {
				leads[i].LEAD_ID = lead.LEAD_ID;
				leads[i].CONTACT_ID = lead.CONTACT_ID;
				leads[i].SUFFIX = lead.SUFFIX;
				leads[i].FIRST_NAME = lead.FIRST_NAME;
				leads[i].LAST_NAME = lead.LAST_NAME;
				leads[i].COMPANY_NAME = lead.COMPANY_NAME;
				leads[i].EMAIL_ID = lead.EMAIL_ID;
				leads[i].MOBILE_NUMBER = lead.MOBILE_NUMBER;
				leads[i].CLIENT = lead.CLIENT;
				leads[i].INDUSTRY = lead.INDUSTRY;
				leads[i].PHONE_NUMBER = lead.PHONE_NUMBER;
				leads[i].LEAD_SOURCE = lead.LEAD_SOURCE;
				leads[i].LEAD_STATUS = lead.LEAD_STATUS;
				leads[i].ANNUAL_REVENUE = lead.ANNUAL_REVENUE;
				leads[i].FAX = lead.FAX;
				leads[i].WEBSITE = lead.WEBSITE;
				leads[i].SKYPE_ID = lead.SKYPE_ID;
				leads[i].SECONDARY_EMAIL = lead.SECONDARY_EMAIL;
				leads[i].TWITTER = lead.TWITTER;
				leads[i].MAILING_ADDRESS_SHELL = lead.MAILING_ADDRESS_SHELL;
				leads[i].MAILING_ADDRESS_ID = lead.MAILING_ADDRESS_ID;
				leads[i].OTHER_ADDRESS_SHELL = lead.OTHER_ADDRESS_SHELL;
				leads[i].OTHER_ADDRESS_ID = lead.OTHER_ADDRESS_ID;
				leads[i].DELIVERY_ADDRESS_SHELL = lead.DELIVERY_ADDRESS_SHELL;
				leads[i].DELIVERY_ADDRESS_ID = lead.DELIVERY_ADDRESS_ID;
				leads[i].DESCRIPTION = lead.DESCRIPTION;
				leads[i].USER_ID = lead.USER_ID;
				leads[i].LOGINSHELL = lead.LOGINSHELL;
				leads[i].ISDELETED = lead.ISDELETED;
				leads[i].PRODUCT_ID = lead.PRODUCT_ID;
				leads[i].PRODUCT_NAME = lead.PRODUCT_NAME;
				leads[i].PRODUCT_CODE = lead.PRODUCT_CODE;

			}
		}
	};

	this.getSelectedAutoCompleteLeadStatus = function() {

		var tempStatus = null;
		var tempStatuses = [];
		for (i in LeadStatuses) {
			tempStatus = {
				value : LeadStatuses[i].leadStatus,
				display : LeadStatuses[i].leadStatus,
				statusId : LeadStatuses[i].statusId
			}
			tempStatuses.push(tempStatus);
		}
		return tempStatuses;

	};
	
	this.getSelectedAutoCompleteLeadSources = function() {

		var tempSource = null;
		var tempSources = [];
		for (i in LeadSources) {
			tempSource = {
				value : LeadSources[i].leadSource,
				display : LeadSources[i].leadSource,
				sourceId : LeadSources[i].sourceId
			}
			tempSources.push(tempSource);
		}
		return tempSources;

	};

};