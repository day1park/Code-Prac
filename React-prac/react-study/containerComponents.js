// Separate Container Components From Presentational Components: Apply

//if a component has to have state, make calculations based on props, or manage any other complex logic, then that component shouldn’t also have to render HTML-like JSX.

// Instead of rendering HTML-like JSX, the component should render another component. It should be that component’s job to render HTML-like JSX.

//a presentational component will always get rendered by a container component.

// Any component that gets rendered by a different component should use export.

// In this programming pattern, the container component does the work of figuring out what to display. The presentational component does the work of actually displaying it. If a component does a significant amount of work in both areas, then that’s a sign that you should use this pattern!

// CONTAINER COMPONENT EXAMPLE
import React from "react";
import ReactDOM from "react-dom";
import { GuineaPigs } from "../components/GuineaPigs";
const GUINEAPATHS = [
  "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg",
  "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg",
  "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg",
  "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg"
];

class GuineaPigsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentGP: 0 };

    this.interval = null;

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let src = GUINEAPATHS[this.state.currentGP];
    return <GuineaPigs src={src} />;
  }
}

ReactDOM.render(<GuineaPigsContainer />, document.getElementById("app"));

// A container does data fetching and then renders its corresponding sub-component. That’s it.
// Corresponding” meaning a component that shares the same name:

StockWidgetContainer => StockWidget;
TagCloudContainer => TagCloud;
PartyPooperListContainer => PartyPooperList;

// PRESENTATIONAL COMPONENT EXAMPLE
import React from "react";

export class GuineaPigs extends React.Component {
  render() {
    const src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}


// SAME AS ABOVE PRESENTATIONAL COMPONENT EXAMPLE but stateless functional way

import React from 'react';

export const GuineaPigs = (props) => {
  let src = props.src;
  return (
  	<div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
    </div>
  )
}

//First, lets pull out data-fetching into a container component.

class CommentListContainer extends React.Component {
  state = { comments: [] };
  componentDidMount() {
    fetchSomeComments(comments => this.setState({ comments: comments }));
  }
  render() {
    return <CommentList comments={this.state.comments} />;
  }
}
//Now, let’s rework CommentList to take comments as a prop.

const CommentList = props => (
  <ul>
    {props.comments.map(c => (
      <li>
        {c.body}—{c.author}
      </li>
    ))}
  </ul>
);

// We’ve separated our data-fetching and rendering concerns.

// We’ve made our CommentList component reusable.

// We’ve given CommentList the ability to set PropTypes and fail loudly.

// When you separate a container component from a presentational component, the presentational component will always end up like this: one render() function, and no other properties.

// If you have a component class with nothing but a render function, then you can rewrite that component class in a very different way. Instead of using React.Component, you can write it as a JavaScript function!

// A component class written as a function is called a stateless functional component. Stateless functional components have some advantages over typical component classes


// A component class written in the usual way:
export class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// The same component class, written as a stateless functional component:
export const MyComponentClass = () => {
  return <h1>Hello world</h1>;
}

// Works the same either way:
ReactDOM.render(
	<MyComponentClass />,
	document.getElementById('app')
);


