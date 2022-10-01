import * as React from "react";
import {useNavigate} from "react-router-dom";

export default class Home extends React.Component {


    handleSubmit(event) {
        // const navigate = useNavigate();
        // navigate("layout", {replace: true});
    }

    render() {
        return (<div>
            <h1>I am on home page Home Page</h1>
            {/*<button onClick={this.handleSubmit.bind()}>Click Me</button>*/}
        </div>);
    }
}
