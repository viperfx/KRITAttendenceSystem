package clg.krit.KritAttendenceSystem.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Grade {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int gradeId;
	
	@OneToOne
	@JoinColumn(name="course_activities_Id")
	private CourseActivities courseActivities;
	
	@OneToOne
	@JoinColumn(name="student_Id")
	private Student student;
	private int gradeGainedMarks;
	
	public int getGradeId() {
		return gradeId;
	}
	public void setGradeId(int gradeId) {
		this.gradeId = gradeId;
	}
	public CourseActivities getCourseActivities() {
		return courseActivities;
	}
	public void setCourseActivities(CourseActivities courseActivities) {
		this.courseActivities = courseActivities;
	}
	public Student getStudent() {
		return student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}
	public int getGradeGainedMarks() {
		return gradeGainedMarks;
	}
	public void setGradeGainedMarks(int gradeGainedMarks) {
		this.gradeGainedMarks = gradeGainedMarks;
	}
	
	
}
