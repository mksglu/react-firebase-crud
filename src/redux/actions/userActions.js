import * as types from 'provider/constants/actionTypes';
import {tasksRef} from 'reference';

function getUsersFromFireBase() {
    return new Promise((resolve, reject) => {
        const x = [];
        try {
            tasksRef.on('value', snap => {
                snap.forEach(shot => {
                    x.push({
                        ...shot.val(),
                        key: shot.key
                    });
                });
                resolve(x);
            });
        } catch (error) {
            reject(error);
        }
    });
}

export const onChangeUsername = username => ({
    type: types.ON_CHANGE_USERNAME,
    username
});

export const getUsers = () => {
    return dispatch => {
        getUsersFromFireBase().then(users => {
            dispatch({
                type: types.LIST_USERS,
                users
            });
        });
    };
};

export function addUser() {

    return async (dispatch, getState) => {
        let newUser = {
            username: getState().user.username,
            id: Date.now()
        };
        try {
            const response = await tasksRef.push(newUser);
            newUser.key = response.key;
            console.log('res:',response);
            console.log(newUser);
            dispatch({
                type: types.ADD_USER,
                newUser
            });
        } catch (err) {
            console.log(err);
        }
    };
}

export function deleteUser(key) {
    return async dispatch => {
        dispatch({type: types.DELETE_USER_LOADING});
        try {
            const response = await tasksRef.child(key).remove();
            console.log(response);
            dispatch({type: types.DELETE_USER_SUCCESS, key});
        } catch (err) {
            console.log(err);
            dispatch({type: types.DELETE_USER_ERROR, err});
        }
    };
}
