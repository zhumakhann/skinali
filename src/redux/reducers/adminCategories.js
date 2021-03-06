import {
    RESET,
    ADMIN_ADD_SUCCESS,
    ADMIN_ADD_ERROR,
    ADMIN_ADD,
    ADMIN_EDIT_SUCCESS,
    ADMIN_EDIT_ERROR,
} from '../actions/actionTypes';
const initialState = {
    added: false,
    isLoading: false,
    loadError: false,
    deleted: false,
    edited: true,
}

const adminCategoriesReducer = (state = initialState, action) => {
    switch(action.type){
        case RESET:
            return{
                ...state, added: false, loadError: false, deleted: false, isLoading: false, edited: false
            }
        case ADMIN_ADD:
            return { ...state, isLoading: true }
        case ADMIN_ADD_SUCCESS:
            return {...state, isLoading: false, loadError: false, added: true }
        case ADMIN_ADD_ERROR: 
            return {...state, isLoading: false, loadError: true, }
        case ADMIN_EDIT_SUCCESS: 
            return { ...state, edited: true }
        case ADMIN_EDIT_ERROR: 
            return { ...state, loadError: true }
        default:
            return state
    }
}
export default adminCategoriesReducer