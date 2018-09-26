//.render() method that returns an HTML-like JSX element:
class Example extends React.Component {
    render() {
        return <h1>Hello world</h1>;
    }
}

//Render methods can also return another kind of JSX: component instances.

class OMG extends React.Component {
    render() {
        return <h1>Whooaa!</h1>;
    }
}

class Crazy extends React.Component {
    render() {
        return <OMG />;
    }
}

//Crazy renders an <OMG />. Crazy's render method returns an instance of the OMG component class


//profile page 
import React from 'react';
import ReactDOM from 'react-dom';


class ProfilePage extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <h1>All About Me!</h1>
                <p>I like movies and blah blah blah blah blah</p>
                <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
            </div>
        );
    }
}

//Nav Bar
import React from 'react';

class NavBar extends React.Component {
    render() {
        const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
        const navLinks = pages.map(page => {
            return (
                <a href={'/' + page}>
                    {page}
                </a>
            )
        });

        return <nav>{navLinks}</nav>;
    }
}



// import the navbar into the profile page

import { NavBar } from './NavBar.js'


//exporting place the keyword export immediately before something that you want to export. That something can be any top-level var, let, const, function, or class:

// Manifestos.js:

export const faveManifestos = {
    futurist: 'http://www.artype.de/Sammlung/pdf/russolo_noise.pdf',
    SCUM: 'http://www.ccs.neu.edu/home/shivers/rants/scum.html',
    cyborg: 'http://faculty.georgetown.edu/irvinem/theory/Haraway-CyborgManifesto-1.pdf'
};

//export multiple things from the same file:
export const faveManifestos = {
    futurist: 'http://www.artype.de/Sammlung/pdf/russolo_noise.pdf',
    SCUM: 'http://www.ccs.neu.edu/home/shivers/rants/scum.html',
    cyborg: 'http://faculty.georgetown.edu/irvinem/theory/Haraway-CyborgManifesto-1.pdf'
};

export const alsoRan = 'TimeCube';

//In a different file, import the name of the var, let, const, function, or class from the first file:

// App.js:

// Import faveManifestos and alsoRan from ./Manifestos.js:
import { faveManifestos, alsoRan } from './Manifestos';

// Use faveManifestos:
console.log(`A Cyborg Manifesto:  ${faveManifestos.cyborg}`);



//export 

export class NavBar extends React.Component {
    render() {
        const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
        const navLinks = pages.map(page => {
            return (
                <a href={'/' + page}>
                    {page}
                </a>
            )
        });

        return <nav>{navLinks}</nav>;
    }
}



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ completed profile page file

import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar.js'

class ProfilePage extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <h1>All About Me!</h1>
                <p>I like movies and blah blah blah blah blah</p>
                <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
            </div>
        );
    }
}

ReactDOM.render(
    <ProfilePage />,
    document.getElementById('app')
);

//rendered and imported and exported from navbar file