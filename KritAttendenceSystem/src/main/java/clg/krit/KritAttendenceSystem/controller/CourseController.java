package clg.krit.KritAttendenceSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import clg.krit.KritAttendenceSystem.model.Course;
import clg.krit.KritAttendenceSystem.service.CourseService;

@RestController
public class CourseController {

	@Autowired
	CourseService courseService;
	
	@RequestMapping(value="/courses", method=RequestMethod.POST)
	public List<Course> getAllCourses(){
		return courseService.getAllCourses();
	}
	
	public Course findCourseById(String courseId){
		return courseService.findCourseById(courseId);
	}
}
