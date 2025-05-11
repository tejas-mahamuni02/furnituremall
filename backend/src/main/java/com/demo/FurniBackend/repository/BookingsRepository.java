package com.demo.FurniBackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.FurniBackend.entity.Bookings;


public interface BookingsRepository extends JpaRepository<Bookings, Long> {
	@Query("SELECT b FROM Bookings b WHERE b.user.id = ?1")
	 List<Bookings> findbyUser(long userid);
}
