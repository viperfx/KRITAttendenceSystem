var AreaChartData = function() {

	this.week1A;
	this.week2A;
	this.week3A;
	this.week4A;
	this.week5A;
	this.week6A;
	this.week7A;
	this.week8A;
	this.week1C;
	this.week2C;
	this.week3C;
	this.week4C;
	this.week5C;
	this.week6C;
	this.week7C;
	this.week8C;
	
	this.weekWiseData;
	this.week = [];
	
	
	
	this.set = function(weeklyLeads) {
		this.week8A = weeklyLeads[0];
		this.week7A = weeklyLeads[1];
		this.week6A = weeklyLeads[2];
		this.week5A = weeklyLeads[3];
		this.week4A = weeklyLeads[4];
		this.week3A = weeklyLeads[5];
		this.week2A = weeklyLeads[6];
		this.week1A = weeklyLeads[7];
		this.week8C = weeklyLeads[8];
		this.week7C = weeklyLeads[9];
		this.week6C = weeklyLeads[10];
		this.week5C = weeklyLeads[11];
		this.week4C = weeklyLeads[12];
		this.week3C = weeklyLeads[13];
		this.week2C = weeklyLeads[14];
		this.week1C = weeklyLeads[15];
	}

	this.ToJSONAreaData = function() {
		return {
			WEEK1A : this.week1A,
			WEEK2A : this.week2A,
			WEEK3A : this.week3A,
			WEEK4A : this.week4A,
			WEEK5A : this.week5A,
			WEEK6A : this.week6A,
			WEEK7A : this.week7A,
			WEEK8A : this.week8A,
			WEEK1C : this.week1C,
			WEEK2C : this.week2C,
			WEEK3C : this.week3C,
			WEEK4C : this.week4C,
			WEEK5C : this.week5C,
			WEEK6C : this.week6C,
			WEEK7C : this.week7C,
			WEEK8C : this.week8C
		}
	}

	this.getAreaChartData = function() {
		return this.weekWiseData;
	}

	this.setAreaChartData = function(weekWiseData) {
		this.weekWiseData = weekWiseData;
	};
};