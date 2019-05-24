import "./../account.css";
import React, {Component} from 'react';
import routes from './../../../routes.js';
import {BrowserRouter as Router,Switch, Route } from "react-router-dom";
class AccountManager extends Component{
	render() {
        return (
        	<Router>
        		<div className = "main-content">
	   				<div className = "wrapper">
	        			{this.showContent(routes)}
	   				</div>
            	</div>
        	</Router>


           
        );
	}
	showContent = (routes) => {
		var result = null;
		if(routes.length > 0){
			result = routes.map((route, index) => {
				return <Route
					key = {index}
					path = {route.path}
					extract = {route.extract}
					component = {route.main}
				/>
			});
		}
		return <Switch>{result}</Switch>
	}
}
export default AccountManager;