import React, { Component } from "react";
import Projects from "./components/Projects";
import AddProject from "./components/AddProject";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  componentWillMount() {
    this.setState({
      projects: [
        {
          title: "yoga website",
          category: "web design"
        },
        {
          title: "2-sided market place",
          category: "mobile development"
        },
        {
          title: "dance party app",
          category: "web development"
        }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>my app</h1>
        <AddProject />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
