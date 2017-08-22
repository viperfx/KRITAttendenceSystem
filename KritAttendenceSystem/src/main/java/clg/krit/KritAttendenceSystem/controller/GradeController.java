package clg.krit.KritAttendenceSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import clg.krit.KritAttendenceSystem.model.Grade;
import clg.krit.KritAttendenceSystem.service.GradeService;

@RestController
public class GradeController {

	@Autowired
	GradeService gradeService;
	
	@RequestMapping(value="/grades", method=RequestMethod.POST)
	public List<Grade> getAllGrades(){
		return gradeService.getAllGrades();
	}
	
	public Grade findGradeById(int gradeId){
		return gradeService.findGradeById(gradeId);
	}
}
