
import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGIN_CHANGE, AUTH_PASSWORD_CHANGE } from '../actions/actionTypes'
const initialState = {
    user: '',
    loginValue: '',
    passwordValue: '',
    isLoading: false,
    isLoggedIn: false,
    // isLoggedIn: true,
    isChecked: false,
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case AUTH_START:
            return { ...state, isLoading: true }
        case AUTH_SUCCESS:
            return {...state, isLoading: false, isLoggedIn: true, isChecked: false}
        case AUTH_FAIL: 
            return {...state, isLoading: false, isLoggedIn: false, isChecked: true}
        case AUTH_LOGIN_CHANGE:
            return {...state, loginValue: action.value}
        case AUTH_PASSWORD_CHANGE:
            return {...state, passwordValue: action.value}
        default:
            return state
    }
}
export default authReducer