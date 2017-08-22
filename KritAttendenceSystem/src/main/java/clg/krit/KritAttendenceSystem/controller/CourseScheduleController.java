package clg.krit.KritAttendenceSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import clg.krit.KritAttendenceSystem.model.CourseSchedule;
import clg.krit.KritAttendenceSystem.service.CourseScheduleService;

@RestController
public class CourseScheduleController {

	@Autowired
	CourseScheduleService  courseScheduleService;

	@RequestMapping(value="/courseSchedules", method=RequestMethod.POST)
	public List<CourseSchedule> getAllCourseSchedules(){
		return courseScheduleService.getAllCourseSchedules();
	}
	
	public CourseSchedule findCourseScheduleById(Integer scheduleId){
		return courseScheduleService.findCourseScheduleById(scheduleId);
	}
}
