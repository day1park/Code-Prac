// To make a component have state, give the component a state property. This property should be declared inside of a constructor method, like this:

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }

  render() {
    return <div></div>;
  }
}

<Example />
// Whoa, a constructor method? super(props)? What's going on here? Let's look more closely at this potentially unfamiliar code:

constructor(props) {
  super(props);
  this.state = { mood: 'decent' };
}
// this.state should be equal to an object, like in the example above. This object represents the initial "state" of any component instance. 


import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// constructor method begins here:
constructor(props) {
  super(props);
  this.state = {
    title: 'Best App'
  }
}
	
  render() {
    return (
      <h1>
        Wow this entire app is just an h1.
      </h1>
    );
  }
}

// add constructor(props) with super(props) and this.state with and object of {title: 'string' }

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// constructor method begins here:
constructor(props) {
  super(props);
  this.state = {
    title: 'Best App'
  }
}
	
  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
};

ReactDOM.render(
<App />,
document.getElementById('app')
);


// changing state by calling on this.setState({change the object inside example})
import React from 'react';

class Example extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      mood:   'great',
      hungry: false
    };
  }

  render() {
    return <div></div>;
  }
}

<Example />






// change mood

import React from 'react';
import ReactDOM from 'react-dom';

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'good' };
    this.toggleMood = this.toggleMood.bind(this);
  }

  toggleMood() {
    const newMood = this.state.mood == 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  }

  render() {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>
          Click Me
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Mood />, document.getElementById('app'));

// set State

import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: green
    };
    this.changeColor = this.changeColor.bind(this);
  }
  
  changeColor() {
      const changeColor = this.state.color == green ? yellow: green;
    this.setState({ color: changeColor })
  }

  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick = {this.changeColor} >
          Change color
        </button>
      </div>
    );
  }
}

ReactDOM.render(
<Toggle />,
document.getElementById('app')
);

//change color toggle file

import React from 'react';
import ReactDOM from 'react-dom';

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'good' };
    this.toggleMood = this.toggleMood.bind(this);
  }

  toggleMood() {
    const newMood = this.state.mood == 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  }

  render() {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>
          Click Me
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Mood />, document.getElementById('app'));

//mood file 





//~~~~~~~~ this.setState Automatically Calls render

import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: green
    };
    this.changeColor = this.changeColor.bind(this);
  }
  
  changeColor() {
      const changeColor = this.state.color == green ? yellow: green;
    this.setState({ color: changeColor })
  }

  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick = {this.changeColor} >
          Change color
        </button>
      </div>
    );
  }
}

ReactDOM.render(
<Toggle />,
document.getElementById('app')
);