import React, { Component } from 'react';
import Adminpage from './Adminpage';
import EditProduct from './EditProduct';

class EditProductPage extends Component {
    render() {
        return (
            <div>
                <Adminpage/>
                <section id="main-content">
                <section className="wrapper">
                <EditProduct/>
                </section>
                </section>
            </div>
        );
    }
}

export default EditProductPage;