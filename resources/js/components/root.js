import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from "redux";
import {Provider} from 'react-redux';
import {rootReducer} from "../reducers/registration/reducerRegistration";
import RegisterRoute from "./routes/registerRoute";
import {myLogger} from "../middleware/Logger";

/**
 * Redux store created
 * @type {Store<{userName: string}, Action>}
 */
const store = createStore(rootReducer);

function Root() {
    return (
        <div className="container">
            <Provider store={store}>
                <RegisterRoute/>
            </Provider>
        </div>
    );
}

export default Root;
if (document.getElementById('app')) {
    ReactDOM.render(
        < Root/>
        , document.getElementById('app'));
}
