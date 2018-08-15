function Player(ctx) {
    this.x = 130;
    this.y = 550;
    this.width = 20;
    this.height = 30;
    this.moveLeft = function() { this.x -= 20 };
    this.moveRight = function() { this.x += 20 };
    this.ctx = ctx;

    this.img1 = new Image();
    this.img1.onload = function() {
        this.ctx.drawImage(img1,this.x,this.y, this.width, this.height)
    }
    this.img1.src = "images/hansolo.png"
}

// var cloneImg = new Image();
// cloneImg.onload = drawClone;
// cloneImg.src = 'images/stormtrooper.png'
// function drawClone(){
//     ctx.drawImage(this,130,550)
// }