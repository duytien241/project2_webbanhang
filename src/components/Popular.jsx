import React, { Component } from 'react';
import '../styles/main_styles.css';
import '../styles/responsive.css';
class Popular extends Component {
    render() {
        return (
          <div className="products">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="section_title text-center">Popular on Little Closet</div>
              </div>
            </div>
            <div className="row page_nav_row">
              <div className="col">
                <div className="page_nav text-center">
                  <ul className="d-flex flex-row align-items-start justify-content-center">
                    <li className="active"><a href="category.html">Women</a></li>
                    <li><a href="category.html">Men</a></li>
                    <li><a href="category.html">Kids</a></li>
                    <li><a href="category.html">Home Deco</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div></div>
        );
    }
}

export default Popular;