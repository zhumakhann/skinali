import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from './actionTypes';
import firebase from '../../firebase';

export const authTest = (username, password) => dispatch => {
    dispatch(authStart);
    firebase
        .auth()
        .signInWithEmailAndPassword()
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
    return { type: AUTH_SUCCESS }
}
export const authFail = () => {
    return { type: AUTH_FAIL }
}