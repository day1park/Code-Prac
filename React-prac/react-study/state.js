// React components will often need dynamic information in order to render. example, imagine a component that displays the score of a basketball game. The score of the game might change over time, meaning that the score is dynamic.

// two ways for a component to get dynamic information: props and state. Besides props and state, every value used in a component should always stay exactly the same.

// Unlike props, a component’s state is not passed in from the outside. A component decides its own state.

// To make a component have state, give the component a state property. This property should be declared inside of a constructor method, like this:

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: "decent" };
  }

  render() {
    return <div />;
  }
}

<Example />;
