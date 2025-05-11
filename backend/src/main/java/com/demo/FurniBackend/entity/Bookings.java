package com.demo.FurniBackend.entity;

import java.sql.Date;
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class Bookings {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long bookingid;
	private Long id;
	private int qty;
	private String image;
	private String name;
	private String address;
	private float price;
	private float discount;
	private float packagingcharges;
	private float total;
	private LocalDate bookeddate;
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private Users user;

	public Long getBookingid() {
		return bookingid;
	}

	public void setBookingid(Long bookingid) {
		this.bookingid = bookingid;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public float getDiscount() {
		return discount;
	}

	public void setDiscount(float discount) {
		this.discount = discount;
	}

	public float getPackagingcharges() {
		return packagingcharges;
	}

	public void setPackagingcharges(float packagingcharges) {
		this.packagingcharges = packagingcharges;
	}

	public float getTotal() {
		return total;
	}

	public void setTotal(float total) {
		this.total = total;
	}
	
	

	

	public LocalDate getBookeddate() {
		return bookeddate;
	}

	public void setBookeddate(LocalDate bookeddate) {
		this.bookeddate = bookeddate;
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	

}
