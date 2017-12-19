import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'redux/reducers';

export function configureStore(initialState = {}) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    )
    return store;
};

export const store = configureStore();