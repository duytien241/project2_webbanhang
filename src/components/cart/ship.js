import React from 'react';

class Ship extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shipWays: [
                {
                    name: "Next day delivery",
                    cost: 4.99,
                    ischecked: false
                },
                {
                    name: "Standard delivery",
                    cost: 1.99,
                    ischecked: false
                },
                {
                    name: "Personal Pickup",
                    cost: 0,
                    ischecked: false
                }
            ]
        }
    }
    handleCheckBox(id) {
        var arrShipway = this.state.shipWays;
        arrShipway[id].ischecked = !arrShipway[id].ischecked;
        this.setState({ shipWays: arrShipway });
        this.props.updateShipCost(this.ship_cost());
    }
    show_shipway = () => {
        const listShip = this.state.shipWays.map((way, index) => {
            return (
                <li className="shipping_option d-flex flex-row align-items-center justify-content-start">
                    <label className="radio_container">
                    {(way.ischecked) ? <input onChange={() => this.handleCheckBox(index)} type="radio" id="radio_2" name="shipping_radio" className="shipping_radio" defaultChecked/>
                    :<input onChange={() => this.handleCheckBox(index)} type="radio" id="radio_2" name="shipping_radio" className="shipping_radio" />}
                        <span className="radio_mark" />
                        <span className="radio_text">{way.name}</span>
                    </label>
                    <div className="shipping_price ml-auto">${way.cost}</div>
                </li>
            );
        })
        return listShip;
    }
    ship_cost() {
        var shipCost = 0;
        this.state.shipWays.map((way) => {
            shipCost += way.cost;
        });
        return shipCost;
    }
    render() {
        return (
            <div className="col-lg-6">
                <div className="cart_extra cart_extra_1">
                    <div className="cart_extra_content cart_extra_coupon">
                        <div className="cart_extra_title">Coupon code</div>
                        <div className="coupon_form_container">
                            <form action="#" id="coupon_form" className="coupon_form">
                                <input type="text" className="coupon_input" required="required" />
                                <button className="coupon_button">apply</button>
                            </form>
                        </div>
                        <div className="coupon_text">Phasellus sit amet nunc eros. Sed nec congue tellus. Aenean nulla nisl, volutpat blandit lorem ut.</div>
                        <div className="shipping">
                            <div className="cart_extra_title">Shipping Method</div>
                            <ul>
                                {this.show_shipway()};
                                {this.props.updateCartCost}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ship;