var studentDetails;

var Student = function() {
	this.studentId;
	this.student_First_Name;
	this.student_Last_Name;
	this.student_Address;
	this.student_Phone_Number;
	this.student_Email;
	this.password;
	this.student_Photo;
	this.program;
	this.student;
	this.students = [];

	this.set = function(student) {
		var programDetails = new Programs();

		this.studentId = student.studentId;
		this.student_First_Name = student.studentFirstName;
		this.student_Last_Name = student.studentLastName;
		this.student_Address = student.studentAddress;
		this.student_Phone_Number = student.studentPhoneNumber;
		this.student_Email = student.studentEmail;
		this.password = student.password;
		this.student_Photo = student.studentPhoto;
		this.program = programDetails.toJson(programDetails
				.set(student.programs));
	}

	this.toJson = function() {
		return {
			STUDENT_ID : this.studentId,
			STUDENT_FIRST_NAME : this.student_First_Name,
			STUDENT_LAST_NAME : this.student_Last_Name,
			STUDENT_ADDRESS : this.student_Address,
			STUDENT_PHONE_NUMBER : this.student_Phone_Number,
			STUDENT_EMAIL : this.student_Email,
			PASSWORD : this.password,
			STUDENT_PHOTO : this.student_Photo,
			PROGRAM : this.program
		};
	}

	this.toJsonDTO = function(student) {
		return {
			"studentId" : student.STUDENT_ID,
			"studentFirstName" : student.STUDENT_FIRST_NAME,
			"studentLastName" : student.STUDENT_LAST_NAME,
			"studentAddress" : student.STUDENT_ADDRESS,
			"studentPhoneNumber" : student.STUDENT_PHONE_NUMBER,
			"studentEmail" : student.STUDENT_EMAIL,
			"password" : student.PASSWORD,
			"studentPhoto" : student.STUDENT_PHOTO,
			"program" : student.PROGRAM
		};
	}

	this.getStudents = function() {
		return this.students;
	}

	this.setStudents = function(students) {
		this.students = students;
	}

	this.addStudent = function(student) {
		this.students.push(student);
	}

}