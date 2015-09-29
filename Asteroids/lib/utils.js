(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Util = {};

  Asteroids.Util.inherits = function (ChildClass, ParentClass) {
    function Surrogate () {}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  }

  Asteroids.Util.randomVec = function(length) {
    var sqDist = length * length;
    var randXSq = Math.random() * sqDist;
    var randY = Math.sqrt(sqDist - randXSq);
    var randX = Math.sqrt(randXSq);
    return [randX*(Math.round(Math.random()) * 2 - 1), randY*(Math.round(Math.random()) * 2 - 1)];
  }


})();
