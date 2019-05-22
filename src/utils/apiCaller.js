import axios from 'axios';


export default function callApi(endpoint, method, body){
	return axios({
			method : method,
			url: '/api/v1/' + endpoint,
			data: body
		}).catch(err => {
			console.log(err);
		});

}