package com.demo.FurniBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.FurniBackend.entity.Users;


public interface UserRepository extends JpaRepository<Users, Long> {

	
	@Query("Select user from Users user WHERE user.email = ?1 AND user.password = ?2 ")
	Users findbyEmailAndPassword(String email,String pass);
}
