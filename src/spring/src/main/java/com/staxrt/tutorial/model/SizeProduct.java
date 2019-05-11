package com.staxrt.tutorial.model;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

import java.util.Date;
@Entity
@Table(name = "product_option")
@EntityListeners(AuditingEntityListener.class)
public class SizeProduct {
	@Id
	@Column(name = "optID", nullable = false)
	private Long id;
	@Column(name = "proID", nullable = false)
	private long proID;
	@Column(name = "size",nullable = false)
	private String size;
	@Column(name = "color",nullable = false)
	private String color;
	@Column(name = "stock_quantity",nullable = false)
	private String qual;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public long getProID() {
		return proID;
	}
	public void setProID(long proID) {
		this.proID = proID;
	}
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getQual() {
		return qual;
	}
	public void setQual(String qual) {
		this.qual = qual;
	}
	
	
}
