import React, { Component } from 'react';
import Product from './Product';
import Slide from './Slide';
import '../styles/responsive.css';
import Popular from './Popular';
import Feature from './Feature';
import Header from './Header.jsx';
import Footer from './Footer';
class Home extends Component {
    render() {
        return (
            <div>
            <Header></Header>
      
            <Slide/>
            ư
            <Popular/>
            <div className="container">
            
            <div class="row products_row products_container grid">
                <Product img = {'product_3.jpg'} price ="250000"></Product>
                <Product img = {'product_1.jpg'} price ="150000"></Product>
                <Product img = {'product_2.jpg'}price ="200000"></Product>
                <Product img = {'product_4.jpg'} price ="300000"></Product>
                <Product img = {'product_5.jpg'} price ="200000"></Product>
                <Product img = {'product_6.jpg'} price ="150000"></Product>
            </div>
            
            <Feature></Feature>
            </div>
           
            <Footer/>
            </div>  
        
        );
    }
}

export default Home;