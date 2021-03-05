import {combineReducers} from 'redux';
import authReducer from './auth';
console.log(authReducer);
export default combineReducers({
   auth: authReducer
})