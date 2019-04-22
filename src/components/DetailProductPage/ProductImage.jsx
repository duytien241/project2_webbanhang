import React, {Component} from 'react';

class ProductImage extends Component{
	render() {
		 return (

      <div className="col-lg-6">
        <div className="product_image_slider_container">
        	 <div><img src={require("../../images/product_2.jpg" )}/></div>
        </div>
      </div>
    );
	}
}
export default ProductImage;