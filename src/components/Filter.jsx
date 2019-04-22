import React, { Component } from 'react';
import '../styles/category.css';
import '../styles/category_responsive.css';
class Filter extends Component {
    render() {
        return (
          <div className="products">
          <div className="container">
          <div className="row products_bar_row">
          <div className="col-lg-12">
          <div className="products_bar d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-start justify-content-center">
            <div className="products_bar_links">
              <ul className="d-flex flex-row align-items-start justify-content-start">
                <li><a href="#">All</a></li>
                <li><a href="#">Hot Products</a></li>
                <li className="active"><a href="#">New Products</a></li>
                <li><a href="#">Sale Products</a></li>
              </ul>
            </div>
            <div className="products_bar_side d-flex flex-row align-items-center justify-content-start ml-lg-auto">
              <div className="products_dropdown product_dropdown_sorting">
                <div className="isotope_sorting_text"><span>Default Sorting</span><i className="fa fa-caret-down" aria-hidden="true" /></div>
                <ul>
                  <li className="item_sorting_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;original-order&quot; }">Default</li>
                  <li className="item_sorting_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;price&quot; }">Price</li>
                  <li className="item_sorting_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;name&quot; }">Name</li>
                </ul>
              </div>
              <div className="products_dropdown text-right product_dropdown_filter">
                <div className="isotope_filter_text"><span>Filter</span><i className="fa fa-caret-down" aria-hidden="true" /></div>
                <ul>
                  <li className="item_filter_btn" data-filter="*">All</li>
                  <li className="item_filter_btn" data-filter=".hot">Hot</li>
                  <li className="item_filter_btn" data-filter=".new">New</li>
                  <li className="item_filter_btn" data-filter=".sale">Sale</li>
                </ul>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
            </div>
        );
    }
}

export default Filter;