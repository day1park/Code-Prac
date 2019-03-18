import React from "react";

// import React from React library object
import ReactDOM from "react-dom";

// every component must come from a component class.

//component class, you use a base class from the React library: React.Component.

// React.Component is a JavaScript class. To create your own component class, you must subclass React.Component. You can do this by using the syntax class YourComponentNameGoesHere extends React.Component {}.

// React Classes are written in UpperCamelCase

// To call a component’s render method, you pass that component to ReactDOM.render(). Notice your component, being passed as ReactDOM.render()‘s first argument:

ReactDOM.render(<MyComponentClass />, document.getElementById("app"));
