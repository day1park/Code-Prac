import React from "react";

// import React from React library object
import ReactDOM from "react-dom";

// every component must come from a component class.

//component class, you use a base class from the React library: React.Component.

// React.Component is a JavaScript class. To create your own component class, you must subclass React.Component. You can do this by using the syntax class YourComponentNameGoesHere extends React.Component {}.

// React Classes are written in UpperCamelCase

// To call a component’s render method, you pass that component to ReactDOM.render(). Notice your component, being passed as ReactDOM.render()‘s first argument:

ReactDOM.render(<MyComponentClass />, document.getElementById("app"));

import React from "react";
import ReactDOM from "react-dom";

class SomeQuote extends React.Component {
  render() {
    return (
      <blockquote>
        <p>What is important now is to recover our senses.</p>
        <cite>
          <a target="_blank" href="https://en.wikipedia.org/wiki/Susan_Sontag">
            Susan Sontag
          </a>
        </cite>
      </blockquote>
    );
  }
}

ReactDOM.render(<SomeQuote />, document.getElementById("app"));

// A render() function can also be a fine place to put simple calculations that need to happen right before a component renders.
