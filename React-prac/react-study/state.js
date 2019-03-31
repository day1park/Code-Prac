// React components will often need dynamic information in order to render. example, imagine a component that displays the score of a basketball game. The score of the game might change over time, meaning that the score is dynamic.

// two ways for a component to get dynamic information: props and state. Besides props and state, every value used in a component should always stay exactly the same.

// Unlike props, a component’s state is not passed in from the outside. A component decides its own state.

// To make a component have state, give the component a state property. This property should be declared inside of a constructor method, like this:

class Example extends React.Component {
  constructor(props) {
    super(props);
    // It is important to note that React components always have to call super in their constructors to be set up properly.
    this.state = { mood: "decent" };
    // A React component’s state is a plain JavaScript object, so it can store any valid value that is storable within a JavaScript object. This includes booleans, strings, numbers, and even other objects which you can nest within the state.
  }

  render() {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
      </div>
    );
  }
}

<Example />;

// To read a component’s state, use the expression this.state.name-of-property e.g. this.state.mood


// component state is essentially a JavaScript object, so you can access the properties using dot notation as well as bracket notation.

// For example,

this.state['key'];

// Using bracket notation allows us to select property names that have special characters or spaces that we otherwise could not select using dot notation. For instance,

this.state = {
  "key 1": value
}

/* Not valid */
this.state.key 1;

/* Valid */
this.state["key 1"];