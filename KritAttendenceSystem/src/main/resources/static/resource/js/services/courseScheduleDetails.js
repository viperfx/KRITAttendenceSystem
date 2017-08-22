var courseScheduleDetails;

var CourseSchedule = function() {
	this.courseScheduleId;
	this.courseScheduleDate;
	this.courseScheduleTimeFrom;
	this.courseScheduleTimeTo;
	this.courseScheduleClassroom;
	this.course;
	this.instructor;
	this.program;
	
	this.courseSchedule;
	this.courseSchedules = [];
	
	this.set = function(courseSchedule){
		var courseDetails = new Course();
		var instructorDetails = new Instructor();
		var programDetails = new Programs();
		
		this.courseScheduleId = courseSchedule.courseScheduleId;
		this.courseScheduleDate = new Date(courseSchedule.courseScheduleDate);
		this.courseScheduleTimeFrom = courseSchedule.courseScheduleTimeFrom;
		this.courseScheduleTimeTo = courseSchedule.courseScheduleTimeTo;
		this.courseScheduleClassroom = courseSchedule.courseScheduleClassroom;
		this.course = courseDetails.toJson( courseDetails.set(courseSchedule.course));
		this.instructor = instructorDetails.toJson(instructorDetails.set(courseSchedule.instructor));
		this.program = programDetails.toJson(programDetails.set(courseSchedule.programs));
		
	}
	
	this.toJson = function(){
		return {
			COURSESCHEDULE_ID : this.courseScheduleId,
			COURSESCHEDULE_DATE : this.courseScheduleDate,
			COURSESCHEDULE_TIME_FROM  : this.courseScheduleTimeFrom,
			COURSESCHEDULE_TIME_TO : this.courseScheduleTimeTo,
			COURSESCHEDULE_CLASSROOM :this.courseScheduleClassroom,
			COURSE : this.course,
			INSTRUCTOR : this.instructor,
			PROGRAM :this.program
		};
	}
	
	this.toJsonDTO = function(courseSchedule){
		return{
			"courseScheduleId" : courseSchedule.COURSESCHEDULE_ID,
			"courseScheduleDate" : courseSchedule.COURSESCHEDULE_DATE,
			"courseScheduleTimeFrom" : courseSchedule.COURSESCHEDULE_TIME_FROM,
			"courseScheduleTImeTo" : courseSchedule.COURSESCHEDULE_TIME_TO,
			"courseScheduleClassroom" : courseSchedule.COURSESCHEDULE_CLASSROOM,
			"courseId" : courseSchedule.COURSE.COURSE_ID,
			"instructorId" : courseSchedule.INSTRUCTOR_ID,
			"programId" : courseSchedule.PROGRAM_ID
		};
	}
	
	this.getCourseSchedules = function(){
		return this.courseSchedules;
	}
	
	this.setCourseSchedules = function(courseSchedules){
		this.courseSchedules = courseSchedules;
	}
	
	this.addCourseSchedule = function(courseSchedule){
		this.courseSchedules.push(courseSchedule);
	}
	
}