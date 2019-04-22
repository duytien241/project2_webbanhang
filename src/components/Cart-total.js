import React, { Component } from 'react';

class Cart_total extends Component {

    render() {
        return (
            <div className="cart-total">
            <h1>Card Total</h1>
            <ul>
                <li>Subtotal<span>$ 29.90</span></li>
                <li>Shipping<span>FREE</span></li>
                <li>Total<span>$ 29.90</span></li>
            </ul>
            <a className="btn" href="">PROCESS TO CHECKOUT</a>
        </div>
        );
    }

}

export default Cart_total;