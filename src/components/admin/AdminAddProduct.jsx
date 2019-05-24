import React, { Component } from 'react';
import Adminpage from './Adminpage';
import AddProduct from './AddProduct';

class AdminAddProduct extends Component {
    render() {
        return (
            <div>
                <Adminpage/>
                <section id="main-content">
                <section className="wrapper">
                <AddProduct/>
                </section>
                </section>
            </div>
        );
    }
}

export default AdminAddProduct;