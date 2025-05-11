package com.demo.FurniBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.demo.FurniBackend.entity.Cart;
import com.demo.FurniBackend.service.impl.CartServiceImpl;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@CrossOrigin("http://localhost:3000")
@SessionAttributes({"user"})
@RequestMapping(path = "/cart", method = RequestMethod.GET)
public class CartController {
	
	@Autowired
	private CartServiceImpl cartservice;
	
	@PostMapping("/addtocart")
	public void addtocart(@RequestBody Cart cartitem) {
		cartservice.saveProd(cartitem);
	}
	
	@GetMapping("/getMyCart/{userid}")
	public List<Cart> getMyCart(@PathVariable("userid") long userid) {
		return cartservice.getMyCart(userid);
	}

	
	
	@PutMapping("/updatetocart")
	public void postMethodName(@RequestBody Cart cartitem) {
		cartservice.saveProd(cartitem);
	}
	
	@DeleteMapping("/deletefromcart/{cartid}")
	public void deletecartitem(@PathVariable("cartid") long cartid)
	{
		cartservice.deleteProd(cartid);
	}
	
//	@DeleteMapping("/deletefromcart/{prodid}/{userid}")
//	public void deleteCartItemWithProdId(@PathVariable("prodid") long prodid,@PathVariable("userid") long userid)
//	{
//		cartservice.deleteprodfromcart(prodid,userid);
//	}
	
	
	
	
	

}
