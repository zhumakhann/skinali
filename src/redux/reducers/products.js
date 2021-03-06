import {
    LOAD_START,
    LOAD_ERROR,
    PRODUCTS_FETCH
} from '../actions/actionTypes';

const initialState = {
    products: [],
    isLoading: true,
    loadError: false
}

const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_START:
            return { ...state, isLoading: true }
        case LOAD_ERROR:
            return {
                ...state, isLoading: false, loadError: action.error
            }
        case PRODUCTS_FETCH:
            return {...state, products: action.products, isLoading: false}
        default:
            return state
    }
}
export default productsReducer