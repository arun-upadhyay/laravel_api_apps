import React from 'react';
import ReactDOM from 'react-dom';
import AllPost from "./AllPost";

function Root() {
    return (
        <div>
            <h1> Welcome </h1>
            <AllPost></AllPost>
        </div>
    );
}

export default Root;

if (document.getElementById('app')) {
    ReactDOM.render(<Root/>, document.getElementById('app'));
}
