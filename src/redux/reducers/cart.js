import {
    CART_EDIT,
} from '../actions/actionTypes';

const initialState = {
    products: [],
    total: '',
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_EDIT:
            return {...state, products: action.products, total: action.total}
        default:
            return state
    }
}

export default cartReducer