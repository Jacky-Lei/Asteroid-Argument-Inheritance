(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (pos, game) {
    this.pos = pos;
    this.vel = Asteroids.Util.randomVec((Math.random()*2));
    this.radius = 20;
    this.color = '#EE0000';
    this.game = game;
  };


  Asteroids.Util.inherits(Asteroid, Asteroids.movingObject);

})();
