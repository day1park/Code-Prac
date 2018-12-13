const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// console.log(checkboxes);

let lastChecked;
function handleCheck(e) {
  // check if the shift key down
  // and check if they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahead and
    // loop over every checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("starting to check them inbetween!");
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));
