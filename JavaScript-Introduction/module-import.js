import Menu from './menu';

// './menu' name of module load WITHOUT the extension e.g. .js .ruby etc

import Airplane from './airplane';


function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element){
      console.log('Fuel Capacity of '+ element.name +': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();
