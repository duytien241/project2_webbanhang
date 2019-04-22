import React, { Component } from 'react';
import Product from './Product';
import Filter from './Filter';
import '../styles/responsive.css';
import CategoryPage from './CategoryPage';
import Feature from './Feature';
import Header from './Header.jsx';
import Footer from './Footer';
class Category extends Component {
    render() {
        return (
            <div>
            <Header></Header>
            <CategoryPage/>
            <Filter/>
            <div className="container">
            
            <div class="row products_row products_container grid">
                <Product img = {'product_3.jpg'}></Product>
                <Product img = {'product_1.jpg'}></Product>
                <Product img = {'product_2.jpg'}></Product>
            </div>
            
            <Feature></Feature>
            </div>
           
            <Footer/>
            </div>  
        
        );
    }
}

export default Category;