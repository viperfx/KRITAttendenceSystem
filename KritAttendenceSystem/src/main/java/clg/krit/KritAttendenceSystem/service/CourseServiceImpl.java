package clg.krit.KritAttendenceSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import clg.krit.KritAttendenceSystem.model.Course;
import clg.krit.KritAttendenceSystem.repository.CourseRepository;

@Service("courseService")
public class CourseServiceImpl implements CourseService{

	@Autowired
	CourseRepository courseRepository;
	
	@Override
	public Course findCourseById(String courseId) {
		return courseRepository.findOne(courseId);
	}

	@Override
	public List<Course> getAllCourses() {
		return courseRepository.findAll();
	}

}
