package clg.krit.KritAttendenceSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import clg.krit.KritAttendenceSystem.model.StudentAttendance;
import clg.krit.KritAttendenceSystem.repository.StudentAttendanceRepository;

@Service
public class StudentAttendanceSerivceImpl implements StudentAttendanceService{

	@Autowired
	StudentAttendanceRepository studentAttendanceRepository;

	@Override
	public List<StudentAttendance> getAllAttendance() {
		return studentAttendanceRepository.findAll();
	}

	@Override
	public StudentAttendance findAttendanceById(int studentAttendanceId) {
		return studentAttendanceRepository.findOne(studentAttendanceId);
	}
	
	
	
}
