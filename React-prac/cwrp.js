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
    if (this.state.input == nextState.input) {
      return false;
    }
  }

  render() {
    return <h1>{this.state.number}</h1>;
  }
}
