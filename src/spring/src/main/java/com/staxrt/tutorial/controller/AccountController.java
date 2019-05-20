package com.staxrt.tutorial.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.staxrt.tutorial.exception.ResourceNotFoundException;
import com.staxrt.tutorial.model.Account;
import com.staxrt.tutorial.model.Product;
import com.staxrt.tutorial.repository.AccountRepository;

@RestController
@RequestMapping("/api/v1")
public class AccountController {
	
	@Autowired
	AccountRepository accRepository;
	@GetMapping("/accounts")
	public List<Account> getAllAccount(){
		return accRepository.findAll();
	}
	@GetMapping("/accounts/{id}")
	 public ResponseEntity<Optional<Account>> getAccountByID(@PathVariable(value = "id") Integer proID) {
		  Optional<Account> pro =accRepository.findById(proID);
		  return ResponseEntity.ok().body(pro);
	 }
	@PostMapping("/account")
	 public Account createUser(@Valid  Account acc) {
	    return accRepository.save(acc);
	 }
	@PutMapping("/account/{id}")
	  public ResponseEntity<Account> updateAccount(@PathVariable(value = "id") Integer accID, @Valid  Account accDetails)
	      throws ResourceNotFoundException {
		  
		  Account acc =
	        accRepository
	            .findById(accID)
	            .orElseThrow(() -> new ResourceNotFoundException("Account not found on :: " + accID));
		  acc.setUsername(accDetails.getUsername());
		  acc.setPassword(accDetails.getPassword());
		  acc.setName(accDetails.getName());
		  acc.setPhone(accDetails.getPhone());
		  acc.setAddress(accDetails.getAddress());
		  acc.setCreated(accDetails.getCreated());
		  acc.setAdmin(accDetails.getAdmin());
		  
		  final Account accUpdate = accRepository.save(acc);
		  return ResponseEntity.ok(accUpdate);
	  }
}
