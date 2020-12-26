const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const x = canvas.width / 2;
const y = canvas.height - 30;

const dx = 2;
const dy = -2;

function draw() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillstyle = "#0095DD";
  ctx.fill();
  ctx.colosePath();
  x += dx;
  y += dy;
}
setInterval(draw, 10);
