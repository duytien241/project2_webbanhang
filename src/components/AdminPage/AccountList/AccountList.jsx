import "./../account.css";
import React, {Component} from 'react';


class AccountList extends Component{
      render() {
        return (
            <div className= "table-responsive-xl">
                  <table className="table table-bordered table-hover">
                        <thead>
                              <tr>  
                                    <th>STT</th>
                                    <th>Mã số</th>
                                    <th>Tên tài khoản</th>
                                    <th>Mật khẩu</th>
                                    <th>Tên khách hàng</th>
                                    <th>Email</th>
                                    <th>Giới tính</th>
                                    <th>Địa chỉ</th>
                                    <th>Số điện thoại</th>
                                    <th>Ngày tạo</th>
                              
                                    <th colspan="2">Thao tác</th>

                              </tr>
                        </thead>
                        <tbody>
                            {this.props.children}                                     
                        </tbody>
                  </table>
            </div>            

        );
      }
}
export default AccountList;