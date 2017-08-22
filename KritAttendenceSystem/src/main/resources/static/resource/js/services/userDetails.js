/*
Suffix
First Name
Middle Name
Last Name
Nick Name
DOB
Gender
Email
Mob
Country
Password
User Name
Group
Roles
 */

var Users = function() {

	this.userId;
	this.suffix;
	this.firstName;
	this.middleName;
	this.lastName;
	this.nickName;
	this.gender;
	this.emailId;
	this.mobileNumber;
	this.role;
	this.group;
	this.department;
	this.password;
	this.userName;
	this.dateOfBirth = new Date(0);
	// this.country;
	this.createdDate;
	this.lastModifiedDate;
	this.isDeleted;
	this.timeZone;

	this.user;
	this.users = [];

	/* set user */
	this.set = function(user) {

		if (user.isDeleted == false) {
			this.userId = user.userId;
			this.suffix = user.suffix;
			this.firstName = user.firstName;
			this.middleName = user.middleName;
			this.lastName = user.lastName;
			this.nickName = user.nickName;
			this.gender = user.gender;
			this.emailId = user.emailId;
			this.mobileNumber = user.mobileNumber;
			this.role = user.role;
			this.department = user.department;
			this.password = user.password;
			this.userName = user.userName;
			this.group = user.group;
			/*
			 * this.country = user.country;
			 */this.dateOfBirth = user.dateOfBirth == undefined
					&& user.dateOfBirth == null && user.dateOfBirth == o ? null
					: user.dateOfBirth;
			this.isDeleted = user.isDeleted;
		}
	};

	/*
	 * this.setLead = function(leadData) {
	 * 
	 * this.leadId = leadData.leadId; this.contactId = leadData.contactId;
	 * this.suffix = leadData.suffix; this.firstName = leadData.firstName;
	 * this.phoneNumber = leadData.phoneNumber; this.mobileNumber =
	 * leadData.mobileNumber; this.client = leadData.client; this.leadSource =
	 * leadData.leadSource; this.industry = leadData.industry; this.companyName =
	 * leadData.companyName; this.lastName = leadData.lastName; this.emailId =
	 * leadData.emailId; this.leadStatus = leadData.leadStatus;
	 * this.annualRevenue = leadData.annualRevenue; this.fax = leadData.fax;
	 * this.website = leadData.website; this.skypeId = leadData.skypeId;
	 * this.secondaryEmailId = leadData.secondaryEmailId; this.twitter =
	 * leadData.twitter; this.mailingAddressShell =
	 * leadData.mailingAddressShell; this.mailingAddressId =
	 * leadData.mailingAddressShell == undefined && leadData.mailingAddressShell ==
	 * null ? null : leadData.mailingAddressShell.addressId;
	 * this.otherAddressShell = leadData.otherAddressShell; this.otherAddressId =
	 * leadData.otherAddressShell == undefined && leadData.otherAddressShell ==
	 * null ? null : leadData.otherAddressShell.addressId;
	 * this.deliveryAddressShell = leadData.deliveryAddressShell;
	 * this.deliveryAddressId = leadData.deliveryAddressShell == undefined &&
	 * leadData.deliveryAddressShell == null ? null :
	 * leadData.deliveryAddressShell.addressId;
	 * 
	 * this.description = leadData.description; this.isDeleted =
	 * leadData.isDeleted; this.productId = leadData.productId; this.productCode =
	 * leadData.productCode; this.productName = leadData.productName; };
	 */

	this.toJsonUser = function() {
		return {
			USER_ID : this.userId,
			SUFFIX : this.suffix,
			FIRST_NAME : this.firstName,
			MIDDLE_NAME : this.middleName,
			LAST_NAME : this.lastName,
			NICK_NAME : this.nickName,
			GENDER : this.gender,
			EMAIL_ID : this.emailId,
			MOBILE_NUMBER : this.mobileNumber,
			ROLE : this.role,
			DEPARTMENT : this.department,
			DATE_OF_BIRTH : this.dateOfBirth,
			GROUP : this.group,
			/*
			 * COUNTRY : this.country,
			 */
			PASSWORD : this.password,
			USERNAME : this.userName,
			IS_DELETED : this.isDeleted

		};
	};
	this.toJsonUserDTO = function(user) {
		return {
			"userId" : user.USER_ID == undefined && user.USER_ID == null ? null
					: user.USER_ID,

			"suffix" : user.SUFFIX == undefined && user.SUFFIX == null ? null
					: user.SUFFIX.value == undefined
							&& user.SUFFIX.value == null ? user.SUFFIX
							: user.SUFFIX.value,

			"firstName" : user.FIRST_NAME == undefined
					&& user.FIRST_NAME == null ? null : user.FIRST_NAME,

			"middleName" : user.MIDDLE_NAME == undefined
					&& user.MIDDLE_NAME == null ? null : user.MIDDLE_NAME,

			"lastName" : user.LAST_NAME == undefined && user.LAST_NAME == null ? null
					: user.LAST_NAME,

			"nickName" : user.NICK_NAME == undefined && user.NICK_NAME == null ? null
					: user.NICK_NAME,
			"gender" : user.GENDER == undefined && user.GENDER == null ? null
					: user.GENDER.value == undefined
							&& user.GENDER.value == null ? user.GENDER
							: user.GENDER.value,

			"emailId" : user.EMAIL_ID == undefined && user.EMAIL_ID == null ? null
					: user.EMAIL_ID,

			"mobileNumber" : user.MOBILE_NUMBER == undefined
					&& user.MOBILENUMBER == null ? null : user.MOBILE_NUMBER,

			"role" : user.ROLE == undefined && user.ROLE == null ? null
					: user.ROLE,

			"department" : user.DEPARTMENT == undefined
					&& user.DEPARTMENT == null ? null : user.DEPARTMENT,

			"group" : user.GROUP == undefined && user.GROUP == null ? null
					: user.GROUP,

			"dateOfBirth" : user.DATE_OF_BIRTH == undefined
					&& user.DATE_OF_BIRTH == null ? null : new Date(
					user.DATE_OF_BIRTH).getTime(),

			/*
			 * "country" : user.COUNTRY == undefined && user.COUNTRY == null ?
			 * null : user.COUNTRY,
			 */
			"userName" : user.USERNAME == undefined && user.USERNAME == null ? null
					: user.USERNAME,

			"password" : user.PASSWORD == undefined && user.PASSWORD == null ? null
					: user.PASSWORD,

			"createdDate" : new Date().getTime(),
			"lastModifiedDate" : new Date().getTime(),

			"isDeleted" : user.IS_DELETED == undefined
					&& user.IS_DELETED == null ? false : user.IS_DELETED,

			"timeZone" : getUserTimeZone()
		};
	};

	this.getUsers = function() {
		return this.users;
	};

	this.setUsers = function(usersArray) {
		this.users = usersArray;
	};

	this.editUsers = function(editUser) {
		this.userId = editUser.USER_ID;
		this.suffix = editUser.SUFFIX;
		this.firstName = editUser.FIRST_NAME;
		this.middleName = editUser.MIDDLE_NAME;
		this.lastName = editUser.LAST_NAME;
		this.nickName = editUser.NICK_NAME;
		this.gender = editUser.GENDER;
		this.emailId = editUser.EMAIL_ID;
		this.mobileNumber = editUser.MOBILE_NUMBER;
		this.role = editUser.ROLE;
		this.department = editUser.DEPARTMENT;
		this.password = editUser.PASSWORD;
		this.userName = editUser.USERNAME;
		this.group = editUser.GROUP;
		/*
		 * this.country = user.country;
		 */this.dateOfBirth = new Date(editUser.DATE_OF_BIRTH);
		this.isDeleted = editUser.IS_DELETED;

	};

	this.updateUser = function(user, users) {
		for (i in users) {
			if (users[i].USER_ID == user.USER_ID) {

				users[i].USER_ID = user.USER_ID;
				users[i].SUFFIX = user.SUFFIX;
				users[i].FIRST_NAME = user.FIRST_NAME;
				users[i].MIDDLE_NAME = user.MIDDLE_NAME;
				users[i].LAST_NAME = user.LAST_NAME;
				users[i].NICK_NAME = user.NICK_NAME;
				users[i].GENDER = user.GENDER;
				users[i].EMAIL_ID = user.EMAIL_ID;
				users[i].MOBILE_NUMBER = user.MOBILE_NUMBER;
				users[i].ROLE = user.ROLE;
				users[i].DEPARTMENT = user.DEPARTMENT;
				users[i].GROUP = user.GROUP;
				users[i].DATE_OF_BIRTH = user.DATE_OF_BIRTH;
				users[i].PASSWORD = user.PASSWORD;
				users[i].USERNAME = user.USERNAME;
				/*
				 * users[i].COUNTRY = user.COUNTRY;
				 */users[i].IS_DELETED = user.IS_DELETED;
			}
		}
	}

	this.getSelectedAutoCompleteGender = function() {
		var tempGender = null;
		var tempGenders = [];
		for (i in Gender) {
			tempGender = {
				value : Gender[i].genderType,
				display : Gender[i].genderType,
				genderId : Gender[i].genderId
			}
			tempGenders.push(tempGender);
		}
		return tempGenders;
	};

	this.getSelectedAutoCompleteUser = function(users) {
		var tempUser = null;
		var tempUsers = [];
		for (i in users) {
			tempUser = {
				value : users[i].USER_ID,
				display : users[i].FIRST_NAME + " " + users[i].LAST_NAME,
				userId : users[i].USER_ID,
				firstName : users[i].FIRST_NAME,
				lastName : users[i].LAST_NAME

			}
			tempUsers.push(tempUser);
		}
		return tempUsers;
	};

	this.getUsersData = function(user) {
		this.set(user);
		return this.toJsonUser();
	};

	this.add = function(row) {
		this.users.push(row);

	};

	this.fillTable = function(dataDB) {

		for (i in dataDB) {
			if (dataDB[i].isDeleted === false) {
				this.user = dataDB[i];
				this.set(this.user);
				this.add(this.toJsonUser());
			}
		}
	};

	this.fillOneRow = function(dataDB) {

		if (dataDB.isDeleted === false) {
			this.user = dataDB;
			this.set(this.user);
			this.add(this.toJsonUser());
		}

	};

	this.deleteFromJson = function(index) {

		if (index == -1) {
			this.users.splice(index, 1);
		}
	};

	this.removeUserByObject = function(user) {
		for (i in this.users) {
			if (this.users[i].USER_ID == user.userId) {
				var index = this.users.indexOf(this.users[i]);
				this.deleteFromJson(index);
			}
		}

	};
};

/*
 * var Countries = function() { this.countryId; this.countryName; this.timeZone;
 * 
 * this.country; this.countries = [];
 * 
 * this.setCountry = function(countries) { this.countryId = countries.countryId;
 * this.countryName = countries.countryName; this.timeZone = countries.timeZone; };
 * 
 * this.ToCountryJSON = function() { return { COUNTRY_ID : this.countryId,
 * COUNTRY_NAME : this.countryName, TIMEZONE : this.timeZone }; };
 * 
 * this.getCountries = function() { return this.countries; };
 * 
 * this.setCountries = function(countriesArray) { this.countries =
 * countriesArray; };
 * 
 * this.getSelectedAutoCompleteCountry = function(country) { var tempCountry;
 * var tempCountries = new Array(); for (i in country) { tempCountry = { value :
 * country[i].COUNTRY_NAME, display : country[i].COUNTRY_NAME, countryName :
 * country[i].COUNTRY_NAME, countryId : country[i].COUNTRY_ID, timeZone :
 * country[i].TIMEZONE } tempCountries.push(tempCountry); } return
 * tempCountries; }; this.addCountry = function(row) { this.countries.push(row); }; };
 * 
 * var States = function() { this.stateId; this.stateName; this.countryId;
 * this.timeZone;
 * 
 * this.state; this.states = [];
 * 
 * this.setState = function(states) { this.stateId = states.stateId;
 * this.stateName = states.stateName; this.countryId =
 * states.countryId.countryId; this.timeZone = states.timeZone; };
 * 
 * this.ToStateJSON = function() { return { STATE_ID : this.stateId, STATE_NAME :
 * this.stateName, COUNTRY_ID : this.countryId, TIMEZONE : this.timeZone }; };
 * 
 * this.getStates = function() { return this.states; };
 * 
 * this.setStates = function(statesArray) { this.states = statesArray; };
 * 
 * this.getSelectedAutoCompleteState = function(state) { var tempState = null;
 * var tempStates = []; for (i in state) { tempState = { value :
 * state[i].STATE_NAME, display : state[i].STATE_NAME, stateName :
 * state[i].STATE_NAME, stateId : state[i].STATE_ID, countryId :
 * state[i].COUNTRY_ID, timeZone : state[i].TIMEZONE }
 * tempStates.push(tempState); } return tempStates; }; this.addStates =
 * function(row) { this.states.push(row); }; };
 * 
 * var Cities = function() { this.cityId; this.cityName; this.timeZone;
 * this.stateId; this.countryId; this.city; this.cities = [];
 * 
 * this.setCity = function(cities) { this.cityId = cities.cityId; this.cityName =
 * cities.cityName; this.stateId = cities.stateId.stateId; this.countryId =
 * cities.stateId.countryId.countryId; this.timeZone = cities.timeZone; };
 * 
 * this.ToCityJSON = function() { return { CITY_ID : this.cityId, CITY_NAME :
 * this.cityName, STATE_ID : this.stateId, COUNTRY_ID : this.countryId, TIMEZONE :
 * this.timeZone }; };
 * 
 * this.getCities = function() { return this.cities; };
 * 
 * this.setCities = function(citiesArray) { this.cities = citiesArray; };
 * 
 * this.getSelectedAutoCompleteCity = function(city) { var tempCity = null; var
 * tempCities = []; for (i in city) { tempCity = { value : city[i].CITY_NAME,
 * display : city[i].CITY_NAME, cityName : city[i].CITY_NAME, cityId :
 * city[i].CITY_ID, stateId : city[i].STATE_ID, countryId : city[i].COUNTRY_ID,
 * timeZone : city[i].TIMEZONE } tempCities.push(tempCity); } return tempCities; };
 * this.addCity = function(row) { this.cities.push(row); }; };
 * 
 * var Industries = function() { this.industryId; this.industryType;
 * 
 * this.getSelectedAutoCompleteIndustries = function() { var tempIndustry =
 * null; var tempIndustries = []; for (i in IndustryTypes) { tempIndustry = {
 * value : IndustryTypes[i].companyType, display : IndustryTypes[i].companyType,
 * companyId : IndustryTypes[i].companyId } tempIndustries.push(tempIndustry); }
 * return tempIndustries; }; };
 */