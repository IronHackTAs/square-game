function Obstacle() {
  this.x = Math.floor(Math.random() * 5);
  this.y = Math.floor(Math.random() * canvas.height);

  this.dx = Math.floor((Math.random()*2)+1);

  this.width = 10;
  this.height = 10;
  this.color = 'rgb('+Math.random() * 255+','+ Math.random() * 255+',' +Math.random() * 255 +')'
}

Obstacle.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
  ctx.closePath();
}

Obstacle.prototype.move = function() {
  this.x += this.dx;
}

Obstacle.prototype.collision = function(player) {
  if(
    player.x + player.width >= this.x && 
    this.x + this.width >= player.x && 
    player.y + player.height >= this.y && 
    this.y + this.height >= player.y
    ) {
      player.x = this.x + this.width
      player.color = this.color
  }
}