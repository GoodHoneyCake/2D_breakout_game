const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// red square
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

// green circle
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 3, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.colsePath();
