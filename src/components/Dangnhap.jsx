import React, { Component } from 'react';

class Dangnhap extends Component {
    render() {
        return (
            <div>
                <div className="container text-dark">
        <h2>Đăng Nhap Tài Khoản</h2>
        <h5>Đăng ký để Little Closet có thể phục vụ bạn tốt hơn thông qua các chương trình chăm sóc khánh hàng và các khuyến mại đặc biệt dành riêng cho khách hàng mua online</h5>
        <div className="border" />
        <br />
        <div className="card-group">
          <div className="card">
            <div className="card-body font-weight-bold">
              <h3 className="card-title">Đã có tài khoản?</h3>
              <div className="form-group col-lg-7">
                <label htmlFor>Tên Đăng Nhập *:</label>
                <input type="text" className="form-control col-lg-12" name="tendangnhap" id="tendangnhap" rows={1} onchange="nhaptaikhoan();" />
                <p id="output" className="text-danger ml-1" /><p>
                </p></div>
              <div className="form-group col-lg-7">
                <label htmlFor>Mật Khẩu *:</label>
                <input type="password" className="form-control col-lg-12" name="matkhau" id="matkhau" rows={1} onchange="nhapmatkhau()" />
              </div>
              <div className="container col-lg-12">
                <input type="submit" className="btn btn-danger pl-5 pr-5 pt-2 pb-2 text-center" name="dangnhap" id="dangnhap" defaultValue="Đăng Nhập" />
              </div>
              <br />
              <a className="btn btn-default text-dark test-left col-lg-12 border-0" href="#" role="button">Quên mật khẩu?</a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="container col-lg-12">
                <h3 className="card-title">Khác Hàng Mới ?</h3>
                <button type="button" className="btn btn-danger  pl-5 pr-5 pt-2 pb-2 text-center" name="dangky" id="dangky" onclick="toidangky();"><i className="fa fa-user" aria-hidden="true" /> Đăng Ký</button>
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>
        );
    }
}

export default Dangnhap;