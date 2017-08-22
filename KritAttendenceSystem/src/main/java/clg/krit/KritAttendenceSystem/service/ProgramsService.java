package clg.krit.KritAttendenceSystem.service;

import java.util.List;

import clg.krit.KritAttendenceSystem.model.Programs;
public interface ProgramsService {

	Programs getProgramsById(String program_Id);
	List<Programs> getAllPrograms();
}
