import * as React from "react";
import {Link, Navigate} from "react-router-dom";
import {userLogin, userLogout} from "../../reducers/Action/ActionTypeLogin";
import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import loginService, {LoginService} from '../../http/loginService';


/**
 export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: {
                loginUsername: '',
                loginPassword: ''
            }
        }

    }

    handleChangeEvent(event) {
        event.preventDefault();
        let obj = {
            loginUsername: this.state.login.loginUsername,
            loginPassword: this.state.login.loginPassword
        }
        console.log(obj)
        const field = event.target.name;
        const value = event.target.value;
        this.setState({
            login: {
                ...obj, [field]: value
            }
        })
    }

    LoginView = () => {
        const loggedIn = useSelector((state) => state.auth.loggedIn);
        const dispatch = useDispatch();

        if (loggedIn) {
            return <Navigate replace to="/"/>;
        }

        return (<div className="col-md-4 ml-4">
            <form>
                <div className="form-outline mb-4">
                    <input type="email" name="loginUsername" id="login_email" className="form-control" onChange={this.handleChangeEvent.bind(this)}/>
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" name="loginPassword" id="login_password" className="form-control" onChange={this.handleChangeEvent.bind(this)}/>
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                </div>

                <button type="button" className="btn btn-primary btn-block mb-4" onClick={this.handleRegisterClick.bind(this)}>Sign in</button>
                <div className="text-center">
                    <p>Not a member?
                        <Link to={`/register`}>Register</Link>
                    </p>
                </div>
            </form>
        </div>);
    }

    handleRegisterClick() {
        const username = this.state.login.loginUsername;
        const password = this.state.login.loginPassword;
    }

    render() {
       return <div>H1sdkfj</div>

    }
}
 **/

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
        const username = loginUsername;
        const password = loginPassword;
        const result = loginService.login(username, password);
        //dispatch(userLogin());

        console.log("username" + result.text());



    }

    return (

        <>
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
        </>);

}
