import * as React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Header extends React.Component {

    render() {

        const loggedIn = this.props.authLogIn;
        let homeTag;
        let contactusTag;
        let aboutUsTag;
        let loginTag, logoutTag, registerTag;
        if (loggedIn) {
            homeTag = <li><Link to="/">Home</Link></li>;
            contactusTag = <li><Link to="/contactus">Contact us</Link></li>;
            aboutUsTag = <li><Link to="/aboutus">About us</Link></li>;
        } else {
            loginTag = <li>
                <Link to="/login">Login</Link>
            </li>;
            logoutTag = <li>
                <Link to="/logout">Logout</Link>
            </li>;
            registerTag = <li>
                <Link to="/Register">Register</Link>
            </li>;
        }
        return (
            <>
                <div>
                    <ul>
                        {homeTag}{contactusTag}{aboutUsTag}{loginTag}{logoutTag}{registerTag}
                    </ul>

                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {authLogIn: state.loginReducer.authLogIn};
};
export default connect(mapStateToProps)(Header); // connect wrapper function in use
