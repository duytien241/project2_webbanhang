package com.staxrt.tutorial.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
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
	@GetMapping("/account")
	public List<Account> getAllAccount(){
		return accRepository.findAll();
	}
	@GetMapping("/account/{id}")
	 public ResponseEntity<Optional<Account>> getAccountByID(@PathVariable(value = "id") Integer proID) {
		  Optional<Account> pro =accRepository.findById(proID);
		  return ResponseEntity.ok().body(pro);
	 }
	@PostMapping("/account")
	 public Account createUser(@Valid @RequestBody Account acc) {
	    return accRepository.save(acc);
	 }
	@PutMapping("/account/{id}")
	  public ResponseEntity<Account> updateAccount(@PathVariable(value = "id") Integer accID, @Valid @RequestBody Account accDetails)
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
		  acc.setEmail(accDetails.getEmail());
		  acc.setGender(accDetails.getGender());
		  
		  final Account accUpdate = accRepository.save(acc);
		  return ResponseEntity.ok(accUpdate);
	  }
	@DeleteMapping("/account/{id}")
	  public Map<String, Boolean> deleteAccount(@PathVariable(value = "id") Integer accId) throws Exception {
	    Account account =
	        accRepository
	            .findById(accId)
	            .orElseThrow(() -> new ResourceNotFoundException("Account not found on :: " + accId));

	    accRepository.delete(account);
	    Map<String, Boolean> response = new HashMap<>();
	    response.put("deleted", Boolean.TRUE);
	    return response;
	  }
}