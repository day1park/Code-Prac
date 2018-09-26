function isGreaterThan (numberOne, numberTwo) {
    if (numberOne > numberTwo) {
      return true;
    } else {
      return false;
    }
  }
  
  
  console.log(isGreaterThan(8 , 7));



  // function expressions 

  function isGreaterThan(numberOne, numberTwo){
    if(numberOne > numberTwo){
      return true;
    } else {
      return false;
    }
  }
  
  
  const isGreaterThan = (numberOne, numberTwo) => {
    if (numberOne > numberTwo) {
      return true;
    } else {
      return false;
    }
  }; 
  
  isGreaterThan(4, 8)



  //single parameters + single block does not need brackets, return or curly braces e.g.: 

  const volumeOfSphere = diameter => 
 (1/6) * Math.PI * diameter * diameter * diameter;


console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');