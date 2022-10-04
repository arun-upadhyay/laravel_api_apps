import * as React from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {Logout} from "../user/logout";
import UserService from '../../http/userService';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            shouldLogout: false
        }

    }

    componentDidMount() {
        UserService.isTokenValid()
            .then(response => response.text())
            .then(result => {
                const obj = JSON.parse(result);
                console.log(obj);
            })
            .catch(error => {
                localStorage.clear();
                this.setState({shouldLogout: true})
                console.log('error', error)
            });

    }

    render() {
        if (this.state.shouldLogout) {
            return <Navigate replace to="/login"/>;
        }
        return (<div>

            <Logout/>
        </div>);
    }
}
