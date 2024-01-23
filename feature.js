// Feature implementation
const { add } = require('./index');

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

console.log("Feature: Multiply 4 * 5 =", multiply(4, 5));
console.log("Feature: Subtract 10 - 3 =", subtract(10, 3));

module.exports = { multiply, subtract };

