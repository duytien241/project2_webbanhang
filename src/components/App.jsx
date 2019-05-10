import React from 'react';
import Category from './Category';
import Home from './Home.jsx';
import {BrowserRouter as Router,Switch, Route } from "react-router-dom";
import DetailProduct from'./DetailProduct';
import FormDangKy from './FormDangKy';
import FormDangnhap from './FormDangnhap';
import CategoryPage from './CategoryPage';
import CartPage from './cart/Cart_page';
import axios from 'axios';

class App extends React.Component {
    constructor(props){
        super(props);
      }
  
    render() {
      
       return ( 
       <Router>
         <Switch>
        <Route exact path="/" component ={Home}/>
        <Route path="/product/:id" component ={DetailProduct}/>
        <Route exact path="/category" component ={Category}/>
        <Route exact path="/cart" component ={CartPage}/>
        </Switch>
        </Router>
        );
    }
}

export default App;