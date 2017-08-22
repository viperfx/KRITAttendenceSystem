package clg.krit.KritAttendenceSystem.service;

import java.util.List;

import clg.krit.KritAttendenceSystem.model.Grade;

public interface GradeService {

	Grade findGradeById(int gradeId);
	List<Grade> getAllGrades();
}
