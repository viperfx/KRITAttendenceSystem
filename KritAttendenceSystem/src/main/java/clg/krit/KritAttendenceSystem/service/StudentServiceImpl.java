package clg.krit.KritAttendenceSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import clg.krit.KritAttendenceSystem.model.Student;
import clg.krit.KritAttendenceSystem.repository.StudentRepository;

@Service("studentService")
public class StudentServiceImpl implements StudentService{

	@Autowired
	StudentRepository studentRepository;

	@Override
	public List<Student> getAllStudent() {
		return studentRepository.findAll();
	}

	@Override
	public Student findStudentById(String studentId) {
		return studentRepository.findOne(studentId);
	}
	
	
}
