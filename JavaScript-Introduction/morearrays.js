let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
//Remove from the front of an Array
console.log(groceryList);


//Add to the front of an Array

groceryList.unshift('popcorn');
console.log(groceryList);


//Use .slice() to  list three things = bananas coffee beans and brown rice.
console.log(groceryList.slice(1, 4));
//bananas coffee beans and brown rice.
console.log(groceryList);
//full list still contains bananas coffee beans and brown rice




~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];


condiments.push('garlic sauce');
console.log(condiments);
condiments = ['Ketchup'];
console.log(condiments);
utensils.pop();
console.log(utensils);