import React, {Component} from 'react';
import AllPost from "./allPost";
import {Logout} from "./user/logout";

export default class Dashboard extends Component {
    render() {
        return (
            <>
                <Logout/>
                <AllPost/>
            </>
        );
    }
}
