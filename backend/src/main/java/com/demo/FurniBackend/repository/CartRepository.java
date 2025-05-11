package com.demo.FurniBackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.FurniBackend.entity.Cart;

public interface CartRepository extends JpaRepository<Cart, Long> {

	
	 @Query("SELECT c FROM Cart c WHERE c.user.id = ?1")
	 List<Cart> findbyUser(long userid);
	 
	
}
