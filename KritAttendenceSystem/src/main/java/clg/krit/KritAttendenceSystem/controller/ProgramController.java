package clg.krit.KritAttendenceSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import clg.krit.KritAttendenceSystem.model.Program;
import clg.krit.KritAttendenceSystem.service.ProgramService;

@RestController
public class ProgramController {

	@Autowired
	ProgramService programService;

	@RequestMapping(value = "/programs", method = RequestMethod.GET)
	public List<Program> getPrograms() {
		return programService.getAllProgram();
	}

}
