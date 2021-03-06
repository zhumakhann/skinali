import {
    LOAD_START,
    LOAD_ERROR,
    CATEGORIES_FETCH
} from '../actions/actionTypes';

const initialState = {
    categories: [],
    isLoading: true,
    loadError: false
}

const categoriesReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_START:
            return { ...state, isLoading: true }
        case LOAD_ERROR:
            return {
                ...state, isLoading: false, loadError: action.error
            }
        case CATEGORIES_FETCH:
            return {...state, categories: action.categories, isLoading: false}
        default:
            return state
    }
}
export default categoriesReducer