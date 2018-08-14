function Bullet(ctx) {
    this.x = player.x;
    this.y = player.y;
    this.ctx = ctx;

    this.shoot = function() { 
      bullet.y += 20
      //this.bullet = new Bullet(ctx)
    };

    this.drawBullet = function() {
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.x,this.y, 10, 10)
      }
      this.fly = function (){
        this.bulletSpeed += 5;
        this.y = this.bulletSpeed;
        this.drawBullet();
      }

      this.checkIfShot = function(){
        if(enemies[i].y === bullets[i].y){
            console.log("collision")
            ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height)
        }
    }
    }
 