package clg.krit.KritAttendenceSystem.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Instructor {
	
	@Id
	private String instructorId;
	private String instructorFirstName;
	private String instructorLastName;
	private String instructorAddress;
	private String instructorEmail;
	private String password;
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getInstructorId() {
		return instructorId;
	}
	public void setInstructorId(String instructorId) {
		this.instructorId = instructorId;
	}
	public String getInstructorFirstName() {
		return instructorFirstName;
	}
	public void setInstructorFirstName(String instructorFirstName) {
		this.instructorFirstName = instructorFirstName;
	}
	public String getInstructorLastName() {
		return instructorLastName;
	}
	public void setInstructorLastName(String instructorLastName) {
		this.instructorLastName = instructorLastName;
	}
	public String getInstructorAddress() {
		return instructorAddress;
	}
	public void setInstructorAddress(String instructorAddress) {
		this.instructorAddress = instructorAddress;
	}
	public String getInstructorEmail() {
		return instructorEmail;
	}
	public void setInstructorEmail(String instructorEmail) {
		this.instructorEmail = instructorEmail;
	}
	
	
}
