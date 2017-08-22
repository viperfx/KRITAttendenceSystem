package clg.krit.KritAttendenceSystem.model;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Embeddable
public class CourseActivities {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int courseActivitiesId;
	
	@OneToOne
	@JoinColumn(name="programs_course_Id")
	private ProgramsCourse programsCourse;
	
	
	
	@OneToOne
	@JoinColumn(name="activity_Id")
	private Activity activity;
	private int credit;
	
	public int getCourseActivitiesId() {
		return courseActivitiesId;
	}
	public void setCourseActivitiesId(int courseActivitiesId) {
		this.courseActivitiesId = courseActivitiesId;
	}
	public ProgramsCourse getProgramsCourse() {
		return programsCourse;
	}
	public void setProgramsCourse(ProgramsCourse programsCourse) {
		this.programsCourse = programsCourse;
	}
	public Activity getActivity() {
		return activity;
	}
	public void setActivity(Activity activity) {
		this.activity = activity;
	}
	public int getCredit() {
		return credit;
	}
	public void setCredit(int credit) {
		this.credit = credit;
	}
	
	
}
