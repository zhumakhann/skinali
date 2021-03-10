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
const storageRef = firebase.storage().ref("images");
const db = firebase.firestore();

export const addProduct =  (name, description, price, images, category = '') => async dispatch => {
    dispatch(() => loadStart())
    // let products;
    console.log('start');
    console.log(images);
    try{
        await db.collection("products")
          .add({
            name,
            images,
            price,
            description,
            category
          })
        .then(() => dispatch(adminProductsAddSuccess()))
        .then(dispatch(reset()))
    }
    catch(err){
        console.log(err);
        adminProductsAddError()
    }
}

export const deleteProductImages = async (arr, res) => {
    let images = arr.map(img => img.title)
    await Promise.all(images)
    .then(arr => {
        return arr.map( img => {
            // let deleteRef = storageRef.child(img);
            return storageRef.child(img);
            // console.log(deleteRef);
            // deleteRef.delete()
            // .then(() => res = true)
            // .catch(() => console.log('something is wrong'))
        })

    })
    .then(res => {
        res.map(async img => {
            console.log(img);
            if(img){
                await img.delete()
            }
        })
    })
}

export const deleteProduct = (id, images) => async dispatch => {
    // let success = false;
    await deleteProductImages(images);
    await db.collection("products")
        .doc(id)
        .delete()
        .then(() => dispatch(adminProductsDeleteSuccess()))
        .catch(() => dispatch(adminProductsDeleteError()));
}



export const editProduct = (id, name, description, price, images, category) => dispatch => {
    db.collection("products").doc(id)
        .set({
            name, description, price, images, category
        })
        .then(dispatch(adminProductsAddSuccess()))
        .catch(dispatch(adminProductsAddError()))
}
export const resetState = () => dispatch => {
    dispatch(reset())
}

export const reset = () => {
    return{
        type: RESET
    }
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

