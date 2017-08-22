package clg.krit.KritAttendenceSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import clg.krit.KritAttendenceSystem.model.Activity;
import clg.krit.KritAttendenceSystem.service.ActivityService;

@RestController
public class ActivityController {

	@Autowired
	ActivityService activityService;

	@RequestMapping(value = "/activities", method = RequestMethod.POST)
	public List<Activity> getPrograms() {
		return activityService.getAllActivities();
	}

	public Activity findProgramById(String activityId){
		return activityService.getActivityById(activityId);
	}
	

}
