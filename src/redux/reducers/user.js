import {user} from 'redux/initialState';
import * as types from 'provider/constants/actionTypes';

export default function userReducer(state = user, action) {
    switch (action.type) {
        case types.ON_CHANGE_USERNAME : {
            return {
                ...state,
                username: action.username
            };
        }
        case types.ADD_USER: {
            console.log('add user geldi', action.newUser);
            return {
                ...state,
                users: [...state.users, action.newUser]
            };
        }
        case types.LIST_USERS: {
            return {
                ...state,
                users: [...action.users]
            };
        }
        case types.DELETE_USER_SUCCESS: {
            return {
                ...state,
                users: state.users.filter(x => x.key !== action.key),
                // silinen user'ın key verisini filter ile ayırıyoruz ve listeden gitmiş oluyor.
                userDeleteLoading: false
            }
        }
        case types.DELETE_USER_LOADING: {
            return {
                ...state,
                userDeleteLoading: true
            }
        }
        case types.DELETE_USER_ERROR: {
            return {
                ...state,
                userDeleteLoading: false
            }
        }
        default: {
            return state;
        }
    }
}