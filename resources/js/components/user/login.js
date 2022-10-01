import * as React from "react";
import {Link} from "react-router-dom";


export default class Login extends React.Component {

    handleRegisterClick() {
        const user = new User
    }

    render() {
        return (<div className="col-md-4 ml-4">
            <form>
                <div className="form-outline mb-4">
                    <input type="email" id="login_email" className="form-control"/>
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="login_password" className="form-control"/>
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                </div>

                <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
                <div className="text-center">
                    <p>Not a member?
                        <Link to={`/register`}>Register</Link>
                    </p>
                </div>
            </form>
        </div>);
    }
}
