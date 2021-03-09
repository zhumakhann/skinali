import {
    PRODUCTS_SEARCH,
    PRODUCTS_SEARCH_RESET,
    PRODUCTS_SEARCH_EDIT
} from '../actions/actionTypes'

const initialState = {
    value: '',
    products: []
}
const searchReducer = (state = initialState, action) => {
    switch(action.type){
        case PRODUCTS_SEARCH:
            return {...state, products: action.products}
        case PRODUCTS_SEARCH_EDIT:
            return{
                ...state, value: action.value
            }
        case PRODUCTS_SEARCH_RESET:
            return{
                ...state, value: '', products: []
            }
        default: 
            return state
    }
}

export default searchReducer