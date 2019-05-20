import React, { Component } from 'react';
import Dangnhap from './Dangnhap';
import Header from './Header.jsx';
import Footer from './Footer';
import Login from './login.jsx';
class FormDangnhap extends Component {
    render() {
        return (
            <div>
                <Header/>
                <br/>
                <br/><br/><br/><br/>
                <Login/>
                <Footer/>
            </div>
        );
    }
}


export default FormDangnhap;