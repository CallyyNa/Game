function Bullet(ctx) {
  this.width = 5;
  this. height = 5;
  this.x = player.x + player.width/2 - this.width/2;
  this.y = player.y;
    this.ctx = ctx;

    this.drawBullet = function() {
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.x,this.y,this.width, this.height)
      }
    
    this.updatePos = function (){
      this.y -= 5
    }
    
}