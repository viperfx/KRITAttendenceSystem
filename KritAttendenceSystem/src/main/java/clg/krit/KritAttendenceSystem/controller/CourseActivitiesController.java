package clg.krit.KritAttendenceSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import clg.krit.KritAttendenceSystem.model.CourseActivities;
import clg.krit.KritAttendenceSystem.service.CourseActivitiesService;

@RestController
public class CourseActivitiesController {

	@Autowired
	CourseActivitiesService courseActivitiesService;
	
	@RequestMapping(value="/courseActivities", method=RequestMethod.POST)
	public List<CourseActivities> getCourseActivities(){
		return courseActivitiesService.getAllCourseActivities();
	}

	public CourseActivities findCourseActivitiesById(int courseActivitiesId){
		return courseActivitiesService.findCourseActivitiesById(courseActivitiesId);
	}
}

