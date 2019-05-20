package service;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Service;

import com.staxrt.tutorial.model.Product;
@Service
public interface ProductService {
    public List<Product> findAll();

    public Product addProduct(Product phone);

    public Product findById(Long id);

    public void deteleProduct(Product product);

    public void deteleProductById(Long id) throws Exception;

    public List<Product> findByType(String type);

	public Product save(@Valid Product product);

}