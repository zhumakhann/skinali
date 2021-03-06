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
        let products = [];
        db.collection("products")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} => ${doc.data()}`);
                    products.push({...doc.data(), id:doc.id})
                    return products
                });
            })
            .then(() => dispatch(productsFetch(products)))
            .catch(err => dispatch(loadError(err)))
            // .then(snap => {
            //     snap.docs.forEach(querySnapshot => { 
            //         querySnapshot.forEach((doc) => {
            //             // console.log(`${doc.id} => ${doc.data()}`);
            //         });
            //         // console.log(doc.data);
            //         // console.log(doc);
            //         // return {...doc.data(), id: doc.id}
            //     });
                
            //     if(!products){
            //         throw new Error("products not found")
            //     }else{
            //         console.log(products);
                    
            //     }
            // })
            // .catch(error => dispatch(loadError(error)));
    }}
export const loadStart = () => {
    return {type: LOAD_START}
}

export const loadError = (error) => {
    console.log(error);
    return {type: LOAD_ERROR, error}
}

export const productsFetch = (products) => {
    console.log(products);
    return {
        type: PRODUCTS_FETCH, products
    }
}