
import React from 'react';
import {Link} from 'react-router-dom'
class Cart_item extends React.Component {
    increaseQuantity() {
        this.props.increase(this.props.index);
    }
    decreaseQuantity() {
        this.props.decrease(this.props.index);
    }   
    render() {
        return (
            <li className="cart_item item_list d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-end justify-content-start">
                <div className="product d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start mr-auto">
                    <div><div className="product_number">{this.props.index}</div></div>
                    <div><div className="product_image"><img src={this.props.url_image} alt="img" /></div></div>
                    <div className="product_name_container">
                        <div className="product_name"><Link to="product">{this.props.name}</Link></div>
                        
                    </div>
                </div>
                <div className="product_color product_text"><span>Color: </span>{this.props.color}</div>
                <div className="product_size product_text"><span>Size: </span>{this.props.size}</div>
                <div className="product_price product_text"><span>Price: </span>${this.props.price}</div>
                <div className="product_quantity_container">
                    <div className="product_quantity ml-lg-auto mr-lg-auto text-center">
                        <span className="product_text product_num">{this.props.quantity}</span>
                        <div className="qty_sub qty_button trans_200 text-center"><span onClick={() => this.decreaseQuantity()}>-</span></div>
                        <div className="qty_add qty_button trans_200 text-center"><span onClick={() => this.increaseQuantity()}>+</span></div>
                    </div>
                </div>
                <div className="product_total product_text"><span>Total: </span>${this.props.total}</div>
            </li>
        );
    }
}

export default Cart_item;