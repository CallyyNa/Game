// function Player() {
//     this.x = 130;
//     this.y = 550;
//     this.moveLeft = function() { this.x -= 25 };
//     this.moveRight = function() { this.x += 25 };
// }

function Component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}
