import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="Menu-bar">
                    <div className="logo">
                        <img src="./images/logo_1.png" alt />
                        <div className="logo-title"><a href="#">Little Closet</a></div>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#">Women</a></li>
                            <li><a href="#">Men</a></li>
                            <li><a href="#">Kids</a></li>
                            <li><a href="#">Home Deco</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="search-box">
                        <input type="text" name id placeholder="Search Item" />
                        <span><img src="./images/search.png" /></span>
                    </div>
                    <div className="social-icon">
                        <ul>
                            <li><img src="./images/user.svg" /></li>
                            <li><img src="./images/cart.svg" /></li>
                            <li><img src="./images/phone.svg" /></li>
                            <span>+1 912-252-7350</span>
                        </ul>
                    </div>
                </div>
                <div class="clearfix"></div>
                {/* Content */}
                {/* <Route path="/" exact component={App}/>
                <Route path="/Woman" component={App}/>
                <Route path="/Men" component={App}/>
                <Route path="/Kids" component={App}/>
                <Route path="/HomeDeco" component={App}/>
                <Route path="/Contact" component={App}/> */}
            </Router>
        );
    }
}

export default App;
