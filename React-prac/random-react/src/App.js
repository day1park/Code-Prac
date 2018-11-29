import React, { Component } from "react";

import "./App.css";
import Collapsible from "./collapsible/collapsible";
import Greeting from "./greeting/greeting";
import Header from "./header/header";

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
        <Greeting name="guest" age={9000} />
        <Collapsible title="Push Exercises">
          <p>
            chest and tricep exercises consists of a lot of pushing. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Animi, dolorem,
            nesciunt vel explicabo ullam odio corporis dignissimos, non sint
            illo doloremque quasi quisquam numquam labore. Eligendi, impedit ea
            nobis sunt aut nulla nihil dolores odit deserunt sequi. Reiciendis
            consequatur exercitationem culpa at quis sequi voluptate excepturi
            maiores qui doloribus laborum eligendi soluta ipsa animi aperiam
            voluptates consequuntur alias ad, enim, incidunt neque. Facilis
            asperiores at porro architecto, deleniti non, autem facere quo
            accusantium unde molestiae quae! Aliquam sit quasi quia dolorem
            voluptas maxime quidem odio amet soluta animi fugiat magnam porro
            cumque nemo voluptatibus itaque perspiciatis, architecto modi,
            reprehenderit praesentium.
          </p>
        </Collapsible>
        <Collapsible title="Pull Exercises">
          <p>pull exercises such as most back or bicep exercises.</p>
        </Collapsible>
        <Collapsible title="Leg Exercises">
          <p>
            don't skip leg day. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Accusantium modi, nobis delectus esse animi
            nostrum maiores quisquam tenetur consectetur nam atque ipsum optio
            perspiciatis, minima commodi incidunt. Ipsa, dolorem possimus?
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
