import React, {Component} from 'react';
import callApi from './../../utils/apiCaller.js';
import {Link} from 'react-router-dom'
import './accountAction.css';

class AccountActionPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			id :  '',
			txtUserName : '',
			txtPassword : '',
			txtName : '',
			txtEmail: '',
			txtGender: '',
			txtAddress: '',
			txtPhone: '',
			txtCreated: ''
		}
	}
	componentDidMount(){
		var {match} = this.props;
		var id = match.params.id;
		if(id){
			
			callApi("account/" + id, 'GET', null).then(res => {
				var data = res.data;
				this.setState({
					id : data.accID,
					txtUserName : data.username,
					txtPassword : data.password,
					txtName : data.name,
					txtEmail: data.email,
					txtGender: data.gender,
					txtAddress: data.address,
					txtPhone: data.phone,
					txtCreated: data.created
				});
			});
		}
	}
	onChange = (e) => {
		var target = e.target;
		var name = target.name;
		var value = target.value;
		this.setState({
			[name] : value
		})
	}
	onSave = (e) => {
		e.preventDefault();
		var {id, txtUserName, txtPassword, txtName, txtEmail, txtGender, txtAddress, txtPhone, txtCreated} = this.state;
		var {history} = this.props;
		if(id){
			callApi('account/' + id, 'PUT', {
				username : txtUserName,
				password : txtPassword,
				name : txtName,
				email : txtEmail,
				gender : txtGender,
				address : txtAddress,
				created : txtCreated,
				phone : txtPhone
			}).then(res => {
				history.goBack();
			});

		}else{
			callApi('account', 'POST', {
			username : txtUserName,
			password : txtPassword,
			name : txtName,
			email : txtEmail,
			gender : txtGender,
			address : txtAddress,
			created : txtCreated,
			phone : txtPhone
		}).then(res => {
			history.goBack();
		});
		}
		
	}



	render(){
		var {txtUserName, txtPassword, txtName, txtEmail, txtGender, txtAddress, txtPhone, txtCreated} = this.state;
		return (			
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title"></h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSave}>
                    	<table>
                			<tr>                              
                            	<td className="abc">
                                	<label>Tên tài khoản:</label>
                                </td>
                                <td>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="txtUserName"
                                        value={txtUserName}
                                        onChange={this.onChange}
                                    />
                                </td>            
	                        </tr>
	                        <tr>					            
                            	<td>
                               		<label>Mật khẩu: </label>
                                </td>
                                <td>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="txtPassword"
                                        value={txtPassword}
                                        onChange={this.onChange}
                                    />
                                </td>					                                   
	                        </tr>
	      					<tr>
                          		<td>
                                	<label>Tên khách hàng: </label>
                                </td>
                                <td>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="txtName"
                                        value={txtName}
                                        onChange={this.onChange}
                                />
                                </td>
	                       </tr>
	                       <tr>	
	                       		<td>
                                    <label>Email: </label>
	                            </td>
	                            <td>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="txtEmail"
                                        value={txtEmail}
                                        onChange={this.onChange}
                                    />
	                            </td>
	                        </tr>
	                       	<tr>
                                <td>
                                    <label>Giới tính: </label>
                                </td>
                                <td>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="txtGender"
                                        value={txtGender}
                                        onChange={this.onChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                            	<td>
                                	<label>Địa chỉ:</label>
                                </td>
                                <td>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        name="txtAddress" 
                                        value={txtAddress}
                                        onChange={this.onChange}
                                    />
                           		</td>
	                        </tr>
	                        <tr>
	                            <td>    
                                	<label>Số điện thoại: </label>
                                </td>
                                <td>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="txtPhone"
                                        value={txtPhone}
                                        onChange={this.onChange}
                                    />
                                </td>
	                        </tr>
	                        <tr>
	                        	<td>
                                	<label>Ngày tạo: </label>
                                </td>
                                <td>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="txtCreated"
                                        value={txtCreated}
                                        onChange={this.onChange}
                                    />
                                </td>
	                        </tr>
	                        <tr>
	                        	<td>
	                        	</td>
	                        	<td>
                     			<button type="submit" className="btn btn-primary">Lưu  lại</button>&nbsp;                     			
                     			<button type="button" className="btn btn-danger"> <Link to="/admin/account-list" className="btn btn-danger">Trở về</Link></button>
                     			</td>                     			    
                 			</tr>
                 		</table>
                    </form>                            
                </div>
            </div>      
          
			
		);
	}
}
export default AccountActionPage;