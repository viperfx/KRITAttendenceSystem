package clg.krit.KritAttendenceSystem.service;

import java.util.List;

import clg.krit.KritAttendenceSystem.model.College;

public interface CollegeService{

	College findCollegeById(String college_Id);
	List<College> getAllColleges();
}
