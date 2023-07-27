package com.jalindar.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jalindar.model.Emp;

public interface EmpRepository extends JpaRepository<Emp,Integer> {

	

}
