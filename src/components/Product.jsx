import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import '../styles/category.css';
import '../styles/category_responsive.css';

import '../styles/responsive.css';
import '../App.css';
import Home from './Home';
import DetailProduct from'./DetailProduct';


class Product extends Component {
    render() {

        var img1 = this.props.img;
        var tile ='60%';
        return (
         
              <div className="col-xl-4 col-md-6 grid-item new">
        <div className="product">
          <div className="product_image"><img src={require(`../images/${this.props.img}`)} alt /></div>
          <div className="product_content">
            <div className="product_info d-flex flex-row align-items-start justify-content-start">
              <div>
                <div>
                  <div className="product_name"><Link to="/product">{this.props.name}</Link></div>
                  <div className="product_category">In <a href="category">Sản phẩm</a></div>
                </div>
              </div>
              
            </div>
            <div className="product_price ">{this.props.price} <span>Đ</span></div>
                            
            <div className="star-rating " title="100%">

            <div className="front-stars" style={{width: '100%'}} >
                                        <span>3.9</span><i className="fa fa-star" aria-hidden="true" />
                                      
                                </div>
                            </div>
            <div className="product_buttons">
              <div className="text-right d-flex flex-row align-items-start justify-content-start">
                
                <div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                  <div><div><img src={require('../images/cart.svg')} className="svg" alt /><div>+</div></div></div>
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