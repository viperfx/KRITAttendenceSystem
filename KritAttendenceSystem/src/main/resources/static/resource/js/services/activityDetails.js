var activityDetails;

var Activity = function(){
	this.activityId;
	this.activityName;
	
	this.activity;
	this.activities = [];
	
	this.set = function(activity){
		this.activityId = activity.activityId;
		this.activityName = activity.activityName;
	}
	
	this.toJson = function(){
		return {
			ACTIVITY_ID : this.activityId,
			ACTIVITY_NAME : this.activityName
		};
	}
	
	this.toJsonDTO = function(activity){
		return {
			"activityId" : activity.ACTIVITY_ID,
			"activityName": activity.ACTIVITY_NAME
		};
	}
	
	this.getActivities = function(){
		return this.activities;
	}
	
	this.setActivities = function(activities){
		this.activities = activities;
	}
	
	this.addActivity = function(activity){
		this.activities.push(activity);
	}
}