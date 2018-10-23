import React, { Component } from "react";
import uuid from "uuid";
import $ from "jquery";
import Projects from "./components/Projects";
import AddProject from "./components/AddProject";
import Todos from "./components/Todos";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    };
  }

  getTodos() {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ todos: data }, function() {
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: "yoga website",
          category: "web design"
        },
        {
          id: uuid.v4(),
          title: "2-sided market place",
          category: "mobile development"
        },
        {
          id: uuid.v4(),
          title: "dance party app",
          category: "web development"
        }
      ]
    });
  }

  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

  componentDidMount() {}

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({ projects: projects });
  }
  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({ projects: projects });
  }

  render() {
    return (
      <div className="App">
        <h1>my app</h1>
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects
          projects={this.state.projects}
          onDelete={this.handleDeleteProject.bind(this)}
        />
        <hr />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
