import React, { Component } from 'react';
import Product from './Product';
import Filter from './Filter';
import '../styles/responsive.css';
import CategoryPage from './CategoryPage';
import Feature from './Feature';
import Header from './Header.jsx';
import Footer from './Footer';
class Category extends Component {
    componentWillMount(){
        if(localStorage && localStorage.getItem('products')){
          var products = JSON.parse(localStorage.getItem('products'));
          this.setState({
            products : products
          });
        }
      }
      
    render() {
        var {products} = this.state;
        var printElement =products.map((product,index,products) =>{
            return <Product name={products[index][0]} img = {products[index][2]} price ={products[index][1]}></Product>
        });
        
        return (
            <div>
            <Header></Header>
            <CategoryPage title = "Category Page"/>
            <Filter/>
            <div className="container">
            
            <div class="row products_row products_container grid">
                {printElement}
            </div>
            
            <Feature></Feature>
            </div>
           
            <Footer/>
            </div>  
        
        );
    }
}

export default Category;