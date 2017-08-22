package clg.krit.KritAttendenceSystem.service;

import java.util.List;

import clg.krit.KritAttendenceSystem.model.StudentAttendance;

public interface StudentAttendanceService {

	List<StudentAttendance> getAllAttendance();
	StudentAttendance findAttendanceById(int studentAttendanceId);
}
