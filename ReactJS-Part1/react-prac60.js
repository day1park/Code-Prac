import React from 'react';
import ReactDOM from 'react-dom';


class SomeComponentName extends React.Component {
    render() {
        return (
            <div>
                <h1></h1>
                <img />
            </div>
        );
    }
};

ReactDOM.render(
    <SomeComponentName />,
    document.getElementById('app')
);




import React from 'react';
import ReactDOM from 'react-dom';

export class ExportableClass extends React.Component {
    render() {
        render (
            <div foo="bar">
            <h1></h1>
            </div>
        );
    }
};


ReactDOM.render(
    <ExportableClass />,
    document.getElementById('app')
)