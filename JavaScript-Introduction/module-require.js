// require() is a JS function './menu.js' is the arguement we pass. importing the Menu


//placeOrder() use the model and it's properties 



const Airplane = require('./module.js')  // calling airplane module using require by importing the module object 



// const Airplane = require('./1-airplane.js') the exercise has the file located in this path

function displayAirplane() {
  console.log(Airplane.myAirplane);    //the function here logs the module Airplane with the property of myAirplane
}

displayAirplane();   // calls the function