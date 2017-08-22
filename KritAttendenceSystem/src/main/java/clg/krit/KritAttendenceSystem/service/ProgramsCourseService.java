package clg.krit.KritAttendenceSystem.service;

import java.util.List;

import clg.krit.KritAttendenceSystem.model.ProgramsCourse;

public interface ProgramsCourseService {

	List<ProgramsCourse> getAllProgramsCourse(); 
	ProgramsCourse findProgramsCourseById(String programsCourseId);
	
}
