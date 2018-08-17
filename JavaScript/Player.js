function Player(ctx) {
    this.x = 130;
    this.y = 550;
    this.width = 25;
    this.height = 45;
    this.moveLeft = function() { this.x -= 20 };
    this.moveRight = function() { this.x += 20 };
    this.ctx = ctx;

    this.img1 = new Image();
    this.img1.src = "JavaScript/images/princessleia.png"
    
    this.drawPlayer = function() {
        this.ctx.drawImage(this.img1, this.x, this.y, this.width, this.height)
    }

    this.checkBorder = function(otherobj){
       if((this.x + this.width) >= 300){
           this.x = 280;
       }
       else if((this.x) <= 0){
           this.x= 0;
       }
        
    }
}

// var cloneImg = new Image();
// cloneImg.onload = drawClone;
// cloneImg.src = 'images/stormtrooper.png'
// function drawClone(){
//     ctx.drawImage(this,130,550)
// }