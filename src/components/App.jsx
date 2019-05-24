import React from 'react';
import Category from './Category';
import Home from './Home.jsx';
import {BrowserRouter as Router,Switch, Route } from "react-router-dom";
import DetailProduct from'./DetailProduct';
import FormDangKy from './FormDangKy';
import FormDangnhap from './FormDangnhap';
import CategoryPage from './CategoryPage';
import CartPage from './cart/Cart_page';
import DetailUser from './Details_user';
import EditProductPage from './admin/EditProdcutPage'
import PageListProduct from './admin/PageListProduct';
import AdminAddProduct from './admin/AdminAddProduct';
import AdminAccountPage from './admin/AdminAccountPage';
import Adminpage from './admin/Adminpage';
import AccountList from './admin/AccountList/AccountList';
import AccountManagerPage from '../pages/AccountManagerPage/AccountManagerPage'
import AccountActionPage from '../pages/AccountActionPage/AccountActionPage';

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
        <Route path="/category" component ={Category}/>
        <Route exact path="/cart" component ={CartPage}/>
        <Route path="/singup" component ={FormDangKy}/>
        <Route path="/login" component ={FormDangnhap}/>
        <Route path="/detailuser" component ={DetailUser}/>
        <Route path="/admin/listproduct" component ={PageListProduct}/>
        <Route path="/admin/addproduct" component ={AdminAddProduct}/>
        <Route path="/admin/product/:id" component ={EditProductPage}/>
        <Route path="/admin/account-list" component ={AccountManagerPage}/>
        <Route path="/account/add" component ={AccountActionPage }/>
        <Route path="/account/:id/edit" component ={AccountActionPage }/>
        
        </Switch>
        </Router>
        );
    }
}

export default App;