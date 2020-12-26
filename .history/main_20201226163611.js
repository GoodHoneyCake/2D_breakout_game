const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function draw() {
  ctx.beginPath();
  ctx.arc(50, 50, 10, 0, Math.PI * 2);
  ctx.fillstyle = "#0095DD";
  ctx.fill();
  ctx.colosePath();
}
setInterval(draw, 10);
