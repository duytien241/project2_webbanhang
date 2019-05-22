/*
 *
 *  Copyright (c) 2018-2020 Givantha Kalansuriya, This source is a part of
 *   Staxrt - sample application source code.
 *   http://staxrt.com
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 */

package com.staxrt.tutorial.controller;

import com.staxrt.tutorial.exception.ResourceNotFoundException;
import com.staxrt.tutorial.model.Product;
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

/**
 * The type User controller.
 *
 * @author Givantha Kalansuriya
 */
@RestController
@RequestMapping("/api/v1")
public class ProductController {

  @Autowired
  private ProductRepository proRepository;

  /**
   * Get all users list.
   *
   * @return the list
   */
  @GetMapping("/products")
  public List<Product> getAllUsers() {
    return proRepository.findAll();
  }
  @GetMapping("/products/{id}")
  public ResponseEntity<Optional<Product>> getProductByID(@PathVariable(value = "id") Long proID) {
	  Optional<Product> pro = proRepository.findById(proID);
	  return ResponseEntity.ok().body(pro);
  }
  @PostMapping("/products")
  public Product createUser(@Valid @RequestBody Product product) {
    return proRepository.save(product);
  }
  @PutMapping("/products/{id}")
  public ResponseEntity<Product> updateUser(@PathVariable(value = "id") Long proId, @Valid @RequestBody Product proDetails)
      throws ResourceNotFoundException {
	  
	  Product product =
        proRepository
            .findById(proId)
            .orElseThrow(() -> new ResourceNotFoundException("Product not found on :: " + proId));
	  product.setDescription(proDetails.getDescription());
	  product.setGender(proDetails.getGender());
	  product.setProName(product.getProName());
	  product.setPrice(proDetails.getPrice());
	  product.setType(proDetails.getType());
	  final Product productUpdate = proRepository.save(product);
	  return ResponseEntity.ok(productUpdate);
  }
  @DeleteMapping("/products/{id}")
  public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long proId) throws Exception {
    Product user =
        proRepository
            .findById(proId)
            .orElseThrow(() -> new ResourceNotFoundException("Product not found on :: " + proId));

    proRepository.delete(user);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return response;
  }
  
}
