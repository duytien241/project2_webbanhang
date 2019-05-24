import React, {Component} from 'react';

class ProductImage extends Component{
	render() {
    const img =this.props.img;

    return (
     
      <div className="col-lg-6">
        <div className="product_image_slider_container">
        	 <div><img src={img}/></div>
        </div>
      </div>
    );
	}
}
export default ProductImage;