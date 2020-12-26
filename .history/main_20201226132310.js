const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20,40,50,50);
ctx.fillStyle = "blue";
ctx.fill()
ctx.closePath();