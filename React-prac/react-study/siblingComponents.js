// A child component updates its parent’s state, and the parent passes that state to a sibling component.

//divide Child in two: one component for displaying the name, and a different component for allowing a user to change the name.


// React is meant to be modular, so each component can be reusable in our code. let’s say we have a page with a couple of HTML elements that display some state, like an image and some text:

...
render(){
  return(
    <div>
      <img src= {this.state.img}/>
      <p>{this.state.text}</p>
    </div>
  ...
}

// Now, this is a really simple example, but lets say that we have the same piece of code in another component, then it will make sense to make it into a stateless component and now we can import it into each component we will need it:

import Display from '../Display/Display;';
...
 render(){
  return(
    <div>
      <Display img={this.state.img} text={this.state.text}/>
   ...
  )
 }
// There we can see the advantage of components that have one job, they are so generic that they are reusable, and there’s where their worth comes from.
