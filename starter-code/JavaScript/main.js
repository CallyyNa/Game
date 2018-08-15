
var ctx = document.getElementById('canvas').getContext('2d');

var width = ctx.canvas.width;
var height = ctx.canvas.height;

var score = 0;
var enemies = [];
var player;
var interval;
var bulletsShoot;
var start;
var counter = 0;
var bullets = [];


document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37: player.moveLeft(); break;
        case 39: player.moveRight(); break;
        case 38:  createBullets();break;
    }
}

createBullets = function(){
    bullets.push(new Bullet(ctx))    
    console.log(bullets)

}

window.onload = function(){
    player = new Player(ctx);
    interval = setInterval(updateCanvas, 1000/30);
}
    
function updateCanvas(){
            ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height)
            counter++;
            if(enemies.length > 0 && enemies[0].y >= 600){
                enemies.splice(0, 1)
            } 
            if (counter%40===0){
                var randomNumber = Math.random()*(280-1)+1;
                enemies.push(new Enemy(0,0,"yellowgreen",randomNumber,0,ctx))
            }

            for(var i = 0; i < enemies.length; i++ ){
                enemies[i].fall();
                enemies[i].drawEnemy();
                player.checkIfCollision(enemies[i]);
            }

            // bullets.push(new Bullet(ctx));
            // console.log(bullets)

        if(bullets.length  >= 0){

            for(var j=0; j < bullets.length; j++){
                bullets[j].updatePos();
                if(bullets[j].checkIfShot(enemies)=== true){
                    
                }
                bullets[j].drawBullet();
            }
        }   
    player.draw();
    
            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.moveTo(0,570);
            ctx.lineTo(300,570);
            ctx.stroke();
            ctx.closePath();

            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.moveTo(0,20);
            ctx.lineTo(300,20);
            ctx.stroke();
            ctx.closePath();
    
    }


// var yodaImg = new Image();
// yodaImg.onload = drawYoda;
// yodaImg.src = 'images/yoda-1.png';
// function drawYoda() {
//   ctx.drawImage(this, 230, 10);
// }


