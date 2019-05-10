import React, { Component } from 'react';

class CategoryPage extends Component {
    render() {
        return (
            
          <div className="home">
          <div className="home_container d-flex flex-column align-items-center justify-content-end">
            <div className="home_content text-center">
              <div className="home_title">{this.props.title}</div>
              <div className="breadcrumbs d-flex flex-column align-items-center justify-content-center">
                <ul className="d-flex flex-row align-items-start justify-content-start text-center">
                  <li><a href="#">Home</a></li>
                  <li><a href="category.html">Woman</a></li>
                  <li>New Products</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        );
    }
}

export default CategoryPage;