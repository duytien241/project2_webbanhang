import React, { Component } from 'react';
import Dangky from './dangky';
import Header from './Header.jsx';
import Footer from './Footer';

class FormDangKy extends Component {
    render() {
        return (
            <div>
                <Header/>
                <br/>
                <br/><br/><br/><br/>
                <Dangky/>
                <Footer/>
            </div>
        );
    }
}


export default FormDangKy;