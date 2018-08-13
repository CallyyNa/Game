var ctx = document.getElementById('canvas').getContext('2d');

var width = ctx.canvas.width;
var height = ctx.canvas.height;

var score = 0;

var speed=0;

player = new Component()
// function draw(player) {
//     ctx.fillStyle = "red";
//     ctx.fillRect(player.x,player.y, 20, 30)
//   }

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 38: player.moveUp();    console.log('up',    player); break;
        case 40: player.moveDown();  console.log('down',  player); break;
        case 37: player.moveLeft();  console.log('left',  player); break;
        case 39: player.moveRight(); console.log('right', player); break;
    }
    updateCanvas();
}


// ctx.fillRect(230,10,20,30)

function updateCanvas(){
    ctx.clearRect(0,0,300,600);
    draw(player)
    window.requestAnimationFrame(updateCanvas);
}

window.requestAnimationFrame(updateCanvas);

var speed = 0;

var enemies = [];
function clearCanvas(){
    ctx.clearRect(0,0,700,700)
}


function updateEnemy (){
    speed += 3
    clearCanvas();
    ctx.fillStyle = "yellowgreen"
    ctx.fillRect(100,speed,20,30)
    window.requestAnimationFrame(updateEnemy);
}
window.requestAnimationFrame(updateEnemy);

// var yodaImg = new Image();
// yodaImg.onload = drawYoda;
// yodaImg.src = 'images/yoda-1.png';
// function drawYoda() {
//   ctx.drawImage(this, 230, 10);
// }

// var cloneImg = new Image();
// cloneImg.onload = drawClone;
// cloneImg.src = 'images/stormtrooper.png'
// function drawClone(){
//     ctx.drawImage(this,130,550)
// }
