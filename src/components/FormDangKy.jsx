import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer';
import login from './login.jsx';
import Singup from './singup.jsx';

class FormDangKy extends Component {
    render() {
        return (
            <div>
                <Header/>
                <br/>
                <br/><br/><br/><br/>
                <Singup/>
                <Footer/>
            </div>
        );
    }
}


export default FormDangKy;