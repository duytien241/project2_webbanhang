import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class ListProduct extends Component {
    constructor(props) {

        super(props);
        this.state = {
            products: [],
            images: []
        }
    }
    componentWillMount() {
        fetch('/api/v1/products')
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
    };
    do_delete = (id) =>{
        var an = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này");
        if(an== true){
        fetch('/api/v1/size/'+id,{
                method :'Delete'
            });
        fetch('/api/v1/images/'+id,{
                method :'Delete'
        })
        fetch('/api/v1/products/'+id,{
            method :'Delete'
        })
            .then(response => {
                alert("Thành công");
                window.location.reload();
            })
            .catch(err => {
                alert("Không thành công")
            });
        }
    }
  render() {
    var {products} = this.state;
    var printElement = products.map((product, index, products) => {
        return <tr  >
        <td>{products[index].id}</td>
        <td  className="col-lg-3"><Link to = {"/admin/product/" + products[index].id}> { products[index].proName }</Link></td>
        <td> { products[index].price }</td>
        <td className="col-lg-3"> { products[index].type }</td>
        <td className="col-lg-2">{ products[index].gender } </td> 
        <td>
        <button type="button" className="btn btn-danger xoa col-lg-12" name="xóa" id={products[index].id} onClick={()=>this.do_delete(products[index].id)}>Xóa</button>
        
        </td>
        </tr>
        
    });
    return (
      <div>
          <h2>Danh sách sản phẩm</h2>
        <div className="row">
        <div className="container">
            <table class="table table-striped table-inverse table-responsive">
                <thead class="thead-inverse">
                    <tr>
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Loại</th>
                        <th>Giá</th>
                        <th>Giới tính</th>
                        <th>Hoạt động</th>
                    </tr>
                    </thead>
                    <tbody>
                        {printElement}
                    </tbody>
            </table>
            </div>
        </div>
      </div>
      
    )
  }
}
