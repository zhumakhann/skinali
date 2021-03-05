import {
    LOAD_START,
    ADMIN_PRODUCTS_ADD,
    ADMIN_PRODUCTS_ADD_SUCCESS,
    ADMIN_PRODUCTS_ADD_ERROR,
} from '../actions/actionTypes'
const initialState = {
    added: false,
    isLoading: false,
    loadError: false,
}

const adminProductsReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_START:
            return { ...state, isLoading: true }
        case LOAD_ERROR:
            return {
                ...state, isLoading: false, loadError: true
            }
        case ADMIN_PRODUCTS_ADD:
            return { ...state, newProduct = { isLoading: true }}
        case ADMIN_PRODUCTS_ADD_SUCCESS:
            return {...state, newProduct = { isLoading: false, loadError: false, added: true }}
        case ADMIN_PRODUCTS_ADD_ERROR: 
            return {...state, newProduct = { isLoading: false, loadError: true, }}
        case ADMIN_PRODUCTS_FETCH:
            return {...state, products: action.products}
        default:
            return state
    }
}
export default adminProductsReducer