package clg.krit.KritAttendenceSystem.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Activity {

	@Id
	private String activityId;
	private String activityName;
	
	public String getActivityId() {
		return activityId;
	}
	public void setActivityId(String activityId) {
		this.activityId = activityId;
	}
	public String getActivityName() {
		return activityName;
	}
	public void setActivityName(String activityName) {
		this.activityName = activityName;
	}
	
	
}
