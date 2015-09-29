var sum = function(){
  var args = Array.prototype.slice.call(arguments);
  var sums = 0;
  args.forEach(function(el){sums += el;});
  return sums;
};

Function.prototype.myBind = function(context){
  var fn = this;
  var args = Array.prototype.slice.call(arguments, 1);
  return function(){
    args = args.concat(Array.prototype.slice.call(arguments));
    fn.apply(context, args);
  };
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

Function.prototype.curry = function (numArgs) {
  var fn = this;
  var numbers = [];
  var _curry = function(num){
    numbers.push(num);
    if (numbers.length === numArgs){
      return fn.apply(fn, numbers);
    }else{
      return _curry;
    }
  };
  return _curry;
};
// sumThree.curry(3)(4)(5)(10);

function curriedSum(numArgs) {
  var numbers = [];
  function _curriedSum (num) {
    numbers.push(num);

    if(numbers.length === numArgs){
      var sum = 0;
      numbers.forEach(function (el) {
        sum += el;
      });
      return sum;
    }else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}
// // you'll write `Function#curry`!
// var f1 = sumThree.curry(3);
// var f2 = f1(4);
// var f3 = f2(20);
// var result = f3(6); // = 30
//
// // or more briefly:
// console.log(sumThree.curry(3)(4)(20)(6)); // == 30
//
// var sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1));
// curriedSum(4)(5)(30)(20)(1);

//
// console.log(sum(1,2,3,4,5,6,7));
//
// function Cat(name) {
//   this.name = name;
// }
//
// Cat.prototype.says = function (sound, newSound) {
//   console.log(this.name + " says " + sound + " and " + newSound + "!");
// };
//
// var markov = new Cat("Markov");
// var breakfast = new Cat("Breakfast");
//
// markov.says("meow");
// // Markov says meow!
//
// markov.says.myBind(breakfast, "meow")("hello");
// // Breakfast says meow!
//
// markov.says.myBind(breakfast)("meow");
// // Breakfast says meow!
//
// var notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow");
// // Breakfast says meow!
