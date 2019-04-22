import React, { Component } from 'react';

class Ship extends Component {

    render() {
        return (
            <div className="ship">
                <h1>Coupon code</h1>
                <input type="text" name="" id=""/><span><a href="" className="btn">Apply</a></span>
                <p>Phasellus sit amet nunc eros. Sed nec congue tellus. Aenean nulla nisl, volutpat blandit lorem ut.</p>
                <h2>Shipping Method</h2>
                <ul>
                    <li> <input type="checkbox" name="" id="" /><span>Next day delivery</span><span>$4.99</span></li>
                    <li> <input type="checkbox" name="" id="" /><span>Standard delivery</span><span>$1.99</span></li>
                    <li> <input type="checkbox" name="" id="" /><span>Personal Pickup</span><span>FREE</span></li>

                </ul>
            </div>
        );
    }

}

export default Ship;