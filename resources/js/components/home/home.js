import * as React from "react";
import {useNavigate} from "react-router-dom";

export default class Home extends React.Component {


    async handleSubmit(event) {
        event.preventDefault();
        await submitForm(event.target);
        navigate("../login", {replace: true});
        // replace: true will replace the current entry in
        // the history stack instead of adding a new one.

    }


    handleSubmit(event) {

    }

    render() {
        return (<div>
            <h1>Home Page</h1>
            <button onClick={handleSubmit}>Click Me</button>
        </div>);
    }
}
