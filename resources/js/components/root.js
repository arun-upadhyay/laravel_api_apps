import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import {rootReducer} from "../reducers/registration/reducerRegistration";
import {registerRoute} from "./routes/registerRoute";
import Test from "./test";

/**
 * Redux store created
 * @type {Store<{userName: string}, Action>}
 */
const store = createStore(rootReducer);

function Root() {
    return (
        <div className="container">
            <Provider store={store}>
                {/*{registerRoute()}*/}
                <Test/>
            </Provider>
        </div>
    );
}

export default Root;
if (document.getElementById('app')) {
    ReactDOM.render(
        <Provider store={store}>
            < Root/>

        </Provider>
        , document.getElementById('app'));
}
