import React from 'react';
import Category from './Category';
import Home from './Home.jsx';
import {BrowserRouter as Router,Switch, Route } from "react-router-dom";
import DetailProduct from'./DetailProduct';
import FormDangKy from './FormDangKy';
import FormDangnhap from './FormDangnhap';
import CategoryPage from './CategoryPage';
import CartPage from './CartPage';

class App extends React.Component {
    constructor(props){
        super(props);
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
       
       return ( 
       <Router>
         <Switch>
        <Route exact path="/" component ={Home}/>
        <Route exact path="/product" component ={DetailProduct}/>
        <Route exact path="/category" component ={Category}/>
        <Route exact path="/cart" component ={CartPage}/>
        </Switch>
        </Router>
        );
    }
}

export default App;