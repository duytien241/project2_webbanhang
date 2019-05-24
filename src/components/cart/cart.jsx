
import React from 'react';
import Cart_bar from './cart-bar.jsx';
import List_cart_item from './list-cart-item.jsx';
import Ship from './ship';
import Total from './total';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartCost: 0,
            shipCost: 0
        }
        this.updateCartCost = this.updateCartCost.bind(this);
        this.updateShipCost = this.updateShipCost.bind(this);
    }
    updateCartCost(data) {
        this.setState({cartCost:data})
    }
    updateShipCost(data) {
        this.setState({shipCost:data});
    }
    render() {
        return (
            <div className="cart_section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="cart_container">
                                {/* Cart Bar */}
                                <Cart_bar ></Cart_bar>
                                {/* Cart Items */}
                                <List_cart_item updateCartCost={this.updateCartCost}></List_cart_item>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row cart_extra_row">
                        <Ship updateShipCost={this.updateShipCost}></Ship>
                        <Total shipCost={this.state.shipCost} cartCost={this.state.cartCost.toFixed(2)}></Total>
                    </div>
                </div>
                
            </div>
        );
    }

}

export default Cart;