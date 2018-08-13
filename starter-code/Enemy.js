function Enemy(width, height, color, x, y, ctx) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.ctx = ctx;
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.fall = function(){
        this.speed += 3;
        this.y = this.speed;
        this.drawEnemy();
    }

    this.drawEnemy = function() {
        ctx.fillStyle = "yellowgreen";
        ctx.fillRect(100, this.y, 20, 30);
    }
}