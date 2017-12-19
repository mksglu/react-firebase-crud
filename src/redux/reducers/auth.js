import { auth } from 'redux/initialState';
import * as types from 'provider/constants/actionTypes';

export default function authReducer(state = auth, action) {
    switch (action.type) {
        case types.AUTH_LOADING : {
            return {
                ...state,
                loading: false,
                success: false,
                authError: {
                    ...state.authError,
                    error: false
                }
            };
        }
        case types.AUTH_ERROR: {
            return {
                ...state,
                loading: false,
                success:false,
                authError: {
                    error: true,
                    message: action.authError.message,
                    code: action.authError.code,
                }
            }
        }
        case types.AUTH_SUCCESS: {
            return {
                ...state,
                loading: false,
                success: true,
                authError:{
                    error: false
                }
            }
        }
        default: {
            return state;
        }
    }
}