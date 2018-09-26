import { specialty, isVegetarian } from './menu';

console.log(specialty);    //use the import keyword and include the variables in a set of {}.




import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';


function displayFuelCapacity() {
  availableAirplanes.forEach(function(element){
      console.log('Fuel Capacity of '+ element.name +': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element)
   {
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
};

displayStaffStatus();


//in the displayStaffStatus function the element.availableStaff goes through all the elements e.g. AeroJet and SkyJet and the amount of staff array.length 
// flightRequirements.requiredStaff goes access the number '4' . these 2 paraments goesinto the meetStaffRequired function to check if it greater or equal to the number given by the parameter 