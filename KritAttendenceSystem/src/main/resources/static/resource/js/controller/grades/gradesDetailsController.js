app
		.controller(
				"gradesDetailsController",
				function($scope, $compile, $state, $mdDialog, $mdMedia,
						$sessionStorage, AppRestService, sharedProperties,
						DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder) {

					$scope.selected = new Array();
					$scope.labels = labels;
					$scope.errors = errors;
					$scope.allSelected = false;
					$scope.storedProducts = null;
					var studentId = sessionStorage.getItem("studentId");
					$scope.courseGrades = [];
					var allGradesDetails = null;
					AppRestService
							.getProgramsCoursesDetails(function(response,
									status) {
								$scope.error = false;
								if (status != 200) {
									$scope.error = true;
									if (response != undefined) {
										$scope.errorMsg = response.error;
										$scope.status = status;
									}
									$scope.status = 404;
									$scope.errorMsg = "Server Down";
								}
								var programId = sessionStorage
										.getItem("programId");
								$scope.programCourseDetails = new ProgramsCourse();
								for (i in response) {
									if (programId === response[i].programs.programsId) {
										$scope.programCourseDetails
												.set(response[i]);
										$scope.programCourseDetails
												.addProgramsCourse($scope.programCourseDetails
														.toJson());

									}

								}
								$scope.programCourses = $scope.programCourseDetails
										.getProgramsCourses();
							});

					$scope.getCourseActivityGrade = function(programCourse) {

						$scope.courseGrades = [];
						for (i in allGradesDetails) {
							if (allGradesDetails[i].STUDENT.STUDENT_ID == studentId
									&& allGradesDetails[i].COURSEACTIVITY.PROGRAMCOURSE.PROGRAM.PROGRAMS_ID === programCourse.PROGRAM.PROGRAMS_ID
									&& allGradesDetails[i].COURSEACTIVITY.PROGRAMCOURSE.COURSE.COURSE_ID === programCourse.COURSE.COURSE_ID) {
								$scope.courseGrades.push(allGradesDetails[i]);
							}
						}

					}

					AppRestService.getGradesDetails(function(response, status) {
						$scope.error = false;
						if (status != 200) {
							$scope.error = true;
							if (response != undefined) {
								$scope.errorMsg = response.error;
								$scope.status = status;
							}
							$scope.status = 404;
							$scope.errorMsg = "Server Down";
						}
						$scope.gradesDetails = new Grade();
						for (i in response) {
							$scope.gradesDetails.set(response[i]);
							$scope.gradesDetails.addGrade($scope.gradesDetails
									.toJson());
						}

						allGradesDetails = $scope.gradesDetails.getGrades();

					});

					// fires On Alert close.
					$scope.onAlertClose = function(error) {
						$scope.error = false;
					};

					$scope.onClose = function(success) {
						$scope.success = false;
					};

				});
