import { chefsSpecial, isVeg } from './menu';


//way of using aliases is to import the entire module as an alias:

import * as Carte from './menu';

Carte.chefsSpecial;
Carte.isVeg();
Carte.isLowSodium();



import {aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';

function displaySpeedRangeStatus(){
  aircrafts.forEach(function(element){
    console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeReqs(element.maxSpeed, element.minSpeed, flightReqs.requiredSpeedRange));
  });
};

function displayFuelCapacity() {
  aircrafts.forEach(function(element){
      console.log('Fuel Capacity of '+ element.name +': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  aircrafts.forEach(function(element)
   {
    console.log(element.name + ' meets staff requirements: ' + meetsStaffReqs(element.availableStaff, flightReqs.requiredStaff) );
  });
};

displayStaffStatus();
displaySpeedRangeStatus();