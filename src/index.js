import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import myReducer from './reducers/index'
import AdminPage from './components/AdminPage/AdminPage.jsx'

// const myStore = createStore(myReducer);
// ReactDOM.render( <
//     Provider store = { myStore } >
//     <
//     App / >
//     <
//     /Provider>, document.getElementById('root')
// );

const myStore = createStore(
	myReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render( 
	<Provider store = {myStore}>
    	<AdminPage />
    </Provider>,
     document.getElementById('root')
);
