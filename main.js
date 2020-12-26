const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// black square
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "bbffcc";
ctx.fill();
ctx.closePath();

// green circle
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.colsePath();

// outer line
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0,0,255,0.5)";
ctx.strokeStyle();
ctx.closePath();
