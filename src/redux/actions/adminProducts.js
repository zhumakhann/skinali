import {
    ADMIN_PRODUCTS_ADD,
    ADMIN_PRODUCTS_ADD_SUCCESS,
    ADMIN_PRODUCTS_ADD_ERROR,
    ADMIN_PRODUCTS_FETCH,
    ADMIN_SUCCESS,
    ADMIN_ERROR,
    LOAD_START,
    LOAD_ERROR,
    ADMIN_PRODUCTS_DELETE_SUCCESS,
    ADMIN_PRODUCTS_DELETE_ERROR,
    RESET
} from './actionTypes'
import firebase from '../../firebase';

const db = firebase.firestore();
export const reset = () => {
    setTimeout(() => {
        return {
            type: RESET
        }
    }, 3000)
}
export const addProduct =  (name, description, price, images) => async dispatch => {
    dispatch(() => loadStart())
    // let products;
    try{
        await db.collection("products")
          .add({
            name,
            images,
            price,
            description,
          })
        .then(() => dispatch(adminProductsAddSuccess()))
        .then(dispatch(reset()))
    }
    catch(err){
        console.log(err);
        adminProductsAddError()
    }
}
export const deleteProduct = (id) => async dispatch => {
    await db.collection("products")
        .doc(id)
        .delete()
        .then(() => dispatch(adminProductsDeleteSuccess()))
        .catch(() => dispatch(adminProductsDeleteError()));
    
}

export const editProduct = (id, name, description, price, images) => dispatch => {
    console.log(id, name, description, price, images);
    db.collection("products").doc(id)
        .set({
            name, description, price, images
        })
        .then(dispatch(adminProductsAddSuccess()))
        .catch(dispatch(adminProductsAddError()))
}

export const loadStart = () => {
    return {type: LOAD_START}
}

export const loadError = (error) => {
    return {type: LOAD_ERROR, error}
}

export const adminProductsDeleteSuccess = () => {
    return{
        type: ADMIN_PRODUCTS_DELETE_SUCCESS
    }
}

export const adminProductsDeleteError = () => {
    return {
        type: ADMIN_PRODUCTS_DELETE_ERROR
    }
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

