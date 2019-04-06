// An inline style is a style that’s written as an attribute, like this:
<h1 style={{ color: "red" }}>Hello world</h1>;
// outer curly braces inject JavaScript into JSX. They say, “everything between us should be read as JavaScript, not JSX.”

// inner curly braces create a JavaScript object literal. They make this a valid JavaScript object:

{
  color: "red";
}

// The property names for inline styles in React do coincide with CSS property names, however, the property name is camelCased instead of hyphenated (like it is in CSS) and the property value should be wrapped in quotes.

import React from "react";
import ReactDOM from "react-dom";

const styledHeading = (
  <h3 style={{ backgroundColor: "skyblue", fontSize: "40px", color: "maroon" }}>
    I'm an H3 element with inline styles!
  </h3>
);
//Note the use of camelCase for the property names and the quotes wrapping the property values

ReactDOM.render(styledHeading, document.getElementById("app"));

// style injected
import React from "react";

const styles = {
  color: "darkcyan",
  background: "mintcream"
};

export class StyledClass extends React.Component {
  render() {
    return <h1 style={styles}>Hello world</h1>;
    // 1 curly brace NOT 2!
  }
}
