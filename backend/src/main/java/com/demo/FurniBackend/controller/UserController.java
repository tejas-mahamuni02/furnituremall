package com.demo.FurniBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import com.demo.FurniBackend.entity.Users;
import com.demo.FurniBackend.service.impl.UserServiceImpl;

import jakarta.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin("http://localhost:3000")
@SessionAttributes({"user"})
@RequestMapping(path = "/user", method = RequestMethod.GET)
public class UserController {

	
	
	@Autowired
	private UserServiceImpl userService;

	@PostMapping("/usersave")
	public void saveUser(@RequestBody Users user) {
		userService.saveUser(user);
	}

	
	@GetMapping("/getUser/{email}/{password}")
	public Users getUser(@PathVariable("email")String email,@PathVariable("password") String password,HttpSession session) {
		session.setAttribute("user", userService.getByEmailAndPass(email, password));
		return userService.getByEmailAndPass(email, password);
	}
	
	@PostMapping("/logout")
	public void Logout(@RequestBody Users user,SessionStatus sessionStatus,HttpSession session) {
		session.setAttribute("user", null);
		sessionStatus.setComplete();
	}
	
	
}
