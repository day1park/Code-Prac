let person = {
    _name: 'Lu Xun',
    _age: 137,
    
    
    set age(newAge){
      if (typeof newAge === 'number') {
        this._age = newAge;
        console.log(`${newAge} is valid input.`);
      } else {
        return console.log('Invalid input');
      }
    },
    get age() {
      console.log(`${this._name} is ${this._age} years old`);
      return this._age;
    }
  };
  
  
  let ageName = person.age
  person.age = 39;
  console.log(person.age);
  