import React, { Component } from 'react'
import '../styles/info.css';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';
export default class DetailUser extends Component {
  constructor(props){

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
};
dangxuat = ()=>{
  localStorage.setItem("accID",-1);
  window.location = "/";
}
  componentWillMount() {
    fetch('/api/v1/account/' + localStorage.getItem("accID"))
        .then(response => {
            return response.json();
        })
        .then(res => {

            this.setState({
                accounts: res
            });
        }).catch(err => {
            console.log('A');
        });
};
printAdmin = ()=>{
  if(this.state.accounts.admin){
    window.location = "/admin/listproduct";
  }
  else 
    alert ("Bạn không phải admin");
};
  render() {
    
  var {accounts} = this.state;
  
  console.log(accounts);
    return (
      <div>
      <div className="home">
        <div className="home_container d-flex flex-column align-items-center justify-content-end">
          <div className="home_content text-center">
            <div className="home_title">Thông tin tài khoản</div>
            <div className="breadcrumbs d-flex flex-column align-items-center justify-content-center">
              <ul className="d-flex flex-row align-items-start justify-content-start text-center">
                <li><a href="./">Trang chủ</a></li>
                <li>Quản lí tài khoản</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cart_section">
        <div className="container">
          <div className="row cart_extra_row">
            <div className="col-lg-3 cart_extra_col">
              <div className="cart_extra cart_extra_2">
                <div className="shipping" val={0}>
                  <div className="list-group">
                    <a className="list-group-item list-group-item-action list-group-item-light active" id="info-button" style={{cursor: 'pointer'}}>Thông tin tài khoản</a>
                    <a className="list-group-item list-group-item-action list-group-item-light" id="edit-button" style={{cursor: 'pointer'}}>Chỉnh sửa thông tin</a>
                    <a className="list-group-item list-group-item-action list-group-item-light" id="passwd-button" style={{cursor: 'pointer'}}>Đổi mật khẩu</a>
                    <button type="button" className="btn list-group-item list-group-item-action list-group-item-light" onClick ={this.dangxuat}>Đăng xuất</button>
                    <button type="button" className="btn list-group-item list-group-item-action list-group-item-light" onClick ={this.printAdmin}>Quản lý</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 cart_extra_col">
              <div className="cart_extra cart_extra_2">
                <div className="cart_extra_content cart_extra_total">
                  <div className="acc-info" style={{position: 'relative', visibility: 'visible'}}>
                    <div className="cart_extra_title">Thông tin tài khoản<hr /></div>
                    <ul className="cart_extra_total_list">
                      <li className="d-flex flex-row align-items-center justify-content-start">
                        <div className="cart_extra_total_title">Tên đăng nhập</div>
                        <div className="cart_extra_total_value ml-auto">{accounts.username}</div>
                      </li>
                      <li className="d-flex flex-row align-items-center justify-content-start">
                        <div className="cart_extra_total_title">Họ và Tên</div>
                        <div className="cart_extra_total_value ml-auto">{accounts.name}</div>
                      </li>
                      <li className="d-flex flex-row align-items-center justify-content-start">
                        <div className="cart_extra_total_title">Email</div>
                        <div className="cart_extra_total_value ml-auto">{accounts.email}</div>
                      </li>
                      <li className="d-flex flex-row align-items-center justify-content-start">
                        <div className="cart_extra_total_title">Địa chỉ</div>
                        <div className="cart_extra_total_value ml-auto">{accounts.address}</div>
                      </li>
                      <li className="d-flex flex-row align-items-center justify-content-start">
                        <div className="cart_extra_total_title">Số điện thoại</div>
                        <div className="cart_extra_total_value ml-auto">{accounts.phone}</div>
                      </li>
                      <li className="d-flex flex-row align-items-center justify-content-start">
                        <div className="cart_extra_total_title">Giới tính</div>
                        <div className="cart_extra_total_value ml-auto">{accounts.gender}</div>
                      </li>
                    </ul>
                  </div>
                  <div className="acc-edit" style={{position: 'absolute', visibility: 'hidden'}}>
                    <div className="cart_extra_title">Chỉnh sửa thông tin</div><hr /><br />
                    <form action="#" id="checkout_form" className="checkout_form">
                      <div>
                        <input type="text" id="name" name="name" placeholder="Tên" className="checkout_input" required="required" defaultValue="<?php echo $account['name'];?>" />
                      </div>
                      <div>
                        <input type="text" id="address" name="address" className="checkout_input" placeholder="Địa chỉ" required="required" defaultValue="<?php echo $account['address'];?>" />
                      </div>
                      <div>
                        <input type="phone" id="phone" name="phone" className="checkout_input" placeholder="Số điện thoại" required="required" defaultValue="<?php echo $account['phone'];?>" />
                      </div>
                      <div>
                        <select name="gender" id="gender" className="dropdown_item_select checkout_input" require="required">
                          <option value disabled selected>Giới tính</option>
                          <option value="M">Nam</option>
                          <option value="F">Nữ</option>
                          <option value="O">Khác</option>
                        </select>
                      </div>
                    </form>
                    <div className="checkout_button trans_200" name="update" id="update"><a style={{color: 'white', cursor: 'pointer'}}>Cập nhật</a></div>	
                  </div>
                  <div className="acc-pass" style={{position: 'absolute', visibility: 'hidden'}}>
                    <div className="cart_extra_title">Đổi mật khẩu</div><hr /><br />
                    <form action="#" id="checkout_form" className="checkout_form">
                      <div>
                        <input type="password" id="checkout_name" name="oldpass" placeholder="Mật khẩu cũ" className="checkout_input" required="required" />
                      </div>
                      <div>
                        <input type="password" id="checkout_address" name="newpass1" className="checkout_input" placeholder="Mật khẩu mới" required="required" />
                      </div>
                      <div>
                        <input type="password" id="checkout_address" name="newpass2" className="checkout_input" placeholder="Nhập lại mật khẩu mới" required="required" />
                      </div>
                    </form>
                    <div className="checkout_button trans_200" name="passwd" id="passwd"><a style={{color: 'white', cursor: 'pointer'}}>Cập nhật</a></div>	
                  </div>
                  
                  
                  
                </div>
                
               
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
