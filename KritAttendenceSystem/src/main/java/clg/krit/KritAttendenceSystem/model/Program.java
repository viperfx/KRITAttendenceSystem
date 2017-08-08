package clg.krit.KritAttendenceSystem.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Program {

	@Id
	private String program_Id;
	private String program_Name;
	private String program_Desc;
	private String program_Head;
	
	public String getProgram_Id() {
		return program_Id;
	}
	
	public void setProgram_Id(String program_Id) {
		this.program_Id = program_Id;
	}
	
	public String getProgram_Name() {
		return program_Name;
	}
	
	public void setProgram_Name(String program_Name) {
		this.program_Name = program_Name;
	}
	
	public String getProgram_Desc() {
		return program_Desc;
	}
	
	public void setProgram_Desc(String program_Desc) {
		this.program_Desc = program_Desc;
	}
	
	public String getProgram_Head() {
		return program_Head;
	}
	
	public void setProgram_Head(String program_Head) {
		this.program_Head = program_Head;
	}
	
	
}
