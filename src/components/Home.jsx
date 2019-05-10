import React, { Component } from 'react';
import Product from './Product.jsx';
import Slide from './Slide';
import '../styles/responsive.css';
import Popular from './Popular';
import Feature from './Feature';
import Header from './Header.jsx';
import Footer from './Footer';
import { isNull } from 'util';
import axios from 'axios';
class Home extends Component {
    constructor(props) {

        super(props);
        this.state = {
            products: [],
            images: []
        }
    }
    componentWillMount() {
        fetch('/api/v1/products')
            .then(response => {
                return response.json();
            })
            .then(res => {

                this.setState({
                    products: res
                });
            }).catch(err => {
                console.log('A');
            });
        fetch('/api/v1/images')
            .then(response => {
                return response.json();
            })
            .then(res => {
                this.setState({
                    images: res
                })
            }).catch(err => {
                console.log('A');
            });
    };


    render() {
        var { products } = this.state;
        var { images } = this.state;

        function getImage(proID) {
            for (let i = 0; i < images.length; i++) {
                if (images[i].id == proID) {

                    return images[i].url.toString();
                }
            }

        }

        var printElement = products.map((product, index, products) => {
            return <Product 
            id = {products[index].id}
            name = { products[index].proName }
            img = { getImage(products[index].proID) }
            price = { products[index].price }
            desc = { products[index].descriptions } > < /Product>
        });

        return (

            <div>
            <Header></Header>
      
            <Slide/>
            
            <Popular/>
            <div className="container">
            
            <div class="row products_row products_container grid">
                {printElement};
            </div>
            
            <Feature></Feature>
            </div>
           
            <Footer/>
            </div> 

        );

    }
}
export default Home;