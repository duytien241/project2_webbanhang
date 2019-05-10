import React from 'react';
import {Link} from 'react-router-dom'
class Cart_item extends React.Component {
    render() {
        return (
            <li className="cart_item item_list d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-end justify-content-start">
                <div className="product d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start mr-auto">
                    <div><div className="product_number">1</div></div>
                    <div><div className="product_image"><img src={require("../../images/cart_item_1.jpg")} alt /></div></div>
                    <div className="product_name_container">
                        <div className="product_name"><Link to="product">Cool Flufy Clothing without Stripes</Link></div>
                        
                    </div>
                </div>
                <div className="product_color product_text"><span>Color: </span>Red</div>
                <div className="product_size product_text"><span>Size: </span>L</div>
                <div className="product_price product_text"><span>Price: </span>$3.99</div>
                <div className="product_quantity_container">
                    <div className="product_quantity ml-lg-auto mr-lg-auto text-center">
                        <span className="product_text product_num">1</span>
                        <div className="qty_sub qty_button trans_200 text-center"><span>-</span></div>
                        <div className="qty_add qty_button trans_200 text-center"><span>+</span></div>
                    </div>
                </div>
                <div className="product_total product_text"><span>Total: </span>$3.99</div>
            </li>
        );
    }
}

export default Cart_item;