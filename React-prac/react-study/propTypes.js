// prop validation. - ensure that your props are doing what they’re supposed to be doing. If props are missing, or if they’re present but they aren’t what you’re expecting, then a warning will print in the console.

// documentation - Documenting props makes it easier to glance at a file and quickly understand the component class inside.

// If a component class expects a prop, then you can give that component class a propType!

MessageDisplayer.propTypes = {
  message: React.PropTypes.string
};
// propTypes is an object
// For each prop that your component class expects to receive, there can be one property on your propTypes object.

// A static property is one that applies to a class, but not to any instance of the class. As a result, there is just one copy of a static property, rather than one copy of the property for each instance.

// When applying propTypes, it is a static property of a component class. We only need to set the propTypes once to the class, and every instance we create will be able to refer to that.

// Add Properties to PropTypes

React.PropTypes.expected - data - type - goes - here;

// Each property on the propTypes object is called a propType.

// If you add .isRequired to a propType, then you will get a console warning if that prop isn’t sent.

//example of component expectin one  prop
import React from "react";

export class MessageDisplayer extends React.Component {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}

// This propTypes object should have
// one property for each expected prop:
MessageDisplayer.propTypes = {
  message: React.PropTypes.string
};

// component with 6 props
import React from "react";

export class Runner extends React.Component {
  render() {
    let miles = this.props.miles;
    let km = this.props.milesToKM(miles);
    let races = this.props.races.map(function(race, i) {
      return <li key={race + i}>{race}</li>;
    });

    return (
      <div style={this.props.style}>
        <h1>{this.props.message}</h1>
        {this.props.isMetric && <h2>One Time I Ran {km} Kilometers!</h2>}
        {!this.props.isMetric && <h2>One Time I Ran {miles} Miles!</h2>}
        <h3>Races I've Run</h3>
        <ul id="races">{races}</ul>
      </div>
    );
  }
}

Runner.propTypes = {
  message: React.PropTypes.string.isRequired,
  style: React.PropTypes.object.isRequired,
  isMetric: React.PropTypes.bool.isRequired,
  miles: React.PropTypes.number.isRequired,
  milesToKM: React.PropTypes.func.isRequired,
  races: React.PropTypes.array.isRequired
};

// bestseller example
import React from "react";

export class BestSeller extends React.Component {
  render() {
    return (
      <li>
        Title: <span>{this.props.title}</span>
        <br />
        Author: <span>{this.props.author}</span>
        <br />
        Weeks: <span>{this.props.weeksOnList}</span>
      </li>
    );
  }
}

BestSeller.propTypes = {
  title: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  weeksOnList: React.PropTypes.number.isRequired
};

// render bestseller and books
import React from "react";
import ReactDOM from "react-dom";
import { BestSeller } from "./BestSeller";

export class BookList extends React.Component {
  render() {
    return (
      <div>
        <h1>Best Sellers</h1>
        <div>
          <ol>
            <BestSeller
              title="Glory and War Stuff for Dads"
              author="Sir Eldrich Van Hoorsgaard"
              weeksOnList={10}
            />
            <BestSeller
              title="The Crime Criminals!"
              author="Brenda Sqrentun"
              weeksOnList={2}
            />
            <BestSeller
              title="Subprime Lending For Punk Rockers"
              author="Malcolm McLaren"
              weeksOnList={600}
            />
          </ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<BookList />, document.getElementById("app"));

// propTypes data types:
PropTypes.array;
PropTypes.bool;
PropTypes.func;
PropTypes.number;
PropTypes.object;
PropTypes.string;
PropTypes.symbol;
// In addition to these, there are several other types that you can use to check the values of props as well.

// A React element
PropTypes.element;

// Instance of a specific class
PropTypes.instanceOf(ClassName);

// Array of a specified type
PropTypes.arrayOf(PropTypes.number);

// Object with property values that are a specific value
PropTypes.objectOf(PropTypes.string);


// PropTypes in Stateless Functional Components
const Example = (props) => {
  return <h1>{props.message}</h1>;
}

Example.propTypes = {
  message: React.PropTypes.string.isRequired
};

// Usual way:
class Example extends React.component{
}
Example.propTypes = {

};
...


import React from 'react';

export class GuineaPigs extends React.Component {
  render() {
    let src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}

GuineaPigs.propTypes = {
  src: React.PropTypes.string.isRequired
}


// QUESTION Can you set multiple data types for an expected prop?
// Yes, you can allow an expected prop to have multiple data types. To do this, you can utilize PropTypes.oneOfType(), which will let you list each type that can be expected.

import PropTypes from 'prop-types';

// In the following component, propOne can be
// of type string or boolean.
ExampleComponent.propTypes = {
  propOne: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.boolean
  ])
}