import {combineReducers} from 'redux';
import authReducer from './auth';
import productsReducer from './products';
import adminProductsReducer from './adminProducts'
import categoriesReducer from './categories';
import adminCategoriesReducer from './adminCategories'

export default combineReducers({
   adminProducts: adminProductsReducer,
   adminCategories: adminCategoriesReducer,
   auth: authReducer,
   products: productsReducer,
   categories: categoriesReducer
})