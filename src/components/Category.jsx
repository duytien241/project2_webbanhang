import React, { Component } from 'react';
import Product from './Product';
import Filter from './Filter';
import '../styles/responsive.css';
import CategoryPage from './CategoryPage';
import Feature from './Feature';
import Header from './Header.jsx';
import Footer from './Footer';
class Category extends Component {
  constructor(props) {

    super(props);
    this.state = {
        products: [],
        images: []
    }
}
    componentWillMount(){
      fetch('/api/v1/products')
      .then(response => {
          return response.json();
      })
      .then(res => {

          this.setState({
              products: res
          });
      }).catch(err => {
          console.log('A');
      });
  fetch('/api/v1/images')
      .then(response => {
          return response.json();
      })
      .then(res => {
          this.setState({
              images: res
          })
      }).catch(err => {
          console.log('A');
      });
      }
      
    render() {
        var {products} = this.state;
        var {images}  = this.state;
        function getImage(proID) {
          for (let i = 0; i < images.length; i++) {
              if (images[i].proID == proID) {

                  return images[i].url.toString();
              }
          }

      }
      var printElement = products.map((product, index, products) => {
        var key = localStorage.getItem('key') ;
        console.log(products[index].proName);
        if(products[index].proName==key){
        
          return <Product 
        id = {products[index].proID}
        name = { products[index].proName }
        img = { getImage(products[index].proID) }
        price = { products[index].price }
        desc = { products[index].descriptions } > < /Product>
        }
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