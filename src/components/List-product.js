import React, { Component } from 'react';
import Product_item from './Product-item';

class List_product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Products: [
                {
                    url_image: "./images/cart_item_1.jpg",
                    name: "Cool Flufy Clothing without Stripes",
                    color: "BEIGE",
                    size: "L",
                    price: 3.99,
                    quantity: 1,

                },
                {
                    url_image: "./images/cart_item_1.jpg",
                    name: "Cool Flufy Clothing without Stripes",
                    color: "BEIGE",
                    size: "L",
                    price: 3.99,
                    quantity: 1,
                },
                {
                    url_image: "./images/cart_item_1.jpg",
                    name: "Cool Flufy Clothing without Stripes",
                    color: "BEIGE",
                    size: "L",
                    price: 3.99,
                    quantity: 1,
                }
            ]
        }
    }
    increase(id) {
        var arrProduct = this.state.Products;
        arrProduct[id].quantity++;
        this.setState({ Products: arrProduct });
    }
    decrease(id) {
        var arrProduct = this.state.Products;
        if (arrProduct[id].quantity > 0) {
            arrProduct[id].quantity--;
            this.setState({ Products: arrProduct });
        }
    }
    clear_cart() {
        this.setState({Products: null})
    }
    show_product = () => {
        if(this.state.Products != null) {
            const listProduct = this.state.Products.map((item, index) => {
                return (
                    <Product_item increase={(id) => {this.increase(id)}} decrease={(id) => {this.decrease(id)}} index={index} key={index} url_image={item.url_image} name={item.name} color={item.color} size={item.size} price={item.price} quantity={item.quantity} total={item.quantity * item.price} ></Product_item>
                );
            })
            return listProduct;
        }
    }
    total_cost() {
        var sum = 0;
        this.state.Products.map((item) => {
            sum += item.price*item.quantity;
        });
        return sum;
    }
    render() {
        return (
            <div class="product-cart">
                <table>
                    <thead class="header-table">
                        <td class="product-name">Product</td>
                        <td>Color</td>
                        <td>Size</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total</td>
                        <td></td>
                    </thead>
                    <tbody>
                        {this.show_product()}
                    </tbody>
                </table>
                <div class="button">
                    <a href="#" id="btn-clear" onClick={() => this.clear_cart()}>CLEAR CART</a>
                    <a href="#" id="btn-continue" >COUNTINUE SHOPPING</a>
                </div>
            </div>
        );
    }

}

export default List_product;