(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function(DIM_X, DIM_Y, NUM_ASTEROIDS){
    this.DIM_X = DIM_X;
    this.DIM_Y = DIM_Y;
    this.NUM_ASTEROIDS = NUM_ASTEROIDS;
    this.asteroids = this.addAsteroids();
  }

  Game.prototype.addAsteroids = function(){
    var asteroids = [];
    for(var i = 0; i < this.NUM_ASTEROIDS; i++){
    asteroids.push(new Asteroids.Asteroid(this.randomPosition(),this));}
    return asteroids;
  };

  Game.prototype.randomPosition = function(){
    var randX = Math.random() * this.DIM_X;
    var randY = Math.random() * this.DIM_Y;
    return [randX, randY];
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.asteroids.forEach(function (el) {
      el.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function(){
    this.asteroids.forEach(function (el) {
      el.move();
    });
  };

  Game.prototype.wrap = function(pos) {
    var posX = pos[0];
    var posY = pos[1];
    if(posX >= this.DIM_X){
      posX -= this.DIM_X;
    }
    else if (posY >= this.DIM_Y){
      posY -= this.DIM_Y;
    }
    return [posX, posY];
  };

  Game.prototype.checkCollisions = function(){
    var that = this;
    that.asteroids.forEach(function (el) {
      that.asteroids.forEach(function (el2) {
        if (el !== el2){
          (el.isCollidedWith(el2));
          // alert("COLLISION");
          // this.remove(el);
          // this.remove(el2);

        }
      });
    });
  };

  Game.prototype.step = function (){
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function(asteroid){
    var i = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(i, 1);
  };







})();
