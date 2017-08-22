var programsCourseDetails;

var ProgramsCourse = function() {
	this.programsCourseId;
	this.program;
	this.course;
	this.instructor;
	this.programs_credit;
	this.programsCourse;
	this.programsCourses = [];

	this.set = function(programsCourse) {
		var programDetails = new Programs();
		var courseDetails = new Course();
		var instructorDetails = new Instructor();
		
		this.programsCourseId = programsCourse.programsCourseId;
		this.program = programDetails.toJson(programDetails.set(programsCourse.programs));
		this.course = courseDetails.toJson(courseDetails.set(programsCourse.course));
		this.instructor = instructorDetails.toJson(instructorDetails.set(programsCourse.instructor));
		this.programs_Credit = programsCourse.programsCredit;
	}

	this.toJson = function() {
		return {
			PROGRAMS_COURSE_ID : this.programsCourseId,
			PROGRAM : this.program,
			COURSE : this.course,
			INSTRUCTOR : this.instructor,
			PROGRAMS_CREDIT : this.programs_Credit
		};
	}

	this.toJsonDTO = function(programsCourse) {
		return {
			"programsCourseId" : programsCourse.PROGRAMS_COURSE_ID,
			"programsId" : programsCourse.PROGRAM.PROGRAMS_ID,
			"courseId" : programsCourse.COURSE.COURSE_ID,
			"instructorId" : programsCourse.INSTRUCTOR.INSTRUCTOR_ID,
			"programsCredit" : programsCourse.PROGRAMS_CREDIT
		};
	}

	this.getProgramsCourses = function() {
		return this.programsCourses;
	}

	this.setProgramsCourses = function(programsCourses) {
		this.programsCourses = programsCourses;
	}

	this.addProgramsCourse = function(programsCourse) {
		this.programsCourses.push(programsCourse);
	}

}