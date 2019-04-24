import React from 'react';
import Category from './Category';
import Home from './Home.jsx';
import {BrowserRouter as Router,Switch, Route } from "react-router-dom";
import DetailProduct from'./DetailProduct';
import FormDangKy from './FormDangKy';
import FormDangnhap from './FormDangnhap';

class App extends React.Component {
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
       
       return ( 
       <Router>
         <Switch>
        <Route exact path="/" component ={Home}/>
        <Route exact path="/product" component ={DetailProduct}/>
        </Switch>
        </Router>
        );
    }
}

export default App;