import React from 'react';
import {Link} from 'react-router-dom'
class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="home_container d-flex flex-column align-items-center justify-content-end">
                    <div className="home_content text-center">
                        <div className="home_title">Shopping Cart</div>
                        <div className="breadcrumbs d-flex flex-column align-items-center justify-content-center">
                            <ul className="d-flex flex-row align-items-start justify-content-start text-center">
                                <li><Link to ="/">Home</Link></li>
                                <li>Your Cart</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;