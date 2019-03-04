const pressed = [];
const secretCode = "password";

window.addEventListener("keyup", e => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    alert("PASSWORD CONFIRMED! UNLOCKING CORNIFY RAINBOW OR UNICORN SEQUENCE!");
    cornify_add();
  }
  console.log(pressed);
});
