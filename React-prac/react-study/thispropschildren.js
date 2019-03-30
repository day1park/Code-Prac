// this.props.children
// Every component’s props object has a property named children.

// this.props.children will return everything in between a component’s opening and closing JSX tags.

// If a component has more than one child between its JSX tags, then this.props.children will return those children in an array. However, if a component has only one child, then this.props.children will return the single child, not wrapped in an array.

import React from "react";

export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
      titleText += "s";
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}

// where list will be rendered
import React from "react";
import ReactDOM from "react-dom";
import { List } from "./List";

class App extends React.Component {
  render() {
    return (
      <div>
        <List type="Living Musician">
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type="Living Cat Musician">
          <li>Nora the Piano Cat</li>
        </List>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
