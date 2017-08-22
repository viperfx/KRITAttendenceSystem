package clg.krit.KritAttendenceSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import clg.krit.KritAttendenceSystem.model.Activity;
import clg.krit.KritAttendenceSystem.repository.ActivityRepository;

@Service("activityService")
public class ActivityServiceImpl implements ActivityService {

	@Autowired
	ActivityRepository activityRepository;

	@Override
	public Activity getActivityById(String activityId) {
		return activityRepository.findOne(activityId);
	}

	@Override
	public List<Activity> getAllActivities() {
		return activityRepository.findAll();
	}

}
