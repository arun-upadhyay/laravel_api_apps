import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from "redux";
import LoginReducer from "../reducers/LoginReducer";
import {Provider} from 'react-redux';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./home/home";
import Login from "./home/login";
import Layout from "./home/layout";


/**
 * Redux store created
 * @type {Store<{userName: string}, Action>}
 */
const store = createStore(LoginReducer);

function Root() {
    return (

        <div className="container">
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="layout" element={<Layout/>}/>
                        <Route path="test" element={<Home/>}/>
                    </Routes>
                </BrowserRouter>

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
