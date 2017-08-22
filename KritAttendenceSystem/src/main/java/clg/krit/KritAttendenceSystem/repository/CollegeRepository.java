package clg.krit.KritAttendenceSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import clg.krit.KritAttendenceSystem.model.College;

public interface CollegeRepository extends JpaRepository<College, String> {
}
