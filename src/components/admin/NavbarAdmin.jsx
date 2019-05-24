
import "./account.css";
import React, {Component} from 'react';
import ButtonAccountManager from './ButtonAccountManager/ButtonAccountManager.jsx';
class NavbarAdmin extends Component{
	render() {
        return (
            <div className = "navbarAdmin">
                <ButtonAccountManager />
            </div>
        );
	}
}
export default NavbarAdmin;