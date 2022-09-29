import * as React from "react";

export default class Login extends React.Component {
    render() {
        return (<div>
            <h1>Please enter your credentials</h1>
            <table>
                <tr>
                    <td>Username</td>
                </tr>
                <tr>
                    <td>Password</td>
                </tr>
            </table>
        </div>);
    }
}
