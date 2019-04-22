import * as types from '../constants/actionTypes'

var data = JSON.parse(localStorage.getItem('arr'));
var initialState = data;
var myReducer = (state = initialState, action) => {
    switch (action.types) {
        case types.LIST_ALL:
            return state;
        default:
            return state;
    }
}
export default myReducer;