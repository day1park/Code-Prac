import React from 'react';
import ReactDOM from 'react-dom';

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
ReactDOM.render(
  <PropsDisplayer />,
  document.getElementById('app')
);

//this.props

// ~~~~~~~~~~~~~~~ pass props to a component
import React from 'react';
import ReactDOM from 'react-dom';

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
ReactDOM.render(
  <PropsDisplayer myProp="Hello" />,
  document.getElementById('app')
);



//~~~~~~~~~~~~~~~~~~~~~ render a component's props
import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Day' />,
  document.getElementById('app')
);


// ~~~~~~~~~~ firstName is used in this.props.firstName



// greeting.js file

import React from 'react';

export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}

// app.js file

import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name='Day' />
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

//~~~~~~~~~~~~~~~~~~~~~~ render different UI based on props
//~~~~~~~~~ welcome file
import React from 'react';

export class Welcome extends React.Component {
  render() {
    if (this.props.name == 'Wolfgang Amadeus Mozart') {
      return (
        <h2>
          hello sir it is truly great to meet you here on the web
      	</h2>
      );
    } else {
      return (
        <h2>
          WELCOME "2" MY WEB SITE BABYYY!!!!!
      	</h2>
      );
    }
  }
}

//~~~~~~ home.js file
import React from 'react';
import ReactDOM from 'react-dom';
import { Welcome } from './Welcome';

class Home extends React.Component {
  render() {
    return <Welcome name='Ludwig van Beethoven' />;
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('app')
);


//~~~~~~~~~ greeting.js file
import React from 'react';
import ReactDOM from 'react-dom';

export class Greeting extends React.Component {
  render() {
    if (this.props.signedIn == false) {
      return <h1>GO AWAY</h1>;
    } else {
      return <h1>Hi there, {this.props.name}!</h1>;
    }
  }
}

//~~~~~~~~~~~~~~~~~~~app.js file
import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Alison" signedIn={true} />
        <article>
          Latest:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);




//~~~~~~~~~~~~~~~~~~~ unsure of this event handler in component class
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';



class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }

  render() {
    return <Button />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

// ~~~~~~~~~~~~~~~~~~ working code below

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }

  render() {
    return <Button />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

//~~~~~~~~~~~~~~

render() {
  return <Button talk={this.talk} />;

  //~~~~~~~~~~~~~~~~~~~ change component props

  import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button talk={this.talk} />; //foo="bar" ---> talk="bar" ------> talk={this.talk}
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);


//How to add onClick option on a button
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.talk}>
        Click me!
      </button>
    );
  }
}



//~~~~~~this.props.children

import React from 'react';
import { LilButton } from './LilButton';

class BigButton extends React.Component {
  render() {
    console.log(this.props.children);
    return <button>Yo I am big</button>;
  }
}


// Example 1
<BigButton>
  I am a child of BigButton.
</BigButton>


// Example 2
<BigButton>
  <LilButton />
</BigButton>


// Example 3
<BigButton />

 // Look at BigButton.js. In Example 1, <BigButton>'s this.props.children would equal the text, "I am a child of BigButton."
//
 // In Example 2, <BigButton>'s this.props.children would equal a <LilButton /> component.
//
 // In Example 3, <BigButton>'s this.props.children would equal undefined.

 import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './List';

class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);


//~~~~~~~App.js

import React from 'react';

export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}

//~~~~~~~~~~~List.js


// ~~~Select App.js.
// ~~~
// ~~~Notice that App renders two <List><List /> instances, and that each <List><List /> has at least one <li></li> child.
// ~~~
// ~~~Now open List.js, and take a look at the List component class.
// ~~~
// ~~~Think about the fact that each List instance is going to be rendered with two JSX tags:
// ~~~
// ~~~<List>  // opening tag
// ~~~</List> // closing tag
// ~~~...and that there will be at least one <li></li> child in between those tags:
// ~~~
// ~~~<List>  // opening tag
// ~~~  <li></li> // child
// ~~~</List> // closing tag
// ~~~Click Run.
// ~~~
// ~~~2.
// ~~~You can see two list titles in the browser, but no list items! How can you make the list-items appear?
// ~~~
// ~~~In List.js, in the render function, in between <ul></ul> tags, add {this.props.children}.
// ~~~
// ~~~3.
// ~~~BONUS: Each <List><List /> instance is passed a singular title: "Living Musician" and "Living Cat Musician," respectively. Somehow, each <List><List /> counts its list-items and automatically adds an "s" to the end of its title if the count is greater than one. We could add a second piano cat, and the second list title would automatically pluralize.
// ~~~
// ~~~See if you can figure out how the instances of the List component class are automatically pluralizing their titles!




import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = {
  text: 'I am a button'
}

ReactDOM.render(
  <Button text="" />,    //prop inside button />  text ="" will override the defaultProps
  document.getElementById('app')
);