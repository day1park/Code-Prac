// Stateless Components Inherit From Stateful Components

import React from "react";
import ReactDOM from "react-dom";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Frarthur"
    };
  }
  render() {
    return <div />;
  }
}

// basic boilerplate

// you can pass state through any number of component levels. To do this, you can simply continue to pass it down as props through each level.
// In the topmost level, we pass the value to the first child
return <Child propName={this.state.someValue} />;

// In the Child component, we pass this prop to the GrandChild
return <GrandChild propName={this.props.propName} />;

// This repeats down each component level
return <GreatGrandChild propName={this.props.propName} />;

// Parent.js

import React from "react";
import ReactDOM from "react-dom";
import { Child } from "./Child";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Frarthur"
    };
  }
  render() {
    return <Child name={this.state.name} />;
  }
}

ReactDOM.render(<Parent />, document.getElementById("app"));

// child.js
import React from "react";

export class Child extends React.Component {
  render() {
    return <h1>Hey, my name is {this.props.name}!</h1>;
  }
}
