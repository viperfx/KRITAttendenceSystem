package clg.krit.KritAttendenceSystem.service;

import java.util.List;

import clg.krit.KritAttendenceSystem.model.Student;

public interface StudentService {

	List<Student> getAllStudent();
	Student findStudentById(String studentId);
}
