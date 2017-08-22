package clg.krit.KritAttendenceSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import clg.krit.KritAttendenceSystem.model.CourseActivities;
import clg.krit.KritAttendenceSystem.repository.CourseActivitiesRepository;

@Service("courseActivitiesService")
public class CourseActivitiesServiceImpl implements CourseActivitiesService{

	@Autowired
	CourseActivitiesRepository courseActivitiesRepository;

	@Override
	public CourseActivities findCourseActivitiesById(int courseActivitiesId) {
		return courseActivitiesRepository.findOne(courseActivitiesId);
	}

	@Override
	public List<CourseActivities> getAllCourseActivities() {
		return courseActivitiesRepository.findAll();
	}
	
	
	
}
