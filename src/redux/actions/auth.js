import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL,AUTH_LOGIN_CHANGE, AUTH_PASSWORD_CHANGE } from './actionTypes';
import firebase from '../../firebase';

export const authTest = (username, password) => dispatch => {
    dispatch(authStart);
    console.log(username, password);
    firebase
        .auth()
        .signInWithEmailAndPassword(username, password)
        .then(() => {
            dispatch(authSuccess)
          })
          .catch(() => {
            dispatch(authFail)
          });
}
export const authStart = () => {
    return { type: AUTH_START }
}
export const authSuccess = () => {
    console.log('success');
    return { type: AUTH_SUCCESS }
}
export const authFail = () => {
    console.log('error');

    return { type: AUTH_FAIL }
}
export const authLoginChange = (value) => {
    return { type: AUTH_LOGIN_CHANGE, value }
}
export const authPasswordChange = (value) => {
    return { type: AUTH_PASSWORD_CHANGE, value }
}