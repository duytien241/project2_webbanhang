import React from 'react';
import Cart_item from './cart-item.jsx';
import Cart_button from './cart-button.jsx';

class List_cart_item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Products: [{
                    url_image: "../../images/product/N19_0.jpg",
                    name: "Cool Flufy Clothing without Stripes",
                    color: "BEIGE",
                    size: "L",
                    price: 3.99,
                    quantity: 1,

                },
                {
                    url_image: "../../images/product/N17_0.jpg",
                    name: "Cool Flufy Clothing without Stripes",
                    color: "BEIGE",
                    size: "L",
                    price: 3.99,
                    quantity: 1,
                },
                {
                    url_image: "../../images/product/N18_0.jpg",
                    name: "Cool Flufy Clothing without Stripes",
                    color: "BEIGE",
                    size: "L",
                    price: 3.99,
                    quantity: 1,
                }
            ],
           
        }
    }
   
    increase(id) {
        var arrProduct = this.state.Products;
        arrProduct[id].quantity++;
        this.setState({ Products: arrProduct });
        this.props.updateCartCost(this.total_cost());
        
    }
    decrease(id) {
        var arrProduct = this.state.Products;
        if (arrProduct[id].quantity > 0) {
            arrProduct[id].quantity--;
            this.setState({ Products: arrProduct });
            this.props.updateCartCost(this.total_cost());
        }
        
    }
    clear_cart() {
        this.setState({ Products: null })
    }
    show_cart_item = () => {
        if (this.state.Products != null) {
            const listProduct = this.state.Products.map((item, index) => {
                return ( 
        
                    <Cart_item 
                    increase = {(id) => { this.increase(id)}}
                    decrease = {(id) => { this.decrease(id) } }
                    index = { index }
                    key = { index }
                    url_image = { item.url_image }
                    name = { item.name }
                    color = { item.color }
                    size = { item.size }
                    price = { item.price }
                    quantity = { item.quantity }
                    total = { (item.quantity * item.price).toFixed(2) }>
                    </Cart_item>
                    
                );
            })
            return listProduct;
        }
    }
    total_cost() {
        if(this.state.Products == null) {
            return 0;
        }
        var sum = 0;
        this.state.Products.map((item) => {
            sum += item.price * item.quantity;
        });
        return sum;
    }
    
    render() {
        return (
            <div>
                
                <div className="cart_items">
                <ul className="cart_items_list">
                    {/* Cart Item */}
                    {this.show_cart_item()}
                </ul>
            </div>
            {/* Cart Buttons */}
            <Cart_button clear_cart={() => this.clear_cart()}></Cart_button>
            
            </div>
        );
    }
    
 }

export default List_cart_item;