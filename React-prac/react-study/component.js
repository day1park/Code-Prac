import React from "react";
import ReactDOM from "react-dom";
import { NavBar } from "./NavBar.js";

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

//Crazy‘s render method returns an instance of the OMG component class. You could say that Crazy renders an <OMG />.

import React from "react";

class NavBar extends React.Component {
  render() {
    const pages = [
      "home",
      "blog",
      "pics",
      "bio",
      "art",
      "shop",
      "about",
      "contact"
    ];
    const navLinks = pages.map(page => {
      return <a href={"/" + page}>{page}</a>;
    });

    return <nav>{navLinks}</nav>;
  }
}
