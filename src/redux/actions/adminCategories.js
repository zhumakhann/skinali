import {
    ADMIN_ADD,
    ADMIN_ADD_SUCCESS,
    ADMIN_ADD_ERROR,
    RESET
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
        .then(() => dispatch(adminAddSuccess()))
        // .then(dispatch(reset()))
    }
    catch(err){
        console.log(err);
        adminAddError()
    }
}


export const deleteCategory = (id) => async dispatch => {
    await db.collection("categories")
        .doc(id)
        .delete()
        // .then(() => dispatch(adminProductsDeleteSuccess()))
        // .catch(() => dispatch(adminProductsDeleteError()));
    
}

export const editCategory = (id, name, description) => dispatch => {
    console.log(id, name, description);
    db.collection("categories").doc(id)
        .set({
            name, description, 
        })
        // .then(dispatch(adminProductsAddSuccess()))
        // .catch(dispatch(adminProductsAddError()))
}


export const adminAdd = () => {
    return {
        type: ADMIN_ADD
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