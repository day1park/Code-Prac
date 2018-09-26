let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function(fruit){
  console.log('I want to eat a ' + fruit);
});

fruits.forEach(fruit => console.log('I really want to eat a ' + fruit));









//iterator .map();

let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
let secretMessage = animals.map(function(a){
  return a[0];
});

console.log(secretMessage.join(''));


let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
let smallNumbers = bigNumbers.map(function(s){
  return s/100;
});

console.log(smallNumbers);




//arrow function syntax  

let secretMessage = animals.map(a => a[0]);
   
let smallNumbers = bigNumbers.map(s => s/100);


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//filter
let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
let smallNumbers = randomNumbers.filter(n => n < 250);
console.log(smallNumbers);

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

let longFavoriteWords = favoriteWords.filter(word => word.length > 7 );

// Refactor the code above using arrow function syntax

console.log(longFavoriteWords);


//~~~~~~~~~~~~~PRACTICE ~~~~~~~~~~~~~~~

let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(function(word) {
  return word.length < 6;
}));

// Use filter to create a new array
let interestingWords = words.filter(w => w.length > 5);
console.log(interestingWords);


// Make sure to uncomment the code below and fix the incorrect code before running it

 console.log(interestingWords.every(word => word.length > 5 ));









// revision of .filter(); .map(); .every(); .some();


 let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.filter(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
let longCities = cities.filter(city => city.length > 7);
console.log(longCities);
// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);
console.log(smallerNums);
// Choose a method that will return a boolean value
console.log(nums.every(num => num < 0));




