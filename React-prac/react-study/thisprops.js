// Every component has something called props.

// A component’s props is an object. It holds information about that component.

// To see a component’s props object, you use the expression this.props.

import React from "react";
import ReactDOM from "react-dom";

class PropsDisplayer extends React.Component {
  render() {
    const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(<PropsDisplayer myProp="Hello"/>, document.getElementById("app"));

// Despite what you see in the browser, <PropsDisplayer />‘s props object isn’t really empty. It has some properties that JSON.stringify doesn’t detect. But even if you could see those properties, the props object still wouldn’t have much of value to show you right now.


// You can pass information to a React component. By giving that component an attribute

<MyComponent foo="bar" />

<Example message="This is some top secret info." />

<Greeting myInfo={["top", "secret", "lol"]} />

<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />


// most common use of props is to pass information to a component, from a different component. 




import React from 'react';
import ReactDOM from 'react-dom';
import {Greeting} from './Greeting'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="whatever you'd like"/>
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);




// You can, and often will, pass functions as props. It is especially common to pass event handler functions.

// You define an event handler as a method on the component class, just like the render method


import React from 'react';

class Example extends React.Component {
  handleEvent() {
    alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
  }

  render() {
    return (
      <h1 onClick={this.handleEvent}>
        Hello world
      </h1>
    );
  }
}

// You can pass a method in the exact same way that you pass any other information.


// talker.js file
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return (
    // The attribute name onClick
    // is just a normal attribute name:
  
    <Button onClick={this.handleClick} />
    )
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

//button.js file

import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      // The attribute name onClick
      // creates an event listner:
      <button onClick={this.props.onClick}>
        Click me!
      </button>
    );
  }
}


// naming conventions
class MyClass extends React.Component {
  handleHover() {
    alert('I am an event handler.');
    alert('I will be called in response to "hover" events.');
  }
}


class MyClass extends React.Component {
  handleHover() {
    alert('I am an event handler.');
    alert('I will listen for a "hover" event.');
  }

  render() {
    return <Child onHover={this.handleHover} />;
  }
}