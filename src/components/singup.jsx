import React, { Component } from 'react'
import '../styles/sign_up.css'
import {BrowserRouter as Router, Route,Link } from "react-router-dom";

export default class singup extends Component {
  render() {
    return (
      <div>
        <div className="wrapper" style={{backgroundImage: 'url("../images/sign_up/bg-registration-form-1.jpg")'}}>
        <div className="inner">
          <div className="image-holder">
            <img src="../images/sign_up/registration-form-1.jpg" alt />
          </div>
          <form>
            <h3>sign up</h3>
            <div className="form-group">
              <input type="text" placeholder="Họ và Đệm" className="form-control" name="lname" />
              <input type="text" placeholder="Tên" className="form-control" name="fname" />
            </div>
            <div className="form-wrapper">
              <input type="text" placeholder="Tên Đăng Nhập" className="form-control" name="username" />
              <i className="zmdi zmdi-account" />
            </div>
            <div className="form-wrapper">
              <input type="text" placeholder="Địa Chỉ Email" className="form-control" name="email" />
              <i className="zmdi zmdi-email" />
            </div>
            <div className="form-wrapper">
              <select name id className="form-control" style={{color: '#333', fontSize: '13px'}}>
                <option value disabled selected>Giới tính</option>
                <option value="M">Nam</option>
                <option value="F">Nữ</option>
                <option value="O">Khác</option>
              </select>
              <i className="zmdi zmdi-caret-down" style={{fontSize: '17px'}} />
            </div>
            <div className="form-wrapper">
              <input type="password" placeholder="Mật khẩu" className="form-control" name="password" />
              <i className="zmdi zmdi-lock" />
            </div>
            <div className="form-wrapper">
              <input type="password" placeholder="Xác Thực Mật Khẩu" className="form-control" name="password_con" />
              <i className="zmdi zmdi-lock" />
            </div>
            <button type="button" className="done">Đăng kí
              <i className="zmdi zmdi-arrow-right" />
            </button>
            <div style={{paddingTop: '10px', textAlign: 'center'}}><Link to="/login" style={{color: '#333'}}>Đăng nhập vào tài khoản đã có</Link></div>
          </form>
        </div>
      </div>

      </div>
    )
  }
}
