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
      data: []
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(l => {
        this.setState({ data: l });
      });
  }
  render() {
    console.log(this.state.data);

    return (
      <div>
        <Header />
        <Search />
        <Table lease={this.state.data} />
      </div>
    );
  }
}

export default App;
