import {
    PRODUCTS_FETCH,
    LOAD_START,
    LOAD_ERROR,
    PRODUCTS_SORT,
    PRODUCTS_CATEGORY_FILTER
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

export const productsSort = (state, type) => dispatch => {
    let products = []
    if(type === 'lower'){
        products = state.sort((a, b) => b.price - a.price)
    }else if(type === 'higher'){
        products = state.sort((a, b) => a.price - b.price)
    }
    dispatch(
        {
            type: PRODUCTS_SORT, products
        }
    )
}

export const productsCategoryFilter = (state, category) => dispatch => {
    let products = []
    if(category === 'al1al1'){
        products = [...state]
    }else{
        products = state.filter(product => product.category === category)
    }
    console.log(products);
    dispatch({
        type: PRODUCTS_CATEGORY_FILTER, products
    })
}