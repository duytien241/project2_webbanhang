import React, { Component } from 'react';
import Header from './Header'
import Header_title from './Header-title';
import List_product from './List-product';
import Ship from './ship';
import Cart_total from './Cart-total';
class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total_cost: 10,
      ship_cost: 0
    }
    console.log("App is created");
  }
  do_somthing() {
    alert(this.refs.total.total_cost());
    alert(this.refs.ship.ship_cost());
  }
  total_cost() {
    this.setState({
      total_cost:this.refs.total.total_cost()
    });
  }
  ship_cost() {
    this.setState({
      ship_cost:this.refs.ship.ship_cost()
    });
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Header_title>Shopping Cart</Header_title>
        <List_product ref="total"></List_product>
        <Ship ref="ship"></Ship>
        <Cart_total total_cost={this.state.total_cost} ship_cost = {this.state.ship_cost}></Cart_total>
      </div>
    );
  }
  
  componentDidUpdate() {
    this.setState({
      total_cost:this.refs.total.total_cost()
    });
    this.setState({
      ship_cost:this.refs.ship.ship_cost()
    });
  }
}

export default CartPage;