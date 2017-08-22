package clg.krit.KritAttendenceSystem.service;

import java.util.List;

import clg.krit.KritAttendenceSystem.model.Instructor;

public interface InstructorService {

	List<Instructor> getAllInstructor();
	Instructor findInstructorById(String instructorId);
}
