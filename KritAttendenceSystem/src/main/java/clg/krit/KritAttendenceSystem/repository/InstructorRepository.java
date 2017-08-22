package clg.krit.KritAttendenceSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import clg.krit.KritAttendenceSystem.model.Instructor;

public interface InstructorRepository extends JpaRepository<Instructor, String>{
}
