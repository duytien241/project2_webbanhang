import React, { Component } from 'react'
import {BrowserRouter as Router, Route,Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

export default class login extends Component {
  constructor(props) {

    super(props);
    this.state = {
      accounts: [{
        username:"tien",
        password:"1",
        address : "a",
        email :"a",
        phone: "a",
        gender: "F",
        name: "tiên"

      }]
    }
}
kiemtra = ()=>{
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  console.log(username);
  var {accounts} = this.state;
  console.log(accounts);
  for( var i = 0 ; i < accounts.length ; i++){
    if(accounts[i]["username"] == username && accounts[i]["password"]==password){
      localStorage.setItem("accID",accounts[i]["accID"]);
      console.log("ok");
      window.location = "/";
    }
    else {
      console.log("lỗi");
    }
  }
}
componentWillMount() {
    fetch('/api/v1/account')
        .then(response => {
            return response.json();
        })
        .then(res => {
            console.log(res);
            this.setState({
                accounts: res
            });
        }).catch(err => {
            console.log('A');
        });
};
  render() {
    return (
        <div>
        
        <div className="wrapper" style={{backgroundImage: 'url("../images/sign_up/bg-registration-form-1.jpg")'}}>
        <div className="inner">
          <div className="image-holder">
            <img src="../images/sign_up/registration-form-1.jpg" alt />
          </div>
          <form>
            <h3>sign in</h3>
            <div className="form-wrapper">
              <input type="text" placeholder="Tên Đăng Nhập" className="form-control" id= "username" name="username" required="required" />
              <i className="zmdi zmdi-account" />
            </div>
            <div className="form-wrapper">
              <input type="password" placeholder="Mật khẩu" className="form-control" name="password" id = "password" required="required" />
              <i className="zmdi zmdi-lock" />
            </div>
            <button type="button" className="done"  onClick ={this.kiemtra}>Đăng nhập
              <i className="zmdi zmdi-arrow-right" />
            </button>
            <div style={{paddingTop: '10px', textAlign: 'center'}}><Link to="/singup" style={{color: '#333'}}>Quên mật khẩu?</Link></div>
            <div style={{paddingTop: '10px', textAlign: 'center'}}><Link to="/singup" style={{color: '#333'}}>Đăng kí tài khoản mới</Link></div>
          </form>
      
        </div>
      
      </div>
      
      </div>
    )
  }
}
