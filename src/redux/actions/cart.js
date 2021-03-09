import { CART_EDIT } from './actionTypes';

export const cartHandler = (state, type, product) => dispatch => {
    const cartProduct = {...product, quantity: 1, total: +product.price}
    let products = [];
    let target = state.find(item => item.name === cartProduct.name);
    const index = state.indexOf(target);
    switch (type) {
        case 'add':
            if(target){
                state[index].quantity++
                state[index].total = state[index].price * state[index].quantity
                products = [...state]
            }else{
                products = [...state, cartProduct];
            }
            break;
        case 'delete':
            products = state.filter(item => item !== target);
            break;
        case 'plus':
            state[index].quantity++
            state[index].total = state[index].price * state[index].quantity
            products = [...state]
            break;
        case 'minus':
            state[index].quantity--
            state[index].total = state[index].price * state[index].quantity
            products = [...state]
            if(state[index].quantity === 0){
                products = state.filter(item => {
                    return item != target
                });
            }else{
                products = [...state];    
            }
            break;
    }
    const total = products.reduce((acc, item) => {
        acc += Number(item.total);

        return acc
    }, 0)
    localStorage.setItem('skinaliCart', products)
    dispatch(cartEdit(products, total))
}



export const cartEdit = (products, total) => {
    return {
        type: CART_EDIT, products, total
    }
}