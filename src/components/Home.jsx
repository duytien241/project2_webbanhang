import React, { Component } from 'react';
import Product from './Product';
import Slide from './Slide';
import '../styles/responsive.css';
import Popular from './Popular';
import Feature from './Feature';
import Header from './Header.jsx';
import Footer from './Footer';
import { isNull } from 'util';
class Home extends Component {
    constructor(props){

        super(props);
        this.state = {
        products : [["Áo phông mùa hè",250000,"product_1.jpg"],["Áo phông mùa hè",150000,"product_2.jpg"],
        ["Áo phông mùa hè",250000,"product_3.jpg"],["Áo phông mùa hè",250000,"product_4.jpg"]]
        };
      }
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
      
            <Slide/>
            
            <Popular/>
            <div className="container">
            
            <div class="row products_row products_container grid">
                {printElement};
            </div>
            
            <Feature></Feature>
            </div>
           
            <Footer/>
            </div>  
        
        );
        
    }
}

export default Home;