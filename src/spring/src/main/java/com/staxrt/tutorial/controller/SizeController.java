package com.staxrt.tutorial.controller;
import com.staxrt.tutorial.exception.ResourceNotFoundException;
import com.staxrt.tutorial.model.Images;
import com.staxrt.tutorial.model.SizeProduct;

import com.staxrt.tutorial.repository.ImageRepository;
import com.staxrt.tutorial.repository.SizeRepsitory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class SizeController {
	@Autowired
	 private SizeRepsitory sizeRepository;
	
	 @GetMapping("/size")
	 public List<SizeProduct> getAllUsers() {
	    return sizeRepository.findAll();
	  }
}
