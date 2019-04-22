import React, { Component } from 'react';

class Header_title extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "YourName"
        }
    }
    render() {
        return (
    
          <div className="header-title">
            <h1>{this.props.children}</h1>
            <h3>Home / {this.state.userName}</h3>
          </div>
        );
      }
    
}

export default Header_title;