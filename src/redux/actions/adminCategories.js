import {
    ADMIN_ADD,
    ADMIN_ADD_SUCCESS,
    ADMIN_ADD_ERROR,
    RESET,
    ADMIN_EDIT_SUCCESS,
    ADMIN_EDIT_ERROR
} from './actionTypes'
import firebase from '../../firebase';

const db = firebase.firestore();
export const addCategory = (name, description) => dispatch => {
    try{
        db.collection("categories")
          .add({
            name,
            description,
          })
        .then(() => dispatch(adminEditSuccess()))
        .catch(() => dispatch(adminEditError()));
    }
    catch(err){
        console.log(err);
        adminAddError()
    }
}

export const resetState = () => dispatch => {
    dispatch(reset())
}
export const deleteCategory = (id) => async dispatch => {
    await db.collection("categories")
        .doc(id)
        .delete()
        .then(() => dispatch(adminEditSuccess()))
        .catch(() => dispatch(adminEditError()));
    
}

export const editCategory = (id, name, description) => dispatch => {
    console.log(id, name, description);
    db.collection("categories").doc(id)
        .set({
            name, description, 
        })
        .then(dispatch(adminEditSuccess()))
        .catch(dispatch(adminEditError()))
}

export const reset = () => {
    return{
        type: RESET
    }
}

export const adminAdd = () => {
    return {
        type: ADMIN_ADD
    }
}
export const adminEditSuccess = () => {
    return{
        type: ADMIN_EDIT_SUCCESS
    }
}

export const adminEditError = () => {
    return {
        type: ADMIN_EDIT_ERROR
    }
}

export const adminAddSuccess = (content) => {
    return {
        type: ADMIN_ADD_SUCCESS, content
    }
}
export const adminAddError = () => {
    return {
        type: ADMIN_ADD_ERROR
    }
}