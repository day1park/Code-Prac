import React, { Component } from "react";
import Projects from "./components/Projects";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
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
    };
  }
  render() {
    return (
      <div className="App">
        <h1>my app</h1>
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
