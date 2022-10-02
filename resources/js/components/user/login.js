import * as React from "react";
import {Link} from "react-router-dom";
import user from "../../models/user";


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

    handleRegisterClick() {
        const username = this.state.login.loginUsername;
        const password = this.state.login.loginPassword;
    }

    render() {
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
}
