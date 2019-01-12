const pressed = [];

window.addEventListener("keyup", e => {
  console.log(e.key);
  pressed.push(e.key);
});
