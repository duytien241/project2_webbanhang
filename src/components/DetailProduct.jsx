import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer';
import Detail from './DetailProductPage/ProductInfo.jsx';
import Detail2 from './DetailProductPage/ProductImage.jsx';
import Popular from './Popular';
import Feature from './Feature';
// import '../styles/product.css';
// import '../styles/product_responsive.css';
class DetailProduct extends Component {
    render() {
        return (
            <div>
            <Header></Header>
      
            
            
            <Popular/>
            <div className="container">
            
            <div className ="row">
              <Detail2></Detail2>
              <Detail></Detail>
            </div>
            
            <Feature></Feature>
            </div>
            
            <Footer/>
            </div>
        );
    }
}

export default DetailProduct;