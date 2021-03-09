import {
    LOAD_START,
    LOAD_ERROR,
    PRODUCTS_FETCH,
    PRODUCTS_SORT,
    PRODUCTS_CATEGORY_FILTER
    
} from '../actions/actionTypes';

const initialState = {
    products: [],
    filteredProducts: [],
    isLoading: true,
    loadError: false,
}

const productsReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case LOAD_START:
            return { ...state, isLoading: true }
        case LOAD_ERROR:
            return {
                ...state, isLoading: false, loadError: action.error
            }
        case PRODUCTS_FETCH:
            return {...state, products: action.products, isLoading: false}
        case PRODUCTS_SORT:
            return {...state, products: action.products}
        case PRODUCTS_CATEGORY_FILTER:
            return {...state, filteredProducts: action.products}
        default:
            return state
    }
}
export default productsReducer