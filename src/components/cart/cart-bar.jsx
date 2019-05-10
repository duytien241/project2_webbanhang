import React from 'react';

class Cart_bar extends React.Component {
    render() {
        return (
            <div className="cart_bar">
                <ul className="cart_bar_list item_list d-flex flex-row align-items-center justify-content-end">
                    <li className="mr-auto">Product</li>
                    <li>Color</li>
                    <li>Size</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Total</li>
                </ul>
            </div>
        );
    }
}

export default Cart_bar;