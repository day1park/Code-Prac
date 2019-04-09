// Lifecycle methods are methods that get called at certain moments in a component’s life.
// lifecycle methods: mounting, updating, and unmounting.

// A component “mounts” when it renders for the first time.
// componentWillMount
// render
// componentDidMount

import React from "react";
import ReactDOM from "react-dom";

export class Example extends React.Component {
  // <Example /> calls the first mounting lifecycle method, componentWillMount.
  // componentWillMount executes, and an alert appears on the screen.
  componentWillMount() {
    alert("component is about to mount!");
  }

  // After componentWillMount has finished, <Example /> calls the second mounting lifecycle method: render.
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(<Example />, document.getElementById("app"));
{
  /* <Example /> is rendered for the first time. <Example />‘s mounting period begins. */
}

setTimeout(() => {
  ReactDOM.render(<Example />, document.getElementById("app"));
}, 2000);

// Two seconds later, <Example /> renders again (lines 20-22). componentWillMount does NOT get called, because mounting lifecycle events only execute the first time that a component renders.

//EXAMPLE 2

import React from "react";
import ReactDOM from "react-dom";

export class Example2 extends React.Component {
  constructor(props) {
    super(props);
    // call this.setState from within componentWillMount!
    this.state = { text: "" };
  }

  componentWillMount() {
    this.setState({ text: "Hello world" });
  }

  render() {
    return <h1>{this.state.text}</h1>;
  }
}

ReactDOM.render(<Example2 />, document.getElementById("app"));

// render twice with one alert appearing once through componentwillmount lifecycle method

import React from "react";
import ReactDOM from "react-dom";

export class Flashy extends React.Component {
  componentWillMount() {
    alert("AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!");
  }
  render() {
    alert("Flashy is rendering!");

    return (
      <h1 style={{ color: this.props.color }}>
        OOH LA LA LOOK AT ME I AM THE FLASHIEST
      </h1>
    );
  }
}

ReactDOM.render(<Flashy color="red" />, document.getElementById("app"));

setTimeout(() => {
  ReactDOM.render(<Flashy color="green" />, document.getElementById("app"));
}, 2000);

// The constructor method is invoked when a new component instance is created and runs before the entire component’s lifecycle starts. It runs before componentWillMount, which is the start of the mounting phase of the component.




// componentDidMount

import React from 'react';

export class Example extends React.Component {
  componentDidMount() {
    alert('component just finished mounting!');
  }

  render() {
    return <h1>Hello world</h1>;
  }
}


// componentDidMount is a good place to connect a React app to external applications, such as web APIs or JavaScript frameworks. componentDidMount is also the place to set timers using setTimeout or setInterval.


// Calling setState() in componentDidMount() will not end up in an infinite loop, but will just invoke an additional rendering. 


// 2 different lifecycle methods examples
import React from 'react';
import ReactDOM from 'react-dom';

export class Flashy extends React.Component {
  componentWillMount() {
    alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');
  }

  componentDidMount() {
        alert('YOU JUST WITNESSED THE DEBUT OF...  FLASHY!!!!!!!');
  }
  render() {

    alert('Flashy is rendering!');



    return (
      <h1 style={{ color: this.props.color }}>
        OOH LA LA LOOK AT ME I AM THE FLASHIEST
      </h1>
    );
  }
}

ReactDOM.render(
  <Flashy color='red' />,
  document.getElementById('app')
);

setTimeout(() => {
  ReactDOM.render(
    <Flashy color='green' />,
    document.getElementById('app')
  );
}, 2000);