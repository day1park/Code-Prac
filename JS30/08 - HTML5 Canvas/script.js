// const canvas = document.querySelector("#draw");

// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// ctx.strokeStyle = "blue";
// ctx.lineJoin = "round";
// ctx.lineCap = "round";

// let isDrawing = false;
// let lastX = 0;
// let lastY = 0;

// function draw(e) {
//   if (!isDrawing) return; // stops the function from running when not moused down
//   console.log(e);
//   ctx.beginPath();
//   //start from
//   ctx.moveTo(lastX, lastY);
//   // go to
//   ctx.lineTo(e.offsetX, e.offsetY);
//   ctx.strokeStyle();
//   [lastX, lastY] = [e.offsetX, e.offsetY];
//   //   lastX = e.offsetX;
//   //   lastY = e.offsetY;
// }
// canvas.addEventListener("mousedown", () => {
//   isDrawing = true;
//   [lastX, lastY] = [e.offsetX, e.offsetY];
// });

// canvas.addEventListener("mousemove", draw);
// canvas.addEventListener("mouseup", () => (isDrawing = false));
// canvas.addEventListener("mouseout", () => (isDrawing = false));