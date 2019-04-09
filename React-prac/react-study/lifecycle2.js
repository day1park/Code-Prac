// Updating & Unmounting Lifecycle Methods

// A component updates every time that it renders, starting with the second render.

// five updating lifecycle methods:

// componentWillReceiveProps
// shouldComponentUpdate
// componentWillUpdate
// render
// componentDidUpdate

// componentWillReceiveProps

// componentWillReceiveProps will get called here:
ReactDOM.render(<Example prop="myVal" />, document.getElementById("app"));

// componentWillReceiveProps will NOT get called here:
ReactDOM.render(<Example />, document.getElementById("app"));

import React from "react";

export class Example extends React.Component {
  // the method will run anytime the component receives any props, whether or not the props are new or the same as before.

  // To prevent the method from running its code anytime props are passed in, and only when new props are passed in, you can override the method code, for instance by comparing this.props with nextProps and only running if they are different.
  componentWillReceiveProps(nextProps) {
    alert(
      "Check out the new props.text that " +
        "I'm about to get:  " +
        nextProps.text
    );
  }

  render() {
    return <h1>{this.props.text}</h1>;
  }
}

// The first render won't trigger
// componentWillReceiveProps:
ReactDOM.render(<Example text="Hello world" />, document.getElementById("app"));

// After the first render,
// subsequent renders will trigger
// componentWillReceiveProps:
setTimeout(() => {
  ReactDOM.render(
    <Example text="Hello world" />,
    document.getElementById("app")
  );
}, 1000);



// shouldComponentUpdate

import React from 'react';

export class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = { subtext: 'Put me in an <h2> please.' };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if ((this.props.text == nextProps.text) && 
      (this.state.subtext == nextState.subtext)) {
      alert("Props and state haven't changed, so I'm not gonna update!");
      return false;
    } else {
      alert("Okay fine I will update.")
      return true;
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <h2>{this.state.subtext}</h2>
      </div>
    );
  }
}

// The best way to use shouldComponentUpdate is to have it return false only under certain conditions. If those conditions are met, then your component will not update.

// shouldComponentUpdate automatically receives two arguments: nextProps and nextState. It’s typical to compare nextProps and nextState to the current this.props and this.state, and use the results to decide what to do
// shouldComponentUpdate should return a boolean value, either true or false.


// componentWillUpdate
// checking the window size or interacting with an API
import React from 'react';

export class Example extends React.Component {
  componentWillUpdate(nextProps, nextState) {
    alert('Component is about to update!  Any second now!');
  }

  render() {
    return <h1>Hello world</h1>;
  }
}


// The componentWillUpdate() method is only invoked immediately after the shouldComponentUpdate() method returns true.

// If shouldComponentUpdate() returns false, then all the following methods, componentWillUpdate(), render(), and componentDidUpdate() will not be invoked.


// componentDidUpdate
import React from 'react';

export class Example extends React.component {
  componentDidUpdate(prevProps, prevState) {
    // componentDidUpdate is usually used for interacting with things outside of the React environment, like the browser or APIs. It’s similar to componentWillUpdate in that way, except that it gets called after render instead of before.
    alert('Component is done rendering!');
  }

  render() {
    return <h1>Hello world</h1>;
  }
}


// There are a few ways that this method can be implemented, with two common implementations as follows:

// One way is to check if there has been any change to the props or state at all, using a condition like the following,

componentDidUpdate(prevProps, prevState) {
  if ((this.props !== prevProps) || (this.state !== prevState)) {
    // code
  }
}
// Or, you might check if specific values have changed only, like follows,

componentDidUpdate(prevProps, prevState) {
  if (this.props.specificValue !== nextProps.specificValue) {
    // code
  }
}


// componentWillUnmount

// A component’s unmounting period occurs when the component is removed from the DOM. This could happen if the DOM is rerendered without the component, or if the user navigates to a different website or closes their web browser.

// componentWillUnmount gets called right before a component is removed from the DOM. If a component initiates any methods that require cleanup, then componentWillUnmount is where you should put that cleanup.

import React from 'react';

export class Example extends React.Component {
  componentWillUnmount() {
    alert('Goodbye world');
  }

  render() {
    return <h1>Hello world</h1>;
  }
}



// enthusiasm example
import React from 'react';
import ReactDOM from 'react-dom';
import { Enthused } from './Enthused';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enthused: false,
      text: ''
    };

    this.toggleEnthusiasm = this.toggleEnthusiasm.bind(this);
    this.addText = this.addText.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleEnthusiasm() {
    this.setState({
      enthused: !this.state.enthused
    });
  }

  setText(text) {
    this.setState({ text: text });
  }

  addText(newText) {
    let text = this.state.text + newText;
    this.setState({ text: text });
  }

  handleChange(e) {
    this.setText(e.target.value);
  }

  render() {
    let button;
    if (this.state.enthused) {
      button = (
        <Enthused toggle={this.toggleEnthusiasm} addText={this.addText} />
      );
    } else {
      button = (
        <button onClick={this.toggleEnthusiasm}>
          Add Enthusiasm!
        </button>
      );
    }

    return (
      <div>
        <h1>Auto-Enthusiasm</h1>
        <textarea rows="7" cols="40" value={this.state.text} 
          onChange={this.handleChange}>
        </textarea>
        {button}
        <h2>{this.state.text}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);



// enthus file
import React from 'react';

export class Enthused extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.addText('!');
    }, 15);
  }

  componentWillUnmount(prevProps, prevState) {
    clearInterval(this.interval)
  }
  render() {
    return (
      <button onClick={this.props.toggle}>
        Stop!
      </button>
    );
  }
}

// ReactDOM provides a way to remove a component from the DOM through code manually.

// You can use the method ReactDOM.unmountComponentAtNode(container), which will remove a mounted React component from the DOM in the specified container, and clean up any of its event handlers and state.