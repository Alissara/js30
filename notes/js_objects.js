// function Car(options) {
//   this.title = options.title;
// }
//
// Car.prototype.drive = function() {
//   return 'vroom';
// };
//
// function Toyota(options) {
//   Car.call(this, options);
//   this.color = options.color;
// }
//
// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;
//
// Toyota.prototype.honk = function() {
//   return 'beep';
// };
//
// const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
// console.log(toyota);
// console.log(toyota.drive());
// console.log(toyota.honk());

class Car {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return 'vroom';
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options);  // Car.constructor()
    this.color = options.color;
  }

  honk() {
    return 'beep';
  }
}

const car = new Car({ title: 'Toyota' });
console.log(car);
console.log(car.drive());

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
console.log(toyota);
console.log(toyota.honk());
console.log(toyota.drive());


var newObject = new Object();
var newObject2 = Object.create();
