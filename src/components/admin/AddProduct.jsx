import React, { Component } from 'react';

class AddProduct extends Component {
  constructor(props) {

    super(props);
    this.state = {
        products: [],
        images: []
    }
}
  themsp = ()=>{
    let proName = document.getElementById("tensp").value;
    let type = document.getElementById("loaisp").value;
    let price = document.getElementById("giaban").value;
    let description = document.getElementById("mota").value;
    let material = document.getElementById("chatlieu").value;
    let gender = document.getElementById("gioitinh").value; 
    let companyID  = document.getElementById("company").value;
    var filename = document.getElementById("uploadimg").files;
    
    fetch('/api/v1/product',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({proName:proName,type:type,price :parseInt(price),description:description,material:material,gender : gender,companyID: companyID})
    }).then((res) => res.json())
    .then((data) =>  console.log(data))
    .catch((err)=>console.log(err))
    for(let i = 0 ; i < filename.length; i++){
      console.log(filename[i].name);
      
      
      fetch('/api/v1/images/',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({proID:232,url : filename[i].name})
      }).then((res) => res.json())
      .then((data) =>  console.log(data))
      .catch((err)=>console.log(err)) ;
      alert("Thành công");
      window.location = "/admin/listproduct" 
    }
    
  }
    render() {
        return (
            <div className="row">
       
       <div className="col-sm-3 col-md-3">
          <label htmlFor>Tên sản phẩm</label>
        </div>
        <div className="col-sm-9 col-md-9">
          <input type="text" name="tensp" id="tensp" placeholder="Tên sản phẩm" className="form-control" />
        </div>
        <div className="col-sm-3 col-md-3">
          <label htmlFor>Loại sản phẩm</label>
        </div>
        <div className="col-sm-9 col-md-9">
          <input type="text" name="loaisp" id="loaisp" placeholder="Loại sản phẩm" className="form-control" />
        </div>
        <div className="col-sm-3 col-md-3">
          <label htmlFor>Giá bán</label>
        </div>
        <div className="col-sm-9 col-md-9">
          <input type="text" name="giasp" id="giaban" placeholder="Giá sản phẩm" className="form-control" />
        </div>
        <div className="col-sm-3 col-md-3">
          <label htmlFor>Công ty sản xuất</label>
        </div>
        <div className="col-sm-9 col-md-9">
          <input type="text" name="cty" id ="company" placeholder="Công ty sản xuất" className="form-control" />
        </div>
        <div className="col-sm-3 col-md-3">
          <label htmlFor>Mô tả</label>
        </div>
        <div className="col-sm-9 col-md-9">
          <input type="text" name="motasp" id="mota" placeholder="Mô tả sản phẩm" className="form-control" />
        </div>
        <div className="col-sm-3 col-md-3">
          <label htmlFor>Chất liệu</label>
        </div>
        <div className="col-sm-9 col-md-9">
          <input type="text" name="chatlieusp" id = "chatlieu" placeholder="Chất liệu sản phẩm" className="form-control" />
        </div>
        <div className="col-sm-3 col-md-3">
          <label htmlFor>Giới tính</label>
        </div>
        <div className="col-sm-9 col-md-9">
          <input type="text" name="gioitinh" id = "gioitinh" placeholder="Giới tính" className="form-control" />
        </div>
        <div className="col-sm-3 col-md-3">
          <label htmlFor>Ảnh</label>
        </div>
        <div className="col-sm-9 col-md-9">
        <input id="uploadimg" name="img[]" type="file" className="file" multiple data-show-upload="true" data-show-caption="true"/>
        </div>
        <br/>
        <div className="col-sm-3 col-md-3 ">

          <label htmlFor>Size</label>
        </div>
        <div className="col-sm-2 col-md-2">
        <div className="checkbox">
            <label><input type="checkbox" value="1"/>S</label>
          </div>
          </div>
          <div className="col-sm-2 col-md-2">
        <div className="checkbox">
            <label><input type="checkbox" value="2"/>M</label>
          </div>
          </div>
          <div className="col-sm-2 col-md-2">
        <div className="checkbox">
            <label><input type="checkbox" value="3"/>L</label>
          </div>
          </div>
          <div className="col-sm-2 col-md-2">
        <div className="checkbox">
            <label><input type="checkbox" value="4"/>XL</label>
          </div>
          </div>
          <div className="col-sm-3 col-md-3">
          <label htmlFor>Màu sắc</label>
        </div>
        <div className="col-sm-9 col-md-9">
        <input id="color" name="color[]" type="file" className="file" multiple data-show-upload="true" data-show-caption="true"/>
        </div>
        <div className="col-sm-3 col-md-3">
          <input type = "submit" value="Thêm" className = "btn btn-primary" onClick ={this.themsp}/>
        </div>
        
      </div>
        );
    }
}

export default AddProduct;