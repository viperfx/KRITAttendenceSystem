package clg.krit.KritAttendenceSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import clg.krit.KritAttendenceSystem.model.Program;

public interface ProgramRepository extends JpaRepository<Program, String>{

}
