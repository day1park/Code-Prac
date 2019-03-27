class Button extends React.Component {
  myFunc() {
    alert("Stop it.  Stop hovering.");
  }

  scream() {
    alert('AAAAAAAAHHH!!!!!');

  render() {
    return (
      <div onHover={this.myFunc}>
        <h1>this is an example</h1>

        <button onClick={this.scream}>AAAAAH!</button>
      </div>
    );
  }
}

ReactDOM.render(<Button />, document.getElementById('app'))
// Render functions often contain event listeners

// the component class has two methods: .myFunc() and .render(). .myFunc() is being used as an event handler. .myFunc() will be called any time that a user hovers over the rendered <div></div>.
