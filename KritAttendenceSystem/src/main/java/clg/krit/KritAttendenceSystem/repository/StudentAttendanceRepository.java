package clg.krit.KritAttendenceSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import clg.krit.KritAttendenceSystem.model.StudentAttendance;

public interface StudentAttendanceRepository extends JpaRepository<StudentAttendance, Integer>{

}
