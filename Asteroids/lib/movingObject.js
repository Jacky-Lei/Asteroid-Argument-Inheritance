(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }


  var movingObject = Asteroids.movingObject = function (pos, vel, radius, color, game) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
    this.game = game;
  };

  movingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  movingObject.prototype.move = function(){
    this.pos = this.game.wrap([this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]);
  };

  movingObject.prototype.isCollidedWith = function (otherObject) {
    var dist = Math.sqrt(Math.pow((this.pos[0] - otherObject.pos[0]),2) + Math.pow((this.pos[1] - otherObject.pos[1]),2));
    if (dist < (this.radius + otherObject.radius)){
      this.game.remove(this);
      this.game.remove(otherObject);
    }
  };

})();
