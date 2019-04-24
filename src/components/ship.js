import React, { Component } from 'react';

class Ship extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shipWays: [
                {
                    name: "Next day delivery",
                    cost: 4.99,
                    ischecked : false
                },
                {
                    name: "Standard delivery",
                    cost: 1.99,
                    ischecked : false
                },
                {
                    name: "Personal Pickup",
                    cost: 0,
                    ischecked : false
                }
            ]
        }
    } 
    handleCheckBox(id){
        var arrShipway = this.state.shipWays;
        arrShipway[id].ischecked = !arrShipway[id].ischecked;
        this.setState({shipWays : arrShipway});
    }
    show_shipway = () => {
        const listShip = this.state.shipWays.map((way,index) => {
            return (
                <li> <input ischecked={way.ischecked} name={way.name} cost={way.cost} key ={index} type="checkbox" name="" id="" onChange={() => this.handleCheckBox(index)}/><span>{way.name}</span><span>$ {way.cost}</span></li>
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
            <div className="ship">
                <h1>Coupon code</h1>
                <input type="text" name="" id=""/><span><a href="" className="btn">Apply</a></span>
                <p>Phasellus sit amet nunc eros. Sed nec congue tellus. Aenean nulla nisl, volutpat blandit lorem ut.</p>
                <h2>Shipping Method</h2>
                <ul>
                    {this.show_shipway()}
                </ul>
            </div>
        );
    }

}

export default Ship;