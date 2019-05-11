package com.staxrt.tutorial.controller;

import com.staxrt.tutorial.exception.ResourceNotFoundException;
import com.staxrt.tutorial.model.Images;
import com.staxrt.tutorial.model.Product;
import com.staxrt.tutorial.repository.ImageRepository;
import com.staxrt.tutorial.repository.ProductRepository;

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
public class ImageController {
	 @Autowired
	 private ImageRepository imgRepository;
	
	 @GetMapping("/images")
	 public List<Images> getAllUsers() {
	    return imgRepository.findAll();
	  }
	 @GetMapping("/images/{id}")
	  public List<Images> getImageByID(@PathVariable(value = "id") Iterable<Long> id) {
		  List<Images> pro = imgRepository.findAllById(id);
		  return imgRepository.findAllById(id);
	  }
	 @PostMapping("/images")
	  public Images createUser(@Valid @RequestBody Images img) {
	    return imgRepository.save(img);
	  }
}
