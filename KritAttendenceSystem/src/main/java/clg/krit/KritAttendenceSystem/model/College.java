package clg.krit.KritAttendenceSystem.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class College {
	
	@Id
	private String collegeId;
	private String collegeName;
	private String collegeAddress;
	private long collegePhoneNumber;
	private String collegeEmail;
	
	public String getCollegeId() {
		return collegeId;
	}
	public void setCollegeId(String collegeId) {
		this.collegeId = collegeId;
	}
	public String getCollegeName() {
		return collegeName;
	}
	public void setCollegeName(String collegeName) {
		this.collegeName = collegeName;
	}
	public String getCollegeAddress() {
		return collegeAddress;
	}
	public void setCollegeAddress(String collegeAddress) {
		this.collegeAddress = collegeAddress;
	}
	public String getCollegeEmail() {
		return collegeEmail;
	}
	public long getCollegePhoneNumber() {
		return collegePhoneNumber;
	}
	public void setCollegePhoneNumber(long collegePhoneNumber) {
		this.collegePhoneNumber = collegePhoneNumber;
	}
	public void setCollegeEmail(String collegeEmail) {
		this.collegeEmail = collegeEmail;
	}
	
	
}
