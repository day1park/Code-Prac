// Update state with this.setState
// A component can do more than just read its own state. A component can also change its own state.

// A component changes its state by calling the function
this.setState(); // takes two arguments: an object that will update the component’s state, and a callback. You basically never need the callback.

// Call this.setState from Another Function
// The most common way to call this.setState() is to call a custom function that wraps a this.setState() call. .makeSomeFog() is an example:

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: "sunny" };
    this.makeSomeFog = this.makeSomeFog.bind(this);
  }

  makeSomeFog() {
    this.setState({
      weather: "foggy"
    });
  }
}

this.makeSomeFog = this.makeSomeFog.bind(this);
// This line is necessary because makeSomeFog()‘s body contains the word this.

import React from "react";
import ReactDOM from "react-dom";

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: "good" };
    this.toggleMood = this.toggleMood.bind(this);
  }

  toggleMood() {
    const newMood = this.state.mood == "good" ? "bad" : "good";
    this.setState({ mood: newMood });
  }

  render() {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>Click Me</button>
      </div>
    );
  }
}

ReactDOM.render(<Mood />, document.getElementById("app"));

// Due to the way that event handlers are bound in JavaScript, this.toggleMood() loses its this when it is used on line 20. Therefore, the expressions this.state.mood and this.setState on lines 7 and 8 won’t mean what they’re supposed to… unless you have already bound the correct this to this.toggleMood.
