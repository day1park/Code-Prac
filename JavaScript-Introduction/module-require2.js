// wrap any collection of data and functions in an object and export the module using module.exports

let Menu = {};

module.exports = {    //exposes the current module as an object??
  specialty: "Roasted Beet Burger with Mint Sauce",
  getSpecialty: function() {
    return this.specialty;
  } 
};

// specialty and getSpecialty are properties on the object



let Airplane = {};



module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};





// in another file that imports the module Airplane
//const Airplane = require('./2-airplane.js')  //name of file is 2-airplane.js this imports the module


const Airplane = require('./2-airplane.js')

console.log(Airplane.displayAirplane()); //calls the module Airplane and the method displayAirplane which is line 22-23 