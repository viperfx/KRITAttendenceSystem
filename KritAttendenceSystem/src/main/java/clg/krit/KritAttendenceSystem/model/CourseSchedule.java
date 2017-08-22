package clg.krit.KritAttendenceSystem.model;

import java.sql.Time;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class CourseSchedule {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int courseScheduleId;
	
	private Date courseScheduleDate;
	private Time courseScheduleTimeFrom;
	private Time courseScheduleTimeTo;
	private String courseScheduleClassroom;
	
	@OneToOne
	@JoinColumn(name="course_Id")
	private Course course;
	
	@OneToOne
	@JoinColumn(name="programs_Id")
	private Programs programs;
	
	@OneToOne
	@JoinColumn(name="instructor_Id")
	private Instructor instructor;
	
	public Integer getCourseScheduleId() {
		return courseScheduleId;
	}
	public void setCourseScheduleId(Integer courseScheduleId) {
		this.courseScheduleId = courseScheduleId;
	}
	public Date getCourseScheduleDate() {
		return courseScheduleDate;
	}
	public void setCourseScheduleDate(Date courseScheduleDate) {
		this.courseScheduleDate = courseScheduleDate;
	}
	public Time getCourseScheduleTimeFrom() {
		return courseScheduleTimeFrom;
	}
	public void setCourseScheduleTimeFrom(Time courseScheduleTimeFrom) {
		this.courseScheduleTimeFrom = courseScheduleTimeFrom;
	}
	public Time getCourseScheduleTimeTo() {
		return courseScheduleTimeTo;
	}
	public void setCourseScheduleTimeTo(Time courseScheduleTimeTo) {
		this.courseScheduleTimeTo = courseScheduleTimeTo;
	}
	public String getCourseScheduleClassroom() {
		return courseScheduleClassroom;
	}
	public void setCourseScheduleClassroom(String courseScheduleClassroom) {
		this.courseScheduleClassroom = courseScheduleClassroom;
	}
	public Course getCourse() {
		return course;
	}
	public void setCourse(Course course) {
		this.course = course;
	}
	public Programs getPrograms() {
		return programs;
	}
	public void setPrograms(Programs programs) {
		this.programs = programs;
	}
	public Instructor getInstructor() {
		return instructor;
	}
	public void setInstructor(Instructor instructor) {
		this.instructor = instructor;
	}
	
	
}
