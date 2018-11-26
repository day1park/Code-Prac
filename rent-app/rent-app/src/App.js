import React, { Component } from "react";
import "./App.css";
import Header from "./header";
import Table from "./table";

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
      .then(data => {
        this.setState({ data });
      });
  }
  render() {
    console.log(this.state.data);

    return (
      <div>
        <Header />
        {/* <Search /> */}
        {/* </Table> */}
      </div>
    );
  }
}

export default App;
