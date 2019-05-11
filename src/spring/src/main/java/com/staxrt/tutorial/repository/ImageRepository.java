package com.staxrt.tutorial.repository;

import com.staxrt.tutorial.model.Images;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * The interface User repository.
 *
 * @author Givantha Kalansuriya
 */
@Repository
public interface ImageRepository extends JpaRepository<Images, Long> {};

