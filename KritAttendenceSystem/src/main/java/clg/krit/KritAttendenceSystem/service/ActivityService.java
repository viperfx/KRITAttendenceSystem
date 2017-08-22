package clg.krit.KritAttendenceSystem.service;

import java.util.List;

import clg.krit.KritAttendenceSystem.model.Activity;

public interface ActivityService {

	Activity getActivityById(String activityId);
	List<Activity> getAllActivities();
	
	
}
