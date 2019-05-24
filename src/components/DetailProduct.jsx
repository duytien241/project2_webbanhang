import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer';
import Detail from './DetailProductPage/ProductInfo.jsx';
import Detail2 from './DetailProductPage/ProductImage.jsx';
import Popular from './Popular';
import Feature from './Feature';
// import '../styles/product.css';
// import '../styles/product_responsive.css';
class DetailProduct extends Component {
    constructor(props) {

        super(props);
        this.state = {
            product: [],
            images: []
        }
    }
    componentDidMount() {
        var id = this.props.match.params.id;  
        fetch('/api/v1/products/'+id)
            .then(response => {
                return response.json();
            })
            .then(res => {
                this.setState({
                    product: res
                })
            }).catch(err => {
                console.log('A');
            });
        fetch('/api/v1/images')
            .then(response => {
                return response.json();
            })
            .then(res => {
                this.setState({
                    images: res
                })
            }).catch(err => {
                console.log('A');
            });
    };

    render() {  
        var imgurl;
        var {images} = this.state;
        for( let i = 0 ; i < images.length; i++){
            if(images[i].proID==this.props.match.params.id){
                imgurl = images[i].url;
                console.log(imgurl);
            }
        }  
        return (
            <div>
            <Header/>
            <Popular/>
            <div className="super_container_inner">
		    <div className="super_overlay"></div>
            <div className=" product container ">
            
            <div className ="row">
              <Detail2 img = {imgurl}></Detail2>
              <Detail product = {this.state.product}></Detail>
            </div>
            </div>
           </div>
           <Footer/>
           </div>

        );
    }
}

export default DetailProduct;