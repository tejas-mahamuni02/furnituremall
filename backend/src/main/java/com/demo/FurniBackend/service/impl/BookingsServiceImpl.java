package com.demo.FurniBackend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.FurniBackend.entity.Bookings;
import com.demo.FurniBackend.entity.Cart;
import com.demo.FurniBackend.repository.BookingsRepository;

@Service
public class BookingsServiceImpl {

	@Autowired
	private BookingsRepository repository;

	public void saveUser(Bookings booking) {
		repository.save(booking);
	}

	public List<Bookings> getMyBookings(long userid) {
		return repository.findbyUser(userid);
	}

}
