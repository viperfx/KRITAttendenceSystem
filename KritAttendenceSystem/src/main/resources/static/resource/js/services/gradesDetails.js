var gradeDetails;

var Grade = function() {
	this.gradeId;
	this.courseActivity;
	this.student;
	this.gradeGained_Marks;
	this.grade;
	this.grades = [];
	
	this.set = function(grade){
		var courseActivityDetails = new CourseActivities();
		var studentDetails = new Student();
		
		this.gradeId = grade.gradeId;
		this.courseActivity = courseActivityDetails.toJson(courseActivityDetails.set( grade.courseActivities));
		this.student = studentDetails.toJson(studentDetails.set(grade.student));
		this.gradeGained_Marks = grade.gradeGainedMarks;
	}
	
	this.toJson = function(){
		return {
			GRADE_ID : this.gradeId,
			COURSEACTIVITY : this.courseActivity,
			STUDENT : this.student,
			GRADEGAINED_MARKS : this.gradeGained_Marks
		};
	}
	
	this.toJsonDTO = function(grade){
		return{
			"gradeId" : grade.GRADE_ID,
			"courseActivitiesId" : grade.COURSEACTIVITY,
			"studentId" : grade.STUDENT.STUDENT_ID,
			"gradeGainedMarks" : grade.GRADEGAINED_MARKS
		};
	}
	
	this.getGrades = function(){
		return this.grades;
	}
	
	this.setGrades = function(grades){
		this.grades = grades;
	}
	
	this.addGrade = function(grade){
		this.grades.push(grade);
	}
	
}