const inputs = document.querySelectorAll("input"); //returns a NodeList

function handleUpdate() {
  //   console.log(this.value);
  const suffix = this.dataset.sizing || "";
  //   console.log(suffix);
  //   console.log(this.name);
  // dataset is an object that will contain all the data attributes from that specific element e.g. data-'sizing' data-name data-cool
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
