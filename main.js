var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = 500;
canvas.width = 500;
counter = 0;
var isPause = false;

var player = new Player();
var obstaclesArray = [];

function Pause() {
  document.addEventListener('keydown', function(e) {
    switch(e.keyCode) {
      case 32:
        isPause = !isPause
        isPause ? clearInterval(interval) : interval = setInterval(game, 1000/60);
    }
  }.bind(this))
}

function game() {
  Pause()
  counter += 1;
  if(counter % 10 === 0)obstaclesArray.push(new Obstacle());
  player.movePlayer()
  player.draw()
  obstaclesArray.forEach(function(obstacle) {
    obstacle.draw();
    obstacle.move();
    obstacle.collision(player);
  })
}

var interval = setInterval(game, 1000/60);
