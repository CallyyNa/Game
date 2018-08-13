var ctx = document.getElementById('canvas').getContext('2d');

var width = ctx.canvas.width;
var height = ctx.canvas.height;

var score = 0;
var enemy = [];

var player;
var enemyNew;
var interval;
var start

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37: player.moveLeft();  console.log('left',  player); break;
        case 39: player.moveRight(); console.log('right', player); break;
    }
}

window.onload = function(){
    player = new Player(ctx);
    enemyNew = new Enemy(10,30,"yellowgreen",230,start, ctx);
    enemyNew.start = 10;
    interval = setInterval(updateCanvas,1000/50);
}


// ctx.fillRect(230,10,20,30)

function updateCanvas(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height)
    enemyNew.fall()
    ctx.save()
    enemyNew.drawEnemy();
    player.draw();
}

// var yodaImg = new Image();
// yodaImg.onload = drawYoda;
// yodaImg.src = 'images/yoda-1.png';
// function drawYoda() {
//   ctx.drawImage(this, 230, 10);
// }


