package clg.krit.KritAttendenceSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import clg.krit.KritAttendenceSystem.model.Instructor;
import clg.krit.KritAttendenceSystem.service.InstructorService;

@RestController
public class InstructorController {

	@Autowired
	InstructorService instructorService;
	
	@RequestMapping(value="/instructors", method=RequestMethod.POST)
	public List<Instructor> getAllInstructor(){
		return instructorService.getAllInstructor();
	}
	
	@RequestMapping(value="/findInstructorById", method=RequestMethod.PUT )
	public Instructor findInstructorById(String instructorId){
		return instructorService.findInstructorById(instructorId);
	}
}
