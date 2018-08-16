
var ctx = document.getElementById('canvas').getContext('2d');

var width = ctx.canvas.width;
var height = ctx.canvas.height;

var myScore = 0;
var enemies = [];
var player;
var interval;
var start;
var counter = 0;
var bullets = [];
var lives = 3;
var x = 40

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37: player.moveLeft(); break;
        case 39: player.moveRight(); break;
        case 16:  createBullets();break;
    }
}

createBullets = function(){
    bullets.push(new Bullet(ctx))    
    console.log(bullets)
}

drawScore = function() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "yellow";
    ctx.fillText("Score: " + myScore, 8, 20);
}

drawLives = function() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Lives: " + lives, 230, 20);
}

window.onload = function(){
    player = new Player(ctx);
    interval = setInterval(updateCanvas, 1000/30);
}

function updateCanvas(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height)
    for(var i = 0; i < enemies.length; i++ ){
        if(enemies[i].checkCollision(player)){
            enemies.splice(i,1)
            lives--
        }


        if (enemies[i].y >= 540 ){
            lives -= 0.3333333
            console.log("out of the line")
            // lives = lives -1 ;
        }else {console.log("untouched")}
        enemies[i].fall();
        enemies[i].drawEnemy();
        if(bullets.length > 0){
            for(var j=0; j < bullets.length; j++){
                if(enemies[i].checkCollision(bullets[j])){
                    enemies.splice(i,1);
                    bullets.splice(j,1);
                    myScore++
                }
            }
        }
    }

    if (lives <=0){
        window.confirm("You didn't defend the galaxy. You lost! Please refresh page to start over.");
    }

    counter++;
    if(bullets.length > 0 && bullets[0].y <= 0){
        bullets.splice(0,1)
    }
    if(enemies.length > 0 && enemies[0].y >= 550){
        enemies.splice(0, 1)
    } 

    
    if (counter%x===0){
        var randomNumber = Math.random()*(280-1)+1;
        enemies.push(new Enemy(25,45,randomNumber,0,ctx))
        x -= 0.5
    }
    
    
    for(var j=0; j < bullets.length; j++){        
        bullets[j].updatePos();
        bullets[j].drawBullet();
    }
    // bullets.push(new Bullet(ctx));
    // console.log(bullets) 
    
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(0,570);
    ctx.lineTo(300,570);
    ctx.stroke();
    ctx.closePath();
    
    player.drawPlayer();

    drawScore();
    drawLives();
    
}


// var yodaImg = new Image();
// yodaImg.onload = drawYoda;
// yodaImg.src = 'images/yoda-1.png';
// function drawYoda() {
//   ctx.drawImage(this, 230, 10);
// }


