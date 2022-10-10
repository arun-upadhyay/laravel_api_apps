import * as React from "react";
import UserService from '../../http/userService';
import {useSelector, useDispatch} from "react-redux";
import {userLogout} from "../../reducers/Action/ActionTypeLogin";
import {Navigate} from "react-router-dom";

export function Logout() {
    const dispatch = useDispatch();
    const loggedIn = useSelector((state) => state.loginReducer.authLogIn);

    function fireLogout() {
        if (!UserService.shouldCheckForValidToken()) {
            return dispatch(userLogout());
        }
        UserService.logout()
            .then(response => response.text())
            .then(result => {
                const obj = JSON.parse(result);
                if (obj.message == "User successfully signed out") {
                    localStorage.clear();
                    dispatch(userLogout());
                }

            })
            .catch(error => console.log('error', error));
    }

    if (!loggedIn) {
        return <Navigate replace to="/login"/>;
    }

    return (<div>

        <div>Welcome <b>{localStorage.getItem("authUser")}</b></div>
        <div>
            <button onClick={fireLogout}>Logout</button>
        </div>
    </div>);
}
