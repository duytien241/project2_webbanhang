import React, { Component } from 'react';

class Product_item extends Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate() {
        console.log("product-item is created");
    }
    increaseQuantity() {
        this.props.increase(this.props.index);
    }
    decreaseQuantity() {
        this.props.decrease(this.props.index);
    }    
    render() {
        return (
            <tr>
                <td class="product_name">
                    <img src={this.props.url_image} />
                    <span>{this.props.name}</span>
                </td>
                <td>{this.props.color}</td>
                <td>{this.props.size}</td>
                <td>$ {this.props.price}</td>
                <td>
                    <div class="quantity">
                        <span onClick={() => this.increaseQuantity()}>+</span>
                        <span>{this.props.quantity}</span>
                        <span onClick={() => this.decreaseQuantity()}>-</span>
                    </div>
                </td>
                <td ref="total">$ {this.props.total}</td>
                <td></td>
            </tr>
        );
    }

}

export default Product_item;