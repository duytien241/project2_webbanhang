import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link } from "react-router-dom";


class Header extends Component {
  timkiem = ()=>{
    var key = document.getElementById("timkiem").value;
    localStorage.setItem('key',key);
    console.log(key);
    window.location= "/category";
  }
  render() {
    var accID = -1;
    if(localStorage.getItem("accID") != null){
      accID = localStorage.getItem("accID");
    }
    
    return (

      <header className="header">
        <div className="header_overlay" />
        <div className="header_content d-flex flex-row align-items-center justify-content-start">
          <div className="logo">
            <Link to ="/">
              <div className="d-flex flex-row align-items-center justify-content-start">
                <div><img src={require("../images/logo_1.png")} alt /></div>
                <div>Thời Trang</div>
              </div>
            </Link>	
          </div>
          <div className="header_right d-flex flex-row align-items-center justify-content-start ml-auto">
            {/* Search */}
            <div className="header_search">
              <form action="/category"  id="header_search_form">
                <input type="text" className="search_input" id="timkiem" placeholder="Tìm kiếm sản phẩm" required="required" />
                <button className="header_search_button" onClick = {this.timkiem}> </button>
              </form>
            </div>
            {/* User */}
            <div className="user"><Link to={accID == -1 ?"/singup" : "/detailuser"}><div><img src={require("../images/user.svg")}  alt="https://www.flaticon.com/authors/freepik" /></div></Link></div>
            {/* Cart */}
            <div className="cart"><Link to="/cart"><div><img src={require("../images/cart.svg" )} alt="https://www.flaticon.com/authors/freepik" /></div></Link></div>
            {/* Phone */}
            <div className="header_phone d-flex flex-row align-items-center justify-content-start">
              <div><div><img src={require("../images/phone.svg")}  alt="https://www.flaticon.com/authors/freepik" /></div></div>
              <div>+84372109881</div>
            </div>
          </div>
        </div>
      </header>

    );
  }
}

export default Header;
