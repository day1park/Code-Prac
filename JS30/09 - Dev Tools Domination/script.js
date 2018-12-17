const dogs = [{ name: "Snickers", age: 2 }, { name: "hugo", age: 8 }];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");
// Interpolated
const cat = "says meow not woof";
console.log(`hello i am ${cat}`);
// Styled
console.log(
  "%c i am some c text",
  "font-size:40px; background: red; text-shadow:10px 10px 0 grey"
);

// warning!
console.warn("warning something is too weird");
// Error :|
console.error("error, it's 2018 stop dabbing");
// Info
console.info("info! fun fact: humans are capable of drinking poison");

// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "that is wrong!");
// clearing
// console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  //   console.groupCollapsed(`${dog.name}`);
  console.log(`this is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});
// counting
console.count("meow");
console.count("meow");
console.count("meow");
console.count("meow");
console.count("meow");
// timing

console.time("fetching data");
fetch("https://api.github.com/users/day1park")
  .then(data => data.json())
  .then(data => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.table(dogs);
