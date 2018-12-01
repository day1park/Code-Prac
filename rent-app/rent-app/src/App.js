import React, { Component } from "react";
import "./App.css";
import Header from "./header";
import Table from "./table";
import Search from "./search/search";

const API = "https://hiring-task-api.herokuapp.com/v1/leases/:id";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLease: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(API)
      .then(response => response.json())
      .then(parsedJSON => {
        this.setState({ currentLease: parsedJSON });
      })
      .catch(error => console.log("parsing failed"));
  }

  render() {
    const { currentLease } = this.state;
    return (
      <div>
        <Header />
        <Search />
        <Table lease={currentLease} />
      </div>
    );
  }
}

export default App;
