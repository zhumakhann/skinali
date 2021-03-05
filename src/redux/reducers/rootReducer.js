import {combineReducers} from 'redux';
import authReducer from './auth';
import productsReducer from './products';

export default combineReducers({
   auth: authReducer,
   products: productsReducer,
})