var Contacts = function() {

	this.contactId;
	this.suffix;
	this.firstName;
	this.companyName;
	this.industry;
	this.emailId;
	this.mobileNumber;
	this.lastName;
	this.client;
	this.phoneNumber;
	this.otherPhoneNumber;
	this.reportsTo;
	this.designation;
	this.department;
	this.homePhoneNumber;
	this.fax;
	this.dateOfBirth = new Date(0);
	this.assistantPhoneNumber;
	this.alternateEmailId;
	this.skypeId;
	this.twitter;
	this.secondaryEmailId;
	this.description;
	this.website;
	this.mailingAddressShell;
	this.mailingAddressId;
	this.otherAddressShell;
	this.otherAddressId;
	this.deliveryAddressShell;
	this.deliveryAddressId;
	this.createdDate;
	this.lastModifiedDate;
	this.isDeleted;
	this.timeZone;

	this.contact;
	this.contacts = [];

	/* set contact */
	this.set = function(contact) {

		this.contactId = contact.contactId;
		this.suffix = contact.suffix;
		this.firstName = contact.firstName;
		this.companyName = contact.companyName;
		this.industry = contact.industry;
		this.emailId = contact.emailId;
		this.mobileNumber = contact.mobileNumber;
		this.lastName = contact.lastName;
		this.client = contact.client;
		this.phoneNumber = contact.phoneNumber;
		this.otherPhoneNumber = contact.otherPhoneNumber;
		this.reportsTo = contact.reportsTo;
		this.designation = contact.designation;
		this.department = contact.department;
		this.homePhoneNumber = contact.homePhoneNumber;
		this.fax = contact.fax;
		this.dateOfBirth = new Date(contact.dateOfBirth);
		this.assistantPhoneNumber = contact.assistantPhoneNumber;
		this.alternateEmailId = contact.alternateEmailId;
		this.skypeId = contact.skypeId;
		this.twitter = contact.twitter;
		this.secondaryEmailId = contact.secondaryEmailId;
		this.description = contact.description;
		this.website = contact.website;
		this.mailingAddressShell = contact.mailingAddressShell;
		this.mailingAddressId = contact.mailingAddressShell == undefined
				&& contact.mailingAddressShell == null ? null
				: contact.mailingAddressShell.addressId;
		this.otherAddressShell = contact.otherAddressShell;
		this.otherAddressId = contact.otherAddressShell == undefined
				&& contact.otherAddressShell == null ? null
				: contact.otherAddressShell.addressId;
		this.deliveryAddressShell = contact.deliveryAddressShell;
		this.deliveryAddressId = contact.deliveryAddressShell == undefined
				&& contact.deliveryAddressShell == null ? null
				: contact.deliveryAddressShell.addressId;
		this.isDeleted = contact.isDeleted;

		// this.selectToDelete = false;

	};

	this.toJson = function() {
		return {
			CONTACT_ID : this.contactId,
			SUFFIX : this.suffix,
			FIRST_NAME : this.firstName,
			COMPANY_NAME : this.companyName,
			INDUSTRY : this.industry,
			EMAIL_ID : this.emailId,
			MOBILE_NUMBER : this.mobileNumber,
			LAST_NAME : this.lastName,
			CLIENT : this.client,
			PHONE_NUMBER : this.phoneNumber,
			OTHER_PHONE_NUMBER : this.otherPhoneNumber,
			REPORTS_TO : this.reportsTo,
			DESIGNATION : this.designation,
			DEPARTMENT : this.department,
			HOME_PHONE_NUMBER : this.homePhoneNumber,
			FAX : this.fax,
			DATE_OF_BIRTH : this.dateOfBirth,
			ASSISTANT_PHONE_NUMBER : this.assistantPhoneNumber,
			ALTERNATE_EMAIL_ID : this.alternateEmailId,
			SKYPE_ID : this.skypeId,
			TWITTER : this.twitter,
			SECONDARY_EMAIL_ID : this.secondaryEmailId,
			DESCRIPTION : this.description,
			WEBSITE : this.website,
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
			IS_DELETED : this.isDeleted

		};
	};
	this.toJsonContactDTO = function(contact) {
		return {
			"contactId" : contact.CONTACT_ID == undefined
					&& contact.CONTACT_ID == null ? null : contact.CONTACT_ID,

			"suffix" : contact.SUFFIX == undefined && contact.SUFFIX == null ? null
					: contact.SUFFIX.value == undefined
							&& contact.SUFFIX.value == null ? contact.SUFFIX
							: contact.SUFFIX.value,

			"firstName" : contact.FIRST_NAME == undefined
					&& contact.FIRST_NAME == null ? null : contact.FIRST_NAME,

			"companyName" : contact.COMPANY_NAME == undefined
					&& contact.COMPANY_NAME == null ? null
					: contact.COMPANY_NAME,

			"industry" : contact.INDUSTRY == undefined
					&& contact.INDUSTRY == null ? null
					: contact.INDUSTRY.value == undefined
							&& contact.INDUSTRY.value == null ? contact.INDUSTRY
							: contact.INDUSTRY.value,

			"emailId" : contact.EMAIL_ID == undefined
					&& contact.EMAIL_ID == null ? null : contact.EMAIL_ID,

			"mobileNumber" : contact.MOBILE_NUMBER == undefined
					&& contact.MOBILENUMBER == null ? null
					: contact.MOBILE_NUMBER,

			"lastName" : contact.LAST_NAME == undefined
					&& contact.LAST_NAME == null ? null : contact.LAST_NAME,

			"client" : contact.CLIENT == undefined && contact.CLIENT == null ? null
					: contact.CLIENT,

			"phoneNumber" : contact.PHONE_NUMBER == undefined
					&& contact.PHONE_NUMBER == null ? null
					: contact.PHONE_NUMBER,

			"otherPhoneNumber" : contact.OTHER_PHONE_NUMBER == undefined
					&& contact.OTHER_PHONE_NUMBER == null ? null
					: contact.OTHER_PHONE_NUMBER,

			"reportsTo" : contact.REPORTS_TO == undefined
					&& contact.REPORTS_TO == null ? null : contact.REPORTS_TO,

			"designation" : contact.DESIGNATION == undefined
					&& contact.DESIGNATION == null ? null : contact.DESIGNATION,

			"department" : contact.DEPARTMENT == undefined
					&& contact.DEPARTMENT == null ? null : contact.DEPARTMENT,

			"homePhoneNumber" : contact.HOME_PHONE_NUMBER == undefined
					&& contact.HOME_PHONE_NUMBER == null ? null
					: contact.HOME_PHONE_NUMBER,

			"fax" : contact.FAX == undefined && contact.FAX == null ? null
					: contact.FAX,

			"dateOfBirth" : contact.DATE_OF_BIRTH == undefined
					&& contact.DATE_OF_BIRTH == null ? null : new Date(
					contact.DATE_OF_BIRTH).getTime(),

			"assistantPhoneNumber" : contact.ASSISTANT_PHONE_NUMBER == undefined
					&& contact.ASSISTANT_PHONE_NUMBER == null ? null
					: contact.ASSISTANT_PHONE_NUMBER,

			"alternateEmailId" : contact.ALTERNATE_EMAIL_ID == undefined
					&& contact.ALTERNATE_EMAIL_ID == null ? null
					: contact.ALTERNATE_EMAIL_ID,

			"skypeId" : contact.SKYPE_ID == undefined
					&& contact.SKYPE_ID == null ? null : contact.SKYPE_ID,

			"twitter" : contact.TWITTER == undefined && contact.TWITTER == null ? null
					: contact.TWITTER,

			"secondaryEmailId" : contact.SECONDARY_EMAIL_ID == undefined
					&& contact.SECONDARY_EMAIL_ID == null ? null
					: contact.SECONDARY_EMAIL_ID,

			"description" : contact.DESCRIPTION == undefined
					&& contact.DESCRIPTION == null ? null : contact.DESCRIPTION,

			"website" : contact.WEBSITE == undefined && contact.WEBSITE == null ? null
					: contact.WEBSITE,

			"mailingStreet" : (contact.MAILING_ADDRESS_SHELL == undefined && contact.MAILING_ADDRESS_SHELL == null)
					|| (contact.MAILING_ADDRESS_SHELL.addressStreet == null && contact.MAILING_ADDRESS_SHELL.addressStreet == undefined) ? null
					: contact.MAILING_ADDRESS_SHELL.addressStreet,

			"mailingCity" : (contact.MAILING_ADDRESS_SHELL == undefined && contact.MAILING_ADDRESS_SHELL == null)
					|| (contact.MAILING_ADDRESS_SHELL.addressCityShell == undefined && contact.MAILING_ADDRESS_SHELL.addressCityShell == null) ? null
					: contact.MAILING_ADDRESS_SHELL.addressCityShell.cityName,

			"mailingState" : (contact.MAILING_ADDRESS_SHELL == undefined && contact.MAILING_ADDRESS_SHELL == null)
					|| (contact.MAILING_ADDRESS_SHELL.addressStateShell == undefined && contact.MAILING_ADDRESS_SHELL.addressStateShell == null) ? null
					: contact.MAILING_ADDRESS_SHELL.addressStateShell.stateName,

			"mailingZip" : (contact.MAILING_ADDRESS_SHELL == undefined && contact.MAILING_ADDRESS_SHELL == null)
					|| (contact.MAILING_ADDRESS_SHELL.addressZip == undefined && contact.MAILING_ADDRESS_SHELL.addressZip == null) ? null
					: contact.MAILING_ADDRESS_SHELL.addressZip,

			"mailingCountry" : (contact.MAILING_ADDRESS_SHELL == undefined && contact.MAILING_ADDRESS_SHELL == null)
					|| (contact.MAILING_ADDRESS_SHELL.addressCountryShell == undefined && contact.MAILING_ADDRESS_SHELL.addressCountryShell == null) ? null
					: contact.MAILING_ADDRESS_SHELL.addressCountryShell.countryName,

			"mailingAddressId" : contact.MAILING_ADDRESS_ID === undefined
					|| contact.MAILING_ADDRESS_ID === null ? -1
					: contact.MAILING_ADDRESS_ID,

			"otherStreet" : (contact.OTHER_ADDRESS_SHELL == undefined && contact.OTHER_ADDRESS_SHELL == null)
					|| (contact.OTHER_ADDRESS_SHELL.addressStreet == null && contact.OTHER_ADDRESS_SHELL.addressStreet == undefined) ? null
					: contact.OTHER_ADDRESS_SHELL.addressStreet,

			"otherCity" : (contact.OTHER_ADDRESS_SHELL == undefined && contact.OTHER_ADDRESS_SHELL == null)
					|| (contact.OTHER_ADDRESS_SHELL.addressCityShell == undefined && contact.OTHER_ADDRESS_SHELL.addressCityShell == null) ? null
					: contact.OTHER_ADDRESS_SHELL.addressCityShell.cityName,

			"otherState" : (contact.OTHER_ADDRESS_SHELL == undefined && contact.OTHER_ADDRESS_SHELL == null)
					|| (contact.OTHER_ADDRESS_SHELL.addressStateShell == undefined && contact.OTHER_ADDRESS_SHELL.addressStateShell == null) ? null
					: contact.OTHER_ADDRESS_SHELL.addressStateShell.stateName,

			"otherZip" : (contact.OTHER_ADDRESS_SHELL == undefined && contact.OTHER_ADDRESS_SHELL == null)
					|| (contact.OTHER_ADDRESS_SHELL.addressZip == undefined && contact.OTHER_ADDRESS_SHELL.addressZip == null) ? null
					: contact.OTHER_ADDRESS_SHELL.addressZip,

			"otherCountry" : (contact.OTHER_ADDRESS_SHELL == undefined && contact.OTHER_ADDRESS_SHELL == null)
					|| (contact.OTHER_ADDRESS_SHELL.addressCountryShell == undefined && contact.OTHER_ADDRESS_SHELL.addressCountryShell == null) ? null
					: contact.OTHER_ADDRESS_SHELL.addressCountryShell.countryName,

			"otherAddressId" : contact.OTHER_ADDRESS_ID == undefined
					&& contact.OTHER_ADDRESS_ID == null ? -1
					: contact.OTHER_ADDRESS_ID,

			"deliveryStreet" : (contact.DELIVERY_ADDRESS_SHELL == undefined && contact.DELIVERY_ADDRESS_SHELL == null)
					|| (contact.DELIVERY_ADDRESS_SHELL.addressStreet == null && contact.DELIVERY_ADDRESS_SHELL.addressStreet == undefined) ? null
					: contact.DELIVERY_ADDRESS_SHELL.addressStreet,

			"deliveryCity" : (contact.DELIVERY_ADDRESS_SHELL == undefined && contact.DELIVERY_ADDRESS_SHELL == null)
					|| (contact.DELIVERY_ADDRESS_SHELL.addressCityShell == undefined && contact.DELIVERY_ADDRESS_SHELL.addressCityShell == null) ? null
					: contact.DELIVERY_ADDRESS_SHELL.addressCityShell.cityName,

			"deliveryState" : (contact.DELIVERY_ADDRESS_SHELL == undefined && contact.DELIVERY_ADDRESS_SHELL == null)
					|| (contact.DELIVERY_ADDRESS_SHELL.addressStateShell == undefined && contact.DELIVERY_ADDRESS_SHELL.addressStateShell == null) ? null
					: contact.DELIVERY_ADDRESS_SHELL.addressStateShell.stateName,

			"deliveryZip" : (contact.DELIVERY_ADDRESS_SHELL == undefined && contact.DELIVERY_ADDRESS_SHELL == null)
					|| (contact.DELIVERY_ADDRESS_SHELL.addressZip == undefined && contact.DELIVERY_ADDRESS_SHELL.addressZip == null) ? null
					: contact.DELIVERY_ADDRESS_SHELL.addressZip,

			"deliveryCountry" : (contact.DELIVERY_ADDRESS_SHELL == undefined && contact.DELIVERY_ADDRESS_SHELL == null)
					|| (contact.DELIVERY_ADDRESS_SHELL.addressCountryShell == undefined && contact.DELIVERY_ADDRESS_SHELL.addressCountryShell == null) ? null
					: contact.DELIVERY_ADDRESS_SHELL.addressCountryShell.countryName,

			"deliveryAddressId" : contact.DELIVERY_ADDRESS_ID == undefined
					&& contact.DELIVERY_ADDRESS_ID == null ? -1
					: contact.DELIVERY_ADDRESS_ID,

			"mailingAddressTypeId" : (contact.MAILING_ADDRESS_SHEL == undefined && contact.MAILING_ADDRESS_SHELL == null)
					|| (contact.MAILING_ADDRESS_SHELL.addressTypeId == null && contact.MAILING_ADDRESS_SHELL.addressTypeId == undefined) ? 1
					: contact.MAILING_ADDRESS_SHELL.addressTypeId,

			"otherAddressTypeId" : (contact.OTHER_ADDRESS_SHELL == undefined && contact.OTHER_ADDRESS_SHELL == null)
					|| (contact.OTHER_ADDRESS_SHELL.addressTypeId == null && contact.OTHER_ADDRESS_SHELL.addressTypeId == undefined) ? 2
					: contact.OTHER_ADDRESS_SHELL.addressTypeId,

			"deliveryAddressTypeId" : (contact.DELIVERY_ADDRESS_SHELL == undefined && contact.DELIVERY_ADDRESS_SHELL == null)
					|| (contact.DELIVERY_ADDRESS_SHELL.addressTypeId == null && contact.DELIVERY_ADDRESS_SHELL.addressTypeId == undefined) ? 3
					: contact.DELIVERY_ADDRESS_SHELL.addressTypeId,

			"createdDate" : new Date('1970-01-01').getTime(),
			"lastModifiedDate" : new Date('1970-01-01').getTime(),

			"isDeleted" : contact.IS_DELETED == undefined
					&& contact.IS_DELETED == null ? false : contact.IS_DELETED,

			"timeZone" : getUserTimeZone()
		};
	};

	this.getContacts = function() {
		return this.contacts;
	};

	this.setContacts = function(contactsArray) {
		this.contacts = contactsArray;
	};

	this.editContacts = function(editContact) {

		this.contactId = editContact.CONTACT_ID;
		this.suffix = editContact.SUFFIX;
		this.firstName = editContact.FIRST_NAME;
		this.companyName = editContact.COMPANY_NAME;
		this.industry = editContact.INDUSTRY;
		this.emailId = editContact.EMAIL_ID;
		this.mobileNumber = editContact.MOBILE_NUMBER;
		this.lastName = editContact.LAST_NAME;
		this.client = editContact.CLIENT;
		this.phoneNumber = editContact.PHONE_NUMBER;
		this.otherPhoneNumber = editContact.OTHER_PHONE_NUMBER;
		this.reportsTo = editContact.REPORTS_TO;
		this.designation = editContact.DESIGNATION;
		this.department = editContact.DEPARTMENT;
		this.homePhoneNumber = editContact.HOME_PHONE_NUMBER;
		this.fax = editContact.FAX;
		this.dateOfBirth = editContact.DATE_OF_BIRTH;
		this.assistantPhoneNumber = editContact.ASSISTANT_PHONE_NUMBER;
		this.description = editContact.DESCRIPTION;
		this.alternateEmailId = editContact.ALTERNATE_EMAIL_ID;
		this.skypeId = editContact.SKYPE_ID;
		this.secondaryEmailId = editContact.SECONDARY_EMAIL_ID;
		this.mailingAddressShell = editContact.MAILING_ADDRESS_SHELL;
		this.mailingAddressId = editContact.MAILING_ADDRESS_ID;
		this.otherAddressShell = editContact.OTHER_ADDRESS_SHELL;
		this.otherAddressId = editContact.OTHER_ADDRESS_ID;
		this.deliveryAddressShell = editContact.DELIVERY_ADDRESS_SHELL;
		this.deliveryAddressId = editContact.DELIVERY_ADDRESS_ID;
		this.isDeleted = editContact.IS_DELETED;

	};

	this.updateContact = function(contact, contacts) {
		for (i in contacts) {
			if (contacts[i].CONTACT_ID == contact.CONTACT_ID) {

				contacts[i].CONTACT_ID = contact.CONTACT_ID;
				contacts[i].SUFFIX = contact.SUFFIX;
				contacts[i].FIRST_NAME = contact.FIRST_NAME;
				contacts[i].COMPANY_NAME = contact.COMPANY_NAME;
				contacts[i].INDUSTRY = contact.INDUSTRY;
				contacts[i].EMAIL_ID = contact.EMAIL_ID;
				contacts[i].MOBILE_NUMBER = contact.MOBILE_NUMBER;
				contacts[i].LAST_NAME = contact.LAST_NAME;
				contacts[i].CLIENT = contact.CLIENT;
				contacts[i].PHONE_NUMBER = contact.PHONE_NUMBER;
				contacts[i].OTHER_PHONE_NUMBER = contact.OTHER_PHONE_NUMBER;
				contacts[i].REPORTS_TO = contact.REPORTS_TO;
				contacts[i].DESIGNATION = contact.DESIGNATION;
				contacts[i].UNIT_PRICE = contact.UNIT_PRICE;
				contacts[i].DEPARTMENT = contact.DEPARTMENT;
				contacts[i].HOME_PHONE_NUMBER = contact.HOME_PHONE_NUMBER;
				contacts[i].FAX = contact.FAX;
				contacts[i].DATE_OF_BIRTH = contact.DATE_OF_BIRTH;
				contacts[i].ASSISTANT_PHONE_NUMBER = contact.ASSISTANT_PHONE_NUMBER;
				contacts[i].ALTERNATE_EMAIL_ID = contact.ALTERNATE_EMAIL_ID;
				contacts[i].SKYPE_ID = contact.SKYPE_ID;
				contacts[i].SECONDARY_EMAIL_ID = contact.SECONDARY_EMAIL_ID;

				contacts[i].DESCRIPTION = contact.DESCRIPTION;
				contacts[i].MAILING_ADDRESS_SHELL = contact.MAILING_ADDRESS_SHELL;
				contacts[i].MAILING_ADDRESS_ID = contact.MAILING_ADDRESS_ID;

				contacts[i].OTHER_ADDRESS_SHELL = contact.OTHER_ADDRESS_SHELL;
				contacts[i].OTHER_ADDRESS_ID = contact.OTHER_ADDRESS_ID;
				contacts[i].DELIVERY_ADDRESS_SHELL = contact.DELIVERY_ADDRESS_SHELL;
				contacts[i].DELIVERY_ADDRESS_ID = contact.DELIVERY_ADDRESS_ID;
				contacts[i].IS_DELETED = contact.IS_DELETED;
			}
		}
	}

	/*
	 * this.getSelectedAutoCompleteCountry = function(contact) { if
	 * (contact.isDeleted == false) { tempCountry = { value :
	 * contact.mailingAddressShell.addressCountryShell.countryName, display :
	 * contact.mailingAddressShell.addressCountryShell.countryName, countryName :
	 * contact.mailingAddressShell.addressCountryShell.countryName, deleted :
	 * contact.isDeleted }
	 * 
	 * return tempCountry; } };
	 */

	this.getSelectedAutoCompleteContact = function(contacts) {
		var tempContact;
		var tempContacts = new Array();
		for (i in contacts) {
			tempContact = {
				value : contacts[i].MOBILE_NUMBER + '-'
				+ contacts[i].FIRST_NAME + ' ' + contacts[i].LAST_NAME,
				display : contacts[i].MOBILE_NUMBER + '-'
						+ contacts[i].FIRST_NAME + ' ' + contacts[i].LAST_NAME,
				mobileNumber : contacts[i].MOBILE_NUMBER,
				contactId : contacts[i].CONTACT_ID,
				firstName : contacts[i].FIRST_NAME,
				lastName :  contacts[i].LAST_NAME,
				timeZone : contacts[i].TIMEZONE
			}
			tempContacts.push(tempContact);
		}
		return tempContacts;

	};
	this.getContactsData = function(contact) {
		this.set(contact);
		return this.toJson();
	};

	this.add = function(row) {
		this.contacts.push(row);

	};

	this.fillTable = function(dataDB) {

		for (i in dataDB) {
			if (dataDB[i].isDeleted === false) {
				this.contact = dataDB[i];
				this.set(this.contact);
				this.add(this.toJson());
			}
		}
	};

	this.fillOneRow = function(dataDB) {

		if (dataDB.isDeleted === false) {
			this.contact = dataDB;
			this.set(this.contact);
			this.add(this.toJson());
		}

	};

	this.deleteFromJson = function(index) {

		if (index == -1) {
			this.contacts.splice(index, 1);
		}
	};

	this.removeContactByObject = function(contact) {
		for (i in this.contacts) {
			for (j in contact) {
				if (this.contacts[i].CONTACT_ID == contact[j].contactId) {
					var index = this.contacts.indexOf(this.contacts[i]);
					this.deleteFromJson(index);
				}
			}
		}

	};
};

var Countries = function() {
	this.countryId;
	this.countryName;
	this.timeZone;

	this.country;
	this.countries = [];

	this.setCountry = function(countries) {
		this.countryId = countries.countryId;
		this.countryName = countries.countryName;
		this.timeZone = countries.timeZone;
	};

	this.ToCountryJSON = function() {
		return {
			COUNTRY_ID : this.countryId,
			COUNTRY_NAME : this.countryName,
			TIMEZONE : this.timeZone
		};
	};

	this.getCountries = function() {
		return this.countries;
	};

	this.setCountries = function(countriesArray) {
		this.countries = countriesArray;
	};

	this.getSelectedAutoCompleteCountry = function(country) {
		var tempCountry;
		var tempCountries = new Array();
		for (i in country) {
			tempCountry = {
				value : country[i].COUNTRY_NAME,
				display : country[i].COUNTRY_NAME,
				countryName : country[i].COUNTRY_NAME,
				countryId : country[i].COUNTRY_ID,
				timeZone : country[i].TIMEZONE
			}
			tempCountries.push(tempCountry);
		}
		return tempCountries;

	};
	this.addCountry = function(row) {
		this.countries.push(row);

	};

};

var States = function() {
	this.stateId;
	this.stateName;
	this.countryId;
	this.timeZone;

	this.state;
	this.states = [];

	this.setState = function(states) {
		this.stateId = states.stateId;
		this.stateName = states.stateName;
		this.countryId = states.countryId.countryId;
		this.timeZone = states.timeZone;
	};

	this.ToStateJSON = function() {
		return {
			STATE_ID : this.stateId,
			STATE_NAME : this.stateName,
			COUNTRY_ID : this.countryId,
			TIMEZONE : this.timeZone
		};
	};

	this.getStates = function() {
		return this.states;
	};

	this.setStates = function(statesArray) {
		this.states = statesArray;
	};

	this.getSelectedAutoCompleteState = function(state) {
		var tempState = null;
		var tempStates = [];
		for (i in state) {
			tempState = {
				value : state[i].STATE_NAME,
				display : state[i].STATE_NAME,
				stateName : state[i].STATE_NAME,
				stateId : state[i].STATE_ID,
				countryId : state[i].COUNTRY_ID,
				timeZone : state[i].TIMEZONE
			}
			tempStates.push(tempState);
		}
		return tempStates;

	};
	this.addStates = function(row) {
		this.states.push(row);

	};

};

var Cities = function() {
	this.cityId;
	this.cityName;
	this.timeZone;
	this.stateId;
	this.countryId;
	this.city;
	this.cities = [];

	this.setCity = function(cities) {
		this.cityId = cities.cityId;
		this.cityName = cities.cityName;
		this.stateId = cities.stateId.stateId;
		this.countryId = cities.stateId.countryId.countryId;
		this.timeZone = cities.timeZone;
	};

	this.ToCityJSON = function() {
		return {
			CITY_ID : this.cityId,
			CITY_NAME : this.cityName,
			STATE_ID : this.stateId,
			COUNTRY_ID : this.countryId,
			TIMEZONE : this.timeZone
		};
	};

	this.getCities = function() {
		return this.cities;
	};

	this.setCities = function(citiesArray) {
		this.cities = citiesArray;
	};

	this.getSelectedAutoCompleteCity = function(city) {
		var tempCity = null;
		var tempCities = [];
		for (i in city) {
			tempCity = {
				value : city[i].CITY_NAME,
				display : city[i].CITY_NAME,
				cityName : city[i].CITY_NAME,
				cityId : city[i].CITY_ID,
				stateId : city[i].STATE_ID,
				countryId : city[i].COUNTRY_ID,
				timeZone : city[i].TIMEZONE
			}
			tempCities.push(tempCity);
		}
		return tempCities;

	};
	this.addCity = function(row) {
		this.cities.push(row);
	};
};

var Industries = function() {
	this.industryId;
	this.industryType;

	this.getSelectedAutoCompleteIndustries = function() {
		var tempIndustry = null;
		var tempIndustries = [];
		for (i in IndustryTypes) {
			tempIndustry = {
				value : IndustryTypes[i].companyType,
				display : IndustryTypes[i].companyType,
				companyId : IndustryTypes[i].companyId
			}
			tempIndustries.push(tempIndustry);
		}
		return tempIndustries;

	};
};

