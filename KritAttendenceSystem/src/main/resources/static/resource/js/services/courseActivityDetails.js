var courseActivitiesDetails;

var CourseActivities = function() {
	this.courseActivitiesId;
	this.programCourse;
	this.activity;
	this.credit;

	this.courseActivities;
	this.courseActivities = [];

	this.set = function(courseActivities) {
		var programCourseDetails = new ProgramsCourse();
		var activityDetails = new Activity();

		this.courseActivitiesId = courseActivities.courseActivitiesId;
		this.programCourse = programCourseDetails.toJson(programCourseDetails
				.set(courseActivities.programsCourse));
		this.activity = activityDetails.toJson(activityDetails
				.set(courseActivities.activity));
		this.credit = courseActivities.credit;
	}

	this.toJson = function() {
		return {
			COURSEACTIVITIES_ID : this.courseActivitiesId,
			PROGRAMCOURSE : this.programCourse,
			ACTIVITY : this.activity,
			CREDIT : this.credit
		};
	}

	this.toJsonDTO = function(courseActivities) {
		return {
			"courseActivitiesId" : courseActivities.COURSEACTIVITIES_ID,
			"programCourseId" : courseActivities.PROGRAMCOURSE,
			"activityId" : courseActivities.ACTIVITY,
			"credit" : courseActivities.CREDIT
		};
	}

	this.getCourseActivities = function() {
		return this.courseActivities;
	}

	this.setCourseActivities = function(courseActivities) {
		this.courseActivities = courseActivities;
	}

	this.addCourseActivities = function(courseActivities) {
		this.courseActivities.push(courseActivities);
	}
}