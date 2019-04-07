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
