import React, { Component } from 'react';

class Cart_total extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        return (
            <div className="cart-total">
            <h1>Card Total</h1>
            <ul>
                <li>Subtotal<span>${this.props.total_cost}</span></li>
                <li>Shipping<span>$ 0</span></li>
                <li>Total<span>$ {this.props.total_cost}</span></li>
            </ul>
            <a className="btn" href="">PROCESS TO CHECKOUT</a>
        </div>
        );
    }

}

export default Cart_total;