Function.prototype.inherits = function (superClass) {
  function Surrogate () {}
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function MovingObject () {
}

MovingObject.prototype.setSpeed = function(speed){
  this.speed = speed;
};

function Ship () {
}
Ship.inherits(MovingObject);

Ship.prototype.setFuel = function (num) {
  this.fuel = num;
};

function Asteroid () {}
Asteroid.inherits(MovingObject);


Asteroid.prototype.setRock = function (mineral) {
  this.rock = mineral;
};

var shippy = new Ship();
shippy.setFuel("full");
shippy.setSpeed("fast");

var asteroidy = new Asteroid();
asteroidy.setRock("gold");
asteroidy.setSpeed("slow");

console.log(shippy.speed + " " + shippy.fuel, shippy.rock);
console.log(asteroidy.speed + " " + asteroidy.rock, asteroidy.fuel);
