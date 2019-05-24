import React from 'react';

class Cart_button extends React.Component {
    render() {
        return (
            <div className="cart_buttons d-flex flex-row align-items-start justify-content-start">
                <div className="cart_buttons_inner ml-sm-auto d-flex flex-row align-items-start justify-content-start flex-wrap">
                    <button onClick={this.props.clear_cart} type="button " className="button btn-danger button_clear">Xóa sạch</button>
                    <button type="button" className="button btn-primary">Tiếp tục mua sắp</button>
                    
                </div>
            </div>
        )
    }
}

export default Cart_button;