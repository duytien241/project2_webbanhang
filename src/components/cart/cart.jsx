
import React from 'react';
import Cart_bar from './cart-bar.jsx';
import List_cart_item from './list-cart-item.jsx';
import Cart_button from './cart-button.jsx';
import Ship from './ship';
import Total from './total';

class Cart extends React.Component {
    render() {
        return (
            <div className="cart_section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="cart_container">
                                {/* Cart Bar */}
                                <Cart_bar></Cart_bar>>
                                {/* Cart Items */}
                                <List_cart_item></List_cart_item>
                                {/* Cart Buttons */}
                                <Cart_button></Cart_button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row cart_extra_row">
                        <Ship></Ship>
                        <Total></Total>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;