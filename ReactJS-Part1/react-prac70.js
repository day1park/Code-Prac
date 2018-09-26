changeColor() {
    const newColor = this.state.color == green ? yellow : green;
    this.setState({ color: newColor });