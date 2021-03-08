import {combineReducers} from 'redux';
import authReducer from './auth';
import adminCategoriesReducer from './adminCategories'
import adminProductsReducer from './adminProducts'
import productsReducer from './products';
import categoriesReducer from './categories';
import searchReducer from './search';
import cartReducer from './cart'


export default combineReducers({
   adminProducts: adminProductsReducer,
   adminCategories: adminCategoriesReducer,
   auth: authReducer,
   products: productsReducer,
   categories: categoriesReducer,
   search: searchReducer,
   cart: cartReducer,
})