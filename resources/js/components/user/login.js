import * as React from "react";
import {Link} from "react-router-dom";

export default class Login extends React.Component {
    render() {
        return (<div class="col-md-4 ml-4">
            <form>
                <div className="form-outline mb-4">
                    <input type="email" id="login_email" className="form-control"/>
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="login_password" className="form-control"/>
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                </div>

                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="login_remember_checkbox" checked/>
                            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                        </div>
                    </div>

                    <div className="col">
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>

                <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>


                <div className="text-center">
                    <p>Not a member?
                        <Link to={{screen: 'register', params: {id: 'register'}}}>
                            Register
                        </Link>
                    </p>
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                    </button>
                </div>
            </form>
        </div>);
    }
}
