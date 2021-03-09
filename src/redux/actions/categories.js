import {
    CATEGORIES_SELECT,
    CATEGORIES_FETCH,
    LOAD_START,
    LOAD_ERROR,
} from './actionTypes'

import firebase from '../../firebase';

const db = firebase.firestore();
export const fetchCategories = () => dispatch => {
        dispatch(loadStart())
        let categories = [];
        db.collection("categories")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    categories.push({...doc.data(), id:doc.id})
                    return categories
                });
            })
            .then(() => dispatch(categoriesFetch(categories)))
            .catch(err => dispatch(loadError(err)))
    }
export const loadStart = () => {
    return {type: LOAD_START}
}

export const loadError = (error) => {
    return {type: LOAD_ERROR, error}
}

export const categorySelect = (category) => dispatch => {
    dispatch(
        {
            type: CATEGORIES_SELECT, category
        }
    )
}

export const categoriesFetch = (categories) => {
    return {
        type: CATEGORIES_FETCH, categories
    }
}