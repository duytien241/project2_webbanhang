import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import myReducer from './reducers/index'

const myStore = createStore(myReducer);
ReactDOM.render( <
    Provider store = { myStore } >
    <
    App / >
    <
    /Provider>, document.getElementById('root')
);