package clg.krit.KritAttendenceSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import clg.krit.KritAttendenceSystem.model.Student;

public interface StudentRepository extends JpaRepository<Student, String>{
}
