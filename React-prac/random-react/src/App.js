import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Header = () => {
  return <h1 className="title">welcome to random react code</h1>;
};

const Greeting = props => {
  const { name, age } = props;
  return (
    <p>
      hello universe! my name is -->> {name}
      !! you are {age} years old!
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
          <Greeting name="DJ Khaled" age={1000} />
        </header>
      </div>
    );
  }
}

export default App;
