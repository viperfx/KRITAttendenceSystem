var LeadStatusCounts = function() {

	this.leadStatus_Id;
	this.totalEnquiry;
	this.currentMonthEnquiry;
	this.potentialEnquiry;
	this.totalUnAttendedEnquiries;

	this.set = function(enquiries) {
		this.totalEnquiries = enquiries[0];
		this.currentMonthEnquiries = enquiries[1];
		this.potentialEnquiries = enquiries[2];
		this.totalUnAttendedEnquiries = enquiries[3];
	}

	this.ToJSONLeadStatuses = function() {
		return {
			TOTAL_ENQUIRIES : this.totalEnquiries,
			CURRENT_MONTH_ENQUIRIES : this.currentMonthEnquiries,
			POTENTIAL_ENQUIRIES : this.potentialEnquiries,
			TOTAL_UNATTENDED_ENQUIRIES : this.totalUnAttendedEnquiries
		}
	}

	this.getLeadStatuses = function() {
		return this.leadStatusCount;
	}

	this.setLeadStatuses = function(leadStatuses) {
		this.leadStatusCount = leadStatuses;
	};
};