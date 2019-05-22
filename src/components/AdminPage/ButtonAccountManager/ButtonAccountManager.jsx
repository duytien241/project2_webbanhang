import "./../account.css";
import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';




class ButtonAccountManager extends Component{
    render() {
        return (
            <button type="button" class="btn btn-info" id="btnAM" className = "active">Quản lý tài khoản</button>
        );
    }
}
export default ButtonAccountManager;