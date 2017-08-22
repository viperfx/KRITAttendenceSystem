/**
 * getHeadersForJsonType to get JSON header.
 * 
 * @global
 */
var getHeadersForJsonType = function() {
	return "Content-Type: application/json;charset=UTF-8";
};

var PREFIX = "http://localhost:4000/";

var STUDENTS = "students";
var FIND_STUDENT_BY_ID = "findStudentById";

var getStudentsURL = function(){
	return PREFIX + STUDENTS;
};

var findStudentById = function() {
	return PREFIX + FIND_STUDENT_BY_ID;
};

var INSTRUCTORS = "instructors";
var FIND_INSTRUCTOR_BY_ID = "findInstructorById";

var getInstructorsURL = function(){
	return PREFIX + INSTRUCTORS;
};

var findInstructorById = function() {
	return PREFIX + FIND_INSTRUCTOR_BY_ID;
};

var COURSE = "courses";
var getCourseURL = function(){
	return PREFIX + COURSE;
}

var COURSE_SCHEDULES = "courseSchedules";

var getCourseScheduleURL = function(){
	return PREFIX + COURSE_SCHEDULES;
}

var GRADES = "grades";
var getGradesURL = function(){
	return PREFIX+ GRADES;
}

var STUDENT_ATTENDANCE = "studentAttendance";
var getStdentAttendanceURL = function(){
	return PREFIX + STUDENT_ATTENDANCE;
}

var PROGRAMS_COURSE = "programCourses";
var getProgramsCoursesURL = function(){
	return PREFIX + PROGRAMS_COURSE;
}

var COURSE_ACTIVITY = "courseActivities";
var getCourseActivityURL = function(){
	return PREFIX + COURSE_ACTIVITY;
}
/**
 * Products URL.
 * 
 * @global
 */


/**
 * Product from service.
 * 
 * @global
 */
angular.module('KRIT').factory(
		'AppRestService',
		function($http, $cookies) {
			var service = {};

			service.studentLoginDetails = function(dataDB, callback){
				var URL = findStudentById();
				$http.put(URL, dataDB, getHeadersForJsonType()).success(function(data, Status, Headers) {
					callback(data, Status);
				}).error(function(data, Status, Headers, Config){
					callback(data, Status);
				});
			}
			
			service.instructorLoginDetails = function(dataDB, callback){
				var URL = findInstructorById();
				$http.put(URL, dataDB, getHeadersForJsonType()).success(function(data, Status, Headers) {
					callback(data, Status);
				}).error(function(data, Status, Headers, Config){
					callback(data, Status);
				});
			}
			
			service.getStudentDetails = function(callback) {
				var URL = getStudentsURL();
				$http.post(URL).success(
						function(Response, Status, Headers, Config) {
							callback(Response, Status);
						}).error(function(Response, Status, Headers, Config) {
					callback(Response, Status);
				});
			}
			
			service.getInstructorDetails = function(callback) {
				var URL = getInstructorsURL();
				$http.post(URL).success(
						function(Response, Status, Headers, Config) {
							callback(Response, Status);
						}).error(function(Response, Status, Headers, Config) {
					callback(Response, Status);
				});
			}
			
			service.getCoursesDetails = function(callback) {
				var URL = getCourseURL();
				$http.post(URL).success(
						function(Response, Status, Headers, Config) {
							callback(Response, Status);
						}).error(function(Response, Status, Headers, Config) {
					callback(Response, Status);
				});
			}
			
			
			service.getCourseScheduleDetails = function(callback) {
				var URL = getCourseScheduleURL();
				$http.post(URL).success(
						function(Response, Status, Headers, Config) {
							callback(Response, Status);
						}).error(function(Response, Status, Headers, Config) {
					callback(Response, Status);
				});
			}
			
			service.getGradesDetails = function(callback) {
				var URL = getGradesURL();
				$http.post(URL).success(
						function(Response, Status, Headers, Config) {
							callback(Response, Status);
						}).error(function(Response, Status, Headers, Config) {
					callback(Response, Status);
				});
			}
			
			service.getStudentAttendanceDetails = function(callback) {
				var URL = getStdentAttendanceURL();
				$http.post(URL).success(
						function(Response, Status, Headers, Config) {
							callback(Response, Status);
						}).error(function(Response, Status, Headers, Config) {
					callback(Response, Status);
				});
			}
			
			service.getProgramsCoursesDetails = function(callback) {
				var URL = getProgramsCoursesURL();
				$http.post(URL).success(
						function(Response, Status, Headers, Config) {
							callback(Response, Status);
						}).error(function(Response, Status, Headers, Config) {
					callback(Response, Status);
				});
			}
			
			service.getCourseActivityDetails = function(callback) {
				var URL = getCourseActivityURL();
				$http.post(URL).success(
						function(Response, Status, Headers, Config) {
							callback(Response, Status);
						}).error(function(Response, Status, Headers, Config) {
					callback(Response, Status);
				});
			}
			
			return service;
		});
