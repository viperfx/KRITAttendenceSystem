package clg.krit.KritAttendenceSystem.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Programs{

	@Id
	private String programsId; 
	private String programsName;
	private String programsDescription;
	private String programsHeadId;
	
	public String getProgramsId() {
		return programsId;
	}
	public void setProgramsId(String programsId) {
		this.programsId = programsId;
	}
	public String getProgramsName() {
		return programsName;
	}
	public void setProgramsName(String programsName) {
		this.programsName = programsName;
	}
	public String getProgramsDescription() {
		return programsDescription;
	}
	public void setProgramsDescription(String programsDescription) {
		this.programsDescription = programsDescription;
	}
	public String getProgramsHeadId() {
		return programsHeadId;
	}
	public void setProgramsHeadId(String programsHeadId) {
		this.programsHeadId = programsHeadId;
	}
	
}
