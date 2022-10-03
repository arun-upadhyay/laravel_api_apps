import * as React from "react";
import UserService from '../../http/userService';

export function Logout() {
    function fireLogout() {
        UserService.logout()
            .then(response => response.text())
            .then(result => {
                const obj = JSON.parse(result);
                if (obj.message == "User successfully signed out") {
                    localStorage.clear();

                }
            })
            .catch(error => console.log('error', error));
    }

    return (<div>
        <div>Welcome <b>{localStorage.getItem("authUser")}</b></div>
        <div>
            <button onClick={fireLogout}>Logout</button>
        </div>
    </div>);
}
