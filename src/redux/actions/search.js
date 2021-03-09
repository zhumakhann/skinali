import {
    PRODUCTS_SEARCH,
    PRODUCTS_SEARCH_RESET,
    PRODUCTS_SEARCH_EDIT
} from './actionTypes';

export const productsFilter = (value, state) => dispatch => {
    console.log(state);
    const products = state.filter(item => item.name.toLowerCase().includes(value.trim().toLowerCase()));
    console.log(products);
    dispatch(productsSearch(products))
}

export const productsSearchEdit = (value) => dispatch => {
    dispatch(
        {
            type: PRODUCTS_SEARCH_EDIT, value
        }
    )
}

export const productsSearch = (products) => {
    return {
        type: PRODUCTS_SEARCH, products
    }
}
export const productsSearchReset = () => {
    return {
        type: PRODUCTS_SEARCH_RESET
    }
}
