import React from 'react';

class Total extends React.Component {
    render() {
        return (
            <div className="col-lg-6 cart_extra_col">
                <div className="cart_extra cart_extra_2">
                    <div className="cart_extra_content cart_extra_total">
                        <div className="cart_extra_title">Cart Total</div>
                        <ul className="cart_extra_total_list">
                            <li className="d-flex flex-row align-items-center justify-content-start">
                                <div className="cart_extra_total_title">Subtotal</div>
                                <div className="cart_extra_total_value ml-auto">$29.90</div>
                            </li>
                            <li className="d-flex flex-row align-items-center justify-content-start">
                                <div className="cart_extra_total_title">Shipping</div>
                                <div className="cart_extra_total_value ml-auto">Free</div>
                            </li>
                            <li className="d-flex flex-row align-items-center justify-content-start">
                                <div className="cart_extra_total_title">Total</div>
                                <div className="cart_extra_total_value ml-auto">$29.90</div>
                            </li>
                        </ul>
                        <div className="checkout_button trans_200"><a href="checkout.html">proceed to checkout</a></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Total;