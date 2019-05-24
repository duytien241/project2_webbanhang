import React, { Component } from 'react';
import Adminpage from './Adminpage';
import ListProduct from './ListProduct';

class PageListProduct extends Component {
    render() {
        return (
            <div>
                <Adminpage/>
                <section id="main-content">
                <section className="wrapper">
                <ListProduct/>
                </section>
                </section>
            </div>
        );
    }
}

export default PageListProduct;