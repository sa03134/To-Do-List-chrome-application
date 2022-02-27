const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b + (a % b);
  },
  powerof: function (a, b) {
    return a ** b;
  },
};

console.log(calculator.add(10, 3));
console.log(calculator.minus(10, 3));
console.log(calculator.multiply(10, 3));
console.log(calculator.divide(10, 3));
console.log(calculator.powerof(10, 3));
