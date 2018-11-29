import React, { Component } from "react";

import "./App.css";
import Collapsible from "./collapsible/collapsible";

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
    const isListed = gymExercises.includes(newExercise);

    if (isListed) {
      this.setState({
        message: "this exercise already exists!"
      });
    } else {
      newExercise !== "" &&
        this.setState({
          gymExercises: [...gymExercises, newExercise],
          message: ""
        });
    }

    this.addForm.reset();
  }

  removeExercise(exercise) {
    // console.log("remove" + exercise);
    const newGymExercises = this.state.gymExercises.filter(gymExercise => {
      return gymExercise !== exercise;
    });
    this.setState({
      gymExercises: [...newGymExercises]
    });

    if (newGymExercises.length === 0) {
      this.setState({
        message: "no exercises on your gym log, lets get active!"
      });
    }
  }

  removeAllExercises() {
    this.setState({
      gymExercises: [],
      message: "all exercises have been removed!"
    });
  }

  render() {
    const { gymExercises, message } = this.state;
    return (
      <div className="App">
        <Header />
        <Greeting name="DJ Khaled" age={1000} />
        <Collapsible title="overview panel header">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium modi, nobis delectus esse animi nostrum maiores quisquam
            tenetur consectetur nam atque ipsum optio perspiciatis, minima
            commodi incidunt. Ipsa, dolorem possimus? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Enim corrupti eveniet tempora fugiat
            itaque atque doloremque animi, expedita id sit architecto laborum
            vitae. Quis facere eos, similique atque vitae perspiciatis natus
            quos accusantium exercitationem harum eligendi vero architecto
            reiciendis et aut ab optio provident velit hic numquam. Debitis
            minima qui eos officiis reiciendis ea, quos fugit velit atque
            voluptate beatae sit quia natus voluptates fuga id nulla
            voluptatibus, maiores earum cumque, illo asperiores quod. Quasi,
            inventore esse asperiores iusto illo dolores quia a saepe neque
            sequi odio, eius minima, quas corporis? Sapiente ipsum tempora
            consequuntur fuga est placeat fugiat eveniet.
          </p>
        </Collapsible>
        <Collapsible title="features panel header">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium modi, nobis delectus esse animi nostrum maiores quisquam
            tenetur consectetur nam atque ipsum optio perspiciatis, minima
            commodi incidunt. Ipsa, dolorem possimus?
          </p>
        </Collapsible>
        <Collapsible title="software panel header">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium modi, nobis delectus esse animi nostrum maiores quisquam
            tenetur consectetur nam atque ipsum optio perspiciatis, minima
            commodi incidunt. Ipsa, dolorem possimus?
          </p>
        </Collapsible>
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
              <label type="sr-only" htmlFor="newExerciseInput">
                Add New Exercise
              </label>
              <input
                ref={input => (this.newExercise = input)}
                type="text"
                placeholder="add exercise"
                className="form-control"
                id="newExerciseInput"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </header>
        <div className="content">
          {(message !== "" || gymExercises.length === 0) && (
            <p className="message text-danger">
              <h1>{message}</h1>
            </p>
          )}
          {gymExercises.length > 0 && (
            <table className="table">
              <caption>Gym Exerecises</caption>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Exercise</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {gymExercises.map(exercise => {
                  return (
                    <tr key={exercise}>
                      <th scope="row">1</th>
                      <td>{exercise}</td>
                      <td className="text-right">
                        <button
                          onClick={e => this.removeExercise(exercise)}
                          type="button"
                          className="btn btn-danger btn-sm"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2">&nbsp;</td>
                  <td className="text-right">
                    <button
                      onClick={e => this.removeAllExercises()}
                      className="btn btn-success btn-sm"
                    >
                      clear list
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          )}
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
