// defaultProps

// if there are no props being passed it will display nothing so sometime it is best to create a defaultprops
class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

Example.defaultProps;

// The defaultProps property should be equal to an object:

class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

// Set defaultProps equal to an object:
Example.defaultProps = {};

// Inside of this object, write properties for any default props that you’d like to set:

class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

Example.defaultProps = { text: "yo" };

import React from "react";
import ReactDOM from "react-dom";

class Button extends React.Component {
  render() {
    return <button>{this.props.text}</button>;
  }
}

// defaultProps goes here:
Button.defaultProps = { text: "I am a button" };

ReactDOM.render(
  <Button text="amzing BUUTTONN" />,
  document.getElementById("app")
);

// the props will override the default props
