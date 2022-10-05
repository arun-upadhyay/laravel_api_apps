import * as React from "react";
import {Navigate} from "react-router-dom";
import {userLogin} from "../../reducers/Action/ActionTypeLogin";
import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import UserService from '../../http/userService';

export default function Login() {

    const dispatch = useDispatch();
    const loggedIn = useSelector((state) => state.loginReducer.authLogIn);
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    if (loggedIn) {
        return <Navigate replace to="/"/>;
    }

    function handleUsernameChange(event) {
        setLoginUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setLoginPassword(event.target.value);
    }

    function handleSubmit() {
        UserService.login(loginUsername, loginPassword)
            .then(response => response.text())
            .then(result => {
                const obj = JSON.parse(result);
                if (obj.access_token) {
                    localStorage.setItem('accessToken', obj.access_token);
                    localStorage.setItem('expiresIn', obj.expires_in);
                    localStorage.setItem('authUser', obj.user.name);
                    dispatch(userLogin());
                }
            })
            .catch(error => console.log('error', error));
    }

    return (

        <div className="col-md-4 ml-4">
            <form>
                <div className="form-outline mb-4">
                    <input type="email" name="loginUsername" id="login_email" className="form-control" on onChange={handleUsernameChange}/>
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" name="loginPassword" id="login_password" className="form-control" onChange={handlePasswordChange}/>
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                </div>

                <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Sign in
                </button>
            </form>
        </div>
    );

}
