import {
    RESET,
    ADMIN_PRODUCTS_ADD,
    ADMIN_PRODUCTS_ADD_SUCCESS,
    ADMIN_PRODUCTS_ADD_ERROR,
    ADMIN_PRODUCTS_DELETE_SUCCESS,
    ADMIN_PRODUCTS_DELETE_ERROR
} from '../actions/actionTypes'
const initialState = {
    added: false,
    isLoading: false,
    loadError: false,
    deleted: false,
}

const adminProductsReducer = (state = initialState, action) => {
    switch(action.type){
        case RESET:
            return{
                ...state, added: false, loadError: false, deleted: false, isLoading: false,
            }
        case ADMIN_PRODUCTS_ADD:
            return { ...state, isLoading: true }
        case ADMIN_PRODUCTS_ADD_SUCCESS:
            return {...state, isLoading: false, loadError: false, added: true }
        case ADMIN_PRODUCTS_ADD_ERROR: 
            return {...state, isLoading: false, loadError: true, }
        case ADMIN_PRODUCTS_DELETE_SUCCESS:
            return { ...state, deleted: true}
        default:
            return state
    }
}
export default adminProductsReducer