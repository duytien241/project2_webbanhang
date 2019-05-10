import React from 'react';
import Cart_item from './cart-item.jsx';

class List_cart_item extends React.Component {
    render() {
        return (
            <div className="cart_items">
                <ul className="cart_items_list">
                    {/* Cart Item */}
                   <Cart_item></Cart_item>
                </ul>
            </div>
        );
    }
}

export default List_cart_item;