package clg.krit.KritAttendenceSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import clg.krit.KritAttendenceSystem.model.Grade;
import clg.krit.KritAttendenceSystem.repository.GradeRepository;

@Service("gradeService")
public class GradeServiceImpl implements GradeService{

	@Autowired
	GradeRepository gradeRepository;
	
	@Override
	public Grade findGradeById(int gradeId) {
		return gradeRepository.findOne(gradeId);
	}

	@Override
	public List<Grade> getAllGrades() {
		return gradeRepository.findAll();
	}

}
