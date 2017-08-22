package clg.krit.KritAttendenceSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import clg.krit.KritAttendenceSystem.model.College;
import clg.krit.KritAttendenceSystem.repository.CollegeRepository;

@Service("collegeService")
public class CollegeServiceImpl implements CollegeService{

	@Autowired
	CollegeRepository collegeRepository;
	
	@Override
	public College findCollegeById(String college_Id) {
		return collegeRepository.findOne(college_Id);
	}

	@Override
	public List<College> getAllColleges() {
		return collegeRepository.findAll();
	}

}
