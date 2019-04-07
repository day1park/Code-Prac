// Stateless Functional Components and Props

// Stateless functional components usually have props passed to them.

// To access these props, give your stateless functional component a parameter. This parameter will automatically be equal to the component’s props object.

// / Normal way to display a prop:
export class MyComponentClass extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

// Stateless functional component way to display a prop:
export const MyComponentClass = (props) => {
  return <h1>{props.title}</h1>;
}

// Normal way to display a prop using a variable:
export class MyComponentClass extends React.component {
  render() {
  	let title = this.props.title;
    return <h1>{title}</h1>;
  }
}

// Stateless functional component way to display a prop using a variable:
export const MyComponentClass = (props) => {
	let title = props.title;
  return <h1>{title}</h1>;
}


// A component takes two optional inputs, props and state, and outputs HTML and/or other components.


// stateless functional components in React can only accept props and state as optional parameters. As a result, you cannot do something like the following, which adds other parameters other than props or state,

// NOT ALLOWED EXAMPLE BELOW
export const MyComponentClass = (props, param2, param3) => {
  return ...
}