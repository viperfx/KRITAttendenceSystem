var courseDetails;

var Course = function() {
	this.courseId;
	this.courseDescription;
	this.courseName;
	this.course;
	this.courses = [];

	this.set = function(course) {

		this.courseId = course.courseId;
		this.courseName = course.courseName;
		this.courseDescription = course.courseDescription;
	}

	this.toJson = function() {
		return {
			COURSE_ID : this.courseId,
			COURSE_NAME : this.courseName,
			COURSE_DESCRIPTION : this.courseDescription
		};
	}

	this.toJsonDTO = function(course) {
		return {
			"courseId" : course.COURSE_ID,
			"courseName" : course.COURSE_NAME,
			"courseDescription" : course.COURSE_DESCRIPTION
		};
	}

	this.getCourses = function() {
		return this.courses;
	}

	this.setCourses = function(courses) {
		this.courses = courses;
	}

	this.addCourse = function(course) {
		this.courses.push(course);
	}

}