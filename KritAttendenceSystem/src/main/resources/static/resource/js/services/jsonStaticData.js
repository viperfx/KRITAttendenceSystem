var IndustryTypes = [ {
	companyId : 1,
	companyType : 'ASP'
}, {
	companyId : 2,
	companyType : 'Data/Telecom OEM'
}, {
	companyId : 3,
	companyType : 'Government / Military'
}, {
	companyId : 4,
	companyType : 'Large Enterprise'
}, {
	companyId : 5,
	companyType : 'Management ISV'
}, {
	companyId : 6,
	companyType : 'MSP (Management Service Provider)'
}, {
	companyId : 7,
	companyType : 'Network Equipment (Enterprise)'
}, {
	companyId : 8,
	companyType : 'Non Management ISV'
}, {
	companyId : 9,
	companyType : 'Optical Networking'
}, {
	companyId : 10,
	companyType : 'Optical Networking'
}, {
	companyId : 11,
	companyType : 'Small / Medium Enterprise'
}, {
	companyId : 12,
	companyType : 'Storage Equipment'
}, {
	companyId : 13,
	companyType : 'Storage Service Provider'
}, {
	companyId : 14,
	companyType : 'Systems Integrator'
}, {
	companyId : 15,
	companyType : 'Wireless Industry'
}

];

var Suffix = [ {
	value : 'Mr.',
	display : 'Mr.'
}, {
	value : 'Miss.',
	display : 'Miss.'
}, {
	value : 'Mrs.',
	display : 'Mrs.'
}, {
	value : 'Dr.',
	display : 'Dr.'
}, {
	value : 'Prof.',
	display : 'Prof.'
} ];

var LeadStatuses = [ {
	statusId : 1,
	leadStatus : 'Unattended'
}, {
	statusId : 2,
	leadStatus : 'Attended'
}, {
	statusId : 3,
	leadStatus : 'Followup'
}, {
	statusId : 4,
	leadStatus : 'Potential'
}, {
	statusId : 5,
	leadStatus : 'Lost'
}, {
	statusId : 6,
	leadStatus : 'Closed'
} ];

var Gender = [ {
	genderId : 1,
	genderType : 'Male'
}, {
	genderId : 2,
	genderType : 'Female'
} ];

var Months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
		'Oct', 'Nov', 'Dec' ];

var Weeks = [ 'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6',
		'Week 7', 'Week 8' ];

var LeadSources = [ {
	sourceId : 1,
	leadSource : 'Advertisement'
}, {
	sourceId : 2,
	leadSource : 'Cold Call'
}, {
	sourceId : 3,
	leadSource : 'Employee Referral'
}, {
	sourceId : 4,
	leadSource : 'External Referral'
}, {
	sourceId : 5,
	leadSource : 'Partner'
}, {
	sourceId : 6,
	leadSource : 'Online Store'
}, {
	sourceId : 6,
	leadSource : 'Public Relations'
}, {
	sourceId : 7,
	leadSource : 'Sales Mails / Email Marketing'
}, {
	sourceId : 8,
	leadSource : 'Trade Show'
}, {
	sourceId : 9,
	leadSource : 'Seminar Partner'
}, {
	sourceId : 10,
	leadSource : 'Seminar Internal'
}, {
	sourceId : 11,
	leadSource : 'Web Research'
}, {
	sourceId : 12,
	leadSource : 'Web Download'
}, {
	sourceId : 13,
	leadSource : 'Web Cases'
}, {
	sourceId : 14,
	leadSource : 'Web Mail'
}, {
	sourceId : 15,
	leadSource : 'Chat'
}, {
	sourceId : 16,
	leadSource : 'Other'
} ];

var DonutData = [ [ 'Task', 'Hours per Day' ], [ 'Work', 11 ], [ 'Eat', 2 ],
		[ 'Commute', 2 ], [ 'Watch TV', 2 ], [ 'Sleep', 7 ] ];
/*
 * Morris.Bar({ element : 'bar-example', data : [ { M : '2015-01', a : 100, b :
 * 90 }, { M : '2015-02', a : 75, b : 65 }, { M : '2015-03', a : 50, b : 40 }, {
 * M : '2015-04', a : 75, b : 65 }, { M : '2015-05', a : 50, b : 40 }, { M :
 * '2015-06', a : 75, b : 65 }, { M : '2015-07', a : 100, b : 90 }, { M :
 * '2015-08', a : 100, b : 90 }, { M : '2015-09', a : 100, b : 90 }, { M :
 * '2015-10', a : 100, b : 90 }, { M : '2015-11', a : 100, b : 90 }, { M :
 * '2015-12', a : 100, b : 90 } ], xkey : 'M', ykeys : [ 'a', 'b' ], labels : [
 * 'Leads', 'Closed' ], xLabelAngle : 70,
 * 
 * });
 */