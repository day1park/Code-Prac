function playSound(e) {
  // console.log(e.keyCode)
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // console.log(audio);
  // console.log(key)
  if (!audio) return; //console.log('no'); // stop the function from running all together
  audio.currentTime = 0; // rewind to ther start
  audio.play();
  key.classList.add("playing");
}
function removeTransition(e) {
  // console.log(e)
  if (e.propertyName !== "transform") return; // skip it if its not a transform
  // console.log(e.propertyName) // will console 'transform'
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
