package clg.krit.KritAttendenceSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import clg.krit.KritAttendenceSystem.model.Program;
import clg.krit.KritAttendenceSystem.repository.ProgramRepository;

@Service("programService")
public class ProgramServiceImpl implements ProgramService {

	@Autowired
	ProgramRepository programRepository;
	
	@Override
	public Program getProgramById(String program_Id) {
		return programRepository.findOne(program_Id) ;
	}

	@Override
	public List<Program> getAllProgram() {
 		return programRepository.findAll();
	}

}
