const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  // console.log('Hi');
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90; //percentage and multiply by 360 which is full. + 90 because default is offset by 90 deg
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // apply style to it style.transform
  console.log(seconds);

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  console.log(mins);

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  console.log(hour);
}

setInterval(setDate, 1000); //1000 milliseconds
