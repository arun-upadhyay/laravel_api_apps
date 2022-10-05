import * as React from "react";
import {connect} from 'react-redux';
class Test extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
       //
    }

    render() {


        console.log("I am ehre -----------------");
        return (<div>
            <h1> Test Component</h1>
            <h1> Hello world 2</h1>
            <h1> Hello world = {this.props.authLogIn}</h1>
            <h1> testValue = {this.props.testVal}</h1>

        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        testVal: 34,
        authLogIn: state.authLogIn};
};
export default connect(mapStateToProps)(Test);
