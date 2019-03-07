class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: this.props.number };
  }

  // React may call this method even though nothing has really changed so make sure to make a comparison. If nothing has changed, there will be no need to change the state of the component. But if it has changed, then this change can be acted upon.

  componentWillReceiveProps(nextProps) {
    if (this.props.number !== nextProps.number) {
      this.setState({ number: nextProps.number });
    }
  }

  // component will only update if the new input is different from the previous
  shouldComponentUpdate(nextProps, nextState) {
    // improve the performance of a component because it can help to prevent unnecessary re-rendering.
    if (this.state.input == nextState.input) {
      return false;
    }
  }

  componentWillUpdate(nextProps, nextState) {
    // Do something here
  }

  //should be done as long as you compare the current props to the previous props to avoid unnecessary network requests.
  componentDidUpdate(prevProps, prevState) {
    if (this.props.input == prevProps.input) {
      // make ajax calls
      // Perform any other function
    }
  }

  // This is where you can perform any cleanups that should be done such as invalidating timers, canceling network requests, removing event listeners or canceling any subscriptions made in componentDidMount.
  componentWillUnmount() {
    document.removeEventListener("click", SomeFunction);
  }

  render() {
    return <h1>{this.state.number}</h1>;
  }
}
