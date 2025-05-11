package com.demo.FurniBackend.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.FurniBackend.entity.Users;
import com.demo.FurniBackend.repository.UserRepository;

@Service
public class UserServiceImpl  {

	@Autowired
	UserRepository repositoy;

	public void saveUser(Users user) {
		repositoy.save(user);
	}

	public Users getUserById(long id) {
		
		Optional<Users> optional = repositoy.findById(id);
		Users user = null;
		if(optional.isPresent())
		{
			user=optional.get();
		}
		return user;
	}

	public void deleteUserByID(long id) {
		repositoy.deleteById(id);;
		
	}
	
	public Users getByEmailAndPass(String email,String pass)
	{
		Users user=repositoy.findbyEmailAndPassword(email, pass);
		return user;
	}
	
	

}
