import "./../account.css";
import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';


class AccountItem extends Component{
	onDelete = (id) => {
		if(window.confirm('Bạn chắc chắn muốn xóa tài khoản này?')){
			this.props.onDelete(id);
		}
		
	}
	// onChange = (id) => {
	// 	console.log(id);
	// 	return <Redirect to={"/account/" + id + "/edit"}/>
	// }
     render() {
      	var { account, index} = this.props;
        return (
			<tr className="body-table">
				<td>{index + 1}</td>
	            <td>{account.accID}</td>
	            <td>{account.username}</td>
	            <td>{account.password}</td>
	            <td>{account.name}</td>
	            <td>{account.email}</td>
	            <td>{account.gender}</td>
	            <td>{account.address}</td>
	            <td>{account.phone}</td>
	            <td>{account.created}</td>
	            <td>
	                <div className = "wrapper-btn">     
	                 	 {/*<Link to={"/account/" + account.accID + "/edit"} class="btn btn-sm btn-success">Sửa</Link>*/}
	    				{/*<button type="button" class="btn btn-sm btn-success" onClick={() => this.onChange(account.accID)}>Sửa</button>	*/}
	    				<button type="button" class="btn btn-sm btn-success"><Link to={"/account/" + account.accID + "/edit"} style={{color : "white"}}>Sửa</Link></button>	             
	                	<button type="button" class="btn btn-sm btn-danger" onClick={() => this.onDelete(account.accID)}>Xóa</button>
	                </div>
	            </td>
            </tr>                     
        );
      }
}
export default AccountItem;