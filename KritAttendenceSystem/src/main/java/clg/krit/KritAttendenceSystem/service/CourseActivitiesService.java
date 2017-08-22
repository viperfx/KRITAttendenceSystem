package clg.krit.KritAttendenceSystem.service;

import java.util.List;

import clg.krit.KritAttendenceSystem.model.CourseActivities;

public interface CourseActivitiesService {

	CourseActivities findCourseActivitiesById(int courseActivitiesId);
	List<CourseActivities> getAllCourseActivities();
}
