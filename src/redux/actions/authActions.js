import * as types from 'provider/constants/actionTypes';
import {firebaseAuth} from 'reference';
import * as firebase from 'firebase';


window.firebase = firebase;

export function logIn(email, pw) {
    return async dispatch => {
        dispatch({ type: types.AUTH_LOADING });
        try {
            await firebaseAuth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
            try {
                const response = await firebaseAuth().signInWithEmailAndPassword(email, pw);
                dispatch({type: types.AUTH_SUCCESS, response});
                console.log('response2', response);
            } catch (firebaseLoginError) {
                dispatch({ type: types.AUTH_ERROR, authError: firebaseLoginError });
            }
        } catch(error) {
            dispatch({ type: types.AUTH_ERROR, authError: error });
        }
    };
}