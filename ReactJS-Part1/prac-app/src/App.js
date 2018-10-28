import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    const strings = ["Test1", "Test2", "Testy 3"];

    const listItems = strings.map((string, i) => (
      <li key={"string_" + i}>{string}</li>
    ));
    console.log(listItems);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to the prac App</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ul>{listItems}</ul>;
        </header>
      </div>
    );
  }
}

export default App;
