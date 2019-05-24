import React, { Component } from 'react';

class EditProduct extends Component {
    constructor(props) {

        super(props);
        this.state = {
            products: [],
            images: []
        }
    }
    componentWillMount() {
        var id = 5; 
        fetch('/api/v1/products/'+id)
            .then(response => {
                return response.json();
            })
            .then(res => {

                this.setState({
                    products: res
                });
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
  themsp = ()=>{
    var proID = localStorage.getItem('proID');
    let proName = document.getElementById("tensp").value;
    let type = document.getElementById("loaisp").value;
    let price = document.getElementById("giaban").value;
    let description = document.getElementById("mota").value;
    let material = document.getElementById("chatlieu").value;
    let gender = document.getElementById("gioitinh").value; 
    let companyID  = document.getElementById("company").value;
 
    fetch('/api/v1/product' +proID,{
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({proName:proName,type:type,price :parseInt(price),description:description,material:material,gender : gender,companyID: companyID})
    }).then((res) => res.json())
    .then((data) =>  console.log(data))
    .catch((err)=>console.log(err))
    fetch('/api/v1/images',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({proName:proName,type:type,price :parseInt(price),description:description,material:material,gender : gender,companyID: companyID})
    }).then((res) => res.json())
    .then((data) =>  console.log(data))
    .catch((err)=>console.log(err));
    window.location = "/admin/listproduct"
  }
    render() {
      var {products} = this.state;
      console.log(products);
        return (
            <div className="row">
       
       <div className="col-sm-3 col-md-3">
          <label htmlFor>Tên sản phẩm</label>
        </div>
        <div className="col-sm-9 col-md-9">
          <input type="text" name="tensp" id="tensp" placeholder="Tên sản phẩm" className="form-control" value ={products.proName}  />
        </div>
        <div className="col-sm-3 col-md-3">
          <label htmlFor>Loại sản phẩm</label>
        </div>
        <div className="col-sm-9 col-md-9">
          <input type="text" name="loaisp" id="loaisp" placeholder="Loại sản phẩm" className="form-control" value ={products.type} />
        </div>
        <div className="col-sm-3 col-md-3">
          <label htmlFor>Giá bán</label>
        </div>
        <div className="col-sm-9 col-md-9">
          <input type="text" name="giasp" id="giaban" placeholder="Giá sản phẩm" className="form-control" value ={products.price} />
        </div>
        <div className="col-sm-3 col-md-3">
          <label htmlFor>Công ty sản xuất</label>
        </div>
        <div className="col-sm-9 col-md-9">
          <input type="text" name="cty" id ="company" placeholder="Công ty sản xuất" className="form-control" value ={products.companyID} />
        </div>
        <div className="col-sm-3 col-md-3">
          <label htmlFor>Mô tả</label>
        </div>
        <div className="col-sm-9 col-md-9">
          <input type="text" name="motasp" id="mota" placeholder="Mô tả sản phẩm" className="form-control" value ={products.description} />
        </div>
        <div className="col-sm-3 col-md-3">
          <label htmlFor>Chất liệu</label>
        </div>
        <div className="col-sm-9 col-md-9">
          <input type="text" name="chatlieusp" id = "chatlieu" placeholder="Chất liệu sản phẩm" className="form-control" value ={products.material} />
        </div>
        <div className="col-sm-3 col-md-3">
          <label htmlFor>Giới tính</label>
        </div>
        <div className="col-sm-9 col-md-9">
          <input type="text" name="gioitinh" id = "gioitinh" placeholder="Giới tính" className="form-control" value ={products.gender}/>
        </div>
        
        <br/>
        
        <div className="col-sm-3 col-md-3">
          <input type = "submit" value="Xác nhận" className = "btn btn-primary" onClick ={this.themsp}/>
        </div>
        
      </div>
        );
    }
}

export default EditProduct;