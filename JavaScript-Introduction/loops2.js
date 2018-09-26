var myPlaces = ['Iceland', 'Greece', 'Switzerland']
var friendPlaces = ['Turkey', 'Croatia', 'Greece']

for (var i = 0; i < myPlaces.length; i++) {
    console.log(myPlaces[i]);
}




// loops inside loops
var myPlaces = ['Iceland', 'Greece', 'Switzerland']
var friendPlaces = ['Turkey', 'Croatia', 'Greece']

for (var i = 0; i < myPlaces.length; i++) {
    console.log(myPlaces[i]);


    for (var j = 0; j < friendPlaces.length; j++) {
        if (myPlaces[i] === friendPlaces[j]) {
            console.log('match: ' + myPlaces[i]);
        }
    }
}

