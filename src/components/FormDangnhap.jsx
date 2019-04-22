import React, { Component } from 'react';
import Dangnhap from './Dangnhap';
import Header from './Header.jsx';
import Footer from './Footer';

class FormDangnhap extends Component {
    render() {
        return (
            <div>
                <Header/>
                <br/>
                <br/><br/><br/><br/>
                <Dangnhap/>
                <Footer/>
            </div>
        );
    }
}


export default FormDangnhap;