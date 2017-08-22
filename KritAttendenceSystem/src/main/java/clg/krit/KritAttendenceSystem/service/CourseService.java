package clg.krit.KritAttendenceSystem.service;

import java.util.List;

import clg.krit.KritAttendenceSystem.model.Course;

public interface CourseService {

	Course findCourseById(String courseId);
	List<Course> getAllCourses();
}
