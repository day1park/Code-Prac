import { specialty, isVegetarian, isLowSodium } from './menu';

import GlutenFree from './menu';

// example of both import statements 



import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

import meetsSpeedRangeRequirements from './airplane';

function displaySpeedRangeStatus(){
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
};

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
displaySpeedRangeStatus();