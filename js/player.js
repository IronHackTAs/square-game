function Player() {
  this.x = 50;
  this.y = 50;
  this.isMovingRight = false;
  this.isMovingLeft = false;
  this.isMovingUp = false;
  this.isMovingDown = false;

  this.width = 50;
  this.height = 50;
  this.color = 'blue'
}

Player.prototype.movePlayer = function() {

  document.onkeydown = function(e) {
    switch(e.keyCode){
      case 39:
        this.isMovingRight = true;
        break
      case 37:
        this.isMovingLeft = true;
        break
      case 38:
        this.isMovingUp = true;
        break
      case 40:
        this.isMovingDown = true;
        break
      }
  }.bind(this)

  document.onkeyup = function(e) {
    this.isMovingRight = false;
    this.isMovingLeft = false;
    this.isMovingUp = false;
    this.isMovingDown = false;
  }.bind(this)

  if(this.isMovingRight === true && this.x + this.width <= canvas.width)this.x += 5;
  if(this.isMovingLeft === true && this.x > 0)this.x -= 5;
  if(this.isMovingUp === true && this.y >= 0)this.y -= 5;
  if(this.isMovingDown === true && this.y + this.height <= canvas.height)this.y += 5;
}

Player.prototype.draw = function() {
  ctx.clearRect(0,0,canvas.width,canvas.height)
  if(this.x > canvas.width) {
    ctx.beginPath()
    ctx.font = "20px Helvetica";
    ctx.fillStyle = 'Black'
    ctx.fillText('GAME OVER!!', canvas.width / 2, canvas.height / 2)
    ctx.closePath()
  }
  ctx.beginPath()
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height)
  ctx.closePath()
}
