import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import MyComponent from "./components/LoginScreen";
import authReducer from './store/reducers/auth';

const rootReducer = combineReducers({
    authentication:authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {

    return (
        <Provider store={store}>
            <MyComponent/>
        </Provider>

    );
}


