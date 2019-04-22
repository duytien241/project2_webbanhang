import React, { Component } from 'react';
class ProductInfo extends Component {
    render() {
        return ( <
            div className = "col-lg-6 product_col" >
            <
            div className = "product_info" >
            <
            div className = "product_name" > Áo khoác < /div> <
            div className = "product_category" > < a href = "category.html" > Danh mục sản phẩm < /a></div >

            <
            div className = "product_price" > 4.000 .000 < /div> <
            div className = "product_size" >
            <
            div className = "product_size_title" > Size: S < /div> <
            /div> <
            div className = "product_size" >
            <
            div className = "product_size_title" > Loại sản phẩm: Nữ < /div> <
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
            p > Áo khoác phao nữ PLBBB dáng dài chữ A may ôm thân thon gọn, thiết kế liền mũ trùm cùng chất liệu bông cao cấp siêu ấm ấm, mang đến cho bạn vẻ trẻ trung, năng động, rất thích hợp diện xuống phố trong những ngày rét lạnh mùa đông. < /p> <
            /div> <
            div className = "product_buttons" >
            <
            div className = "text-right d-flex flex-row align-items-start justify-content-start" >
            <
            div className = "product_button product_fav text-left d-flex flex-column align-items-center justify-content-center" >
            <
            div > < div > < img src = {require("../../images/heart_2.svg")}
            className = "svg"
            alt / > < div > + < /div></div > < /div> <
            /div> <
            div className = "product_button product_cart text-left d-flex flex-column align-items-center justify-content-center" >
            <div > < div > < img src = {require("../../images/cart.svg")}
            className = "svg"
            alt / > < div > + < /div></div > < /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div>
        );
    }
}
export default ProductInfo;