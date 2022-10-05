import * as React from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {Logout} from "../user/logout";
import UserService from '../../http/userService';
import {connect} from 'react-redux';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            shouldLogout: false
        }

    }

    componentDidMount() {
        console.log("test" + this.props.authLogIn)
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
            {/*<h1> testing {this.props.authLogIn}</h1>*/}
            {/*<h1> testing again {this.state.shouldLogout}</h1>*/}
            <Logout/>
        </div>);
    }
}
const mapStateToProps = (state) => {
    return {authLogIn: state.authLogIn};
};
export default connect(mapStateToProps)(Home); // connect wrapper function in use
