import {
    ADMIN_PRODUCTS_ADD,
    ADMIN_PRODUCTS_ADD_SUCCESS,
    ADMIN_PRODUCTS_ADD_ERROR,
    ADMIN_PRODUCTS_FETCH,
    LOAD_START,
    LOAD_ERROR,
} from './actionTypes'
import firebase from '../../firebase';

const db = firebase.firestore();
export const addProduct =  (name, description, price, images) => async dispatch => {
    // dispatch(loadStart())
    // let products;
    try{
        await db.collection("products")
          .add({
            name,
            images,
            price,
            description,
          })
        adminProductsAddSuccess()
    }
    catch(err){
        console.log(err);
        adminProductsAddError()
    }
}
export const loadStart = () => {
    return {type: LOAD_START}
}

export const loadError = (error) => {
    return {type: LOAD_ERROR, error}
}


export const adminProductsAddSuccess = () => {
    return { 
        type: ADMIN_PRODUCTS_ADD_SUCCESS
     }
}
export const adminProductsAddError = () => {
    return {
        type: ADMIN_PRODUCTS_ADD_ERROR
    }
}