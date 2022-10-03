import * as React from "react";
import {useNavigate} from "react-router-dom";
import {Logout} from "../user/logout";

export default class Home extends React.Component {
    render() {
        return (<div>
            <Logout/>
        </div>);
    }
}
