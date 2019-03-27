class MyClass extends React.Component {
  myFunc() {
    alert("Stop it.  Stop hovering.");
  }

  render() {
    return (
      <div onHover={this.myFunc}>
        <h1>this is an example</h1>
      </div>
    );
  }
}

// Render functions often contain event listeners
