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
  constructor(props) {
    // supoer is a keyword used to call functions on an objects parent
    super(props);
    this.state = {
      gymExercises: ["chest", "legs", "back"]
    };
  }
  render() {
    const { gymExercises } = this.state;
    return (
      <div className="App">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name="DJ Khaled" age={1000} />
        <h1>gym log</h1>
        {gymExercises.map(item => {
          return <p key={item}>{item}</p>;
        })}
      </div>
    );
  }
}

export default App;

// Greeting.propTypes = {
//   name: React.PropTypes.string,
//   age: React.PropTypes.number
// };
