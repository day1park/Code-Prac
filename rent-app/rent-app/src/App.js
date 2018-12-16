import React, { Component } from "react";
import "./App.css";
import Header from "./header";
import Table from "./table";
// import Search from "./search/search";

let API = "https://hiring-task-api.herokuapp.com/v1/leases/";
let input;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLease: [],
      currentId: ""
    };
  }

  // updateIdSearch(e) {
  //   // console.log(e.target.value);
  //   e.preventDefault();
  //   this.setState({
  //     idSearch: e.target.value
  //   });
  // }

  componentDidMount() {
    this.fetchData();
  }

  setup() {
    let button = "#submit";
    button.mousePressed("#idSearch");
    input = "#idSearch";
  }

  idSearch() {
    this.setState({
      currentId: API + input.value()
    });
  }

  fetchData() {
    fetch(this.state.currentId)
      .then(response => response.json())
      .then(parsedJSON => {
        this.setState({ currentLease: parsedJSON });
      })
      .catch(error => console.log("parsing failed"));
  }

  render() {
    const { currentLease, idSearch } = this.state;
    return (
      <div>
        <Header />
        {/* <Search /> */}
        <label>ID:</label>
        <input id="idSearch" placeholder=":id" value=":id" />
        <button id="submit">submit</button>
        <Table lease={currentLease} />
      </div>
    );
  }
}

export default App;
