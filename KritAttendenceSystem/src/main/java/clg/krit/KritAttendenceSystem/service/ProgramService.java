package clg.krit.KritAttendenceSystem.service;

import java.util.List;

import clg.krit.KritAttendenceSystem.model.Program;
public interface ProgramService {

	Program getProgramById(String program_Id);
	List<Program> getAllProgram();
}
