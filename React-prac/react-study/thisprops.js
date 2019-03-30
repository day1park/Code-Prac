// Every component has something called props.

// A component’s props is an object. It holds information about that component.

// To see a component’s props object, you use the expression this.props.

import React from "react";
import ReactDOM from "react-dom";

class PropsDisplayer extends React.Component {
  render() {
    const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(<PropsDisplayer />, document.getElementById("app"));

// Despite what you see in the browser, <PropsDisplayer />‘s props object isn’t really empty. It has some properties that JSON.stringify doesn’t detect. But even if you could see those properties, the props object still wouldn’t have much of value to show you right now.


// You can pass information to a React component. By giving that component an attribute

<MyComponent foo="bar" />

<Example message="This is some top secret info." />

<Greeting myInfo={["top", "secret", "lol"]} />

<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />