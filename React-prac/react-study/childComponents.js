// The stateless, child component will update the state of the parent component.

import React from "react";
import ReactDOM from "react-dom";
import { ChildClass } from "./ChildClass";

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };

    this.handleClick = this.handleClick.bind(this);
    //parent component binds the newly-defined method to the current instance of the component in its constructor. This ensures that when we pass the method to the child component, it will still update the parent component.
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will
    // result in a state change:
    this.setState({ totalClicks: total + 1 }); // setState method called
  }

  // The stateful component class passes down
  // handleClick to a stateless component class:
  render() {
    return <ChildClass onClick={this.handleClick} />;
    // parent then passes that method down to a child.
  }
}

import React from "react";
import ReactDOM from "react-dom";

export class ChildClass extends React.Component {
  render() {
    return (
      // The stateless component class uses
      // the passed-down handleClick function,
      // accessed here as this.props.onClick,
      // as an event handler:
      <button onClick={this.props.onClick}>Click Me!</button>
    );
  }
}

// To make a child component update its parent’s state, the first step is: you must define a state-changing method on the parent.

//Parent must pass this function down to Child, so that Child can use it in an event listener on the dropdown menu.

// PARENT.JS
import React from "react";
import ReactDOM from "react-dom";
import { Child } from "./Child";

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "Frarthur" };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return <Child name={this.state.name} onChange={this.changeName} />;
  }
}

ReactDOM.render(<Parent />, document.getElementById("app"));

// CHILD.JS
import React from "react";

export class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }
  render() {
    return (
      <div>
        <h1>Hey my name is {this.props.name}!</h1>
        {/* <select id="great-names" onChange={this.props.onChange}>  << BEFORE */}
        <select id="great-names" onChange={this.handleChange}>
          {/* the method handleChange. onChange is a special attribute in React. */}
          <option value="Frarthur">Frarthur</option>

          <option value="Gromulus">Gromulus</option>

          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}

// syntheticEvent wrapper, it uses the browser’s native event which tracks the changes in a form or input element. Other syntheticEvents of forms are: onInput onInvalid onSubmit

// main behavior is to track the event, back to our onChange event, it tracks every change that happens in the browser to the element with the onChange attribute. At each change it will create an event object, in our case we are concern about the value in the element, so exploring that event object we can see that under a target property we will the that there is an object with a property value which holds how the element’s value looks like at the moment the event object was created. As a comparison, through vanilla JavaScript and HTML, we would have to load a script on the page that will target an element and every time the element changed it will trigger a function which then targeting the element again we could grab its value property.

// JSX

import React from "react";

export class DayDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    //e is a parameter, so when having the method passed
    //to the syntheticEvent attribute it will receive the event object
    //and is captured as e
    console.log("You selected: " + e.target.value);
  }

  render() {
    return (
      <select id="mySelect" onChange={this.handleChange}>
        <option value="Monday"> Monday </option>
        <option value="Tuesday">Tuesday </option>
        <option value="Wednesday">Wednesday </option>
        <option value="Thursday">Thursday </option>
        <option value="Friday">Friday </option>
      </select>
    );
  }
}

export default DayDropDown;



// HTML
<!DOCTYPE html>
<html>
<body>

<p>Select a day.</p>

<select id="mySelect" onchange="myFunction()">
  <option value="Monday">Monday
  <option value="Tuesday">Tuesday
  <option value="Wednesday">Wednesday
  <option value="Thursday">Thursday
  <option value="Friday">Friday
</select>


<script type="text/javascript" src="./index.js"></script>

</body>
</html>