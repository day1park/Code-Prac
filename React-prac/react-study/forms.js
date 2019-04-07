onChange; // means to invoke some function on each change of an input field. It is similar to onClick in that it follows a similar naming convention, and it is applied in a similar way to an element. A “change” happens whenever there is a change to the value of the input form, such as by typing in a character, deleting characters, or copying and pasting text into the field.

// The e parameter of the function is an optional parameter of the input event handler which equals to a JavaScript Event object that contains information regarding what action or event just happened. When the handleUserInput() function is invoked, the action that occurs, like a change in the input field, is passed as the value of e. Then, the information about the action can be accessed, such as e.target.value, which would be the value of the text input element.

// Every time we change the input of the text field, whether by adding or deleting some text, it will trigger the onChange attribute’s function, handleUserInput(). When this function is invoked, it will update the state of the component to the current value of the text field using setState(). Any time setState() is called for a component, it will trigger a call to the render() method, which will re-display the text to the latest value of the text field.

import React from "react";
import ReactDOM from "react-dom";

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  handleUserInput(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    return (
      <div>
        <input
          onChange={this.handleUserInput}
          type="text"
          value={this.state.userInput}
        />
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Input />, document.getElementById("app"));

// controlled component and uncontrolled component.

// uncontrolled component is a component that maintains its own internal state.
// controlled component is a component that does not maintain any internal state. Since a controlled component has no state, it must be controlled by someone else.
let input = document.querySelector('input[type="text"]');

let typedText = input.value; // input.value will be equal to whatever text is currently in the text box.  <input /> keeps track of its own text.
// The fact that <input /> keeps track of information makes it an uncontrolled component. It maintains its own internal state, by remembering data about itself.

// A controlled component, on the other hand, has no memory. If you ask it for information about itself, then it will have to get that information through props. Most React components are controlled.

// In React, when you give an <input /> a value attribute, then something strange happens: the <input /> BECOMES controlled. It stops using its internal storage. This is a more ‘React’ way of doing things.

// A controlled component has its state controlled from outside. Because of this, controlled components are usually stateless as they do not store their own state and receive it from a parent component.

// Uncontrolled components are essentially stateful, as they store and maintain their own internal state.
