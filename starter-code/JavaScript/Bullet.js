function Bullet(ctx) {
    this.x = player.x;
    this.y = player.y;
    this.shoot = function() { this.y++};
    this.ctx = ctx;
    this.draw = function() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x,this.y, 20, 30)
      }
    }