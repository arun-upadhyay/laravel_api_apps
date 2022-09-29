import React from 'react';
import ReactDOM from 'react-dom';

function Root() {
    return (
        <div>
            <h1> Welcome to React Component</h1>
        </div>
    );
}

export default Root;

if (document.getElementById('app')) {
    ReactDOM.render(<Root/>, document.getElementById('app'));
}
