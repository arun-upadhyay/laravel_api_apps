import * as React from "react";
import {Route, Link, BrowserRouter, Switch} from "react-router-dom";

export default class Header extends React.Component {

    render() {
        return (
            <>

                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/aboutus">About us</Link>
                        </li>
                        <li>
                            <Link to="/contactus">Contact us</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/Register">Register</Link>
                        </li>
                    </ul>

                </div>


            </>
        );
    }
}
