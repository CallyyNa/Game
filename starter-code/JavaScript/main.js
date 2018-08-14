var ctx = document.getElementById('canvas').getContext('2d');

var width = ctx.canvas.width;
var height = ctx.canvas.height;

var score = 0;
var enemies = [];
var player;
var interval;
var start;
var counter = 0;


document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37: player.moveLeft(); break;
        case 39: player.moveRight(); break;
    }
}

window.onload = function(){
    player = new Player(ctx);
    // enemyNew = new Enemy(100,100,"yellowgreen",x,0,ctx);
    // for(var i = 0; i < enemies.length; i++ ){
        //     if (enemies.length < 5){
            //     }
            //     else
            //     console.log("stop")
            // }
            interval = setInterval(updateCanvas, 1000/30);
        }
        
        
        // ctx.fillRect(230,10,20,30)
        
        function updateCanvas(){
            ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height)
            counter++;
            if (counter%12===0){
                var randomNumber = Math.random()*(300-1)+1;
                if(enemies.length > 9){
                    enemies.shift()
                    enemies.shift()
                    enemies.shift()
                    enemies.shift()
                    
                    
                    // enemies.push(new Enemy(0,0,"yellowgreen",randomNumber,0,ctx))
                } 
                else {
                    enemies.push(new Enemy(0,0,"yellowgreen",randomNumber,0,ctx))
                }
            }
            for(var i = 0; i < enemies.length; i++ ){
                enemies[i].fall();
                enemies[i].drawEnemy();
            }
            //ctx.save()
            player.draw();
            
            function stop() {
                clearInterval(this.interval);
            }
            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.moveTo(0,570);
            ctx.lineTo(300,570);
            ctx.stroke();
            ctx.closePath();
        }
        
function collisionDetection(){
    for (var i = 0; i < enemies.length; i++){
        if (enemies[i].x = 570){

        }
                
    }
}

// var yodaImg = new Image();
// yodaImg.onload = drawYoda;
// yodaImg.src = 'images/yoda-1.png';
// function drawYoda() {
//   ctx.drawImage(this, 230, 10);
// }


