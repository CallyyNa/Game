function Player(ctx) {
    this.x = 130;
    this.y = 550;
    this.moveLeft = function() { this.x -= 25 };
    this.moveRight = function() { this.x += 25 };
    this.ctx = ctx;
    this.draw = function() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x,this.y, 20, 30)
      }
    }

// var cloneImg = new Image();
// cloneImg.onload = drawClone;
// cloneImg.src = 'images/stormtrooper.png'
// function drawClone(){
//     ctx.drawImage(this,130,550)
// }