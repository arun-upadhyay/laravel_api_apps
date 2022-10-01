import * as React from "react";
import {Navigate} from 'react-router-dom'
import {useState} from "react";


export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isRegister: 0
        }
        this.state = {
            registerName: '',
            registerUsername: '',
            registerEmail: '',
            registerPassword: '',
            registerConfirmPassword: ''
        }
    }

    componentDidMount() {
    }


    /**
     * Register user
     */
    handleRegisterSubmit(event) {
        event.preventDefault();
        let data = new FormData();
        data.append("name", this.state.name);
        data.append("username", this.state.registerUsername);
        data.append("password", this.state.password);
        data.append("email", this.state.registerEmail);
        fetch("api/auth/register", {
            method: 'POST',
            body: data,
            redirect: 'follow'
        })
            .then(response => response.text())
            .then(result => {
                // register an event to be redirected
                this.setState({isRegister: 1})
                console.log(result);
            })
            .catch(error => console.log('error', error));

        return <Navigate replace to="/login"/>;
    }

    handleInputChange(event) {
        event.preventDefault();
        let obj = {
            registerName: this.state.registerName,
            registerUsername: this.state.registerUsername,
            registerEmail: this.state.registerEmail,
            registerPassword: this.state.registerPassword,
            registerConfirmPassword: this.state.registerConfirmPassword,
        };
        const field = event.target.name;
        const value = event.target.value;
        this.setState({...obj, [field]: value})
    }


    render() {

        if (this.state.isRegister === 1) {
            return <Navigate replace to="/login"/>;
        }

        return (

            <div className="col-md-4 ml-4">
                <form>
                    <div className="form-outline mb-4">
                        <input type="name" name="registerName" id="register_name" className="form-control" onChange={this.handleInputChange.bind(this)}/>
                        <label className="form-label">Name</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="username" name="registerUsername" id="register_username" className="form-control" onChange={this.handleInputChange.bind(this)}/>
                        <label className="form-label">Username</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="email" name="registerEmail" id="login_email" className="form-control" onChange={this.handleInputChange.bind(this)}/>
                        <label className="form-label">Email address</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" name="registerPassword" id="login_password" className="form-control" onChange={this.handleInputChange.bind(this)}/>
                        <label className="form-label">Password</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="password" name="registerConfirmPassword" id="register_confirm_password" className="form-control" onChange={this.handleInputChange.bind(this)}/>
                        <label className="form-label">Confirm Password</label>
                    </div>

                    <button type="button" className="btn btn-primary btn-block mb-4" onClick={this.handleRegisterSubmit.bind(this)}>Register</button>
                </form>
            </div>
        );
    }
}
