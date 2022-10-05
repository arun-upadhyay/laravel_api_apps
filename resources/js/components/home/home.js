import * as React from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {Logout} from "../user/logout";
import UserService from '../../http/userService';
import {connect} from 'react-redux';
import {userLogout} from "../../reducers/Action/ActionTypeLogin";


class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        UserService.isTokenValid()
            .then(response => response.text())
            .then(result => {
                const obj = JSON.parse(result)
                console.log(obj);

            })
            .catch(error => {
                localStorage.clear();
                this.setState({shouldLogout: true})
                this.props.dispatch(userLogout());
                console.log('error', error)
            });
    }

    render() {
        if (!this.props.authLogIn) {
            return <Navigate replace to="/login"/>;
        }
        return (<div>
            <Logout/>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {authLogIn: state.loginReducer.authLogIn};
};
export default connect(mapStateToProps)(Home); // connect wrapper function in use
