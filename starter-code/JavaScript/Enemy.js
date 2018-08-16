function Enemy(width, height,x, y, ctx) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.ctx = ctx;

    this.img2 = new Image();
    this.img2.src = "JavaScript/images/stormtrooper.png"
    this.drawEnemy = function() {
        this.ctx.drawImage(this.img2,this.x, this.y, this.width, this.height)
    }
    
    this.fall = function(){
        this.speed += 3;
        this.y = this.speed;
        this.drawEnemy();
    }
    
    this.checkCollision = function(otherobj){
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
   
}