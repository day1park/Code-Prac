// React events are named using camelCase, rather than lowercase.
// With JSX you pass a function as the event handler, rather than a string.


// For example, the HTML:

<button onclick="activateLasers()">
  Activate Lasers
</button>


// is slightly different in React:

<button onClick={activateLasers}>
  Activate Lasers
</button>


// cannot return false to prevent default behavior in React. You must call preventDefault explicitly. For example, with plain HTML, to prevent the default link behavior of opening a new page, you can write:
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>



// In React, this could instead be:
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

// e is a synthetic event. React defines these synthetic events according to the W3C spec, so you don’t need to worry about cross-browser compatibility


// When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class. For example, this Toggle component renders a button that lets the user toggle between “ON” and “OFF” states:

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);


// You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.


// This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.



// If calling bind annoys you, there are two ways you can get around this. If you are using the experimental public class fields syntax, you can use class fields to correctly bind callbacks:

class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}


you can use an arrow function in the callback:

class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}

// you can’t call this.setState() from inside of the render function! 

import React from 'react';


const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: green
    }
  }
  render() {
    return (
      <div>
        <h1>
          Change my color
        </h1>
      </div>
    );
  }
}




import React from 'react';
import ReactDOM from 'react-dom'

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: green
    }
    this.changeColor = this.changeColor.bind(this);
  }
  
  changeColor() {
    const newColor = this.state.color == green ? yellow : green;
    this.setState({ color: newColor})
  }
  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
				<button onClick={this.changeColor}>
        	Change color
        </button>
      </div>
    );
  }
}

// screen’s color doesn’t change until Toggle renders.

// Inside of the render function, it’s this line:

// <div style={{background:this.state.color}}></div>

ReactDOM.render(<Toggle />, document.getElementById('app'))


// you can use this.setState to change single, multiple, or even all properties of state at a time. When setting state for multiple properties, only the properties passed in will be updated.

// For example, the following shows how the properties key1 and key3 of a state could be updated.

/* Given this state */
this.state = {
  key1: value1,
  key2: value2,
  key3: value3
}

/* We could use code like the following to update specific properties */
this.setState({ key1: newValue1, key3: newValue3 });




// Any time that you call this.setState(), this.setState() AUTOMATICALLY calls .render() as soon as the state has changed.