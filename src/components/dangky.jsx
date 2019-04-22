import React, { Component } from 'react';

class dangky extends Component {
    render() {
        return (
            <div>
                <div className="container text-dark">
        <h2>Đăng Ký Tài Khoản</h2>
        <h4>Đăng ký để Little Closet có thể phục vụ bạn tốt hơn thông qua các chương trình chăm sóc khánh hàng và các khuyến mại đặc biệt dành riêng cho khách hàng mua online</h4>
        <div className="border" />
        <br />
        <div className="card-group text-dark font-weight-bold">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Khách Hàng Mới?</h3>
              <div className="form-group col-lg-9">
                <label htmlFor>Họ Và Tên*:</label>
                <input type="text" className="form-control col-lg-12" name="ten" id rows={1} />
              </div>
              <div className="form-group col-lg-9">
                <label htmlFor>Tên Đăng Nhập *:</label>
                <input type="text" className="form-control col-lg-12" name="tendangnhap" id rows={1} />
              </div>
              <div className="form-group col-lg-9">
                <label htmlFor>Mật Khẩu *:</label>
                <input type="password" className="form-control col-lg-12" name="matkhau" id rows={1} />
              </div>
              <div className="form-group col-lg-9">
                <label htmlFor>Mật Khẩu *:</label>
                <input type="password" className="form-control col-lg-12" name="rematkhau" id rows={1} />
              </div>
              <div className="form-group col-lg-9">
                <label htmlFor>Email *:</label>
                <input type="email" className="form-control col-lg-12" name="email" id rows={1} />
              </div>
              <div className="form-group col-lg-9">
                <label htmlFor>Số Điện Thoại *:</label>
                <input type="text" className="form-control col-lg-12" name="sdt" id rows={1} />
              </div>
              <div className="form-group col-lg-9">
                <label htmlFor>Địa Chỉ *:</label>
                <input type="text" className="form-control col-lg-12" name="diachi" id rows={1} />
              </div>
              <input type="submit" className="btn btn-danger col-lg-3  pl-5 pr-5 pt-2 pb-2 ml-4 text-center" name="dangky" defaultValue="Đăng Ký" />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="container col-lg-12">
                <h3 className="card-title">Đã Có Tài Khoản?</h3>
                <button type="button" className="btn btn-danger  pl-5 pr-5 pt-2 pb-2 text-center" name="dangnhap" onclick="toidangnhap()"><i className="fa fa-sign-in" aria-hidden="true" /> Đăng Nhập</button>
              </div>
            </div>
          </div>
        </div>
      </div>    
            </div>
        );
    }
}

export default dangky;  