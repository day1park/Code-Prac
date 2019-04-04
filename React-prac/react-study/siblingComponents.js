// A child component updates its parent’s state, and the parent passes that state to a sibling component.

//divide Child in two: one component for displaying the name, and a different component for allowing a user to change the name.


// React is meant to be modular, so each component can be reusable in our code. let’s say we have a page with a couple of HTML elements that display some state, like an image and some text:

...
render(){
  return(
    <div>
      <img src= {this.state.img}/>
      <p>{this.state.text}</p>
    </div>
  ...
}

// Now, this is a really simple example, but lets say that we have the same piece of code in another component, then it will make sense to make it into a stateless component and now we can import it into each component we will need it:

import Display from '../Display/Display;';
...
 render(){
  return(
    <div>
      <Display img={this.state.img} text={this.state.text}/>
   ...
  )
 }
// There we can see the advantage of components that have one job, they are so generic that they are reusable, and there’s where their worth comes from.




//PARENT.JS 
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    // A stateful component class defines a function that calls this.setState.
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        {/* The stateful component passes that function down to a stateless component. */}
        <Child onChange={this.changeName} />
        {/* The stateful component class passes down its state, distinct from the ability to change its state, to a different stateless component. */}
        <Sibling name={this.state.name} />
        {/* An instance of the stateful component class is rendered. One stateless child component displays the state, and a different stateless child component displays a way to change the */}
      </div>
    );
  }
});

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);


// CHILD.JS
import React from 'react';

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // That stateless component class defines a function that calls the passed-down function, and that can take an event object as an argument. 
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <select
          id="great-names"
          // The stateless component class uses this new function as an event handler. 
          onChange={this.handleChange}>

          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}



// SIBLING.JS
import React from 'react';

export class Sibling extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div>
        {/* That stateless component class receives the state and displays it. */}
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
}