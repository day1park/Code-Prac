let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 

export { specialty, isVegetarian };


//Notice that, when we use named exports, we are not setting the properties on an object. Each export is stored in its own variable.

//specialty is a string object, while isVegetarian and isLowSodium are objects in the form of functions. Recall that in JavaScript, every function is in fact a function object.





let availableAirplanes = [
    {
      name: 'AeroJet',
      fuelCapacity: 800,
      availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']
    },
    {
      name: 'SkyJet',
      fuelCapacity: 500,
      availableStaff: ['pilots', 'flightAttendants']
    }
  ];
  
  let flightRequirements = {
    requiredStaff: 4,
  };
  
  function meetsStaffRequirements(availableStaff, requiredStaff) {
    if (availableStaff.length >= requiredStaff) {
    return true;
    } else {
      return false;
    }
  };
  
  export {availableAirplanes, flightRequirements, meetsStaffRequirements};