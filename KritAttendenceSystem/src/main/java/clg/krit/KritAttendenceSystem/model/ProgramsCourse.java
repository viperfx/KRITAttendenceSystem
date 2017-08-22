package clg.krit.KritAttendenceSystem.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity(name="programs_course")
public class ProgramsCourse implements Serializable{

	@Id
	private String programsCourseId;
	
	
	
	@OneToOne
	@JoinColumn(name="programs_Id")
	private Programs programs;
	
	@OneToOne
	@JoinColumn(name="course_Id")
	private Course course;
	
	private int programsCredit;
	
	@OneToOne
	@JoinColumn(name="instructor_Id")
	private Instructor instructor;
	
	public String getProgramsCourseId() {
		return programsCourseId;
	}
	public void setprogramsCourseId(String programsCourseId) {
		this.programsCourseId = programsCourseId;
	}
	public Programs getPrograms() {
		return programs;
	}
	public void setPrograms(Programs programs) {
		this.programs = programs;
	}
	public Course getCourse() {
		return course;
	}
	public void setCourse(Course course) {
		this.course = course;
	}
	public int getProgramsCredit() {
		return programsCredit;
	}
	public void setProgramsCredit(int programsCredit) {
		this.programsCredit = programsCredit;
	}
	public Instructor getInstructor() {
		return instructor;
	}
	public void setInstructor(Instructor instructor) {
		this.instructor = instructor;
	}
	
}
