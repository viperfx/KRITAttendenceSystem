var LineChartData = function() {
	
	this.jan;
	this.feb;
	this.mar;
	this.apr;
	this.may;
	this.jun;
	this.jul;
	this.aug;
	this.sep;
	this.oct;
	this.nov;
	this.dec;
	this.monthWiseData;
	this.set = function(monthlyLeads) {

		this.jan = monthlyLeads[0];
		this.feb = monthlyLeads[1];
		this.mar = monthlyLeads[2];
		this.apr = monthlyLeads[3];
		this.may = monthlyLeads[4];
		this.jun = monthlyLeads[5];
		this.jul = monthlyLeads[6];
		this.aug = monthlyLeads[7];
		this.sep = monthlyLeads[8];
		this.oct = monthlyLeads[9];
		this.nov = monthlyLeads[10];
		this.dec = monthlyLeads[11];
		}

	this.ToJSONLineData = function() {
		return {
			JAN : this.jan,
			FEB : this.feb,
			MAR : this.mar,
			APR : this.apr,
			MAY : this.may,
			JUN : this.jun,
			JUL : this.jul,
			AUG : this.aug,
			SEP : this.sep,
			OCT : this.oct,
			NOV : this.nov,
			DEC : this.dec
			}
	}

	this.getLineChartData = function() {
		return this.monthWiseData;
	}

	this.setLineChartData = function(monthWiseData) {
		this.monthWiseData = monthWiseData;
	};
};