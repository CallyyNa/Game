function Bullet(ctx) {
    this.x = player.x;
    this.y = player.y;
    this.width = 10;
    this.height = 10;
    this.ctx = ctx;

    this.drawBullet = function() {
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.x,this.y, 10, 10)
      }
      this.updatePos = function (){
        this.y -= 5
      }

      this.checkIfShot = function(enemies){
        for(var i = 0; i < enemies.length; i++){
        if (
          this.x < enemies[i].x + enemies[i].width &&
          this.x + this.width > enemies[i].x &&
          this.y < enemies[i].y + enemies[i].height &&
          this.y + this.height > enemies[i].y
        ) {
          
          return true
          console.log("shot haha")
        }
      return false
    }
    }
}