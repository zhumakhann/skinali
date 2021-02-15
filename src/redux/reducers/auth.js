
import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from '../actions/actionTypes'
const initialState = {
    isLoading: false,
    isLoggedIn: false,
    isChecked: false,
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case AUTH_START:
            return { ...state, isLoading: true }
        case AUTH_SUCCESS:
            return {...state, isLoading: false, isLoggedIn: true, isChecked: false}
        case AUTH_FAIL: 
            return {...state, isLoading: false, isLoggedIn: false, isChecked: true}
        
    }
}