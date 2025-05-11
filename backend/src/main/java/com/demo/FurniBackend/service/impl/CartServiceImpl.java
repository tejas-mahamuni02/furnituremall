package com.demo.FurniBackend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.FurniBackend.entity.Cart;
import com.demo.FurniBackend.repository.CartRepository;

@Service
public class CartServiceImpl {
	
	@Autowired
	private CartRepository repository;
	
	
	public void saveProd(Cart cartitem)
	{
		repository.save(cartitem);
	}
	
	public List<Cart> getMyCart(long id)
	{
		return repository.findbyUser(id);
	}
	
	public void UpdateCart(Cart cartitem)
	{
		repository.save(cartitem);
	}

	public void deleteProd(long cartid) {
		repository.deleteById(cartid);
	}

	

}
