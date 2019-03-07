class Example extends React.Component {
  componentWillMount() {
    console.log("I am about to say hello");
  }
  // this method actually gets called before the component is rendered

    // method to make API calls example 
  componentDidMount() {
    fetch(url).then(results => {
        // Do something with the results
    })
  


  render() {
    return <h1>Hello world</h1>;
  }
}
