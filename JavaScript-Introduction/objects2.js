let alarm;

let person = {
  name: 'Day',
  age: 26,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello() {
    return `Hello, my name is ${this.name}`
  },
  sayGoodbye() {
    return 'Goodbye!';
  }
};

let friend = {
  name: 'Night'
};

friend.sayHello = person.sayHello;

let day = 'Monday'


console.log(person['name']);
console.log(person['age']);


if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);

person.hobbies = ['dance', 'photography'];



person.hobbies = ['taekwondo'];

console.log(person.hobbies);
console.log(person.sayHello());
console.log(person.sayGoodbye());
console.log(friend.sayHello());