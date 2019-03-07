class Example extends React.Component {
  componentWillMount() {
    console.log("I am about to say hello");
  }
  // this method actually gets called before the component is rendered

  render() {
    return <h1>Hello world</h1>;
  }
}
