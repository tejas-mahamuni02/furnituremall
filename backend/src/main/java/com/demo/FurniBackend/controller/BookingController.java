package com.demo.FurniBackend.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.demo.FurniBackend.entity.Bookings;
import com.demo.FurniBackend.service.impl.BookingsServiceImpl;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping(path = "/bookings", method = RequestMethod.GET)
public class BookingController {

	@Autowired
	private BookingsServiceImpl bookingservice;
	
	
	@PostMapping("/save")
	public void saveUser(@RequestBody Bookings booking) {
		booking.setBookeddate(LocalDate.now());
		bookingservice.saveUser(booking);
	}
	
	@GetMapping("/getMyBookings/{userid}")
	public List<Bookings> getMyBookings(@PathVariable("userid") long userid) {
		return bookingservice.getMyBookings(userid);
	}
	
}
