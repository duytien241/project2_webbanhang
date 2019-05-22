
import HeaderAdmin from "./HeaderAdmin.jsx";
import AccountManager from "./AccountManager/AccountManager.jsx";
import NavbarAdmin from "./NavbarAdmin.jsx";
import React, {Component} from 'react';

class AdminPage extends Component{
	render() {
    return (
    	<div>
		    <div>
		      	<HeaderAdmin />
		    </div>
		    <div>
		      	<NavbarAdmin />
		      	<AccountManager />
		    </div>
		 
        </div>
    );
	}
}
export default AdminPage;