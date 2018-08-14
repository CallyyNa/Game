function Player(ctx) {
    this.x = 130;
    this.y = 550;
    this.moveLeft = function() { this.x -= 20 };
    this.moveRight = function() { this.x += 20 };
    this.ctx = ctx;
    this.draw = function() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x,this.y, 20, 30)
      }
    }