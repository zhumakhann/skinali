import {
    PRODUCTS_FETCH,
    LOAD_START,
    LOAD_ERROR,
} from './actionTypes'

import firebase from '../../firebase';

const db = firebase.firestore();
export const fetchProducts = () => 
    {return dispatch => {
        dispatch(loadStart())
        let products;
        db.collection("products")
            .get()
            .then(snap => {
                products = snap.docs.map(doc => { 
                    console.log(doc);
                    return {...doc.data(), id: doc.id}
                });
                
                if(!products){
                    throw new Error("products not found")
                }else{
                    return dispatch(productsFetch(products));
                }
            })
            .catch(error => dispatch(loadError(error)));
    }}
export const loadStart = () => {
    return {type: LOAD_START}
}

export const loadError = (error) => {
    console.log(error);
    return {type: LOAD_ERROR, error}
}

export const productsFetch = (products) => {
    return {
        type: PRODUCTS_FETCH, products
    }
}