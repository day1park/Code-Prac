// react tutorial part 3
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};

ReactDOM.render(
<MyComponentClass />,
document.getElementById('app')
);




// ~~~~~~~~~~ break down

// create a variable named React:
import React from 'react';
// evaluate this variable and get a particular, imported JavaScript object:
React // { imported object properties here... }

//both import JavaScript objects. In both lines, the imported object contains React-related methods.

//The methods imported from 'react-dom' are meant for interacting with the DOM. You are already familiar with one of them: ReactDOM.render().

//Methods imported from 'react' are only for pure React purposes, such as creating components or writing JSX elements.

//import React from 'react';
//import ReactDOM from 'react-dom';



//React component is a small, reusable chunk of code that is responsible for one job, which often involves rendering HTML.
//every component must come from a component class.


//React.Component is a JavaScript class. 
// To create your own component class, you must subclass React.Component. You can do this by using the syntax class YourComponentNameGoesHere extends React.Component {}.


//Class names should be nouns in UpperCamelCase, with the first letter of every word capitalised. Use whole words — avoid acronyms and abbreviations (unless the abbreviation is much more widely used than the long form, such as URL or HTML).

//To make a React component, you write a JSX element. Instead of naming your JSX element something like h1 or div like you've done before, give it the same name as a component class. Voilà, there's your component instance!

// component goes here:
<MyComponentClass />


//To call a component's render method, you pass that component to ReactDOM.render(). Notice your component, being passed as ReactDOM.render()'s first argument:

ReactDOM.render(
    <MyComponentClass />,
    document.getElementById('app')
  );