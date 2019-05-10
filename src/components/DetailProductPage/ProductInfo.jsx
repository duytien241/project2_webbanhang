import React, { Component } from 'react';
class ProductInfo extends Component {
    render() {
        var {product} = this.props;
        return ( <
            div className = "col-lg-6 product_col" >
            <
            div className = "product_info" >
            <
            div className = "product_name" ><h3> {product.proName} </h3>< /div> <
            div className = "product_category" > < a href = "category.html" > Danh mục sản phẩm < /a></div >

            <
            div className = "product_price" > {product.price}< /div> <
            div className = "product_size" >
            <
            div className = "product_size_title" > Size: S < /div> <
            /div> <
            div className = "product_size" >
            <
            div className = "product_size_title" > Loại sản phẩm:{product.type} < /div> <
            /div> <
            div className = "product_size" >
            <
            div className = "product_size_title" > Màu sắc: Hồng < /div> <
            /div> <
            div className = "product_size" >
            <
            div className = "product_size_title" > Số lượng: 40 < /div> <
            /div>

            <
            div className = "product_text" >
            <
            p > {product.description} < /p> <
            /div>
            <
            br/>
            <
            br/>
            <
            div className = "product_buttons" >
            <
            div className = "text-right d-flex flex-row align-items-start justify-content-start" >
            <
            div className = "product_button product_fav text-left d-flex flex-column align-items-center justify-content-center" >
            <
            div > < div > < img src = {require("../../images/cart.svg")}
            className = "svg"
            alt / > < div > + < /div></div > < /div> <
            /div>  <
            /div> <
            /div> <
            /div> <
            /div>
        );
    }
}
export default ProductInfo;