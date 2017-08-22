package clg.krit.KritAttendenceSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import clg.krit.KritAttendenceSystem.model.Grade;

public interface GradeRepository extends JpaRepository<Grade, Integer>{
}
