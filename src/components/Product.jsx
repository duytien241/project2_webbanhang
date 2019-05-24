import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import '../styles/category.css';
import '../styles/category_responsive.css';

import '../styles/responsive.css';
import '../App.css';
import Home from './Home';
import DetailProduct from'./DetailProduct';


class Product extends Component {
  addCard=() =>{
    alert("Thành công");

  }  
  render() {
        
        const img1 = this.props.img;
        var {id} = this.props;
        
        var tile ='60%';
        
        return (
         
          <div className="col-xl-4 col-md-6 grid-item">   
          <div className="product">   
            <div className="product_image"><img src={img1} alt /></div>   
            <div className="product_content">   
              <div className="product_info d-flex flex-row align-items-start justify-content-start">  
                <div>   
                  <div>   
                    <div className="product_name"><Link to={`/product/${id}`}>{this.props.name}</Link></div>   
                    <div className="product_category">In <a href="category">Sản phẩm</a></div>   
                  </div>  
                </div>  
                <div className="ml-auto text-right">    
                  <div className="rating_r rating_r_4 home_item_rating"><i></i><i></i><i></i><i></i><i></i></div> 
                  <div className="product_price text-right">{this.props.price}</div>    
                </div>  
              </div>  
              <div className="product_buttons">   
                <div className="text-right d-flex flex-row align-items-start justify-content-start">    
                  <div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center" onclick="window.location.href='product.php?product=<?php echo $proID;?>'">   
                    <div>   
                      <div><img src={require("../images/heart.svg")} className="svg" alt name />   
                      </div>  
                    </div>  
                  </div>  
                  <div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">  
                    <div>   
                      <div><img src={require("../images/cart.svg")} className="svg" alt name="cart" onClick = {this.addCard}/>    
                        <div>+</div>    
                      </div>  
                    </div>  
                  </div>  
                </div>  
              </div>  
            </div>  
          </div>  
        </div>
        );
    }
}

export default Product;