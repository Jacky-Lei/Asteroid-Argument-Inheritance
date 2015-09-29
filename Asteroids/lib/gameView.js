(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function(canvasEl)
  {
    var ctx = canvasEl.getContext("2d");
    this.game = new Asteroids.Game(canvasEl.width, canvasEl.height, 10);
    this.ctx = ctx;
  };

  GameView.prototype.start = function(){
    window.setInterval((function () {
      this.game.moveObjects();
      this.game.checkCollisions();
      this.game.draw(this.ctx);
    }).bind(this), 1000 / 60);
  };





})();
