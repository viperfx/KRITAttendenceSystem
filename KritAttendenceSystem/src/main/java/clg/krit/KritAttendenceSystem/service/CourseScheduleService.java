package clg.krit.KritAttendenceSystem.service;

import java.util.List;

import clg.krit.KritAttendenceSystem.model.CourseSchedule;

public interface CourseScheduleService {

	List<CourseSchedule> getAllCourseSchedules();
	CourseSchedule findCourseScheduleById(Integer courseScheduleId);
}
