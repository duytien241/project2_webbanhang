import React, { Component } from 'react';
import AddProduct from './AddProduct';
import ListProduct from './ListProduct';
import {Link} from 'react-router-dom'

class Adminpage extends Component {
    render() {
        return (
            <div>
              <section id="container">
        {/*header start*/}
        <header className="header fixed-top clearfix">
          {/*logo start*/}
          <div className="brand">
            <Link to="/" className="logo">
              <img src="../images/logo.png" alt />
            </Link>
            <div className="sidebar-toggle-box">
              <div className="fa fa-bars" />
            </div>
          </div>
       
              <div className="nav notify-row" id="top_menu">
          {/*  notification start */}
          <ul className="nav top-menu">
            {/* settings start */}
            <li className="dropdown">
              <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <i className="fa fa-tasks" />
                <span className="badge bg-success">8</span>
              </a>
              <ul className="dropdown-menu extended tasks-bar">
                <li>
                  <p className>You have 8 pending tasks</p>
                </li>
                <li>
                  <a href="#">
                    <div className="task-info clearfix">
                      <div className="desc pull-left">
                        <h5>Target Sell</h5>
                        <p>25% , Deadline  12 June’13</p>
                      </div>
                      <span className="notification-pie-chart pull-right" data-percent={45}>
                        <span className="percent" />
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="task-info clearfix">
                      <div className="desc pull-left">
                        <h5>Product Delivery</h5>
                        <p>45% , Deadline  12 June’13</p>
                      </div>
                      <span className="notification-pie-chart pull-right" data-percent={78}>
                        <span className="percent" />
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="task-info clearfix">
                      <div className="desc pull-left">
                        <h5>Payment collection</h5>
                        <p>87% , Deadline  12 June’13</p>
                      </div>
                      <span className="notification-pie-chart pull-right" data-percent={60}>
                        <span className="percent" />
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="task-info clearfix">
                      <div className="desc pull-left">
                        <h5>Target Sell</h5>
                        <p>33% , Deadline  12 June’13</p>
                      </div>
                      <span className="notification-pie-chart pull-right" data-percent={90}>
                        <span className="percent" />
                      </span>
                    </div>
                  </a>
                </li>
                <li className="external">
                  <a href=" ">See All Tasks</a>
                </li>
              </ul>
            </li>
            {/* settings end */}
            {/* inbox dropdown start*/}
            <li id="header_inbox_bar" className="dropdown">
              <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <i className="fa fa-envelope-o" />
                <span className="badge bg-important">4</span>
              </a>
              <ul className="dropdown-menu extended inbox">
                <li>
                  <p className="red">You have 4 Mails</p>
                </li>
                <li>
                  <a href="#">
                    <span className="photo"><img alt="avatar" src="images/avatar-mini.jpg" /></span>
                    <span className="subject">
                      <span className="from">Jonathan Smith</span>
                      <span className="time">Just now</span>
                    </span>
                    <span className="message">
                      Hello, this is an example msg.
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="photo"><img alt="avatar" src="images/avatar-mini-2.jpg" /></span>
                    <span className="subject">
                      <span className="from">Jane Doe</span>
                      <span className="time">2 min ago</span>
                    </span>
                    <span className="message">
                      Nice admin template
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="photo"><img alt="avatar" src="images/avatar-mini-3.jpg" /></span>
                    <span className="subject">
                      <span className="from">Tasi sam</span>
                      <span className="time">2 days ago</span>
                    </span>
                    <span className="message">
                      This is an example msg.
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="photo"><img alt="avatar" src="images/avatar-mini.jpg" /></span>
                    <span className="subject">
                      <span className="from">Mr. Perfect</span>
                      <span className="time">2 hour ago</span>
                    </span>
                    <span className="message">
                      Hi there, its a test
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">See all messages</a>
                </li>
              </ul>
            </li>
            {/* inbox dropdown end */}
            {/* notification dropdown start*/}
            <li id="header_notification_bar" className="dropdown">
              <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <i className="fa fa-bell-o" />
                <span className="badge bg-warning">3</span>
              </a>
              <ul className="dropdown-menu extended notification">
                <li>
                  <p>Notifications</p>
                </li>
                <li>
                  <div className="alert alert-info clearfix">
                    <span className="alert-icon"><i className="fa fa-bolt" /></span>
                    <div className="noti-info">
                      <a href="#"> Server #1 overloaded.</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="alert alert-danger clearfix">
                    <span className="alert-icon"><i className="fa fa-bolt" /></span>
                    <div className="noti-info">
                      <a href="#"> Server #2 overloaded.</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="alert alert-success clearfix">
                    <span className="alert-icon"><i className="fa fa-bolt" /></span>
                    <div className="noti-info">
                      <a href="#"> Server #3 overloaded.</a>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            {/* notification dropdown end */}
          </ul>
          {/*  notification end */}
        </div>
        <div className="top-nav clearfix">
          {/*search & user info start*/}
          <ul className="nav pull-right top-menu">
            <li>
              
            </li>
            {/* user login dropdown start*/}
            <li className="dropdown">
              <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <img alt src="images/avatar1_small.jpg" />
                <span className="username">Phạm Duy Tiên</span>
                <b className="caret" />
              </a>
              <ul className="dropdown-menu extended logout">
                <li><a href="#"><i className=" fa fa-suitcase" />Profile</a></li>
                <li><a href="#"><i className="fa fa-cog" /> Settings</a></li>
                <li><a href="login.html"><i className="fa fa-key" /> Log Out</a></li>
              </ul>
            </li>
            {/* user login dropdown end */}
            <li>
              <div className="toggle-right-box">
                <div className="fa fa-bars" />
              </div>
            </li>
          </ul>
          {/*search & user info end*/}
        </div>
        </header>
    <aside>
        <div id="sidebar" className="nav-collapse">
          {/* sidebar menu start*/}
          <div className="leftside-navigation">
            <ul className="sidebar-menu" id="nav-accordion">
              
              <li className="sub-menu">
                <a href="javascript:;">
                  <i className="fa fa-laptop" />
                  <span>Sản phẩm</span>
                </a>
                <ul className="sub">
                  <li><Link to="/admin/addproduct">Thêm sản phẩm</Link></li>
                  <li><Link to ="/admin/listproduct">Danh sách sản phẩm</Link></li>
                 
                </ul>
              </li>
              <li className="sub-menu">
                <a href="javascript:;">
                  <i className="fa fa-book" />
                  <span>Quản lý tài khoản</span>
                </a>
                <ul className="sub">
                  <li><Link to="account-list">Danh sách tài khoản</Link></li>
                  <li><Link to="/account/add">Thêm tài khoản</Link></li>
                  
                </ul>
              </li>
              
              <li className="sub-menu">
                <a href="javascript:;">
                  <i className="fa fa-th" />
                  <span>Hóa đơn</span>
                </a>
                <ul className="sub">
                  <li><a href="basic_table.html">Quản lý đơn hàng</a></li>
                  <li><a href="responsive_table.html">Thống kê</a></li>
                  
                </ul>
              </li>
              
              
            </ul>          </div>
          {/* sidebar menu end*/}
        </div>
      </aside>
      </section>
      
            </div>
        );
    }
}

export default Adminpage;   