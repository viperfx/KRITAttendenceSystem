app
		.controller(
				"studentAttendanceDetails",
				function($scope, $compile, $state, $mdDialog, $mdMedia,
						$sessionStorage, AppRestService, sharedProperties,
						DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder) {

					$scope.selected = new Array();
					$scope.labels = labels;
					$scope.errors = errors;
					$scope.allSelected = false;
					$scope.storedProducts = null;
					$scope.studentCourseAttendance = [];
					$scope.studentId = sessionStorage.getItem("studentId");
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

					$scope.getCourseAttendance = function(programCourse) {
						$scope.studentCourseAttendance = [];
						
						for (i in $scope.studentAttendances) {
							if ($scope.studentAttendances[i].STUDENT.STUDENT_ID === $scope.studentId
									&& $scope.studentAttendances[i].COURSE_SCHEDULE.COURSE.COURSE_ID === programCourse.COURSE.COURSE_ID) {
								$scope.studentCourseAttendance
										.push($scope.studentAttendances[i]);
								var studentssd = new Student();

								AppRestService
										.getCourseScheduleDetails(function(
												response, status) {
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
											$scope.courseScheduleDetails = new CourseSchedule();
											for (i in response) {
												if (programId === response[i].programs.programsId) {
													$scope.courseScheduleDetails
															.set(response[i]);
													$scope.courseScheduleDetails
															.addCourseSchedule($scope.courseScheduleDetails
																	.toJson());

												}

											}
											$scope.courseSchedules = $scope.courseScheduleDetails
													.getCourseSchedules();
										});
							}
						}
					}

					AppRestService
							.getStudentAttendanceDetails(function(response,
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
								$scope.studentAttendanceDetails = new StudentAttendance();
								for (i in response) {
									$scope.studentAttendanceDetails
											.set(response[i]);
									$scope.studentAttendanceDetails
											.addStudentAttendance($scope.studentAttendanceDetails
													.toJson());

								}
								$scope.studentAttendances = $scope.studentAttendanceDetails
										.getStudentAttendances();
							});

					// fires On Alert close.
					$scope.onAlertClose = function(error) {
						$scope.error = false;
					};

					$scope.onClose = function(success) {
						$scope.success = false;
					};

				});
