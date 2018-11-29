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
    // super is a keyword used to call functions on an objects parent
    super(props);
    this.state = {
      gymExercises: ["chest", "legs", "back"],
      message: ""
    };
  }

  addExercise(e) {
    e.preventDefault();
    const { gymExercises } = this.state;
    const newExercise = this.newExercise.value;
    newExercise !== "" &&
      this.setState({
        gymExercises: [...gymExercises, newExercise]
      });

    this.addForm.reset();
  }

  render() {
    const { gymExercises } = this.state;
    return (
      <div className="App">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name="DJ Khaled" age={1000} />
        <header>
          <h1>gym log</h1>
          <form
            ref={input => (this.addForm = input)}
            className="form-inline"
            onSubmit={e => {
              this.addExercise(e);
            }}
          >
            <div className="form-group">
              <label type="sr-only" htmlFor="newItemInput">
                Add New Item
              </label>
              <input
                ref={input => (this.newExercise = input)}
                type="text"
                placeholder="add exercise"
                className="form-control"
                id="newItemInput"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </header>
        <div className="content">
          <table className="table">
            <caption>Gym Exerecises</caption>
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {gymExercises.map(item => {
                return (
                  <tr key={item}>
                    <th scope="row">1</th>
                    <td>{item}</td>
                    <td>Button</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;

// Greeting.propTypes = {
//   name: React.PropTypes.string,
//   age: React.PropTypes.number
// };
