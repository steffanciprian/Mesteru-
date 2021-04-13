import React from 'react';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import authReducer from './store/reducers/auth';
import MesteruNavigator from "./navigation/MesteruNavigator";

const rootReducer = combineReducers({
    authentication: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
    return (
        <Provider store={store}>
            <MesteruNavigator/>
        </Provider>

    );
}


