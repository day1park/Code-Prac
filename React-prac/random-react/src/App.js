import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Header = () => {
  return <h1 className="title">welcome to random react code</h1>;
};

const Greeting = props => {
  return (
    <p>
      hello universe! my name is -->> {props.name}
      !!
    </p>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <img src={logo} className="App-logo" alt="logo" />
          <Greeting name="DJ Khaled" />
        </header>
      </div>
    );
  }
}

export default App;
