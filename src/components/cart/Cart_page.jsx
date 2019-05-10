import React from 'react';
import Home from './Home.jsx';
import Cart from './cart.jsx';
import Header from '../Header'
import Footer from '../Footer';

class Cart_page extends React.Component {
    render() {
        return (
            <div className="super_container">
                <div className="super_container_inner">
                    <div className="super_overlay" />
                    <Header/>
                    <Home></Home>
                    {/* Cart */}
                    <Cart></Cart>
                    {/* Footer */}
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

export default Cart_page;