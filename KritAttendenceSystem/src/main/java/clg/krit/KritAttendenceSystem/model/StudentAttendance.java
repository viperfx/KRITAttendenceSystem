package clg.krit.KritAttendenceSystem.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class StudentAttendance {

	@Id
	private int studentAttendanceId;
	
	@OneToOne
	@JoinColumn(name="student_Id")
	private Student student;
	
	@OneToOne
	@JoinColumn(name="course_Schedule_Id")
	private CourseSchedule courseSchedule;
	private boolean status;
	
	public int getStudentAttendanceId() {
		return studentAttendanceId;
	}
	public void setStudentAttendanceId(int studentAttendanceId) {
		this.studentAttendanceId = studentAttendanceId;
	}
	public Student getStudent() {
		return student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}
	public CourseSchedule getCourseSchedule() {
		return courseSchedule;
	}
	public void setCourseSchedule(CourseSchedule courseSchedule) {
		this.courseSchedule = courseSchedule;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	
	
}
