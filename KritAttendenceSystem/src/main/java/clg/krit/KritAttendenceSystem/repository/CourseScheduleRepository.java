package clg.krit.KritAttendenceSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import clg.krit.KritAttendenceSystem.model.CourseSchedule;

public interface CourseScheduleRepository  extends JpaRepository<CourseSchedule, Integer>{
}
