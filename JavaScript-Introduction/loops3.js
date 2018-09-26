let cookies = ['chocolate chip', 'raisin', 'macadamia nut', 'sugar'];

for (let i = 0; i<cookies.length; i++) {
  console.log('I would love to eat a ' + cookies[i] + ' cookie right now!');
}

// prints out all coockie types in array

let vacationSpots = ['maldives', 'iceland', 'uyuni']

for (let vacationSpotIndex = 0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}

// iterator name too long, dont forget let variable for iterator

let myPlaces = ['South Korea', 'Japan', 'China'];
let friendPlaces = ['South Korea', 'USA', 'Spain'];
for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++){

  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++){
    if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]){
          console.log(friendPlaces[friendPlacesIndex]);
    }
  }
}




~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

let currentCard = 'Heart'

while (currentCard !== 'Spade'){
    console.log(currentCard)
  currentCard = cards[Math.floor(Math.random()*4)];

}

console.log("found a spade");




// currentCard starting value is set to nil


let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

let currentCard = ''

while (currentCard !== 'Spade'){
    console.log(currentCard)
  currentCard = cards[Math.floor(Math.random()*4)];

}

console.log("found a spade");