var studentAttendanceDetails;
/*
 * create table College_Data.student_Attendance( student_Attendance_Id int
 * auto_increment, student_Id varchar(255), studentAttendance_Schedule_Id int,
 * status boolean, constraint student_Attendance_Id_PK primary key
 * (student_Attendance_Id), constraint student_Id_FK foreign key (student_Id)
 * references college_data.student(student_Id), constraint
 * studentAttendance_schedule_Id_FK foreign key(studentAttendance_Schedule_Id)
 * references
 * college_data.studentAttendance_schedule(studentAttendance_Schedule_Id));
 * 
 * 
 */

var StudentAttendance = function() {
	this.studentAttendanceId;
	this.student;
	this.courseSchedule;
	this.status;
	this.studentAttendance;
	this.studentAttendances = [];

	this.set = function(studentAttendance) {
		var studentDetails = new Student();
		var courseScheduleDetails = new CourseSchedule();

		this.studentAttendanceId = studentAttendance.studentAttendanceId;
		this.student = studentDetails.toJson(studentDetails
				.set(studentAttendance.student));
		this.courseSchedule = courseScheduleDetails
				.toJson(courseScheduleDetails
						.set(studentAttendance.courseSchedule));
		this.status = studentAttendance.status;
	}

	this.toJson = function() {
		return {
			STUDENT_ATTENDANCE_ID : this.studentAttendanceId,
			STUDENT : this.student,
			COURSE_SCHEDULE : this.courseSchedule,
			STATUS : this.status,
		};
	}

	this.toJsonDTO = function(studentAttendance) {
		return {
			"studentAttendanceId" : studentAttendance.STUDENT_ATTENDANCE_ID,
			"studentId" : studentAttendance.STUDENT,
			"courseScheduleId" : studentAttendance.COURSE_SCHEDULE,
			"status" : studentAttendance.STATUS
		};
	}

	this.getStudentAttendances = function() {
		return this.studentAttendances;
	}

	this.setStudentAttendances = function(studentAttendances) {
		this.studentAttendances = studentAttendances;
	}

	this.addStudentAttendance = function(studentAttendance) {
		this.studentAttendances.push(studentAttendance);
	}

}